# Hi-Tech Autozone — Website Audit

## Business
**Name:** Hi-Tech Autozone  
**Location:** Mudaliarpet, Pondicherry (Puducherry) – 605004  
**Niche:** Car Accessories (seat covers, LED lights, audio, body kits, car care products)  
**Experience:** 16+ years  
**Contact:** 99409 17758 / 99409 17728 | hitechautozone@gmail.com  
**Social:** Facebook, Instagram, YouTube, WhatsApp

---

## Architecture
- **Framework:** Static HTML site (no build tool, no package manager)
- **CSS:** Bootstrap 5 + legacy `style.css` (226 KB) + `main.css` (13 KB) + `premium-2026.css` (167 KB, dark theme) + page-specific CSS
- **JS:** Bootstrap JS + Swiper + GLightbox + `script.js` (legacy) + `premium-2026.js` (custom)
- **Font:** Archivo (variable width/weight), loaded from Google Fonts
- **Current theme:** Dark (#07080a bg, #ff2b2b red accent, Archivo type)

---

## Page Inventory (15 HTML files)

| File | Title | Purpose | Issues |
|---|---|---|---|
| `index.html` | Hi-Tech Autozone | Homepage | Well-structured hero, categories, about, reviews, blog, footer |
| `about.html` | About Us | Company info | About section, stats, why-choose-us, work process |
| `blog.html` | Services | Services listing | 6 service sections (detailing, coating, etc.) |
| `brands.html` | Our Brands | Brand showcase | Template meta desc placeholder |
| `caressentials.html` | Car Essentials | Product category | 9 products, template leftovers |
| `convenience.html` | Convenience | Product category | Template meta desc |
| `safetysecurity.html` | Safety & Security | Product category | Template meta desc |
| `carstyle.html` | Car Styles | Product category | Template meta desc |
| `carperformance.html` | Car Performance | Product category | Template meta desc |
| `carcareproduct.html` | Car Care Product | Product category | Template meta desc |
| `contact.html` | Contact Us | Contact form + map | Template meta desc |
| `cart.html` | Cart | Shopping cart | 249 KB template bloat |
| `404.html` | 404 | Error page | 133 KB template bloat |
| `demo.html` | Car Promo Banner | Test page | Portuguese text, unrelated |

---

## Critical Design Issues

1. **10 pages** have `"Morden Bootstrap HTML5 Template"` as meta description
2. `caressentials.html` has `alt="Grocee Logo"` — template leftover
3. HTTrack comments on multiple pages
4. `demo.html` has Portuguese content, unrelated to business
5. Current red accent (#ff2b2b) does not match requested Racing Orange (#F97316)
6. Current dark bg (#07080a) does not match requested Graphite Black (#111315)
7. Quickview modal has fake product data ($239.52, USD pricing)
8. Promise strip has generic claims (Free Shipping $100, Money Back)
9. font-size 62.5% trick on root makes rem values confusing
10. No functional search, cart, or form handling

## No Bike/Motorcycle Content Found
Grep search confirmed: zero matches for bike, motorcycle, motorbike, or two-wheeler across all HTML/CSS/JS files. All content is already car-focused.

---

## Status: AUDIT COMPLETE → Proceeding to redesign plan
