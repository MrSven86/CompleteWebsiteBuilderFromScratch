(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;

  var btn    = document.getElementById('formSubmit');
  var status = document.getElementById('formStatus');
  var API    = 'https://velocity-contact-form-api.vercel.app/api/send-email';

  // Config comes from data-* attributes on the <form> element — change per client in HTML, not here
  var CLIENT_EMAIL = form.dataset.clientEmail || 'tomas.gustav.eriksson@gmail.com';
  var CLIENT_SITE  = form.dataset.clientSite  || window.location.hostname;
  var CLIENT_NAME  = form.dataset.clientName  || 'Website';

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var fname   = (form.fname   ? form.fname.value.trim()   : '');
    var lname   = (form.lname   ? form.lname.value.trim()   : '');
    var email   = (form.email   ? form.email.value.trim()   : '');
    var phone   = (form.phone   ? form.phone.value.trim()   : '');
    var service = (form.service ? form.service.value.trim() : '');
    var message = (form.message ? form.message.value.trim() : '');

    var fullName    = (fname + ' ' + lname).trim();
    var fullMessage = service
      ? 'Service needed: ' + service + (message ? '\n\n' + message : '')
      : message;

    // Basic client-side validation
    if (!fullName || !email || !fullMessage) {
      setStatus('Please fill in all required fields.', 'error');
      return;
    }

    setLoading(true);

    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:        fullName,
        email:       email,
        phone:       phone,
        message:     fullMessage,
        website:     CLIENT_SITE,
        clientEmail: CLIENT_EMAIL,
        clientName:  CLIENT_NAME
      })
    })
    .then(function (res) {
      if (res.ok) {
        setStatus('Message sent! We\'ll be in touch within 24 hours.', 'success');
        form.reset();
      } else {
        setStatus('Could not send message. Please try again or call us directly.', 'error');
      }
    })
    .catch(function () {
      setStatus('Could not send message. Please try again or call us directly.', 'error');
    })
    .finally(function () {
      setLoading(false);
    });
  });

  function setLoading(on) {
    btn.disabled    = on;
    btn.textContent = on ? 'Sending…' : 'Submit';
  }

  function setStatus(text, type) {
    status.textContent = text;
    status.className   = 'form-status form-status--' + type;
  }
})();

// ── Callback strip form ────────────────────────────────────────────────────
(function () {
  var form = document.getElementById('callbackForm');
  if (!form) return;

  var btn    = form.querySelector('.cta-strip__btn');
  var status = document.getElementById('callbackStatus');
  var API    = 'https://velocity-contact-form-api.vercel.app/api/send-email';

  var CLIENT_EMAIL = form.dataset.clientEmail || 'tomas.gustav.eriksson@gmail.com';
  var CLIENT_SITE  = form.dataset.clientSite  || window.location.hostname;
  var CLIENT_NAME  = form.dataset.clientName  || 'Website';

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var phone   = form.phone   ? form.phone.value.trim()   : '';
    var service = form.service ? form.service.value.trim() : '';

    if (!phone) {
      setStatus('Please enter your phone number.', 'error');
      return;
    }

    btn.disabled    = true;
    btn.textContent = 'Sending…';
    status.textContent = '';

    fetch(API, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name:        'Callback request',
        email:       'noreply@callback.request',
        phone:       phone,
        message:     'Callback request' + (service ? ' — ' + service : '') + '\nPhone: ' + phone,
        website:     CLIENT_SITE,
        clientEmail: CLIENT_EMAIL,
        clientName:  CLIENT_NAME
      })
    })
    .then(function (res) {
      if (res.ok) {
        setStatus('Got it! We\'ll call you back soon.', 'success');
        form.reset();
      } else {
        setStatus('Something went wrong. Please call us directly.', 'error');
      }
    })
    .catch(function () {
      setStatus('Something went wrong. Please call us directly.', 'error');
    })
    .finally(function () {
      btn.disabled    = false;
      btn.textContent = 'Get a callback ►';
    });
  });

  function setStatus(text, type) {
    status.textContent = text;
    status.className   = 'cta-strip__status cta-strip__status--' + type;
  }
})();
