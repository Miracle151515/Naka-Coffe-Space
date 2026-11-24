# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Static two-page HTML (`index.html`, `about.html`), CSS, and JavaScript. Code-first build. No framework, build step, or backend.

## Users

Local café visitors and prospective visitors in Indonesia who want to feel NAKA's atmosphere, browse its indoor and outdoor spaces visually, confirm its location, and reach NAKA directly on WhatsApp or social media before a visit.

## Product Purpose

NAKA Coffee and Space is an Indonesian coffee shop. This company profile opens both Home and About with clean, full-bleed architectural photography followed immediately by minimalist Cream editorial intro bands, anchors NAKA's brand identity with a dominant Terracotta Brand Profile band on Home, pairs About with an interactive editorial sequence, keeps location details findable, and integrates direct WhatsApp contact, social links, and architectural motion into an animated solid Terracotta Ink footer.

## Positioning

The profile is built around the physical space, its official NAKA emblem, and its material character: dominant burnt terracotta walls, matte black steel structure, poured concrete, planting, and open-air seating. Charcoal and Cream remain the primary structural grounds across the visual-first intros, space mosaic, About scroll statement and interactive material explorer, and location band, while calibrated Terracotta unmistakably owns NAKA's Home Brand Profile band and animated solid Terracotta Ink footer.

## Operating Context

Visitors arrive on mobile or desktop, often from social media or a maps search. They scan visually for atmosphere, space, location, and direct WhatsApp contact. The site is a pre-launch prototype using NAKA's official supplied SVG logo lockups alongside owner-approved architectural concept photography and dummy WhatsApp numbers until official photography and accounts are confirmed.

## Capabilities and Constraints

- Two static pages: Home (`index.html`: fixed `.site-header` with horizontal logo lockup that sits above rather than overlaying the hero, minimalist visual-first hero where `.hero-stage` begins directly below the navbar via `padding-top: var(--header-height)` with clean 100% unobstructed full-bleed `hero-atmosphere.jpg` sized at `calc(100svh - var(--header-height))` so it fills the entire remaining first viewport cleanly below the fixed navbar on desktop, tablet, and mobile with zero clipped text or buttons at the fold and zero text/buttons/scrim/top-fade scrim over the photo, revealing the intact Cream `#F4EEE7` `.hero-intro` band immediately below upon scrolling, visual Our Space mosaic with indoor/outdoor filter and lightbox, full-bleed Terracotta Brand Profile statement band featuring the official stacked logo plaque and material strip, Find Us location, and animated solid Terracotta Ink `#8C3B00` footer) and About (`about.html`: alternating interactive editorial structure with zero adjacent repeating layouts or grounds: `.about-stage` beginning directly below the fixed navbar via `padding-top: var(--header-height)` with 100% unobstructed full-bleed courtyard photograph `space-terracotta-courtyard.jpg` at `calc(100svh - var(--header-height))` above the minimalist Cream `#F4EEE7` `.about-intro` band featuring `Discover NAKA`, concise intro, and understated `.text-link` links without stacked buttons -> Charcoal `#211F1D` Scroll Word-Highlight Statement `.section--statement` where each word smoothly illuminates on scroll from subtle muted warmth to Cream `#F4EEE7` with key material phrases in Terracotta Light `#E88432` and full static visibility under no-JS / `prefers-reduced-motion` -> Cream `#F4EEE7` Interactive Material Explorer `.section--materials` with accessible `role="tablist"` across 4 tactile tabs `Terracotta`, `Black Steel`, `Concrete`, `Greenery` featuring color swatches, placement zones, expandable descriptions, and click + arrow-key support paired beside a crossfading `.material-stage` showcasing `space-coffee-bar.jpg`, `hero-atmosphere.jpg`, `space-indoor-seating.jpg`, `space-greenery-corner.jpg` -> Beige `#E7DCD0` asymmetric dual-photo `Designed to linger` story `.section--courtyard-story` pairing story copy left with an asymmetric 2-photo architectural composition `space-communal-table.jpg` + `space-indoor-seating.jpg` with subtle `1.03` hover zoom -> shared animated solid Terracotta Ink `#8C3B00` footer).
- Gallery section removed; all store imagery lives in Our Space.
- Concise English UI copy with minimal text density on Home.
- No forms, ordering, payments, bookings, user accounts, or backend.
- Official NAKA Coffee & Space logo supplied: an organic cursive `n` emblem topped with a small spiral and dot, paired with uppercase `NAKA COFFEE & SPACE` (`assets/images/naka-mark.svg`, `assets/images/naka-logo-vertical.svg`, `assets/images/favicon.svg`, plus inline SVG in HTML).
  - Placement: horizontal lockup in Navbar and Mobile Menu; stacked vertical lockup in the Home Terracotta Brand Profile plaque and Footer; `n` emblem on cream square as browser favicon. Home Hero `.hero-intro` retains crisp architectural `Instrument Sans` display typography (`NAKA.` `#292522`, weight `600`, `font-stretch: 92%` + upright `Coffee and Space` `#8C3B00`, weight `500`, `font-stretch: 96%`, no italic).
  - Adaptive color rules: unscrolled `.site-header` (solid Terracotta Ink `#8C3B00` with a `1px` Terracotta Deep `#7A3200` bottom border and clean monochrome Cream `#F4EEE7` logo and nav links at `6.65:1` AA+, bookending the matching `#8C3B00` footer); scrolled header (`.is-stuck`, past `20px` scroll: crisp White `#FFFFFF` with a `1px` dark hairline border, `#BF5501` emblem, `#8C3B00` wordmark, and `#292522` dark ink links); dark Charcoal mobile menu (`#E88432` emblem + `#F4EEE7` wordmark); flat solid Terracotta Ink `#8C3B00` footer (crisp monochrome Cream `#F4EEE7` emblem and wordmark, `6.65:1` AA+); Terracotta Brand Profile band (official `#BF5501` stacked logo framed inside a crisp `#F4EEE7` Cream architectural plaque).
