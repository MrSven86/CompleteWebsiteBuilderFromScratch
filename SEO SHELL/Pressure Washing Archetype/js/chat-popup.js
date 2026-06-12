(function () {
  var script      = document.querySelector('script[src*="chat-popup"]');
  var API_BASE    = (script && script.dataset.api) || 'https://velocity-chat-api.vercel.app';
  var CLIENT_NAME = (script && script.dataset.clientName) || 'Us';

  var sessionId   = null;
  var lastPollTs  = 0;
  var pollTimer   = null;

  // ── Proactive nudge trigger ────────────────────────────────────────────────
  var visits = parseInt(localStorage.getItem('vc_visits') || '0') + 1;
  localStorage.setItem('vc_visits', String(visits));
  var nudgeDismissed = localStorage.getItem('vc_nudge_dismissed') === '1';

  // ── Inject HTML ────────────────────────────────────────────────────────────
  document.body.insertAdjacentHTML('beforeend',
    '<div id="chatNudge" class="chat-nudge" hidden>' +
      '<button class="chat-nudge__close" id="chatNudgeClose" aria-label="Dismiss">&times;</button>' +
      '<p>Hi there, have a question? Text us here.</p>' +
    '</div>' +
    '<div id="chatPopup" class="chat-popup" hidden>' +
      '<div class="chat-popup__header">' +
        '<div class="chat-popup__header-info">' +
          '<span class="chat-popup__dot"></span>' +
          '<div>' +
            '<p class="chat-popup__name">' + CLIENT_NAME + '</p>' +
            '<p class="chat-popup__status-text">Live chat — we\'re here!</p>' +
          '</div>' +
        '</div>' +
        '<button class="chat-popup__close" id="chatClose" aria-label="Close">&times;</button>' +
      '</div>' +
      '<div class="chat-popup__messages" id="chatMessages"></div>' +
      '<div class="chat-popup__footer">' +
        '<form id="chatMsgForm" class="chat-popup__input-row">' +
          '<input type="text" id="chatInput" placeholder="Type a message…" autocomplete="off" />' +
          '<button type="submit" id="chatSend" aria-label="Send">' +
            '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" fill="currentColor"/></svg>' +
          '</button>' +
        '</form>' +
      '</div>' +
    '</div>' +
    '<button class="chat-bubble" id="chatBubble" aria-label="Open chat" aria-expanded="false">' +
      '<svg width="22" height="22" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
        '<path d="M16 2C8.28 2 2 7.8 2 14.93a12.144 12.144 0 001.696 6.15l-1.668 7.51A1.16 1.16 0 003.63 29.9l6.914-3.072A14.835 14.835 0 0016 27.861c7.72 0 14-5.8 14-12.93S23.72 2 16 2zm4.508 16.32h-9.016a1.16 1.16 0 010-2.32h9.016a1.16 1.16 0 010 2.32zm0-4.638h-9.016a1.16 1.16 0 010-2.318h9.016a1.16 1.16 0 110 2.318z" fill="currentColor"/>' +
      '</svg>' +
      '<span>Let\'s Chat!</span>' +
    '</button>'
  );

  var bubble    = document.getElementById('chatBubble');
  var popup     = document.getElementById('chatPopup');
  var closeBtn  = document.getElementById('chatClose');
  var messages  = document.getElementById('chatMessages');
  var form      = document.getElementById('chatMsgForm');
  var input     = document.getElementById('chatInput');
  var nudge     = document.getElementById('chatNudge');
  var nudgeClose = document.getElementById('chatNudgeClose');

  // ── Nudge logic ────────────────────────────────────────────────────────────
  function showNudge() {
    if (!nudgeDismissed && popup.hidden) nudge.hidden = false;
  }

  function hideNudge() {
    nudge.hidden = true;
  }

  nudgeClose.addEventListener('click', function (e) {
    e.stopPropagation();
    hideNudge();
    localStorage.setItem('vc_nudge_dismissed', '1');
    nudgeDismissed = true;
  });

  nudge.addEventListener('click', function () {
    hideNudge();
    openChat();
  });

  if (!nudgeDismissed) {
    var nudgeDelay = 7000;
    setTimeout(showNudge, nudgeDelay);
  }

  // ── Open / close ───────────────────────────────────────────────────────────
  bubble.addEventListener('click', function () {
    popup.hidden ? openChat() : closeChat();
  });
  closeBtn.addEventListener('click', closeChat);
  document.addEventListener('click', function (e) {
    if (!popup.hidden && !popup.contains(e.target) && e.target !== bubble && !bubble.contains(e.target)) closeChat();
  });

  function openChat() {
    hideNudge();
    popup.hidden = false;
    bubble.setAttribute('aria-expanded', 'true');
    if (!sessionId) startSession();
    else input.focus();
  }

  function closeChat() {
    popup.hidden = true;
    bubble.setAttribute('aria-expanded', 'false');
    stopPolling();
  }

  // ── Session start ──────────────────────────────────────────────────────────
  function startSession() {
    addBubble('owner', '…', 'typing');
    fetch(API_BASE + '/api/chat-start', { method: 'POST', headers: { 'Content-Type': 'application/json' } })
      .then(function (r) { return r.json(); })
      .then(function (data) {
        sessionId = data.sessionId;
        // Replace typing bubble with welcome message
        var typing = messages.querySelector('.chat-bubble--typing');
        if (typing) typing.parentElement.remove();
        if (data.messages) {
          data.messages.forEach(function (m) {
            addBubble(m.role, m.text);
            if (m.ts > lastPollTs) lastPollTs = m.ts;
          });
        }
        input.focus();
        startPolling();
      })
      .catch(function () {
        var typing = messages.querySelector('.chat-bubble--typing');
        if (typing) typing.parentElement.remove();
        addBubble('owner', 'Hi! Leave your phone number and we\'ll call you right back.');
        input.focus();
      });
  }

  // ── Send message ───────────────────────────────────────────────────────────
  form.addEventListener('submit', function (e) {
    e.preventDefault();
    var text = input.value.trim();
    if (!text || !sessionId) return;
    input.value = '';
    addBubble('visitor', text);

    fetch(API_BASE + '/api/chat-send', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sessionId: sessionId, message: text })
    }).catch(function () {});
  });

  // ── Polling ────────────────────────────────────────────────────────────────
  function startPolling() {
    stopPolling();
    pollTimer = setInterval(poll, 2500);
  }

  function stopPolling() {
    if (pollTimer) { clearInterval(pollTimer); pollTimer = null; }
  }

  function poll() {
    if (!sessionId) return;
    fetch(API_BASE + '/api/chat-poll?session=' + sessionId + '&since=' + lastPollTs)
      .then(function (r) { return r.json(); })
      .then(function (data) {
        if (data.messages && data.messages.length) {
          data.messages.forEach(function (m) {
            addBubble('owner', m.text);
            if (m.ts > lastPollTs) lastPollTs = m.ts;
          });
        }
      })
      .catch(function () {});
  }

  // ── Render a chat bubble ───────────────────────────────────────────────────
  function addBubble(role, text, cls) {
    var wrap = document.createElement('div');
    wrap.className = 'chat-msg chat-msg--' + role;
    var bubble = document.createElement('div');
    bubble.className = 'chat-bubble-msg' + (cls ? ' chat-bubble--' + cls : '');
    bubble.textContent = text;
    wrap.appendChild(bubble);
    messages.appendChild(wrap);
    messages.scrollTop = messages.scrollHeight;
  }
})();
