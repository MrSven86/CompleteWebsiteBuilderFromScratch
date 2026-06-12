(function () {
  var WALL = document.getElementById('review-wall');
  if (!WALL) return;

  var CLIENT   = WALL.dataset.client;
  var ACCENT   = WALL.dataset.accent  || '#581C87';
  var TITLE    = WALL.dataset.title   || 'What Our Customers Say';
  var SUBTITLE = WALL.dataset.subtitle|| 'Real reviews from verified customers';
  var API_URL  = 'https://velocity-reviews-api.vercel.app/api/reviews?client=' + CLIENT;
  var PAGE_SIZE = 6;

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
    RM.querySelector('.rw-rm__text').textContent = rev.text ? '“' + rev.text + '”' : '';
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

    WALL.innerHTML =
      '<div class="rw-inner">' +
        '<div class="rw-header">' +
          '<div class="rw-header__left">' +
            '<h2 class="rw-title">' + TITLE + '</h2>' +
            '<p class="rw-subtitle">' + SUBTITLE + '</p>' +
            '<div class="rw-score">' +
              '<strong class="rw-score__num">' + displayRating + '</strong>' +
              '<div>' +
                '<div class="rw-score__stars">' + stars(Math.round(parseFloat(displayRating))) + '</div>' +
                '<p class="rw-score__label">Based on ' + totalCount + ' reviews</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="rw-header__right">' + breakdownHTML + '</div>' +
        '</div>' +
        '<div class="rw-filters"><span class="rw-filter-label">Filter:</span>' + filterHTML + '</div>' +
        '<div class="rw-grid" id="rw-grid"></div>' +
        '<div class="rw-pagination" id="rw-pagination"></div>' +
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
          '<button class="rw-arrow" id="rw-prev" aria-label="Previous" ' + (currentPage === 0 ? 'disabled' : '') + '>&#8592;</button>' +
          dotsHTML +
          '<button class="rw-arrow" id="rw-next" aria-label="Next" ' + (currentPage >= pages - 1 ? 'disabled' : '') + '>&#8594;</button>' +
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
