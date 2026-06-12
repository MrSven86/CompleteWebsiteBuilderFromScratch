(function () {
  var WALL = document.getElementById('review-wall');
  if (!WALL) return;

  var CLIENT   = WALL.dataset.client;
  var ACCENT   = WALL.dataset.accent  || '#581C87';
  var TITLE    = WALL.dataset.title   || 'What Our Customers Say';
  var SUBTITLE = WALL.dataset.subtitle|| 'Real reviews from verified customers';
  var GMB_URL  = WALL.dataset.gmbUrl  || '';
  var API_URL  = 'https://velocity-reviews-api.vercel.app/api/reviews?client=' + CLIENT;
  var PAGE_SIZE = 6;

  // ── SVG assets ─────────────────────────────────────────────────────────────
  var SVG_ARROW_LEFT =
    '<svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M15.6934 2.54654H9.62569C9.51427 2.54607 9.40762 2.50384 9.32916 2.42912C9.25071 2.35441 9.20689 2.25333 9.20733 2.1481V1.69574C9.20733 0.520917 7.84893 -0.194345 6.80384 0.430272L1.463 3.62225C-0.201819 4.61722 -0.207163 6.9253 1.45302 7.92724L6.95849 11.2499C7.93362 11.8385 9.20719 11.1714 9.20719 10.0721V9.18929H15.6934C16.1392 9.18758 16.5659 9.0187 16.8798 8.71982C17.1937 8.42093 17.3691 8.01652 17.3673 7.59554V4.14029C17.3691 3.71931 17.1937 3.3149 16.8798 3.01601C16.5659 2.71713 16.1392 2.54825 15.6934 2.54654Z" fill="#FFC107"/>' +
    '<path d="M1.4629 3.62109C0.870798 3.97484 0.654306 4.59265 0.646184 5.1916C0.636552 5.91088 0.972856 6.49018 1.57937 6.87945C2.89868 7.72613 6.95852 10.0869 6.95852 10.0869C7.93365 10.6754 9.20722 10.0083 9.20722 8.90902V8.55514C9.20677 8.44992 9.25059 8.34883 9.32905 8.27411C9.4075 8.19939 9.51417 8.15716 9.62558 8.15671H15.6934C16.1391 8.15498 16.5659 7.98611 16.8798 7.68722C17.1937 7.38834 17.3691 6.98393 17.3673 6.56296V7.59438C17.3691 8.01536 17.1937 8.41977 16.8798 8.71866C16.5659 9.01754 16.1392 9.18642 15.6934 9.18813H9.20708V10.0709C9.20708 11.1702 7.93351 11.8373 6.95838 11.2488L1.45292 7.92608C-0.207338 6.92414 -0.201924 4.61606 1.4629 3.62109Z" fill="#FFA000"/>' +
    '<path d="M1.35009 3.45479L6.69096 0.26284C6.95783 0.100548 7.26645 0.00995202 7.58371 0.000774045C7.90097 -0.00840393 8.21488 0.0641828 8.49177 0.210744C8.77448 0.355642 9.01009 0.570508 9.1733 0.832286C9.33652 1.09406 9.42118 1.39287 9.41821 1.69665V2.14898C9.41781 2.20135 9.43943 2.25174 9.47831 2.28908C9.5172 2.32643 9.57017 2.34769 9.62563 2.3482H15.6935C16.7327 2.3482 17.5782 3.15254 17.5782 4.14116V7.59645C17.5782 8.58507 16.7327 9.38942 15.6935 9.38942H9.41807V10.073C9.42095 10.3595 9.34099 10.6413 9.18679 10.888C9.0326 11.1348 8.81002 11.3371 8.54306 11.4732C8.28158 11.6109 7.98525 11.6786 7.68602 11.6691C7.38679 11.6595 7.096 11.5729 6.84502 11.4187L1.33937 8.09609C0.927669 7.84604 0.589203 7.50217 0.355143 7.09616C0.121083 6.69014 -0.00104499 6.23504 5.52832e-06 5.77275C0.00105605 5.31046 0.125251 4.85585 0.361154 4.45079C0.597057 4.04572 0.937083 3.70323 1.34992 3.45486L1.35009 3.45479Z" fill="black"/>' +
    '</svg>';

  var SVG_ARROW_RIGHT =
    '<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M1.97932 5.2106H7.70994C7.81517 5.21014 7.9159 5.1679 7.98999 5.09319C8.06409 5.01847 8.10548 4.91739 8.10506 4.81217V4.35981C8.10506 3.18498 9.388 2.46972 10.375 3.09433L15.4191 6.28632C16.9915 7.28128 16.9965 9.58936 15.4286 10.5913L10.229 13.914C9.30801 14.5025 8.10519 13.8354 8.10519 12.7362V11.8534H1.97932C1.55834 11.8516 1.15528 11.6828 0.858814 11.3839C0.562345 11.085 0.396747 10.6806 0.398451 10.2596V6.80435C0.396747 6.38337 0.562345 5.97896 0.858814 5.68008C1.15528 5.38119 1.55834 5.21232 1.97932 5.2106Z" fill="#FFC107"/>' +
    '<path d="M15.4192 6.28516C15.9785 6.6389 16.1829 7.25671 16.1906 7.85566C16.1997 8.57494 15.8821 9.15424 15.3092 9.54351C14.0632 10.3902 10.2289 12.7509 10.2289 12.7509C9.30798 13.3395 8.10516 12.6724 8.10516 11.5731V11.2192C8.10558 11.114 8.0642 11.0129 7.9901 10.9382C7.91601 10.8635 7.81527 10.8212 7.71004 10.8208H1.97932C1.55834 10.819 1.15529 10.6502 0.858823 10.3513C0.562356 10.0524 0.396756 9.648 0.398451 9.22702V10.2584C0.396747 10.6794 0.562345 11.0838 0.858814 11.3827C1.15528 11.6816 1.55834 11.8505 1.97932 11.8522H8.10529V12.735C8.10529 13.8343 9.30811 14.5014 10.2291 13.9128L15.4287 10.5901C16.9967 9.5882 16.9916 7.28012 15.4192 6.28516Z" fill="#FFA000"/>' +
    '<path d="M15.5258 6.11885L10.4816 2.9269C10.2296 2.76461 9.93811 2.67401 9.63848 2.66484C9.33884 2.65566 9.04237 2.72825 8.78087 2.87481C8.51386 3.0197 8.29134 3.23457 8.13719 3.49635C7.98305 3.75813 7.90309 4.05694 7.9059 4.36071V4.81304C7.90627 4.86541 7.88585 4.9158 7.84913 4.95315C7.81241 4.99049 7.76237 5.01175 7.71 5.01226H1.97927C0.997754 5.01226 0.199219 5.8166 0.199219 6.80523V10.2605C0.199219 11.2491 0.997754 12.0535 1.97927 12.0535H7.90603V12.7371C7.90331 13.0236 7.97883 13.3054 8.12446 13.5521C8.27008 13.7988 8.48029 14.0012 8.73242 14.1372C8.97938 14.275 9.25924 14.3427 9.54185 14.3331C9.82446 14.3235 10.0991 14.237 10.3361 14.0828L15.5359 10.7602C15.9247 10.5101 16.2444 10.1662 16.4655 9.76022C16.6865 9.35421 16.8019 8.8991 16.8009 8.43681C16.7999 7.97452 16.6826 7.51991 16.4598 7.11485C16.237 6.70979 15.9158 6.3673 15.5259 6.11892L15.5258 6.11885Z" fill="black"/>' +
    '</svg>';

  var SVG_VERIFIED =
    '<svg class="rw-verified-badge" width="28" height="28" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Verified" role="img">' +
    '<path d="M11.2003 1.90625C9.52507 2.32475 7.37033 2.71959 4.62308 3.00015C3.20788 3.14465 2.12506 4.32467 2.125 5.74721V12.7477C2.125 20.5586 6.30357 27.8798 13.2155 31.5176C13.5382 31.6875 13.8697 31.8518 14.2105 32.0102C15.6588 32.6831 17.3454 32.6831 18.7936 32.0102C19.1344 31.8519 19.466 31.6875 19.7887 31.5176C20.2045 31.2987 20.6103 31.0662 21.006 30.8213L11.2003 1.90625Z" fill="#CDD2E1"/>' +
    '<path d="M30.8772 12.7467C30.8772 10.3928 30.8772 7.67638 30.8772 5.74614C30.8772 4.32359 29.7944 3.14352 28.3792 2.99901C23.4277 2.49338 20.3983 1.61655 18.6391 0.898996C17.271 0.34096 15.7294 0.34096 14.3612 0.898996C13.578 1.21843 12.5424 1.56937 11.1983 1.90511C10.6479 2.44007 10.3087 3.18489 10.3087 4.00609C10.3087 6.06183 10.3086 8.95481 10.3086 11.4617C10.3086 19.3509 14.3117 26.7705 21.004 30.8203C27.1861 26.9955 30.8772 20.0875 30.8772 12.7467Z" fill="#DCE1EB"/>' +
    '<path d="M10.3106 5.41016C8.79816 5.7176 7.14178 5.96909 5.34766 6.16284V12.7462C5.34766 16.0367 6.21629 19.2602 7.85966 22.0683C9.51243 24.8924 11.8835 27.1732 14.7162 28.6642C14.9952 28.811 15.2818 28.9529 15.5686 29.0861C15.8567 29.22 16.1795 29.2907 16.5021 29.2907C16.8248 29.2907 17.1477 29.2199 17.4359 29.086C17.6716 28.9765 17.9059 28.8603 18.1366 28.7415L10.3106 5.41016Z" fill="#DCE1EB"/>' +
    '<path d="M25.1426 22.0687C26.786 19.2606 27.6546 16.0371 27.6546 12.7466V6.16324C23.4647 5.71078 20.0238 4.94417 17.422 3.88295C17.1294 3.76358 16.8192 3.70312 16.5002 3.70312C16.1811 3.70312 15.8709 3.76358 15.5783 3.88301C14.0906 4.48978 12.3282 5.00005 10.3086 5.41056V11.4617C10.3086 18.1476 13.1841 24.4958 18.1346 28.7419C18.1849 28.716 18.2361 28.6909 18.2858 28.6647C21.1189 27.1736 23.4899 24.8927 25.1426 22.0687Z" fill="#F2F6FC"/>' +
    '<path d="M15.2415 12.5363L14.6122 11.907C13.5697 10.8643 11.8792 10.8644 10.8367 11.9069C9.79407 12.9495 9.79401 14.6399 10.8366 15.6825L13.3536 18.1995C13.8543 18.7003 14.5334 18.9816 15.2415 18.9815C15.9495 18.9815 16.6286 18.7002 17.1293 18.1995L19.0169 16.3118L19.0171 16.3117L15.2415 12.5363Z" fill="#A0BE28"/>' +
    '<path d="M22.1647 13.163C23.2073 12.1204 23.2073 10.43 22.1647 9.38737C21.1222 8.34484 19.4317 8.34484 18.3892 9.38737L15.2428 12.5337C15.2405 12.536 15.2381 12.5388 15.2358 12.5412C15.2382 12.5387 15.2404 12.5362 15.2428 12.5337C14.2003 13.5762 14.2003 15.2668 15.2428 16.3093C16.2854 17.3519 17.9758 17.3519 19.0184 16.3093L22.1647 13.163Z" fill="#B4D241"/>' +
    '<path d="M12.2485 21.5547H3.86959C2.66721 21.5547 1.92452 22.8664 2.54314 23.8974C3.10614 24.8357 3.10614 26.008 2.54314 26.9463C1.92452 27.9774 2.66721 29.2891 3.86959 29.2891H12.2485V21.5547Z" fill="#65B1FC"/>' +
    '<path d="M30.4569 26.9463C29.8939 26.008 29.8939 24.8357 30.4569 23.8974C31.0755 22.8664 30.3328 21.5547 29.1304 21.5547H12.2485C11.0461 21.5547 10.3034 22.8664 10.922 23.8974C11.485 24.8357 11.485 26.008 10.922 26.9463C10.3034 27.9774 11.0461 29.2891 12.2485 29.2891H29.1305C30.3328 29.2891 31.0755 27.9773 30.4569 26.9463Z" fill="#87C7FF"/>' +
    '<path d="M31.3617 5.74597C31.3617 4.07637 30.1011 2.68863 28.4293 2.51795C23.4242 2.00684 20.4426 1.11204 18.8227 0.451326C17.3473 -0.150474 15.655 -0.15041 14.1797 0.451326C12.5598 1.11204 9.57817 2.00691 4.57305 2.51795C2.90133 2.68869 1.64069 4.07643 1.64069 5.74597L1.64062 12.7465C1.64062 15.6584 2.19428 18.485 3.28695 21.1575C2.79163 21.3035 2.36953 21.6341 2.10398 22.1031C1.73879 22.748 1.74846 23.5125 2.12976 24.1481C2.60195 24.9349 2.60195 25.9126 2.12976 26.6995C1.74846 27.335 1.73885 28.0995 2.10398 28.7444C2.46911 29.3894 3.12962 29.7744 3.87071 29.7744H9.68297C10.7125 30.6003 11.8235 31.3306 12.9894 31.9442C13.3221 32.1193 13.6641 32.2885 14.0059 32.4473C14.7989 32.8158 15.6499 33 16.5012 33C17.3523 33 18.2036 32.8157 18.9965 32.4473C19.3388 32.2883 19.6808 32.119 20.013 31.9442C21.1789 31.3306 22.2908 30.6003 23.3203 29.7743H29.1316C29.8728 29.7743 30.5332 29.3893 30.8983 28.7444C31.2635 28.0995 31.2539 27.335 30.8726 26.6995C30.4004 25.9126 30.4004 24.9349 30.8726 24.148C31.2539 23.5125 31.2635 22.748 30.8983 22.1031C30.6328 21.6341 30.2107 21.3035 29.7154 21.1575C30.808 18.485 31.3617 15.6584 31.3617 12.7465V5.74597Z" fill="black"/>' +
    '<path d="M13.0149 18.538C13.6104 19.1335 14.4022 19.4615 15.2445 19.4615C16.0867 19.4615 16.8786 19.1335 17.4741 18.538L22.5082 13.5038C23.7376 12.2744 23.7376 10.274 22.5082 9.04458C21.9127 8.44903 21.1209 8.12109 20.2786 8.12109C19.4363 8.12109 18.6445 8.44903 18.049 9.04458L15.2444 11.8491L14.957 11.5617C14.3615 10.9661 13.5697 10.6381 12.7274 10.6381C11.8852 10.6381 11.0933 10.9661 10.4978 11.5617C9.90222 12.1572 9.57422 12.949 9.57422 13.7912C9.57422 14.6335 9.90216 15.4253 10.4978 16.0208L13.0149 18.538Z" fill="black"/>' +
    '</svg>';

  // ── reviewer modal ─────────────────────────────────────────────────────────
  var RM = document.createElement('div');
  RM.className = 'rw-rm';
  RM.setAttribute('hidden', '');
  RM.setAttribute('role', 'dialog');
  RM.setAttribute('aria-modal', 'true');
  RM.innerHTML =
    '<div class="rw-rm__backdrop"></div>' +
    '<div class="rw-rm__card">' +
      '<button class="rw-rm__close" aria-label="Close">&#x2715;</button>' +
      '<div class="rw-rm__top">' +
        '<div class="rw-rm__avatar-wrap"></div>' +
        '<div class="rw-rm__meta">' +
          '<strong class="rw-rm__name"></strong>' +
          '<div class="rw-rm__stars"></div>' +
          '<span class="rw-rm__date"></span>' +
        '</div>' +
      '</div>' +
      '<p class="rw-rm__text"></p>' +
      '<a class="rw-rm__cta" href="#" target="_blank" rel="noopener noreferrer">' +
        '<svg width="14" height="14" viewBox="0 0 48 48" aria-hidden="true" style="flex-shrink:0;margin-top:1px">' +
          '<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>' +
          '<path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>' +
          '<path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>' +
          '<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>' +
        '</svg>' +
        'Verify on Google' +
      '</a>' +
    '</div>';
  document.body.appendChild(RM);

  function rmOpen(rev) {
    var wrap = RM.querySelector('.rw-rm__avatar-wrap');
    wrap.innerHTML = rev.profilePhoto
      ? '<img src="' + rev.profilePhoto + '" class="rw-rm__img" alt="' + rev.author + '" />'
      : '<div class="rw-rm__initial" style="background:' + ACCENT + '">' + (rev.author ? rev.author.charAt(0).toUpperCase() : '?') + '</div>';
    RM.querySelector('.rw-rm__name').textContent = rev.author;
    RM.querySelector('.rw-rm__stars').innerHTML = stars(rev.rating);
    RM.querySelector('.rw-rm__date').textContent = fmtDate(rev.date);
    RM.querySelector('.rw-rm__text').textContent = rev.text ? '"' + rev.text + '"' : '';
    var cta = RM.querySelector('.rw-rm__cta');
    cta.href = rev.reviewUrl || '#';
    cta.style.display = rev.reviewUrl ? '' : 'none';
    RM.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }
  function rmClose() { RM.setAttribute('hidden', ''); document.body.style.overflow = ''; }
  RM.querySelector('.rw-rm__backdrop').addEventListener('click', rmClose);
  RM.querySelector('.rw-rm__close').addEventListener('click', rmClose);

  // ── photo lightbox ─────────────────────────────────────────────────────────
  var LB = document.createElement('div');
  LB.className = 'rw-lightbox';
  LB.setAttribute('hidden', '');
  LB.setAttribute('role', 'dialog');
  LB.setAttribute('aria-modal', 'true');
  LB.setAttribute('aria-label', 'Photo viewer');
  LB.innerHTML =
    '<div class="rw-lb__backdrop"></div>' +
    '<div class="rw-lb__inner">' +
      '<button class="rw-lb__close" aria-label="Close">&#x2715;</button>' +
      '<button class="rw-lb__prev" aria-label="Previous photo">&#8592;</button>' +
      '<img class="rw-lb__img" src="" alt="Review photo" />' +
      '<button class="rw-lb__next" aria-label="Next photo">&#8594;</button>' +
      '<p class="rw-lb__counter"></p>' +
    '</div>';
  document.body.appendChild(LB);

  var lbImgs = [];
  var lbIdx  = 0;

  function lbOpen(imgs, idx) {
    lbImgs = imgs; lbIdx = idx || 0;
    lbRefresh();
    LB.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
  }
  function lbClose() { LB.setAttribute('hidden', ''); document.body.style.overflow = ''; }
  function lbRefresh() {
    LB.querySelector('.rw-lb__img').src = lbImgs[lbIdx];
    LB.querySelector('.rw-lb__counter').textContent = lbImgs.length > 1 ? (lbIdx + 1) + ' / ' + lbImgs.length : '';
    var prev = LB.querySelector('.rw-lb__prev');
    var next = LB.querySelector('.rw-lb__next');
    prev.style.visibility = lbImgs.length > 1 ? '' : 'hidden';
    next.style.visibility = lbImgs.length > 1 ? '' : 'hidden';
    prev.disabled = lbIdx === 0;
    next.disabled  = lbIdx === lbImgs.length - 1;
  }
  LB.querySelector('.rw-lb__backdrop').addEventListener('click', lbClose);
  LB.querySelector('.rw-lb__close').addEventListener('click', lbClose);
  LB.querySelector('.rw-lb__prev').addEventListener('click', function () { if (lbIdx > 0) { lbIdx--; lbRefresh(); } });
  LB.querySelector('.rw-lb__next').addEventListener('click', function () { if (lbIdx < lbImgs.length - 1) { lbIdx++; lbRefresh(); } });
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') { lbClose(); rmClose(); }
    if (!LB.hasAttribute('hidden')) {
      if (e.key === 'ArrowLeft'  && lbIdx > 0)                 { lbIdx--; lbRefresh(); }
      if (e.key === 'ArrowRight' && lbIdx < lbImgs.length - 1) { lbIdx++; lbRefresh(); }
    }
  });

  // ── loading ────────────────────────────────────────────────────────────────
  WALL.innerHTML =
    '<div class="rw-loading"><div class="rw-spinner" style="border-top-color:' + ACCENT + '"></div></div>';

  fetch(API_URL)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data.success || !data.reviews || data.reviews.length === 0) {
        WALL.innerHTML = '<p class="rw-error">No reviews available yet.</p>';
        return;
      }
      render(data);
    })
    .catch(function () {
      WALL.innerHTML = '<p class="rw-error">Unable to load reviews. Please try again later.</p>';
    });

  // ── helpers ────────────────────────────────────────────────────────────────
  function stars(n) {
    var s = '';
    for (var i = 1; i <= 5; i++) s += '<span class="rw-star' + (i <= n ? ' rw-star--on' : '') + '">★</span>';
    return s;
  }
  function scoreStar() {
    return '<svg width="22" height="20" viewBox="0 0 25 22" fill="none" class="rw-score-star" aria-hidden="true">' +
      '<path d="M12.3995 0L15.9896 7.22201L23.9631 8.39089L18.1604 14.0266L19.538 22L12.3995 18.2429L5.26098 22L6.63859 14.0266L0.835938 8.39089L8.80937 7.22201L12.3995 0Z" fill="#F9BC15"/>' +
      '</svg>';
  }
  function scoreStars(n) {
    var s = '';
    for (var i = 0; i < n; i++) s += scoreStar();
    return s;
  }
  function avg(reviews) {
    var sum = reviews.reduce(function (a, r) { return a + r.rating; }, 0);
    return (sum / reviews.length).toFixed(1);
  }
  function count(reviews, rating) {
    return reviews.filter(function (r) { return r.rating === rating; }).length;
  }
  function fmtDate(iso) {
    if (!iso) return '';
    return new Date(iso).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  }
  function googleG() {
    return '<svg class="rw-google-icon" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
      '<path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"/>' +
      '<path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"/>' +
      '<path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"/>' +
      '<path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.18 1.48-4.97 2.31-8.16 2.31-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"/>' +
      '</svg>';
  }

  // ── main render ────────────────────────────────────────────────────────────
  function render(data) {
    var reviews       = data.reviews;
    var totalCount    = data.totalReviews || reviews.length;
    var displayRating = data.averageRating ? parseFloat(data.averageRating).toFixed(1) : avg(reviews);
    var ratings       = [5, 4, 3, 2, 1];
    var photoReviews  = reviews.filter(function (r) { return r.images && r.images.length > 0; });

    var verifiedByHTML =
      '<div class="rw-verified-by">' +
        '<span class="rw-verified-label">Verified by</span>' +
        '<img src="/assets/images/google-wordmark.png" alt="Google" class="rw-google-wordmark" />' +
        SVG_VERIFIED +
      '</div>';

    var breakdownHTML = ratings.map(function (r) {
      var n   = count(reviews, r);
      var pct = reviews.length ? (n / reviews.length) * 100 : 0;
      return '<div class="rw-bar-row">' +
        '<span class="rw-bar-label">' + r + '</span>' +
        '<div class="rw-bar-track"><div class="rw-bar-fill" style="width:' + pct + '%;background:' + ACCENT + '"></div></div>' +
        '<span class="rw-bar-count">' + n + '</span>' +
        '</div>';
    }).join('');

    var presentRatings = ratings.filter(function (r) { return count(reviews, r) > 0; });
    var filterHTML =
      '<button class="rw-filter rw-filter--active" data-rating="0" style="--rw-accent:' + ACCENT + '">All (' + totalCount + ')</button>' +
      presentRatings.map(function (r) {
        return '<button class="rw-filter" data-rating="' + r + '" style="--rw-accent:' + ACCENT + '">' + r + '&#9733; (' + count(reviews, r) + ')</button>';
      }).join('') +
      (photoReviews.length ?
        '<button class="rw-filter rw-filter--photo" data-rating="-1" style="--rw-accent:' + ACCENT + '">' +
          '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="display:inline;vertical-align:middle;margin-right:5px;margin-top:-1px">' +
            '<path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>' +
            '<circle cx="12" cy="13" r="4"/>' +
          '</svg>' +
          'Has photos (' + photoReviews.length + ')' +
        '</button>'
      : '');

    var gmbBtnHTML = GMB_URL
      ? '<div class="rw-gmb-row">' +
          '<a class="rw-gmb-btn" href="' + GMB_URL + '" target="_blank" rel="noopener noreferrer">' +
            'Review Us on Google' +
            '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-left:8px;flex-shrink:0">' +
              '<path d="M5 12h14M12 5l7 7-7 7"/>' +
            '</svg>' +
          '</a>' +
        '</div>'
      : '';

    WALL.innerHTML =
      '<div class="rw-inner">' +
        '<div class="rw-header">' +
          '<div class="rw-header__left">' +
            '<h2 class="rw-title">' + TITLE + '</h2>' +
            '<p class="rw-subtitle">' + SUBTITLE + '</p>' +
            '<div class="rw-score">' +
              '<strong class="rw-score__num">' + displayRating + '</strong>' +
              '<div>' +
                '<div class="rw-score__stars">' + scoreStars(Math.round(parseFloat(displayRating))) + '</div>' +
                '<p class="rw-score__label">Based on ' + totalCount + ' reviews</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="rw-header__right">' +
            verifiedByHTML +
            breakdownHTML +
          '</div>' +
        '</div>' +
        '<div class="rw-filters"><span class="rw-filter-label">Filter:</span>' + filterHTML + '</div>' +
        '<div class="rw-grid" id="rw-grid"></div>' +
        '<div class="rw-pagination" id="rw-pagination"></div>' +
        gmbBtnHTML +
        '<div class="rw-footer">' +
          '<span class="rw-footer__verified">' +
            '<svg viewBox="0 0 16 16" fill="none" aria-hidden="true" style="width:14px;height:14px;display:inline;margin-right:4px;vertical-align:middle;">' +
              '<circle cx="8" cy="8" r="7" stroke="#9CA3AF" stroke-width="1.5"/>' +
            '</svg>' +
            'All reviews are independently verified' +
          '</span>' +
          '<span class="rw-footer__power">Powered by <strong>Velocity</strong></span>' +
        '</div>' +
      '</div>';

    var currentPage    = 0;
    var activeFiltered = reviews;

    function totalPages() { return Math.max(1, Math.ceil(activeFiltered.length / PAGE_SIZE)); }

    function updatePagination() {
      var pag = document.getElementById('rw-pagination');
      if (!pag) return;
      var pages = totalPages();
      var dotsHTML = '<div class="rw-dots">';
      for (var i = 0; i < pages; i++) {
        dotsHTML += '<span class="rw-dot' + (i === currentPage ? ' rw-dot--active' : '') + '" style="' + (i === currentPage ? 'background:' + ACCENT : '') + '"></span>';
      }
      dotsHTML += '</div>';
      pag.innerHTML =
        '<div class="rw-nav">' +
          '<button class="rw-arrow" id="rw-prev" aria-label="Previous" ' + (currentPage === 0 ? 'disabled' : '') + '>' + SVG_ARROW_LEFT + '</button>' +
          dotsHTML +
          '<button class="rw-arrow" id="rw-next" aria-label="Next" ' + (currentPage >= pages - 1 ? 'disabled' : '') + '>' + SVG_ARROW_RIGHT + '</button>' +
        '</div>';
      document.getElementById('rw-prev').addEventListener('click', function () {
        if (currentPage > 0) { currentPage--; renderCards(activeFiltered, currentPage); updatePagination(); }
      });
      document.getElementById('rw-next').addEventListener('click', function () {
        if (currentPage < totalPages() - 1) { currentPage++; renderCards(activeFiltered, currentPage); updatePagination(); }
      });
    }

    renderCards(activeFiltered, currentPage);
    updatePagination();

    WALL.querySelectorAll('.rw-filter').forEach(function (btn) {
      btn.addEventListener('click', function () {
        WALL.querySelectorAll('.rw-filter').forEach(function (b) { b.classList.remove('rw-filter--active'); });
        btn.classList.add('rw-filter--active');
        var rating = parseInt(btn.dataset.rating, 10);
        if (rating === -1) {
          activeFiltered = reviews.filter(function (r) { return r.images && r.images.length > 0; });
        } else {
          activeFiltered = rating === 0 ? reviews : reviews.filter(function (r) { return r.rating === rating; });
        }
        currentPage = 0;
        renderCards(activeFiltered, currentPage);
        updatePagination();
      });
    });
  }

  // ── card grid ──────────────────────────────────────────────────────────────
  function renderCards(filtered, page) {
    var grid = document.getElementById('rw-grid');
    if (!grid) return;
    var start = (page || 0) * PAGE_SIZE;
    var shown = filtered.slice(start, start + PAGE_SIZE);

    grid.innerHTML = shown.map(function (rev, i) {
      var initial    = rev.author ? rev.author.charAt(0).toUpperCase() : '?';
      var isLong     = rev.text && rev.text.length > 200;
      var display    = isLong ? rev.text.slice(0, 200) + '…' : (rev.text || '');
      var avatarHTML = rev.profilePhoto
        ? '<img src="' + rev.profilePhoto + '" alt="' + rev.author + '" class="rw-avatar__img" loading="lazy" />'
        : '<div class="rw-avatar__initial" style="background:' + ACCENT + '">' + initial + '</div>';

      var nameHTML = '<strong class="rw-author-name' + (rev.reviewUrl ? ' rw-author-name--link' : '') + '" data-rev-idx="' + i + '">' + rev.author + '</strong>';

      var photosHTML = '';
      if (rev.images && rev.images.length) {
        var imgs     = rev.images.slice(0, 4);
        var imgsJson = encodeURIComponent(JSON.stringify(imgs));
        photosHTML = '<div class="rw-photos">' +
          imgs.map(function (src, pi) {
            return '<img src="' + src + '" class="rw-photo" loading="lazy" alt="Review photo" ' +
              'data-imgs="' + imgsJson + '" data-idx="' + pi + '" />';
          }).join('') +
          '</div>';
      }

      return '<div class="rw-card">' +
          '<div class="rw-card__top">' +
            '<div class="rw-card__stars">' + stars(rev.rating) + '</div>' +
            '<div class="rw-card__source">' + googleG() + '<span>Google</span></div>' +
          '</div>' +
          (display ? '<p class="rw-card__text" id="rw-text-' + i + '">"' + display + '"</p>' : '') +
          (isLong ? '<button class="rw-readmore" data-idx="' + i + '" data-full="' + encodeURIComponent(rev.text) + '" style="color:' + ACCENT + '">Read more</button>' : '') +
          photosHTML +
          '<div class="rw-card__author">' +
            '<div class="rw-avatar">' + avatarHTML + '</div>' +
            '<div class="rw-author-info">' +
              nameHTML +
              '<span class="rw-author-date">' + fmtDate(rev.date) + '</span>' +
            '</div>' +
            '<svg class="rw-check" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9" stroke="#22C55E" stroke-width="1.5"/><path d="M6 10l3 3 5-5" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</div>' +
        '</div>';
    }).join('');

    grid.querySelectorAll('.rw-author-name--link').forEach(function (el) {
      var rev = shown[parseInt(el.dataset.revIdx, 10)];
      el.addEventListener('click', function () { rmOpen(rev); });
    });

    grid.querySelectorAll('.rw-photo').forEach(function (img) {
      img.addEventListener('click', function () {
        lbOpen(JSON.parse(decodeURIComponent(img.dataset.imgs)), parseInt(img.dataset.idx, 10));
      });
    });

    grid.querySelectorAll('.rw-readmore').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var textEl = document.getElementById('rw-text-' + btn.dataset.idx);
        if (textEl) textEl.textContent = '"' + decodeURIComponent(btn.dataset.full) + '"';
        btn.remove();
      });
    });
  }
})();
