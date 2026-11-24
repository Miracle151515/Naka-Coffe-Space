---
name: NAKA Coffee and Space
description: Modern industrial editorial company profile and browse-only menu showcase for an Indonesian coffee shop, anchored by the official NAKA logo, a calibrated dominant Terracotta brand palette, architectural concept space photography, and real NAKA menu product specimens.
colors:
  terracotta: "#BF5501"
  terracotta-light: "#E88432"
  terracotta-ink: "#8C3B00"
  terracotta-strong: "#A34600"
  terracotta-deep: "#7A3200"
  brand-muted: "#F9E5D2"
  charcoal: "#211F1D"
  charcoal-soft: "#3B302B"
  cream: "#F4EEE7"
  beige: "#E7DCD0"
  olive: "#7C8655"
  olive-deep: "#6D784A"
  ink: "#292522"
  ink-muted: "#4A433C"
  light-muted: "#CBBFB3"
typography:
  display:
    fontFamily: "Instrument Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(4.8rem, 12vw, 9.6rem)"
    fontWeight: 600
    fontStretch: "92%"
    lineHeight: 0.82
    letterSpacing: "-0.038em"
  headline:
    fontFamily: "Instrument Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 4.8vw, 4.4rem)"
    fontWeight: 600
    fontStretch: "94%"
    lineHeight: 0.94
    letterSpacing: "-0.032em"
  lead:
    fontFamily: "Instrument Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.45rem, 2.2vw, 1.95rem)"
    fontWeight: 500
    fontStretch: "97%"
    lineHeight: 1.32
    letterSpacing: "-0.018em"
  body:
    fontFamily: "Instrument Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    fontStretch: "100%"
    lineHeight: 1.65
    letterSpacing: "normal"
  label:
    fontFamily: "Instrument Sans, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    fontStretch: "100%"
    lineHeight: 1.4
    letterSpacing: "0.04em"
rounded:
  sharp: "2px"
  square: "0"
  circle: "50%"
spacing:
  xs: "4px"
  sm: "12px"
  md: "24px"
  lg: "48px"
  section: "clamp(68px, 9vw, 128px)"
  gutter: "clamp(20px, 4.8vw, 64px)"
components:
  button-primary:
    backgroundColor: "{colors.terracotta-ink}"
    textColor: "{colors.cream}"
    rounded: "{rounded.sharp}"
    padding: "12px 22px"
    height: "48px"
  button-primary-hover:
    backgroundColor: "{colors.terracotta-strong}"
    textColor: "{colors.cream}"
  button-ghost-dark:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    border: "1px solid {colors.charcoal}"
    rounded: "{rounded.sharp}"
    padding: "12px 22px"
    height: "48px"
  button-ghost-dark-hover:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.cream}"
  menu-category-tab:
    backgroundColor: "transparent"
    textColor: "{colors.ink-muted}"
    border: "1px solid rgba(41, 37, 34, 0.22)"
    rounded: "{rounded.sharp}"
    padding: "10px 14px"
    minHeight: "48px"
  menu-category-tab-active:
    backgroundColor: "{colors.terracotta-ink}"
    textColor: "{colors.cream}"
    border: "1px solid {colors.terracotta-ink}"
  menu-visual-stage:
    backgroundColor: "{colors.beige}"
    border: "none"
    rounded: "{rounded.square}"
  menu-ledger-row:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    borderBottom: "1px solid rgba(41, 37, 34, 0.22)"
  menu-book-spread:
    backgroundColor: "{colors.cream}"
    tableGround: "{colors.charcoal}"
    accentInk: "{colors.terracotta-ink}"
    rounded: "{rounded.square}"
  button-on-brand:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.cream}"
    border: "1px solid rgba(244, 238, 231, 0.35)"
    rounded: "{rounded.sharp}"
    padding: "12px 22px"
    height: "48px"
  facility-ledger-row:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    borderBottom: "1px solid rgba(244, 238, 231, 0.24)"
    rounded: "{rounded.square}"
  social-circle:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.terracotta-ink}"
    rounded: "{rounded.circle}"
    border: "1px solid {colors.cream}"
    width: "44px"
    height: "44px"
  social-circle-hover:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.cream}"
    border: "1px solid {colors.charcoal}"
  footer-contact-item:
    backgroundColor: "transparent"
    textColor: "{colors.cream}"
    rounded: "{rounded.square}"
    borderBottom: "1px solid rgba(244, 238, 231, 0.24)"
    minHeight: "52px"
  menu-toggle:
    backgroundColor: "transparent"
    textColor: "currentColor"
    rounded: "{rounded.sharp}"
    padding: "10px 14px"
    height: "44px"
  chip-material:
    backgroundColor: "{colors.charcoal}"
    textColor: "{colors.cream}"
    rounded: "{rounded.square}"
    padding: "8px 10px"
---

# Design System: NAKA Coffee and Space

## Overview

**Creative North Star: "The Material Board, Plan Your Visit & Editorial Menu Showcase"**

Three static pages (`index.html`, `menu.html`, and `about.html`) organize NAKA Coffee and Space around its official supplied emblem, its four real building materials (fired burnt terracotta wall, matte black steel, grey concrete, and olive greenery), and its complete 8-category food and beverage menu. All three pages share an identical fixed solid Terracotta Ink (`#8C3B00`) navbar (bookending the matching `#8C3B00` footer and transitioning to crisp White `#FFFFFF` on `.is-stuck`) with 6 links (`Home`, `Menu`, `About`, `Our Space`, `Location`, `Contact`).

