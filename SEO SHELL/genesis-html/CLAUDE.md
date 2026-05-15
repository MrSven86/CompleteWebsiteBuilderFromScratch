# Velocity Genesis SEO Shell

This folder is a **client project** copied from the genesis-html master template.
It is a static HTML/CSS/JS site — no React, no Vite, no build step.

## What's built in

### Velocity Review Wall
- Fetches live reviews from: `https://velocity-reviews-api.vercel.app/api/reviews?client={id}`
- Rendered by `js/reviews.js` (vanilla IIFE, no dependencies)
- Styled by `css/reviews.css` (all classes prefixed `rw-`)
- Config lives on the `#review-wall` div via data attributes:
  ```html
  <div id="review-wall"
    data-client="CLIENT-ID"
    data-accent="#581C87"
    data-title="What Our Customers Say"
    data-subtitle="Real reviews from verified customers">
  </div>
  ```
- **Never edit reviews.js per client** — only change the data attributes in HTML

### Velocity Contact Form API
- Posts to: `https://velocity-contact-form-api.vercel.app/api/send-email`
- Handled by `js/contact.js` (vanilla IIFE, no dependencies)
- Covers two forms: main contact form (`#contactForm`) and callback strip (`#callbackForm`)
- Config lives on the `<form>` element via data attributes:
  ```html
  <form id="contactForm"
    data-client-email="CLIENT@EMAIL.COM"
    data-client-site="example.com"
    data-client-name="Company Name">
  ```
- **Never edit contact.js per client** — only change the data attributes in HTML

### Callback CTA Strip
- Sits above the main contact section on every page
- Form id: `callbackForm` — connected to same Velocity API as contact form
- User enters phone + selects service → client receives email notification

## Placeholders to replace per client

| Placeholder | What it is |
|---|---|
| `CLIENT-ID` | Velocity Reviews client ID |
| `CLIENT@EMAIL.COM` | Client's receiving email address |
| `example.com` | Client's domain |
| `Company Name` | Client's business name |
| `Service 1`, `Service 2` etc. | Actual service names in dropdowns |
| `CITY`, `NEIGHBORHOOD` etc. | Location names in service-area pages |

Use VS Code **Ctrl+Shift+H** (Find & Replace across all files) to swap these out.

## File structure

```
index.html                  — homepage
about.html                  — about page
contact.html                — contact page
404.html                    — error page
services/
  index.html                — services hub
  service-1.html … service-5.html
service-areas/
  index.html                — areas hub
  downtown.html … west-end.html   — area hub pages
  downtown-service-1.html … west-end-service-2.html  — area+service combos
css/
  style.css                 — all site styles
  reviews.css               — review wall styles (rw- prefix)
js/
  main.js                   — nav, mobile menu
  reviews.js                — Velocity Review Wall widget
  contact.js                — contact form + callback form handlers
assets/images/              — logo, map, placeholder images
robots.txt
sitemap.xml
llms.txt
```

## Named Visual Styles (Färdiga Stilar)

Reference library at: `C:\Users\tomas\Code\CompleteWebsiteBuilderFromScratch\Färdiga Stilar\`

When user says "use the X style", read the CSS/component files from that style folder to extract colors, fonts, and layout direction — then apply to this shell. **Never copy React/JSX code.**

### Contractor styles (use for local service/trade clients)
| Style | Character |
|---|---|
| Americana | Bold, patriotic, Franklin Gothic, strong reds/blues |
| California | Warm, sun-bleached, relaxed layout |
| FancyCalifornia | California direction but more polished/premium |
| Victorian | Ornate, serif-heavy, heritage feel |
| Premium | High-end, refined, Spanish-market influenced |
| Sleek | Clean minimal, elegant Spanish style |
| Svanen | Scandinavian clean, Svanström inspired |
| Trusted | Solid, dependable, blue-collar trust signals |
| Reliable | Straightforward, no-nonsense |
| Functional | Gets the job done, Chameleon Painting style |
| PainterStrokes | Painterly textures, artistic strokes |
| Plumber | Trade/utility focused |
| AI | Modern, digital-first |
| Tryhard | Energetic, punchy |

### Construction styles
| Style | Character |
|---|---|
| Complex | Large-scale construction, bold layout |
| Construction | Traditional contractor site |
| Skyscraper | High-rise/commercial feel |
| Variation | Coating/specialist trade |

### Other styles
- **SPA / Beauty** — `SPA BEAUTY/CompleteSpa/`
- **Velocity own site** — `OTHER/MY COMPANY WEBSITE VELOCITY WEB/`

### How to extract a style
1. Go to the style folder → open `src/index.css` or `App.css` → find CSS variables (colors, fonts)
2. Check `public/fonts/` for font file names
3. Read a key component (hero, nav) to understand layout rhythm
4. Rebuild those choices cleanly in this shell's CSS

---

## Component Library — Swappable Section Designs

Reference app at: `C:\Users\tomas\Code\CompleteWebsiteBuilderFromScratch\COMPONENT LIBRARY\design-digests-dazzle-main\`

This is a **parts catalog** — alternative layouts for each section type. The genesis-html shell has one default per section. When a client needs a different variant, pick from here and rebuild cleanly in HTML/CSS.

| Page file | What it contains |
|---|---|
| `src/pages/Hero.tsx` | Multiple hero layouts (full-bleed, split, centered, etc.) |
| `src/pages/CTA.tsx` | Multiple CTA section variants |
| `src/pages/FAQ.tsx` | Multiple FAQ/accordion layouts |
| `src/pages/ServiceAreas.tsx` | Multiple service area grid layouts |
| `src/pages/Components.tsx` | All component variants together |

**Never copy React/TSX — read the file, understand the layout, rebuild in HTML/CSS.**

### Fonts (in `public/fonts/`)
- **Bodoni / LTC Bodoni 175** — editorial, luxury, serif
- **Franklin Gothic** (Book/Regular/Heavy) — strong, Americana, bold headlines
- **Futura PT** (Light/Medium/Regular) — clean geometric, modern
- **Korolev** (Light/Medium/Bold/Heavy) — geometric, great for contractors
- **Riawnas Script** — script accent, signatures, taglines

Font showcase: `src/components/FontCardsNew1.tsx` through `FontCardsNew6.tsx`

---

## SVG Icons

Library is at: `C:\Users\tomas\Code\CompleteWebsiteBuilderFromScratch\SVG ICONS\`

Categories: PHONE, EMAIL, WHATSAPP, PLUMBER, Good Service, Quotation Marks, SSL, YELP, BUILDZOOM, PNG

**Workflow — Claude reads and inlines SVGs, never use `<img src>` for icons:**
1. Read the `.svg` file with the Read tool to get raw markup
2. Paste inline into HTML
3. Add `aria-hidden="true"` and a class for CSS styling
4. Control size and color via CSS (`fill: currentColor`, `width`, `height`)

## Rules

- Semantic HTML only — one H1 per page, proper heading hierarchy
- No frameworks, no build tools, no npm
- Minimal JS — CSS-first, JS only when needed
- Mobile-first CSS
- All pages must pass: review wall loads, contact form submits, callback form submits
