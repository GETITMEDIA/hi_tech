# Hi-Tech Autozone — Redesign Plan

## New Design System

### Colour Palette (replacing current red/dark theme)
| Token | Value | Use |
|---|---|---|
| `--hz-black` | `#111315` | Graphite Black – headers, dark sections |
| `--hz-dark` | `#1B1F23` | Dark Surface – cards, premium sections |
| `--hz-orange` | `#F97316` | Racing Orange – CTAs, accents, highlights |
| `--hz-orange-hover` | `#EA6C10` | Orange hover state |
| `--hz-white` | `#FFFFFF` | Pure White – text on dark, backgrounds |
| `--hz-light` | `#F5F6F8` | Light Background – product browsing sections |
| `--hz-muted` | `#64748B` | Secondary Text – descriptions, captions |
| `--hz-border` | `#E5E7EB` | Borders, dividers |
| `--hz-surface` | `#FFFFFF` | Card backgrounds in light mode |

### Typography
- **Font:** Inter (replacing Archivo)
- **Hierarchy:** h1 clamp(2rem, 4vw, 3.5rem), h2 clamp(1.5rem, 3vw, 2.5rem), body 1rem/1.7
- **Remove** the `font-size: 62.5%` trick — use standard 16px base

### Layout Approach
- 70% light backgrounds (#F5F6F8, #FFFFFF) for product browsing
- 20% dark surfaces (#111315, #1B1F23) for hero, header, footer, premium sections
- 10% Racing Orange for CTAs, active states, key accents
- Consistent spacing: 16/24/32/48/64/96px tokens
- Border radius: 8/12/16/24px system

---

## Implementation Sequence

### Phase 1: Design System CSS ✅
- [x] Create new `assets/css/redesign-2026.css` with all design tokens
- [x] Override the dark theme variables to the new palette
- [x] Set up Inter font loading
- [x] Define button, card, section base styles

### Phase 2: Global Components
- [ ] Header: Light/transparent header with dark text, orange accent on hover
- [ ] Footer: Dark footer (#111315) with orange accents
- [ ] Breadcrumbs: Clean, minimal breadcrumb with light bg
- [ ] Preloader: Update to match new brand colours

### Phase 3: Homepage Redesign
- [ ] Hero slider: Update bg colours to match new palette
- [ ] Categories section: Light bg, orange accents
- [ ] About section: Clean light layout
- [ ] Promo tiles: Orange accent CTA buttons
- [ ] Testimonials: Light bg with subtle shadows
- [ ] Blog section: Clean card layout
- [ ] Promise strip: Update with realistic business info

### Phase 4: Inner Pages
- [ ] About page: Apply new colour system
- [ ] Services page (blog.html): Clean light cards
- [ ] All 6 category pages: Consistent product cards
- [ ] Brands page: Clean grid layout
- [ ] Contact page: Professional form with map
- [ ] Cart page: Simplified, clean layout
- [ ] 404 page: Minimal, clean error page

### Phase 5: Content Fixes
- [ ] Fix all 10 template meta descriptions
- [ ] Fix "Grocee Logo" alt text
- [ ] Remove HTTrack comments from all pages
- [ ] Remove or repurpose demo.html
- [ ] Remove fake quickview modal data
- [ ] Update promise strip to realistic claims
- [ ] Remove USD references (business is in India)

### Phase 6: Animations & Interactions
- [ ] Keep existing reveal animations (they work well)
- [ ] Update colour of animations to orange accent
- [ ] Smooth hover transitions on all buttons
- [ ] Card hover elevation effects
- [ ] Navigation hover states with orange underline

### Phase 7: Responsive Polish
- [ ] Test all breakpoints: 320, 375, 430, 768, 1024, 1280, 1440, 1920
- [ ] Ensure mobile navigation works correctly
- [ ] Product cards adapt to single column on mobile

### Phase 8: Final Verification
- [ ] All pages load without console errors
- [ ] All images load correctly
- [ ] All internal links work
- [ ] Meta descriptions are unique and relevant
- [ ] Consistent design across all pages

---

## Status: PLAN COMPLETE → Proceeding to implementation
