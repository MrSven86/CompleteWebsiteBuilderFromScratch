(function () {
  var WALL = document.getElementById('review-wall');
  if (!WALL) return;

  var CLIENT  = WALL.dataset.client;
  var ACCENT  = WALL.dataset.accent  || '#581C87';
  var TITLE   = WALL.dataset.title   || 'What Our Customers Say';
  var SUBTITLE= WALL.dataset.subtitle|| 'Real reviews from verified customers';
  var API_URL = 'https://velocity-reviews-api.vercel.app/api/reviews?client=' + CLIENT;

  // ── loading state ──────────────────────────────────────────────────────────
  WALL.innerHTML =
    '<div class="rw-loading"><div class="rw-spinner" style="border-top-color:' + ACCENT + '"></div></div>';

  fetch(API_URL)
    .then(function (r) { return r.json(); })
    .then(function (data) {
      if (!data.success || !data.reviews || data.reviews.length === 0) {
        WALL.innerHTML = '<p class="rw-error">No reviews available yet.</p>';
        return;
      }
      render(data.reviews);
    })
    .catch(function () {
      WALL.innerHTML = '<p class="rw-error">Unable to load reviews. Please try again later.</p>';
    });

  // ── helpers ────────────────────────────────────────────────────────────────
  function stars(n) {
    var s = '';
    for (var i = 1; i <= 5; i++) {
      s += '<span class="rw-star' + (i <= n ? ' rw-star--on' : '') + '">★</span>';
    }
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
    var d = new Date(iso);
    return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
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
  function render(reviews) {
    var avgRating = avg(reviews);
    var ratings   = [5, 4, 3, 2, 1];

    var breakdownHTML = ratings.map(function (r) {
      var n   = count(reviews, r);
      var pct = reviews.length ? (n / reviews.length) * 100 : 0;
      return '<div class="rw-bar-row">' +
        '<span class="rw-bar-label">' + r + '</span>' +
        '<div class="rw-bar-track"><div class="rw-bar-fill" style="width:' + pct + '%;background:' + ACCENT + '"></div></div>' +
        '<span class="rw-bar-count">' + n + '</span>' +
        '</div>';
    }).join('');

    // only show filter pills for star ratings that exist
    var presentRatings = ratings.filter(function (r) { return count(reviews, r) > 0; });
    var filterHTML = '<button class="rw-filter rw-filter--active" data-rating="0" style="--rw-accent:' + ACCENT + '">All (' + reviews.length + ')</button>' +
      presentRatings.map(function (r) {
        return '<button class="rw-filter" data-rating="' + r + '" style="--rw-accent:' + ACCENT + '">' + r + '★ (' + count(reviews, r) + ')</button>';
      }).join('');

    WALL.innerHTML =
      '<div class="rw-inner">' +

        '<div class="rw-header">' +
          '<div class="rw-header__left">' +
            '<h2 class="rw-title">' + TITLE + '</h2>' +
            '<p class="rw-subtitle">' + SUBTITLE + '</p>' +
            '<div class="rw-score">' +
              '<strong class="rw-score__num">' + avgRating + '</strong>' +
              '<div>' +
                '<div class="rw-score__stars">' + stars(Math.round(parseFloat(avgRating))) + '</div>' +
                '<p class="rw-score__label">Based on ' + reviews.length + ' reviews</p>' +
              '</div>' +
            '</div>' +
          '</div>' +
          '<div class="rw-header__right">' + breakdownHTML + '</div>' +
        '</div>' +

        '<div class="rw-filters"><span class="rw-filter-label">Filter:</span>' + filterHTML + '</div>' +

        '<div class="rw-grid" id="rw-grid"></div>' +

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

    renderCards(reviews, reviews);

    WALL.querySelectorAll('.rw-filter').forEach(function (btn) {
      btn.addEventListener('click', function () {
        WALL.querySelectorAll('.rw-filter').forEach(function (b) { b.classList.remove('rw-filter--active'); });
        btn.classList.add('rw-filter--active');
        var rating   = parseInt(btn.dataset.rating, 10);
        var filtered = rating === 0 ? reviews : reviews.filter(function (r) { return r.rating === rating; });
        renderCards(reviews, filtered);
      });
    });
  }

  // ── card grid ──────────────────────────────────────────────────────────────
  function renderCards(allReviews, filtered) {
    var grid = document.getElementById('rw-grid');
    if (!grid) return;

    grid.innerHTML = filtered.map(function (rev, i) {
      var initial  = rev.author ? rev.author.charAt(0).toUpperCase() : '?';
      var isLong   = rev.text && rev.text.length > 200;
      var display  = isLong ? rev.text.slice(0, 200) + '…' : rev.text;
      var avatarHTML = rev.profilePhoto
        ? '<img src="' + rev.profilePhoto + '" alt="' + rev.author + '" class="rw-avatar__img" />'
        : '<div class="rw-avatar__initial" style="background:' + ACCENT + '">' + initial + '</div>';

      return '<div class="rw-card">' +
          '<div class="rw-card__top">' +
            '<div class="rw-card__stars">' + stars(rev.rating) + '</div>' +
            '<div class="rw-card__source">' + googleG() + '<span>Google</span></div>' +
          '</div>' +
          '<p class="rw-card__text" id="rw-text-' + i + '">“' + display + '”</p>' +
          (isLong ? '<button class="rw-readmore" data-idx="' + i + '" data-full="' + encodeURIComponent(rev.text) + '" style="color:' + ACCENT + '">Read more</button>' : '') +
          '<div class="rw-card__author">' +
            '<div class="rw-avatar">' + avatarHTML + '</div>' +
            '<div class="rw-author-info">' +
              '<strong class="rw-author-name">' + rev.author + '</strong>' +
              '<span class="rw-author-date">' + fmtDate(rev.date) + '</span>' +
            '</div>' +
            '<svg class="rw-check" viewBox="0 0 20 20" fill="none" aria-hidden="true"><circle cx="10" cy="10" r="9" stroke="#22C55E" stroke-width="1.5"/><path d="M6 10l3 3 5-5" stroke="#22C55E" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>' +
          '</div>' +
        '</div>';
    }).join('');

    grid.querySelectorAll('.rw-readmore').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var idx    = btn.dataset.idx;
        var full   = decodeURIComponent(btn.dataset.full);
        var textEl = document.getElementById('rw-text-' + idx);
        textEl.textContent = '“' + full + '”';
        btn.remove();
      });
    });
  }
})();