Home (`index.html`) and About (`about.html`) open directly below the fixed navbar (`.hero-stage` and `.about-stage` offset via `padding-top: var(--header-height)`) with clean, 100% unobstructed full-bleed architectural concept photography (zero text, buttons, dark scrim, or top-fade scrim over the photo): Home's `.hero-photo` spans full-viewport height without subtracting the navbar height (`clamp(640px, 106svh, 1120px)` on desktop, `clamp(540px, 104svh, 1020px)` on tablet, `clamp(500px, 100svh, 900px)` on mobile), while About's `.about-photo` stays `calc(100svh - var(--header-height))`, each revealing its intact Cream (`#F4EEE7`) `.hero-intro` / `.about-intro` editorial band immediately below upon scrolling. Home's `.hero-intro` carries the concise brand introduction and `Read About NAKA` `.text-link` (no duplicate 4-swatch material board on Home), then flows from the Charcoal (`#211F1D`) Our Space mosaic into a Cream (`#F4EEE7`) **Menu Showcase Teaser (`#menu-preview`)** featuring borderless real NAKA 32-bit RGBA product specimens sitting directly on the warm surface (no outer box borders or inset hairline frames) and an `Explore Full Menu` CTA, into the dominant full-bleed Terracotta **Plan Your Visit** band (`#visit-info`, `.section--visit`, `#A34600` to `#7A3200`) tailored to NAKA's single Ciracas outlet (opening hours, single-outlet summary, CTAs, and 5-item hairline `Outlet Facilities` ledger), and into the Beige (`#E7DCD0`) Find Us location split (`Jl. Pengantin Ali No. 55, RT.4/RW.6, Ciracas, East Jakarta, DKI Jakarta 13740`, live Google Maps embed, and confirmed daily hours `09:00 - 23:00`).

Menu (`menu.html`) is strictly a **browse-only editorial showcase (etalase)** with zero cart or online ordering, following the tonal rhythm Terracotta Ink (`#8C3B00`) Header -> Cream (`#F4EEE7`) Split Studio Showcase -> Charcoal (`#211F1D`) Animated Menu Book -> Terracotta Ink (`#8C3B00`) Footer. Part 1 (`.menu-studio`, directly below the fixed navbar via `padding-top: var(--header-height)`) pairs a `292px` sticky Left Category Rail (`.menu-rail`: compact `Menu` header, `09:00 - 23:00`, `Prices in K IDR`, 8 interactive category selector tabs with NO `All` button, defaulting to `Coffee` and supporting `?category=` deep links, custom authored `1.5px` architectural SVG category icons, right-aligned tabular counts, and `#menu-book` jump link) with a Right Interactive Stage & Ledger (`.menu-stage-col`: full-width borderless Beige `#E7DCD0` `.menu-visual-stage` with no outer box borders or inset hairline frames so active 32-bit RGBA transparent PNG specimens sit cleanly and directly on the warm surface with zero captions underneath, directly above a compact 2-column hairline `.menu-items-grid` ledger covering all **68 main items + 4 Coffee Add-Ons** across 8 categories). Part 2 (`#menu-book`) presents a full animated 10-page Heyzine-style NAKA Editorial Menu Book (`https://heyzine.com/flip-book/d3431d27da.html#page/1`) on a Charcoal (`#211F1D`) studio table band with Cream (`#F4EEE7`) paper, Charcoal spine crease, dynamic layered paper-edge depth stacks, Terracotta Ink (`#8C3B00`), and all 9 extracted NAKA 32-bit RGBA product specimens rendered borderless directly on the warm paper: 6 desktop book states on `> 900px` (`Page 01` closed front cover centered with right-edge paper stack, open spreads `Pages 02 - 03` Coffee + Based Cold Brew, `Pages 04 - 05` Signature Coffee + More Drinks, `Pages 06 - 07` Snacks + More Snacks, `Pages 08 - 09` Nusantara + Donburi, and `Page 10` closing Ramen single page with left-edge paper stack) and single-page flip mode (`Page 01 / 10` to `Page 10 / 10`) on `<= 900px`, complete with no visible Previous/Next buttons, direct pointer/touch drag-to-flip (3D `rotateY` turning leaf tracking cursor/finger live across the spine, respecting `prefers-reduced-motion: reduce`) and click-to-flip on left/right pages with subtle outer-corner lift/fold hover cue, bottom `1-10` range scrubber slider with tabular readout, chapter quick-jump buttons, keyboard Left/Right arrows on the focusable book stage, `#page/1`..`#page/10` hash support, and a direct `Open Original Heyzine Flipbook` link.

All three pages close with a shared flat solid Terracotta Ink (`#8C3B00`) footer topped by a `2px` Terracotta Deep (`#7A3200`) seam, organized as a 3-column vertical directory (`.footer-grid`: `Brand & Follow Us`, `Explore`, `Contact`) above `.footer-bottom`.

