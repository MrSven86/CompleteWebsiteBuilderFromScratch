/* main.js */

/* Desktop nav dropdowns */
document.querySelectorAll('.site-nav__dropdown').forEach(function(dropdown) {
  var timer;
  dropdown.addEventListener('mouseenter', function() {
    clearTimeout(timer);
    dropdown.classList.add('is-open');
  });
  dropdown.addEventListener('mouseleave', function() {
    timer = setTimeout(function() {
      dropdown.classList.remove('is-open');
    }, 200);
  });
});

/* Mobile nav */
const hamburger = document.getElementById('hamburger');
const mobileNav = document.getElementById('mobileNav');
const mobileClose = document.getElementById('mobileClose');
const mobileBackdrop = document.getElementById('mobileBackdrop');
if (hamburger) hamburger.addEventListener('click', () => mobileNav.classList.add('is-open'));
if (mobileClose) mobileClose.addEventListener('click', () => mobileNav.classList.remove('is-open'));
if (mobileBackdrop) mobileBackdrop.addEventListener('click', () => mobileNav.classList.remove('is-open'));

/* Mobile sub-menu toggles */
document.querySelectorAll('.mobile-nav__toggle').forEach(btn => {
  btn.addEventListener('click', () => {
    const sub = btn.nextElementSibling;
    if (sub) sub.style.display = sub.style.display === 'none' ? 'flex' : 'none';
  });
});

/* FAQ accordion */
document.querySelectorAll('.faq-item__question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item = btn.closest('.faq-item');
    const isOpen = item.classList.contains('is-open');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('is-open'));
    if (!isOpen) item.classList.add('is-open');
  });
});

/* Open/closed status bar */
(function() {
  function update() {
    var now = new Date();
    var day = now.getDay(); // 0=Sun,1=Mon...6=Sat
    var t = now.getHours() * 60 + now.getMinutes();
    var isOpen = (day >= 1 && day <= 5 && t >= 420 && t < 1080) || // Mon-Fri 7am-6pm
                 (day === 6 && t >= 480 && t < 960);                 // Sat 8am-4pm
    var h = now.getHours(), m = now.getMinutes();
    var ampm = h >= 12 ? 'PM' : 'AM';
    h = h % 12 || 12;
    var timeStr = h + ':' + (m < 10 ? '0' + m : m) + ' ' + ampm;
    var dot = document.getElementById('openDot');
    var timeEl = document.getElementById('openTime');
    var statusEl = document.getElementById('openStatus');
    if (!dot || !timeEl || !statusEl) return;
    dot.className = 'open-dot ' + (isOpen ? 'open-dot--open' : 'open-dot--closed');
    timeEl.textContent = timeStr;
    statusEl.innerHTML = isOpen ? 'We are currently <strong>open!</strong>' : 'We are currently <strong>closed</strong>';
  }
  update();
  setInterval(update, 60000);
})();

/* Footer year */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