- Owner-approved architectural concept visuals represent NAKA's planned palette (terracotta, black steel, concrete, tropical greenery) and carry explicit labels noting that official photography is pending.
- The animated solid Terracotta Ink (`#8C3B00`) footer (`.site-footer`, shared across `index.html` and `about.html`) is topped by a `2px` Terracotta Deep (`#7A3200`) seam and pairs architectural motion with clear utility (`rgba(244, 238, 231, 0.24)` hairlines, full `prefers-reduced-motion` support):
  - **Kinetic Brand Ticker (`.footer-ticker`):** Smooth slow horizontal marquee across the top of the footer (`NAKA COFFEE & SPACE · FIRED TERRACOTTA · MATTE BLACK STEEL · POURED CONCRETE · OPEN-AIR GREENERY · CIRACAS, EAST JAKARTA`) that pauses on hover/focus and renders statically under `prefers-reduced-motion`.
  - **3-Column Vertical Directory (`.footer-grid`, `data-footer-reveal`):** Calm staggered reveal across 3 columns on desktop `> 960px`, Brand full-width above 2 columns on tablet `<= 960px`, and single-column stack on mobile `<= 620px`:
    - Column 1 (`Brand & Follow Us`): stacked vertical NAKA logo in monochrome Cream (`#F4EEE7`, `6.65:1` AA+), concise Warm Cream Muted (`#F9E5D2`, `6.14:1` AA) factual description, and `Follow Us` with `44px × 44px` circular Instagram and TikTok icon buttons (`.social-circle`: Cream `#F4EEE7` circles with Terracotta Ink `#8C3B00` glyphs at `6.65:1` contrast, stepping to Charcoal `#211F1D` fill with Cream `#F4EEE7` glyphs at `14.26:1` on hover; opening an honest pending-link `<dialog>` until official URLs exist).
    - Column 2 (`Explore`): vertical navbar-style navigation links (`Home`, `About`, `Our Space`, `Location`) in Warm Cream Muted (`#F9E5D2`) with `44px` minimum target height, transitioning to Cream (`#F4EEE7`) with an animated Cream underline on hover, focus, or current page.
    - Column 3 (`Contact`, `#contact`): sleek `rgba(244, 238, 231, 0.24)` hairline-separated editorial rows featuring two direct `https://wa.me/...` WhatsApp lines (`Customer Service` `+62 812 0000 0001` and `Bulk & Event Order` `+62 812 0000 0002`, with monochrome Cream `#F4EEE7` icons and tabular values, Warm Cream Muted `#F9E5D2` labels, and diagonal external arrows), a direct clickable Google Maps Location row (`Jl. Pengantin Ali No. 55, Ciracas, East Jakarta` linking to `https://maps.app.goo.gl/RC8scp3rpt9zcupy8`), and a Warm Cream Muted prototype disclosure note.
  - **Giant Architectural `"NAKA."` Signoff & Back-to-Top (`.footer-signoff`):** Monumental `"NAKA."` display wordmark with calm staggered letter-by-letter rise (`data-wordmark`) paired beside a tactile `Back to top` button (`>= 44px` height, animated upward arrow), followed by the bottom legal bar (`.footer-bottom`) with copyright and pre-launch disclosure.