One variable typeface carries the whole identity: **Instrument Sans** (single self-hosted variable `.woff2` family with `wght` 400-700 and `wdth` 75%-100%, matching NAKA's official Instagram brand voice such as "Meet Naka." and "Hai, aku Naka."). Slightly condensed, tightly tracked `Instrument Sans` (`600`, `font-stretch: 92%-94%`, `-0.032em` to `-0.038em`) sets display and section headlines; weight `500` (`font-stretch: 97%`) carries leads; and full-width `100%` (`400-600`) sets navigation, body copy, labels, wordmarks, and tabular numerals (`font-variant-numeric: tabular-nums` for menu prices and WhatsApp phone numbers). Surfaces stay flat with `1px` hairlines and `0-2px` corners (circular `50%` radius is reserved strictly for `.social-circle` social icon badges), using a single functional shadow solely for `:focus-visible`.

**Key Characteristics:**

- Official NAKA Coffee & Space SVG logo system (organic cursive `n` emblem topped with a small spiral and dot, paired with uppercase `NAKA COFFEE & SPACE`) with adaptive color rules across white, cream, dark, and terracotta grounds
- 3-page static architecture (`index.html`, `menu.html`, `about.html`) connected by a 6-link fixed navbar (`Home`, `Menu`, `About`, `Our Space`, `Location`, `Contact`) and shared 3-column Terracotta Ink footer (`Explore` includes `Home`, `Menu`, `About`, `Our Space`, `Location`)
- Minimalist visual-first heroes on Home (`hero-atmosphere.jpg` at full-viewport height without subtracting navbar height: `clamp(640px, 106svh, 1120px)` desktop, `clamp(540px, 104svh, 1020px)` tablet, `clamp(500px, 100svh, 900px)` mobile) and About (`space-terracotta-courtyard.jpg` at `calc(100svh - var(--header-height))`), starting directly below the fixed navbar and staying 100% unobstructed above Cream editorial intro bands (with Home `.hero-intro` carrying the concise brand introduction and `Read About NAKA` link), paired with the Charcoal Our Space mosaic (filter + native `<dialog>` lightbox)
- Cream Menu Showcase Teaser (`#menu-preview`) on Home and dedicated two-part browse-only Menu Showcase (`menu.html`): Part 1 Cream `.menu-studio` Zero-Scroll 2-Column Split Studio Showcase (8 custom `1.5px` architectural SVG category tabs with NO `All` button, Beige `.menu-visual-stage` with borderless real 32-bit RGBA specimens sitting directly on the warm surface (no outer box borders, no inset hairline frames, zero captions underneath), compact 2-column `.menu-items-grid` ledger covering all **68 main items + 4 Coffee Add-Ons** across 8 categories with tabular `K` pricing) paired with Part 2 Charcoal `#menu-book` Full Animated 10-Page Heyzine-Style Editorial Menu Book (6 desktop book states on `> 900px` from `Page 01` closed cover through 4 open spreads to `Page 10` closing single page, single-page `Page 01 / 10` to `Page 10 / 10` on `<= 900px`, layered paper-edge stacks, no visible Previous/Next buttons, direct pointer/touch drag-to-flip and click-to-flip with outer-corner lift/fold hover cue, bottom `1-10` range scrubber slider, chapter quick-jump buttons, keyboard Left/Right arrows on the focusable book stage, `#page/1`..`#page/10` hash support, and 3D `rotateY` live turning leaf respecting `prefers-reduced-motion: reduce`)
- Dominant full-bleed Terracotta Plan Your Visit band (`#visit-info`, `.section--visit`, `#A34600` to `#7A3200`) on Home tailored to NAKA's single Ciracas outlet with opening hours, CTAs, and a 5-item hairline `Outlet Facilities` ledger, paired on `about.html` with the Cream `Material Character` 4-swatch board and Beige `Designed to linger` split
- Verified Find Us section on Home (`Jl. Pengantin Ali No. 55, RT.4/RW.6, Ciracas, East Jakarta, DKI Jakarta 13740`, live Google Maps iframe embed, direct `Get Directions` link, and confirmed daily opening hours `09:00 - 23:00`)
- Single self-hosted variable architectural sans (`Instrument Sans`, `wght` 400-700, `wdth` 75%-100%) with tabular numerals for prices and phone numbers
- Flat planes, `1px` hairline borders, rectilinear `0-2px` corners across architectural surfaces and buttons (circular `50%` radius reserved strictly for `.social-circle` badges), borderless 32-bit RGBA menu product visuals sitting directly on warm surfaces, no pill shapes, no decorative shadow
- Concise English UI copy with zero em dashes (U+2014) and explicit disclosures for pending space photography, dummy WhatsApp numbers, pending social URLs, and pending business story

## Brand Mark & Logo System

The official NAKA Coffee & Space logo consists of an organic cursive `n` emblem topped with a small spiral and dot, paired with uppercase `NAKA COFFEE & SPACE`.

### Assets
- `assets/images/naka-mark.svg`: Standalone organic `n` emblem.
- `assets/images/naka-logo-vertical.svg`: Official stacked vertical lockup (`n` emblem above `NAKA COFFEE & SPACE`).
- `assets/images/favicon.svg`: Browser favicon (`n` emblem centered on a Cream `#F4EEE7` square).
- Inline SVG lockups embedded directly in `index.html`, `menu.html`, and `about.html` for crisp adaptive styling without extra HTTP requests.

### Placement & Lockups
- **Navbar & Mobile Menu:** Horizontal lockup (`n` emblem + `NAKA COFFEE & SPACE` wordmark).
- **Shared Footer:** Stacked vertical emblem lockup matching official logo proportions.
- **Browser Favicon:** `n` emblem on Cream square (`favicon.svg`).
- **Home Hero Headline:** Retains crisp architectural `Instrument Sans` display typography (`NAKA.` at weight `600`, `font-stretch: 92%` / upright `Coffee and Space` at weight `500`, `font-stretch: 96%`, `#8C3B00`, no italic) rather than replacing the hero headline with a logo lockup.

### Adaptive Logo Color Rules
- **Unscrolled Terracotta Ink Header (`#8C3B00`):** Clean monochrome Cream `#F4EEE7` (`6.65:1` AA+) for both the horizontal `n` emblem and `NAKA COFFEE & SPACE` wordmark on solid `#8C3B00` with a `1px` Terracotta Deep (`#7A3200`) bottom border, bookending the matching `#8C3B00` footer.
- **Scrolled White Header (`.is-stuck`, `#FFFFFF`):** Official burnt terracotta `#BF5501` emblem paired with deep terracotta ink `#8C3B00` wordmark and `#292522` dark ink links over a `1px` dark hairline border.
- **Dark Charcoal Ground (Mobile Menu, `#211F1D`):** Warm terracotta light `#E88432` emblem (`6.08:1`) paired with Cream `#F4EEE7` wordmark (`14.26:1`).
- **Flat Terracotta Ink Footer (`#8C3B00`):** Crisp monochrome Cream `#F4EEE7` (`6.65:1` AA+) for both the stacked `n` emblem and `NAKA COFFEE & SPACE` wordmark.

## Colors

A warm industrial palette calibrated directly from the official NAKA logo and the building's real materials: burnt fired clay, black steel, paper, concrete dust, and foliage. All text pairings are mathematically verified for WCAG 2.2 AA contrast.

### Primary (Calibrated Terracotta)

- **Fired Terracotta** (`--color-brand`, `#BF5501`): exact pixel match sampled from the official NAKA logo. Used for the terracotta material swatch, brand emblem on light grounds, hairlines, active filter/hover mat accents, and map accents. Reaches `4.04:1` on cream `#F4EEE7`; surface and graphic use only, never small body text on cream.
- **Terracotta Ink** (`--color-brand-ink`, `#8C3B00`): readable deep terracotta (`6.65:1` on cream `#F4EEE7`, `5.67:1` on beige `#E7DCD0`). Used as the unscrolled `.site-header` ground (bookending the matching flat solid `.site-footer` ground), primary button fills, active menu category selector tab fills and Animated Menu Book ink accents, scrolled White header wordmark, Home `.hero-intro` upright `Coffee and Space` subtitle (`Instrument Sans`, weight `500`, `font-stretch: 96%`), readable terracotta `.text-link` links, current nav state on scrolled White, menu price/category accents where appropriate, and `.social-circle` default glyph color on Cream (`6.65:1`).
- **Terracotta Strong** (`--color-brand-strong`, `#A34600`): primary button hover fill, and the bright top-left stop of the Terracotta Plan Your Visit (`#visit-info`) gradient (`linear-gradient(135deg, #A34600 0%, #7A3200 100%)`). Cream `#F4EEE7` text on `#A34600` achieves `5.31:1` (AA).
- **Terracotta Deep** (`--color-brand-deep`, `#7A3200`): deep bottom-right stop of the Terracotta Plan Your Visit (`#visit-info`) gradient, the `1px` bottom border on the unscrolled Terracotta Ink header, and the `2px` top seam border on the flat Terracotta Ink footer. Cream `#F4EEE7` text on `#7A3200` achieves `7.98:1` (AAA).
- **Terracotta Light** (`--color-brand-light`, `#E88432`): warm luminous terracotta for dark Charcoal `#211F1D` grounds (`6.08:1` AA). Used for the dark-ground logo emblem in the Mobile Menu, active mobile menu item, and Our Space dark-ground terracotta accents.
- **Warm Cream Muted** (`--color-brand-muted`, `#F9E5D2`): secondary text, labels, inactive nav links, arrows, and prototype notes on the flat solid Terracotta Ink (`#8C3B00`) footer (`6.14:1` AA) and Terracotta Plan Your Visit (`#visit-info`) band.

### Secondary

- **Olive Greenery** (`#7C8655`) / **Olive Deep** (`#6D784A`): restrained natural accent used strictly once on the About Material Character 4-swatch board (`.section--materials`). Never used as a text color; labels sit on high-contrast dark chips over it.

### Neutral (Primary Structural Grounds)

- **Charcoal** (`#211F1D`): Our Space dark band, Animated Menu Book (`#menu-book`) studio table band and binding crease, mobile menu ground, dark-outline ghost button border and hover fill, `.button--on-brand` fill, and `.social-circle` hover fill (`14.26:1` with Cream `#F4EEE7`).
- **Charcoal Soft** (`#3B302B`): light stop of the dark charcoal gradient (`linear-gradient(135deg, #211F1D 0%, #3B302B 100%)`).
- **Cream** (`#F4EEE7`): primary light ground (Home `.hero-intro`, Home `#menu-preview`, Menu Split Studio Showcase `.menu-studio`, Animated Menu Book paper sheets, About `.about-intro` and Material Character), monochrome logo and primary text/values/icons on the flat Terracotta Ink footer (`6.65:1` AA+), text/icons on dark and Terracotta Plan Your Visit surfaces, and `.social-circle` default circle fill and hover glyph color.
- **Beige** (`#E7DCD0`): secondary light surface for the Menu visual stage (`.menu-visual-stage`), Find Us location band (`index.html`), and `Designed to linger` story band (`about.html`).
- **Ink** (`#292522`): primary body text, menu item titles and tabular prices, and Home `.hero-intro` `NAKA.` display wordmark on cream (`13.19:1`).
- **Ink Muted** (`#4A433C`): secondary text, menu descriptions, and metadata on cream (`8.44:1`) and beige (`7.20:1`).
- **Light Muted** (`#CBBFB3`): secondary text on charcoal (`9.11:1`).

## Typography

**Brand Font:** `Instrument Sans` (with `Helvetica Neue, Arial, sans-serif`)

Single self-hosted variable `.woff2` family (`wght` 400-700, `wdth` 75%-100%) with `font-display: swap`, matching NAKA's official Instagram brand voice (such as "Meet Naka." and "Hai, aku Naka.").

- **Display & Section Headlines:** `Instrument Sans`, weight `600`, slightly condensed variable width (`font-stretch: 92%-94%`), tight tracking (`-0.032em` to `-0.038em`), crisp architectural sans. No italic on the Home hero `Coffee and Space` subtitle, which renders upright in `Instrument Sans`, weight `500`, `font-stretch: 96%`, `#8C3B00`.
- **Lead:** `Instrument Sans`, weight `500`, `font-stretch: 97%`.
- **Body, Navigation, Labels, Wordmarks & Tabular Numerals:** `Instrument Sans`, `font-stretch: 100%`, weight `400-600`. Use `font-variant-numeric: tabular-nums` on all menu prices (`K`), opening hours, and WhatsApp phone numbers so ledger columns align vertically. All functional labels stay at or above the `0.75rem` (`12px`) legibility floor across breakpoints.

## Layout

Centered content container capped at `1240px` with fluid gutters (`clamp(20px, 4.8vw, 64px)`). Three static pages share an identical fixed 6-link header and flat Terracotta Ink Contact footer:

- **`index.html` (Home):** Minimalist visual-first Hero (`#top`: `.hero-stage` offset by `padding-top: var(--header-height)` with unobstructed full-bleed `hero-atmosphere.jpg` in `.hero-photo` sized at full-viewport height without subtracting navbar height: `clamp(640px, 106svh, 1120px)` desktop, `clamp(540px, 104svh, 1020px)` tablet, `clamp(500px, 100svh, 900px)` mobile, above Cream `.hero-intro` carrying the concise brand introduction and `Read About NAKA` `.text-link`, with no duplicate 4-swatch board on Home) -> Charcoal asymmetric 5-photo Our Space mosaic (`#our-space`, 12-column grid with `All` / `Indoor` / `Outdoor` filters and `<dialog>` lightbox) -> **Cream Menu Showcase Teaser (`#menu-preview`)** highlighting signature categories with borderless real NAKA 32-bit RGBA product specimens sitting directly on the warm surface (no outer box borders, no inset hairline frames, zero captions underneath images) and `Explore Full Menu` CTA to `menu.html` -> Dominant full-bleed **Terracotta Plan Your Visit** band (`#visit-info`, `.section--visit`, `#A34600` to `#7A3200`, opening hours, single-outlet Ciracas summary, `See Location & Map` + `Ask on WhatsApp` CTAs, and 5-item hairline `Outlet Facilities` ledger) -> Beige Find Us location split (`#location`: confirmed Ciracas East Jakarta address, confirmed daily opening hours `09:00 - 23:00`, live Google Maps embed, and direct `Get Directions` link) -> Flat solid Terracotta Ink (`#8C3B00`) 3-column Footer.
- **`menu.html` (Menu Showcase / Etalase):** Tonal rhythm: Terracotta Ink (`#8C3B00`) Header -> **Part 1: Cream (`#F4EEE7`) Zero-Scroll 2-Column Split Studio Showcase (`.menu-studio`)** starting directly below the fixed navbar (`padding-top: var(--header-height)`) with desktop `292px` sticky Left Category Rail (`.menu-rail`: `Menu` header, `09:00 - 23:00`, `Prices in K IDR`, 8 custom-SVG category selector tabs with NO `All` button defaulting to `Coffee` and supporting `?category=` deep links, right-aligned tabular counts, `#menu-book` jump link) beside Right Interactive Stage & Ledger (`.menu-stage-col`: full-width borderless Beige `#E7DCD0` `.menu-visual-stage` with no outer box borders or inset hairline frames so active 32-bit RGBA specimens sit directly on the warm surface with zero captions underneath, above compact 2-column hairline `.menu-items-grid` ledger covering all **68 main items + 4 Coffee Add-Ons**) -> **Part 2: Charcoal (`#211F1D`) Full Animated NAKA Editorial Menu Book (`#menu-book`)** with Cream `#F4EEE7` paper, binding crease, dynamic layered paper-edge depth stacks, all 9 extracted RGBA specimens rendered borderless directly on the warm paper, 6 Heyzine-style desktop book states on `> 900px` (`Page 01` closed cover, `Pages 02 - 03` through `Pages 08 - 09` open spreads, `Page 10` closing single page) / single-page `Page 01 / 10` to `Page 10 / 10` on `<= 900px`, no visible Previous/Next buttons, direct pointer/touch drag-to-flip (3D `rotateY` turning leaf tracking cursor/finger live across the spine) and click-to-flip on left/right pages with subtle outer-corner lift/fold hover cue, bottom `1-10` range scrubber slider, chapter quick-jump buttons, keyboard Left/Right arrows on the focusable book stage, `#page/1`..`#page/10` hash support, and `Open Original Heyzine Flipbook` link -> shared flat solid Terracotta Ink (`#8C3B00`) Footer.
- **`about.html` (About):** Visual-first Hero (`#top`: `.about-stage` with unobstructed full-bleed `space-terracotta-courtyard.jpg` at `calc(100svh - var(--header-height))` above minimalist Cream `.about-intro` with `Discover NAKA` and understated `.text-link` links without stacked buttons) -> Cream `Material Character` 4-swatch board (`.section--materials`, `.material-band`) -> Beige single-photo `Designed to linger` split (`.section--courtyard-story`, `.courtyard-split` with `space-communal-table.jpg`) -> shared flat solid Terracotta Ink Footer.

Responsive breakpoints: `960px` (inline nav switches to Menu toggle and full-screen drawer; split grids stack; `.menu-rail` adapts into a `4x2` bordered icon grid above `.menu-visual-stage`; material swatch board shifts to 2 columns; footer shifts from 3 columns to `Brand & Follow Us` full-width above 2 columns for `Explore` and `Contact`; `<noscript>` fallback matches `960px`), `900px` (Animated Menu Book `#menu-book` switches from 6 Heyzine-style book states on `> 900px` covering `Page 01` closed cover, 4 open spreads `Pages 02 - 03` through `Pages 08 - 09`, and `Page 10` closing single page to single-page flip mode `Page 01 / 10` to `Page 10 / 10` on `<= 900px` with `>= 12px` legibility floor), `620px` (single-column space mosaic, stacked hero CTAs, `.menu-rail` adapts into a compact `2x4` bordered icon grid with `>= 48px` tap targets above `.menu-visual-stage`, single-column menu ledger, single-column footer stack), and `360px` (compact header lockup). Zero horizontal overflow from `320px` to `1440px`.

## Elevation & Depth

Flat by default. Depth comes from tonal bands (`Cream`, `Charcoal`, `Terracotta Plan Your Visit`, `Beige`, `Terracotta Ink`) and `1px` hairline borders (`rgba(41, 37, 34, 0.22)` on light, `rgba(244, 238, 231, 0.22)` on dark, `rgba(244, 238, 231, 0.24)` on the Terracotta Plan Your Visit band and Terracotta Ink footer, plus calibrated `#BF5501` / `#E88432` terracotta accent hairlines). The only `box-shadow` in the stylesheet is the functional dual-ring `:focus-visible` indicator (`outline: 2px solid #F4EEE7` + `box-shadow: 0 0 0 5px #211F1D`).

## Shapes

Rectilinear across architectural surfaces and controls: `2px` border radius on interactive buttons, category selector tabs, and Menu Book controls; `0` radius on space photo frames, Animated Menu Book paper sheets, hairline ledger rows, outlet facility rows, material swatches, footer contact rows, and `<dialog>` sheets. Menu product photographs (true 32-bit RGBA transparent PNGs across `.menu-visual-stage`, Home `#menu-preview`, and `#menu-book`) are rendered **borderless** with no outer box borders or inset hairline frames so drinks, snacks, and bowls sit directly on the warm surface. Circular `50%` radius is reserved strictly for the `44px x 44px` circular social icon badges (`.social-circle`). No pill shapes, no decorative shadows or glows.

## Components

### Navigation
- **Desktop (`> 960px`):** Fixed navbar (`.site-header`) with horizontal NAKA logo lockup (`n` emblem + `NAKA COFFEE & SPACE`) paired with **6 inline links** (`Home`, `Menu`, `About`, `Our Space`, `Location`, `Contact`) featuring a `1px` animated underline (`#F4EEE7` when unscrolled, `#BF5501` when scrolled). The navbar does not overlay hero photography on Home or About, nor the editorial header on Menu (each page begins directly below via `padding-top: var(--header-height)`). Unscrolled, `.site-header` is solid **Terracotta Ink (`#8C3B00`)** with a `1px` Terracotta Deep (`#7A3200`) bottom border and clean monochrome Cream (`#F4EEE7`) logo and nav links (`6.65:1` AA+), bookending the matching `#8C3B00` footer. Once scrolled past `20px` (`.is-stuck`), it transitions to crisp **White (`#FFFFFF`)** with a `1px` dark hairline border, `#BF5501` emblem, `#8C3B00` wordmark, and `#292522` dark ink links.
- **Mobile (`<= 960px`):** Bordered `44px` `Menu` toggle opens a full-screen Charcoal drawer featuring the dark-ground horizontal lockup (`#E88432` emblem + `#F4EEE7` wordmark), all 6 `Instrument Sans` display links (`600`, `font-stretch: 94%`) with `#E88432` active state, focus trapping, `inert` background, Escape to close, and focus restoration.
- **No-JS:** Header stays static and inline nav wraps cleanly at `<= 960px`.

### Visual-First Hero & Cream Editorial Intro (`index.html`, `about.html`)
- **Home Hero (`index.html`, `#top`):** `.hero-stage` begins directly below the fixed navbar (`padding-top: var(--header-height)`) with a taller 100% unobstructed full-bleed architectural photograph (`hero-atmosphere.jpg` in `.hero-photo`, sized at full-viewport height without subtracting navbar height: `clamp(640px, 106svh, 1120px)` on desktop, `clamp(540px, 104svh, 1020px)` on tablet, `clamp(500px, 100svh, 900px)` on mobile), revealing the intact Cream (`#F4EEE7`) `.hero-intro` editorial band immediately below with `Instrument Sans` `NAKA.` (`#292522`, weight `600`, `font-stretch: 92%`) + upright `Coffee and Space` (`#8C3B00`, weight `500`, `font-stretch: 96%`, no italic), tagline, concise brand introduction (`.hero-intro__story`), primary (`#8C3B00`) + dark-outline ghost (`.button--ghost-dark`) actions paired with the understated `Read About NAKA` `.text-link` (`.hero-intro__about-link`, no duplicate 4-swatch board on Home), and a quiet hairline meta bar (`.hero-intro__meta`: concept photo note + `Ciracas, East Jakarta · Open Daily 09:00 - 23:00`).
- **About Hero (`about.html`, `#top`):** Mirrors Home's clean visual-first rhythm: `.about-stage` displays 100% unobstructed full-bleed `space-terracotta-courtyard.jpg` (`.about-photo` at `calc(100svh - var(--header-height))`) above the minimalist Cream `.about-intro` band (`Discover NAKA`, concise intro, understated `.text-link` links without stacked button rows).

### Our Space Mosaic & Lightbox (`index.html`)
- Asymmetric 12-column photographic showcase of 5 architectural concept visuals (`Coffee Bar`, `Indoor Seating`, `Terracotta Courtyard`, `Communal Pavilion`, `Garden Corner`), each with a `1px` inset hairline mat that intensifies with calibrated terracotta on hover and minimal title/zone caption.
- Working `All` / `Indoor` / `Outdoor` filter buttons (`aria-pressed`, `>= 44px` tap targets) with strengthened terracotta active styling.
- Clicking any tile opens a native `<dialog>` lightbox displaying the full image, title, zone and positional counter (`zone · n / total`), Previous/Next buttons, arrow-key navigation, and Escape/backdrop close.

### Menu Showcase Teaser (`index.html`, `#menu-preview`)
- Cream (`#F4EEE7`) architectural band positioned between `#our-space` and `#visit-info` (`.section--visit`).
- Highlights signature NAKA menu categories with **borderless** real 32-bit RGBA product specimen photography extracted from the official Heyzine PDF (no outer box borders, no inset hairline frames, zero captions underneath images, no pill shapes or decorative shadows) sitting cleanly and directly on the warm surface.
- Pairs concise category highlights with a primary `#8C3B00` `Explore Full Menu` CTA linking directly to `menu.html`.

### Browse-Only Menu Showcase (`menu.html`)
- **Tonal Rhythm & Verified Inventory:** Terracotta Ink (`#8C3B00`) Header -> Cream (`#F4EEE7`) Split Studio Showcase (`.menu-studio`) -> Charcoal (`#211F1D`) Animated Menu Book (`#menu-book`) -> Terracotta Ink (`#8C3B00`) Footer. Covers the exact verified **68 main items + 4 Coffee Add-Ons** across 8 categories from NAKA's official 10-page Heyzine menu book (`6 Coffee + 4 Add-Ons`, `7 Cold Brew`, `11 Signature Coffee`, `15 More Drinks`, `14 Snacks`, `5 Nusantara`, `5 Donburi`, `5 Ramen`). Strictly browse-only with zero cart buttons, quantity pickers, pill badges, or drop shadows.
- **Part 1: Zero-Scroll 2-Column Split Studio Showcase (`.menu-studio`, Cream `#F4EEE7`, directly below fixed navbar via `padding-top: var(--header-height)`):**
  - **Left Category Rail (`.menu-rail`, desktop `292px` sticky sidebar):** Displays a compact `Menu` header, confirmed daily hours (`09:00 - 23:00`), `Prices in K IDR`, **8 interactive category selector tabs** (NO `All` button; defaults to `Coffee` active on load and supports `?category=` deep links from Home), each paired with a **custom authored `1.5px` architectural SVG category icon** (adaptive monochrome Cream/Charcoal/Terracotta, zero emoji) and right-aligned tabular item count, plus a jump link down to `#menu-book`. Active tab uses Terracotta Ink (`#8C3B00`) fill with Cream (`#F4EEE7`) ink (`6.65:1` AA+). Adapts into a `4x2` bordered icon grid on tablet (`<= 960px`) and a compact `2x4` bordered icon grid (`>= 48px` tap targets) on mobile (`<= 620px`) above the visual stage.
  - **Right Interactive Stage & Ledger (`.menu-stage-col`):** Opens with a **full-width borderless visual stage (`.menu-visual-stage`)** on warm Beige (`#E7DCD0`) with no outer box borders and no inset hairline frames so the active category's real extracted NAKA 32-bit RGBA transparent PNG product specimen sits cleanly and directly on the warm surface (switching instantaneously in place with subtle settle transition; paired borderless specimen layout for `Snacks` combining `menu-snacks.png` + `menu-takoyaki.png`; zero captions underneath images), positioned directly above a **compact 2-column hairline menu ledger (`.menu-items-grid`)** in `1px` hairline-separated rows (`rgba(41, 37, 34, 0.22)`) with concise English descriptors and right-aligned tabular `K` prices (`font-variant-numeric: tabular-nums`) so visitors browse any category without long vertical scrolling.
- **Part 2: Full Animated NAKA Editorial Menu Book (`#menu-book`, Charcoal `#211F1D` studio table band above the `#8C3B00` footer):**
  - Full interactive 10-page Heyzine-style flipbook edition (`https://heyzine.com/flip-book/d3431d27da.html#page/1`) redesigned in NAKA's Cream (`#F4EEE7`) paper, Charcoal (`#211F1D`) binding crease, Terracotta Ink (`#8C3B00`), `Instrument Sans`, and all 9 extracted NAKA 32-bit RGBA transparent PNG product specimens rendered **borderless** (no outer box borders or inset hairline frames) directly on the warm paper.
  - **Desktop (`> 900px`) 6 Book States covering all 10 pages:**
    1. `Page 01` (Closed Front Cover centered on the Charcoal desk with right-edge paper stack)
    2. `Pages 02 - 03` (Open spread: Coffee + Based Cold Brew)
    3. `Pages 04 - 05` (Open spread: Signature Coffee + More Drinks)
    4. `Pages 06 - 07` (Open spread: Snacks + More Snacks)
    5. `Pages 08 - 09` (Open spread: Nusantara + Donburi)
    6. `Page 10` (Closing single page: Ramen with left-edge paper stack)
  - **Mobile & Tablet (`<= 900px`):** Single-page flip mode (`Page 01 / 10` to `Page 10 / 10`) for crisp legibility (`>= 12px` floor) and zero horizontal overflow from `320px` up.
  - **Heyzine-Style Tactile Controls & 3D Page-Flip Interaction:** No visible Previous/Next buttons; pages turn via **direct pointer/touch drag-to-flip** (perspective `rotateY` 3D turning leaf tracks cursor/finger live across the spine, respecting `prefers-reduced-motion: reduce`) and **click-to-flip** on left/right pages with a subtle outer-corner lift/fold hover cue, alongside dynamic layered paper page-edge depth stacks on each side, an interactive bottom `1-10` range scrubber slider with tabular page readout, chapter quick-jump buttons, keyboard Left/Right arrow keys on the focusable book stage, `#page/1`..`#page/10` hash support, and a direct `Open Original Heyzine Flipbook` reference link in the book header.

### Material Character & Courtyard Story (`about.html`)
- **Material Character Board (`.section--materials` on Cream `#F4EEE7`):** Editorial intro paired with a 4-swatch `.material-band` board (`Terracotta`, `Black Steel`, `Concrete`, `Greenery`) displaying honest architectural surfaces with high-contrast Charcoal (`.material__tag`) label chips.
- **Single-Photo `Designed to linger` Split (`.section--courtyard-story` on Beige `#E7DCD0`):** Asymmetric `.courtyard-split` pairing `space-communal-table.jpg` on the left beside concise story copy, a primary CTA (`See All Space Views`), and a `Back to Home` `.text-link` on the right.

### Plan Your Visit & Outlet Facilities Band (`index.html`, `#visit-info`)
- **Home (`#visit-info`, `.section--visit`):** Dominant full-bleed calibrated Terracotta gradient (`#A34600` to `#7A3200`) with `rgba(244, 238, 231, 0.24)` hairlines, high-contrast Cream (`#F4EEE7`) primary typography and icons (`5.31:1` to `7.98:1`), and Warm Cream Muted (`#F9E5D2`) secondary copy and labels. Tailored to NAKA's single dedicated outlet in Ciracas, East Jakarta via a two-column `.visit-layout` (stacking at `<= 960px`):
  - **Left column (`.visit-intro`):** `Plan Your Visit` heading, concise single-outlet overview, hairline `.visit-summary` (`Opening Hours`: `Open Daily, 09:00 - 23:00` in tabular numerals; `Outlet`: `Single Location · Ciracas, East Jakarta`), and CTAs (`See Location & Map` Charcoal `.button--on-brand` + `Ask on WhatsApp` Cream `.text-link--on-brand`).
  - **Right column (`.visit-facilities`):** `Outlet Facilities` heading above a 5-item `1px` hairline-separated `.facility-ledger` with geometric line icons for confirmed facilities: `Indoor AC & Open-Air Courtyard`, `Free Wi-Fi & Power Outlets`, `Smoking & Non-Smoking Areas`, `Prayer Room (Mushola)`, and `Parking Area` (motorcycles and cars).

### Find Us Location Band (`index.html`, `#location`)
- Beige (`#E7DCD0`) two-column split layout displaying verified Ciracas location details: `Area` (`Ciracas, East Jakarta`), `Address` (`Jl. Pengantin Ali No. 55, RT.4/RW.6, Ciracas, East Jakarta, DKI Jakarta 13740`), confirmed `Open Hours` (`Daily, 09:00 - 23:00`), a direct `Get Directions` button linking to `https://maps.app.goo.gl/RC8scp3rpt9zcupy8`, and a live embedded Google Maps iframe framed in a rectilinear border.

### Flat Solid Terracotta Ink Footer (`.site-footer`)
- **Structure & Responsive Layout:** Shared across `index.html`, `menu.html`, and `about.html` on clean flat solid Terracotta Ink (`#8C3B00`), topped by a `2px` Terracotta Deep (`#7A3200`) seam. Hairlines use `rgba(244, 238, 231, 0.24)`. `.footer-grid` uses 3 columns on desktop (`> 960px`), shifts to `Brand & Follow Us` full-width above 2 columns (`Explore` + `Contact`) on tablet (`<= 960px`), and stacks into a single column on mobile (`<= 620px`).
- **3-Column Vertical Directory (`.footer-grid`):**
  - **Column 1 (`Brand & Follow Us`):** Stacked vertical NAKA logo (`n` emblem + `NAKA COFFEE & SPACE`) in monochrome Cream (`#F4EEE7`, `6.65:1` AA+), concise Warm Cream Muted (`#F9E5D2`, `6.14:1` AA) factual description, and Cream `Follow Us` heading paired with `44px x 44px` circular Instagram and TikTok icon buttons (`.social-circle`: Cream `#F4EEE7` circles with Terracotta Ink `#8C3B00` glyphs at `6.65:1`, stepping to Charcoal `#211F1D` fill with Cream `#F4EEE7` glyphs at `14.26:1` on hover; opening the pending-link `<dialog>` until official profile URLs are supplied).
  - **Column 2 (`Explore`):** Vertical navbar-style navigation links (`Home`, `Menu`, `About`, `Our Space`, `Location`) in Warm Cream Muted (`#F9E5D2`) with `44px` minimum target height, stepping to Cream (`#F4EEE7`) with an animated Cream underline on hover, focus, or current page.
  - **Column 3 (`Contact`, `#contact`):** Hairline-separated editorial rows: two direct `https://wa.me/...` WhatsApp lines (`Customer Service` `+62 812 0000 0001` and `Bulk & Event Order` `+62 812 0000 0002`, with monochrome Cream `#F4EEE7` icons and tabular values, Warm Cream Muted `#F9E5D2` labels, and diagonal external arrows), a direct clickable Google Maps Location row (`Jl. Pengantin Ali No. 55, Ciracas, East Jakarta` linking to `https://maps.app.goo.gl/RC8scp3rpt9zcupy8`), and a Warm Cream Muted prototype disclosure note.
- **Bottom Legal Bar (`.footer-bottom`):** `rgba(244, 238, 231, 0.24)` hairline-separated bottom bar displaying the copyright line and pre-launch prototype disclosure in Warm Cream Muted (`#F9E5D2`).

### Placeholder Dialog
- Native `<dialog>` used strictly for pending social profile links (`Instagram`, `TikTok`), closing via Close button, Escape, or backdrop click and returning focus to the triggering control.

## Do's and Don'ts

### Do:
- **Do** use the official supplied NAKA SVG lockups and follow the adaptive color rules for White, Cream, Charcoal, and Terracotta grounds across all three pages.
- **Do** keep hero photographs cleanly separated below the fixed navbar (`.hero-stage` / `.about-stage` with `padding-top: var(--header-height)`) and 100% unobstructed above their Cream editorial intro bands, sizing Home's `.hero-photo` at full-viewport height without subtracting navbar height (`clamp(640px, 106svh, 1120px)` desktop, `clamp(540px, 104svh, 1020px)` tablet, `clamp(500px, 100svh, 900px)` mobile) while keeping About's `.about-photo` at `calc(100svh - var(--header-height))`.
- **Do** keep `menu.html` strictly browse-only in its two-part architecture: Part 1 Cream `.menu-studio` Zero-Scroll 2-Column Split Studio Showcase (`292px` sticky `.menu-rail` with 8 custom `1.5px` architectural SVG category tabs, NO `All` button, defaulting to `Coffee` and supporting `?category=` deep links; Beige `.menu-visual-stage` with borderless real 32-bit RGBA specimens sitting directly on the warm surface (no outer box borders, no inset hairline frames, zero captions underneath); compact 2-column `.menu-items-grid` ledger with tabular `K` prices) above Part 2 Charcoal `#menu-book` Full Animated 10-Page Heyzine-Style Editorial Menu Book (6 desktop book states on `> 900px` from `Page 01` closed cover through 4 open spreads `Pages 02 - 03`..`Pages 08 - 09` to `Page 10` closing single page, single-page `Page 01 / 10` to `Page 10 / 10` on `<= 900px`, layered paper-edge stacks, no visible Previous/Next buttons, direct pointer/touch drag-to-flip and click-to-flip pages with outer-corner lift/fold hover cue, bottom `1-10` range scrubber slider, chapter quick-jump buttons, keyboard Left/Right arrows on the focusable book stage, `#page/1`..`#page/10` hash support, respecting `prefers-reduced-motion: reduce`).
- **Do** keep architectural surfaces and buttons flat with `1px` hairlines and `0-2px` corners (reserving `50%` circular radius strictly for the `.social-circle` social icon badges), while keeping 32-bit RGBA menu product visuals borderless on warm surfaces.
- **Do** use Terracotta Ink (`#8C3B00`) or darker for terracotta buttons, active menu filters, text on light grounds, and the flat solid footer; pair `#8C3B00` footer and `#visit-info` Terracotta surfaces with Cream (`#F4EEE7`) for primary content and Warm Cream Muted (`#F9E5D2`) for secondary content.
- **Do** keep Home's dominant Terracotta band (`#visit-info`, `.section--visit`) focused on confirmed single-outlet visit info and the 5-item `Outlet Facilities` ledger, reserving the 4-swatch `Material Character` board for `about.html`.
- **Do** keep all functional labels at or above `0.75rem` (`12px`) and interactive targets at least `44px`.
- **Do** clearly label pending concept space visuals, dummy WhatsApp numbers, pending social links, and pending business story while presenting confirmed address, live Google Maps embed, daily opening hours (`09:00 - 23:00`), and official menu accurately.
- **Do** verify every color pairing mathematically for WCAG AA contrast.

### Don't:
- **Don't** add shopping carts, online ordering, checkout buttons, or delivery widgets to `menu.html` or `#menu-preview`.
- **Don't** place outer box borders, inset hairline frames, or captions underneath menu product specimen images (`.menu-visual-stage`, `#menu-preview`, `#menu-book`), use emoji for menu category icons, add an `All` button to `.menu-rail`, add visible Previous/Next buttons to `#menu-book`, or wrap menu category tabs/tags in pill shapes or drop shadows.
- **Don't** overlay the fixed navbar, headlines, buttons, dark scrims, or top-fade scrims onto the Home or About hero photographs.
- **Don't** replace the Home `.hero-intro` architectural `Instrument Sans` `NAKA. / Coffee and Space` display headline with a logo graphic (and don't italicize `Coffee and Space`).
- **Don't** set small body text in base `#BF5501` on Cream `#F4EEE7` (`4.04:1` fails AA for normal text).
- **Don't** invent business history, awards, testimonials, or unconfirmed menu items/prices outside NAKA's official Heyzine flipbook.
- **Don't** place stacked button rows inside `.about-intro`.
- **Don't** re-introduce a separate Gallery section or decorative sequence numbers in navigation.
- **Don't** add pill shapes, decorative shadows, glows, or em dashes (U+2014) in UI copy or examples.
