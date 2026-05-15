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

/* Footer year */
const yearEl = document.getElementById('year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
