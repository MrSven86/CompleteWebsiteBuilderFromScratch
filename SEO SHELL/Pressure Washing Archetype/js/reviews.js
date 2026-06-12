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
    '<svg width="38" height="38" viewBox="0 0 514 514" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M257 0C398.707 0 514 115.293 514 257C514 398.707 398.707 514 257 514C115.293 514 0 398.707 0 257C0 115.293 115.293 0 257 0ZM257 481.875C380.998 481.875 481.875 380.998 481.875 257C481.875 133.002 380.998 32.125 257 32.125C133.002 32.125 32.125 133.002 32.125 257C32.125 380.998 133.002 481.875 257 481.875ZM149.269 245.644C142.992 251.92 142.992 262.084 149.269 268.356L229.581 348.669C232.718 351.805 236.83 353.375 240.938 353.375C245.045 353.375 249.157 351.805 252.294 348.669C258.57 342.392 258.57 332.229 252.294 325.956L199.4 273.062H353.375C362.246 273.062 369.438 265.879 369.438 257C369.438 248.121 362.246 240.938 353.375 240.938H199.4L252.294 188.044C258.57 181.767 258.57 171.604 252.294 165.331C246.017 159.059 235.854 159.055 229.581 165.331L149.269 245.644Z" fill="' + ACCENT + '"/>' +
    '</svg>';

  var SVG_ARROW_RIGHT =
    '<svg width="38" height="38" viewBox="0 0 512 512" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">' +
    '<path d="M256 0C114.844 0 0 114.844 0 256C0 397.156 114.844 512 256 512C397.156 512 512 397.156 512 256C512 114.844 397.156 0 256 0ZM256 480C132.484 480 32 379.516 32 256C32 132.484 132.484 32 256 32C379.516 32 480 132.484 480 256C480 379.516 379.516 480 256 480ZM363.312 244.688C369.564 250.94 369.564 261.064 363.312 267.312L283.312 347.312C280.188 350.436 276.092 352 272 352C267.908 352 263.812 350.436 260.688 347.312C254.436 341.06 254.436 330.936 260.688 324.688L313.376 272H160C151.164 272 144 264.844 144 256C144 247.156 151.164 240 160 240H313.376L260.688 187.312C254.436 181.06 254.436 170.936 260.688 164.688C266.94 158.44 277.064 158.436 283.312 164.688L363.312 244.688Z" fill="' + ACCENT + '"/>' +
    '</svg>';

  var SVG_VERIFIED = '<img src="/assets/images/cert-badge-quality.png" alt="Quality Verified" class="rw-verified-badge" />';

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
            breakdownHTML +
          '</div>' +
        '</div>' +
        '<div class="rw-filters"><span class="rw-filter-label">Filter:</span>' + filterHTML + '<div class="rw-filters__verified">' + verifiedByHTML + '</div></div>' +
        '<div class="rw-grid" id="rw-grid"></div>' +
        '<div class="rw-pagination" id="rw-pagination"></div>' +
        '<div class="rw-footer">' +
          '<span class="rw-footer__verified">' +
            '<svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true" style="flex-shrink:0">' +
              '<circle cx="8" cy="8" r="7" stroke="#9CA3AF" stroke-width="1.5"/>' +
              '<path d="M5 8l2 2 4-4" stroke="#9CA3AF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>' +
            '</svg>' +
            'All reviews are independently verified' +
          '</span>' +
          (GMB_URL ? '<a class="rw-gmb-btn" href="' + GMB_URL + '" target="_blank" rel="noopener noreferrer">Review Us on Google <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" style="margin-left:6px;flex-shrink:0"><path d="M5 12h14M12 5l7 7-7 7"/></svg></a>' : '') +
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