## Brand Commitments

- Pinned direction: `design.md`, "Modern Industrial Coffee Brand", calibrated to the official NAKA logo.
- Palette: calibrated burnt terracotta `#BF5501` (exact official logo match; emblem, swatch, hairlines, accents), terracotta ink `#8C3B00` (flat solid footer ground, primary buttons, Home hero `Coffee and Space` subtitle, readable text/links, and `.social-circle` default glyph color), terracotta strong `#A34600` (primary button hover fill and bright stop of Terracotta Brand Profile gradient), terracotta deep `#7A3200` (deep stop of Terracotta Brand Profile gradient and `2px` footer top seam), terracotta light `#E88432` (Charcoal mobile menu emblem, active mobile menu item, and Our Space accents), warm cream muted `#F9E5D2` (secondary footer text, labels, and notes on `#8C3B00`, `6.14:1` AA), charcoal `#211F1D` (Our Space, mobile menu, dark-outline ghost buttons, and `.social-circle` hover fill), charcoal soft `#3B302B`, cream `#F4EEE7` (intro bands, monochrome footer logo/primary text/icons, and `.social-circle` default fill/hover glyph), beige `#E7DCD0`, text dark `#292522`, ink muted `#4A433C`, light muted `#CBBFB3`, restrained olive `#7C8655` (olive deep `#6D784A`).
- Typography: single self-hosted variable `Instrument Sans` (`.woff2`, `wght` 400–700, `wdth` 75%–100%, matching NAKA's official Instagram brand voice such as "Meet Naka." and "Hai, aku Naka.") — Display & Section Headlines at weight `600`, slightly condensed `font-stretch: 92%–94%`, tight tracking `-0.032em` to `-0.038em` (hero `Coffee and Space` subtitle upright at weight `500`, `font-stretch: 96%`, `#8C3B00`, no italic); Lead at weight `500`, `font-stretch: 97%`; Body, Navigation, Labels, Wordmarks & Tabular Numerals at `font-stretch: 100%`, weight `400`–`600`.
- Flat rectilinear architecture with 1px hairlines, `0–2px` corners (circular `50%` radius reserved strictly for the `.social-circle` social icon badges), and no decorative shadows.

## Evidence on Hand

- Official NAKA Coffee & Space logo assets (`assets/images/naka-mark.svg`, `assets/images/naka-logo-vertical.svg`, `assets/images/favicon.svg`).
- `design.md`: visual direction and palette foundation.
- Owner-approved architectural concept visuals (`assets/images/*.jpg`) with embedded prompt provenance, labelled pending official shoot.
- Official Google Maps destination (`https://maps.app.goo.gl/RC8scp3rpt9zcupy8`, `Jl. Pengantin Ali No. 55, RT.4/RW.6, Ciracas, East Jakarta, DKI Jakarta 13740`) embedded live in `Find Us` and linked from `Get Directions` and the footer Location row.
- Instagram URL, TikTok URL, official WhatsApp numbers, official photography, and approved business history remain pending. No testimonials, statistics, menu, prices, hours, or awards are invented.

## Product Principles

- Atmosphere first: full-bleed space visuals lead Home with minimal text friction, followed by an unmistakable Terracotta Brand Profile anchor.
- Honest by default: concept imagery, dummy WhatsApp numbers, and pending links are explicitly disclosed.
- Direct contact: Customer Service and Bulk & Event Order open WhatsApp in one tap from the footer.
- Mobile is the primary visit: touch targets >= 44px, zero horizontal overflow from 320px up.

## Accessibility & Inclusion

Target WCAG 2.2 AA. Keyboard operable controls, dual-ring visible focus across light and dark grounds, semantic landmarks and headings, verified >= 4.5:1 text contrast (including all calibrated terracotta pairings), readable at 200% zoom, reduced-motion support, and no-JS mobile navigation fallback.
