---
name: NAKA Coffee and Space
description: Modern industrial editorial profile for an Indonesian coffee shop, anchored by the official NAKA logo, a calibrated dominant Terracotta brand palette, and atmospheric concept photography.
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
  logo-plaque:
    backgroundColor: "{colors.cream}"
    textColor: "{colors.terracotta}"
    rounded: "{rounded.square}"
    border: "1px solid {colors.terracotta}"
    padding: "24px 28px"
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

**Creative North Star: "The Material Board & Terracotta Brand Profile"**

Two static pages (`index.html` and `about.html`) organize NAKA Coffee and Space around its official supplied emblem and its four real materials: fired burnt terracotta wall, matte black steel, grey concrete, and olive greenery. Both pages open with a solid Terracotta Ink (`#8C3B00`) fixed navbar bookending the matching `#8C3B00` footer, followed directly below (`.hero-stage` and `.about-stage` offset via `padding-top: var(--header-height)`) by clean full-bleed architectural photography sized at `calc(100svh - var(--header-height))` on both Home and About so it fills the entire remaining first viewport cleanly below the fixed navbar on desktop, tablet, and mobile with zero clipped text or buttons at the fold, staying 100% unobstructed with zero text, buttons, dark scrim, or top-fade scrim over the photo and revealing the intact Cream (`#F4EEE7`) `.hero-intro` / `.about-intro` editorial band immediately below upon scrolling. Charcoal (`#211F1D`) and Cream (`#F4EEE7`) anchor the intro bands, Our Space mosaic, About scroll word-highlight statement and interactive Material Explorer, and Find Us location band, while calibrated burnt Terracotta unmistakably owns NAKA's Brand Profile statement band on Home (`section--teaser`) and closes both pages with an animated solid Terracotta Ink (`#8C3B00`) footer.

On Home, full-bleed architectural concept photography (labelled honestly pending NAKA's official shoot) leads the hero (`hero-atmosphere.jpg`) above the Cream `.hero-intro` band and Our Space mosaic with minimal copy, transitioning into the Terracotta Brand Profile band featuring a crisp Cream architectural plaque with NAKA's official stacked logo, material strip, and high-contrast CTA to About. Gallery is folded into Our Space, and Contact lives inside the animated solid Terracotta Ink (`#8C3B00`) footer topped by a `2px` Terracotta Deep (`#7A3200`) seam and a slow horizontal kinetic brand ticker (`.footer-ticker`, pausing on hover/focus and static under reduced motion), followed by a calm staggered-reveal (`data-footer-reveal`) 3-column vertical directory (`.footer-grid`: `Brand & Follow Us`, `Explore`, `Contact`) with monochrome Cream (`#F4EEE7`) logo, primary text, values, and icons, Warm Cream Muted (`#F9E5D2`) secondary text and labels, `rgba(244, 238, 231, 0.24)` hairlines, `44px × 44px` circular Instagram and TikTok icon buttons (Cream `#F4EEE7` circles with Terracotta Ink `#8C3B00` glyphs, stepping to Charcoal `#211F1D` fill with Cream `#F4EEE7` glyphs on hover), vertical Explore links, and sleek hairline-separated WhatsApp (`Customer Service` `+62 812 0000 0001` and `Bulk & Event Order` `+62 812 0000 0002`, dummy prototype numbers linked directly to `wa.me`) and clickable Google Maps Location (`Jl. Pengantin Ali No. 55, Ciracas, East Jakarta`) rows, closing with a monumental `"NAKA."` display signoff and `Back to top` button (`.footer-signoff`) above `.footer-bottom`.

One variable typeface carries the whole identity: **Instrument Sans** (single self-hosted variable `.woff2` family with `wght` 400–700 and `wdth` 75%–100%, matching NAKA's official Instagram brand voice such as "Meet Naka." and "Hai, aku Naka."). Slightly condensed, tightly tracked `Instrument Sans` (`600`, `font-stretch: 92%–94%`, `-0.032em` to `-0.038em`) sets the crisp architectural display and section headline voice; weight `500` (`font-stretch: 97%`) carries leads; and full-width `100%` (`400`–`600`) sets navigation, body copy, labels, wordmarks, and tabular numerals. Surfaces stay flat with 1px hairlines and `0–2px` corners (circular `50%` radius is reserved strictly for the `.social-circle` social icon badges), using a single functional shadow solely for `:focus-visible`.

**Key Characteristics:**

- Official NAKA Coffee & Space SVG logo system (organic cursive `n` emblem topped with a small spiral and dot, paired with uppercase `NAKA COFFEE & SPACE`) with adaptive color rules across white, cream, dark, and terracotta grounds
- Minimalist visual-first heroes on both Home (`hero-atmosphere.jpg`) and About (`space-terracotta-courtyard.jpg`) starting directly below the fixed navbar (`.hero-stage` / `.about-stage` with `padding-top: var(--header-height)`) at `calc(100svh - var(--header-height))`, filling the entire remaining first viewport cleanly on desktop, tablet, and mobile with zero clipped text or buttons at the fold while keeping the opening photograph 100% unobstructed with zero text, buttons, dark scrim, or top-fade scrim, revealing the intact Cream (`#F4EEE7`) editorial intro bands immediately below upon scrolling (`.hero-intro` retaining `Instrument Sans` `NAKA.` `#292522` at weight `600`, `font-stretch: 92%` + upright `Coffee and Space` `#8C3B00` at weight `500`, `font-stretch: 96%`, no italic; `.about-intro` with `Discover NAKA` and understated `.text-link` links) and the visual-first Our Space mosaic (indoor/outdoor filter + native `<dialog>` lightbox)
- Dominant full-bleed Terracotta Brand Profile statement band (`#A34600` to `#7A3200`) on Home, paired with an alternating interactive editorial sequence on `about.html` (zero adjacent repeating layouts or grounds): Charcoal scroll word-highlight statement (`.section--statement`), Cream interactive 4-tab Material Explorer (`.section--materials`) with crossfading photo stage, and Beige asymmetric dual-photo `Designed to linger` story (`.section--courtyard-story`)
- Single self-hosted variable architectural sans (`Instrument Sans`, `wght` 400–700, `wdth` 75%–100%) spanning slightly condensed `600` display/headlines (`font-stretch: 92%–94%`, tracking `-0.032em` to `-0.038em`), `500` leads (`font-stretch: 97%`), and `400`–`600` full-width (`100%`) UI, body, wordmarks, and tabular numerals, aligned with NAKA's official Instagram voice ("Meet Naka.", "Hai, aku Naka.")
- Flat planes, 1px hairline borders, near-square `0–2px` corners across architectural surfaces and buttons (circular `50%` radius reserved strictly for `.social-circle` badges), no decorative shadow
- Animated solid Terracotta Ink (`#8C3B00`) footer topped by a `2px` Terracotta Deep (`#7A3200`) seam and kinetic brand ticker (`.footer-ticker`), featuring a calm staggered-reveal (`data-footer-reveal`) 3-column vertical directory (`.footer-grid`: `Brand & Follow Us`, `Explore`, `Contact`) with monochrome Cream (`#F4EEE7`, `6.65:1` AA+) stacked logo and primary text/values/icons, Warm Cream Muted (`#F9E5D2`, `6.14:1` AA) secondary text/labels/notes, `rgba(244, 238, 231, 0.24)` hairlines, `44px × 44px` circular Cream/Terracotta Ink Instagram & TikTok buttons (Charcoal/Cream on hover), vertical Explore links, sleek hairline-separated dummy WhatsApp and real Google Maps Location (`Jl. Pengantin Ali No. 55, Ciracas, East Jakarta`) rows, a monumental `"NAKA."` letter-by-letter signoff paired with a `Back to top` button (`.footer-signoff`, `data-wordmark`), and a bottom legal bar (`.footer-bottom`)
- Concise English UI copy with explicit prototype disclosures for concept visuals, dummy numbers, and pending links

## Brand Mark & Logo System

The official NAKA Coffee & Space logo consists of an organic cursive `n` emblem topped with a small spiral and dot, paired with uppercase `NAKA COFFEE & SPACE`.

### Assets
- `assets/images/naka-mark.svg`: Standalone organic `n` emblem.
- `assets/images/naka-logo-vertical.svg`: Official stacked vertical lockup (`n` emblem above `NAKA COFFEE & SPACE`).
- `assets/images/favicon.svg`: Browser favicon (`n` emblem centered on a Cream `#F4EEE7` square).
- Inline SVG lockups embedded directly in `index.html` and `about.html` for crisp adaptive styling without extra HTTP requests.

### Placement & Lockups
- **Navbar & Mobile Menu:** Horizontal lockup (`n` emblem + `NAKA COFFEE & SPACE` wordmark).
- **Home Brand Profile Band & Footer:** Stacked vertical emblem lockup matching official logo proportions.
- **Browser Favicon:** `n` emblem on Cream square (`favicon.svg`).
- **Home Hero Headline:** Retains crisp architectural `Instrument Sans` display typography (`NAKA.` at weight `600`, `font-stretch: 92%` / upright `Coffee and Space` at weight `500`, `font-stretch: 96%`, `#8C3B00`, no italic) rather than replacing the hero headline with a logo lockup.

### Adaptive Logo Color Rules
- **Unscrolled Terracotta Ink Header (`#8C3B00`):** Clean monochrome Cream `#F4EEE7` (`6.65:1` AA+) for both the horizontal `n` emblem and `NAKA COFFEE & SPACE` wordmark on solid `#8C3B00` with a `1px` Terracotta Deep (`#7A3200`) bottom border, bookending the matching `#8C3B00` footer.
- **Scrolled White Header (`.is-stuck`, `#FFFFFF`):** Official burnt terracotta `#BF5501` emblem paired with deep terracotta ink `#8C3B00` wordmark and `#292522` dark ink links over a `1px` dark hairline border.
- **Dark Charcoal Ground (Mobile Menu, `#211F1D`):** Warm terracotta light `#E88432` emblem (`6.08:1`) paired with Cream `#F4EEE7` wordmark (`14.26:1`).
- **Flat Terracotta Ink Footer (`#8C3B00`):** Crisp monochrome Cream `#F4EEE7` (`6.65:1` AA+) for both the stacked `n` emblem and `NAKA COFFEE & SPACE` wordmark.
- **Terracotta Brand Profile Band (`section--teaser`):** Official `#BF5501` stacked logo framed inside a crisp Cream (`#F4EEE7`) architectural plaque/badge with a `1px` terracotta hairline border.

## Colors

A warm industrial palette calibrated directly from the official NAKA logo and the building's real materials: burnt fired clay, black steel, paper, concrete dust, and foliage. All text pairings are mathematically verified for WCAG 2.2 AA contrast.

### Primary (Calibrated Terracotta)

- **Fired Terracotta** (`--color-brand`, `#BF5501`): exact pixel match sampled from the official NAKA logo. Used for the terracotta material swatch, brand emblem on light grounds, hairlines, active filter/hover mat accents, and map pin/corners. Reaches `4.04:1` on cream `#F4EEE7`; surface and graphic use only, never small body text on cream.
- **Terracotta Ink** (`--color-brand-ink`, `#8C3B00`): readable deep terracotta (`6.65:1` on cream `#F4EEE7`, `5.67:1` on beige `#E7DCD0`). Used as the unscrolled `.site-header` ground (bookending the matching flat solid `.site-footer` ground), primary button fills, scrolled White header wordmark, Home `.hero-intro` upright `Coffee and Space` subtitle (`Instrument Sans`, weight `500`, `font-stretch: 96%`), readable terracotta `.text-link` links, current nav state on scrolled White, map/lightbox meta labels, and `.social-circle` default glyph color on Cream (`6.65:1`).
- **Terracotta Strong** (`--color-brand-strong`, `#A34600`): primary button hover fill, and the bright top-left stop of the Terracotta Brand Profile gradient (`linear-gradient(135deg, #A34600 0%, #7A3200 100%)`). Cream `#F4EEE7` text on `#A34600` achieves `5.31:1` (AA).
- **Terracotta Deep** (`--color-brand-deep`, `#7A3200`): deep bottom-right stop of the Terracotta Brand Profile gradient, the `1px` bottom border on the unscrolled Terracotta Ink header, and the `2px` top seam border on the flat Terracotta Ink footer. Cream `#F4EEE7` text on `#7A3200` achieves `7.98:1` (AAA).
- **Terracotta Light** (`--color-brand-light`, `#E88432`): warm luminous terracotta for dark Charcoal `#211F1D` grounds (`6.08:1` AA). Used for the dark-ground logo emblem in the Mobile Menu, active mobile menu item, and Our Space dark-ground terracotta accents.
- **Warm Cream Muted** (`--color-brand-muted`, `#F9E5D2`): secondary text, labels, inactive nav links, arrows, and prototype notes on the flat solid Terracotta Ink (`#8C3B00`) footer (`6.14:1` AA) and Terracotta Brand Profile band.

### Secondary

- **Olive Greenery** (`#7C8655`) / **Olive Deep** (`#6D784A`): restrained natural accent used strictly once per material strip (on the Home Brand Profile material strip and the About Material Character board). Never used as a text color; labels sit on high-contrast dark chips over it.

### Neutral (Primary Structural Grounds)

- **Charcoal** (`#211F1D`): Our Space dark band, mobile menu ground, dark-outline ghost button border and hover fill, and `.social-circle` hover fill (`14.26:1` with Cream `#F4EEE7`).
- **Charcoal Soft** (`#3B302B`): light stop of the dark charcoal gradient (`linear-gradient(135deg, #211F1D 0%, #3B302B 100%)`).
- **Cream** (`#F4EEE7`): primary light ground (including Home `.hero-intro` and About `.about-intro`), monochrome logo and primary text/values/icons on the flat Terracotta Ink footer (`6.65:1` AA+), text on dark and terracotta surfaces, Brand Profile logo plaque fill, and `.social-circle` default circle fill and hover glyph color.
- **Beige** (`#E7DCD0`): secondary light surface for the Find Us location band (`index.html`) and `Designed to linger` story band (`about.html`).
- **Ink** (`#292522`): primary body text and Home `.hero-intro` `NAKA.` display wordmark on cream (`13.19:1`).
- **Ink Muted** (`#4A433C`): secondary text on cream (`8.44:1`) and beige (`7.20:1`).
- **Light Muted** (`#CBBFB3`): secondary text on charcoal (`9.11:1`).

## Typography

**Brand Font:** `Instrument Sans` (with `Helvetica Neue, Arial, sans-serif`)

Single self-hosted variable `.woff2` family (`wght` 400–700, `wdth` 75%–100%) with `font-display: swap`, matching NAKA's official Instagram brand voice (such as "Meet Naka." and "Hai, aku Naka.").

- **Display & Section Headlines:** `Instrument Sans`, weight `600`, slightly condensed variable width (`font-stretch: 92%–94%`), tight tracking (`-0.032em` to `-0.038em`), crisp architectural sans. No italic on the Home hero `Coffee and Space` subtitle, which renders upright in `Instrument Sans`, weight `500`, `font-stretch: 96%`, `#8C3B00`.
- **Lead:** `Instrument Sans`, weight `500`, `font-stretch: 97%`.
- **Body, Navigation, Labels, Wordmarks & Tabular Numerals:** `Instrument Sans`, `font-stretch: 100%`, weight `400`–`600`. All functional labels stay at or above the `0.75rem` (12px) legibility floor across breakpoints.

## Layout

Centered content container capped at `1240px` with fluid gutters (`clamp(20px, 4.8vw, 64px)`). Two static pages share an identical fixed header and animated Terracotta Ink Contact footer, balancing visual-first photography and Cream/Charcoal structural grounds with NAKA's Terracotta Brand Profile band and animated solid Terracotta Ink footer:

- **`index.html` (Home):** Minimalist visual-first Hero (`#top`: `.hero-stage` begins directly below the fixed solid Terracotta Ink `#8C3B00` navbar via `padding-top: var(--header-height)`, displaying clean full-bleed `hero-atmosphere.jpg` at `calc(100svh - var(--header-height))` to fill the entire remaining first viewport cleanly below the fixed navbar on desktop, tablet, and mobile with zero clipped text or buttons at the fold, 100% unobstructed with zero text, buttons, dark scrim, or top-fade scrim over the photo, revealing the intact Cream `#F4EEE7` editorial intro band `.hero-intro` immediately below upon scrolling with `Instrument Sans` `NAKA.` `#292522` (`600`, `font-stretch: 92%`) + upright `Coffee and Space` `#8C3B00` (`500`, `font-stretch: 96%`, no italic), concise tagline, primary `#8C3B00` + dark-outline ghost actions, and a quiet hairline meta bar) -> Charcoal-ground asymmetric 5-photo Our Space mosaic (`#our-space`, 12-column grid with terracotta-accented `All` / `Indoor` / `Outdoor` filters and photo hover mats) -> Full-bleed **Terracotta Brand Profile** statement band (`section--teaser`, `#A34600` to `#7A3200` gradient with `#BF5501` accents, Cream stacked-logo plaque, material strip, and high-contrast CTA to About) -> Beige Find Us location split (`#location`, terracotta map pin and architectural corners) -> Animated solid Terracotta Ink (`#8C3B00`) Footer (`#footer` / `#contact`, `2px` Terracotta Deep `#7A3200` top seam, kinetic brand ticker `.footer-ticker`, staggered-reveal 3-column vertical directory `.footer-grid` with `Brand & Follow Us`, `Explore`, and `Contact` dummy WhatsApp + real Google Maps Location rows, giant `"NAKA."` signoff & `Back to top` button `.footer-signoff`, and `.footer-bottom` legal bar). Gallery is removed.
- **`about.html` (About):** Alternating interactive editorial structure with zero adjacent repeating layouts or grounds: Visual-first Hero (`#top`: `.about-stage` begins directly below the fixed solid Terracotta Ink `#8C3B00` navbar via `padding-top: var(--header-height)`, displaying clean full-bleed courtyard photograph `space-terracotta-courtyard.jpg` at `calc(100svh - var(--header-height))`, 100% unobstructed with zero text, buttons, dark scrim, or top-fade scrim over the photo, revealing the intact minimalist Cream `#F4EEE7` editorial intro band `.about-intro` immediately below with `Discover NAKA`, concise intro, and understated `.text-link` links without stacked buttons) -> Charcoal (`#211F1D`) **Scroll Word-Highlight Statement** (`.section--statement`, large calm architectural statement where each word smoothly illuminates on scroll from subtle muted warmth to Cream `#F4EEE7`, with key material phrases illuminating in Terracotta Light `#E88432`, and full static visibility under no-JS / `prefers-reduced-motion`) -> Cream (`#F4EEE7`) **Interactive Material Explorer** (`.section--materials`, accessible `role="tablist"` with 4 tactile tabs `Terracotta`, `Black Steel`, `Concrete`, `Greenery` paired beside a crossfading architectural photo stage `.material-stage` showcasing `space-coffee-bar.jpg`, `hero-atmosphere.jpg`, `space-indoor-seating.jpg`, `space-greenery-corner.jpg`) -> Beige (`#E7DCD0`) **Asymmetric Dual-Photo `Designed to linger`** (`.section--courtyard-story`, story copy left paired with asymmetric 2-photo architectural composition `space-communal-table.jpg` + `space-indoor-seating.jpg` with subtle `1.03` hover zoom) -> shared animated solid Terracotta Ink Footer.

Responsive breakpoints: `960px` (inline nav switches to Menu toggle and full-screen drawer; split grids and Material Explorer stack; footer shifts from 3 columns to `Brand & Follow Us` full-width above 2 columns for `Explore` and `Contact`; `<noscript>` fallback matches `960px`), `620px` (single-column space mosaic, stacked hero CTAs, single-column footer stack), and `360px` (compact header lockup). Zero horizontal overflow from `320px` to `1440px`.

## Elevation & Depth

Flat by default. Depth comes from tonal bands (`Cream`, `Charcoal`, `Terracotta Brand Profile`, `Beige`, `Terracotta Ink`) and `1px` hairline borders (`rgba(41, 37, 34, 0.22)` on light, `rgba(244, 238, 231, 0.22)` on dark/Brand Profile, `rgba(244, 238, 231, 0.24)` on the Terracotta Ink footer, plus calibrated `#BF5501` / `#E88432` terracotta accent hairlines). The only `box-shadow` in the stylesheet is the functional dual-ring `:focus-visible` indicator (`outline: 2px solid #F4EEE7` + `box-shadow: 0 0 0 5px #211F1D`).

## Shapes

Rectilinear across architectural surfaces and controls: `2px` border radius on interactive buttons, `0` radius on photo frames, the Brand Profile Cream logo plaque, material swatches, footer contact rows, and `<dialog>` sheets. Circular `50%` radius is reserved strictly for the `44px × 44px` circular social icon badges (`.social-circle`). No pill shapes, no decorative shadows or glows.

## Components

### Navigation
- **Desktop (`> 960px`):** Fixed navbar (`.site-header`) with horizontal NAKA logo lockup (`n` emblem + `NAKA COFFEE & SPACE`) paired with 5 inline links (`Home`, `About`, `Our Space`, `Location`, `Contact`) featuring a `1px` animated underline (`#F4EEE7` when unscrolled, `#BF5501` when scrolled). The navbar does not overlay hero photography on either Home or About (`.hero-stage` and `.about-stage` begin directly below via `padding-top: var(--header-height)`). Unscrolled, `.site-header` is solid **Terracotta Ink (`#8C3B00`)** with a `1px` Terracotta Deep (`#7A3200`) bottom border and clean monochrome Cream (`#F4EEE7`) logo and nav links (`6.65:1` AA+), bookending the matching `#8C3B00` footer. Once scrolled past `20px` (`.is-stuck`), it transitions to crisp **White (`#FFFFFF`)** with a `1px` dark hairline border, `#BF5501` emblem, `#8C3B00` wordmark, and `#292522` dark ink links.
- **Mobile (`<= 960px`):** Bordered `44px` `Menu` toggle opens a full-screen Charcoal drawer featuring the dark-ground horizontal lockup (`#E88432` emblem + `#F4EEE7` wordmark), `Instrument Sans` display links (`600`, `font-stretch: 94%`) with `#E88432` active state, focus trapping, `inert` background, Escape to close, and focus restoration.
- **No-JS:** Header stays static and inline nav wraps cleanly at `<= 960px`.

### Visual-First Hero & Cream Editorial Intro
- **Home Hero (`index.html`, `#top`):** `.hero-stage` begins directly below the fixed navbar (`padding-top: var(--header-height)`) and opens with a clean full-bleed architectural photograph (`hero-atmosphere.jpg`, `calc(100svh - var(--header-height))`) that fills the entire remaining first viewport cleanly below the fixed navbar on desktop, tablet, and mobile with zero clipped text or buttons at the fold, staying 100% unobstructed with zero text, buttons, dark scrim, or top-fade scrim over the photo. Upon scrolling, the intact Cream (`#F4EEE7`) editorial intro band (`.hero-intro`) is revealed immediately below with `Instrument Sans` `NAKA.` (`#292522`, weight `600`, `font-stretch: 92%`) + upright `Coffee and Space` (`#8C3B00`, weight `500`, `font-stretch: 96%`, no italic), a concise tagline, primary (`#8C3B00`) + dark-outline ghost (`.button--ghost-dark`) actions, and a quiet hairline meta bar (`.hero-intro__meta`).
- **About Hero (`about.html`, `#top`):** Mirrors Home's clean visual-first rhythm: `.about-stage` begins directly below the fixed navbar (`padding-top: var(--header-height)`) with a 100% unobstructed full-bleed architectural courtyard photograph (`space-terracotta-courtyard.jpg`, `calc(100svh - var(--header-height))`, filling the entire remaining first viewport cleanly below the fixed navbar on desktop, tablet, and mobile with zero clipped text or buttons at the fold and zero text, buttons, dark scrim, or top-fade scrim over the photo), revealing the intact minimalist Cream (`#F4EEE7`) editorial intro band (`.about-intro`) immediately below upon scrolling with `Discover NAKA`, concise lead/story copy, and understated `.text-link` links (no stacked buttons).

### About Interactive Editorial Sections (`about.html`)
Structured so no two adjacent sections repeat a layout or ground across the page:
- **Scroll Word-Highlight Statement (`.section--statement` on Charcoal `#211F1D`):** Large calm architectural statement (`[data-word-highlight]`) where each word smoothly illuminates on scroll from subtle muted warmth to Cream (`#F4EEE7`), while key material phrases (`fired terracotta walls`, `matte black steel`, `poured concrete`, `open-air greenery`) illuminate in Terracotta Light (`#E88432`). Renders at full static visibility under no-JS or `prefers-reduced-motion`.
- **Interactive Material Explorer (`.section--materials` on Cream `#F4EEE7`):** Accessible `role="tablist"` with 4 tactile material tabs (`Terracotta`, `Black Steel`, `Concrete`, `Greenery`; each displaying a material color swatch, placement zone, and expandable description, operable via click and arrow-key navigation) paired beside a crossfading architectural photo stage (`.material-stage`, `role="tabpanel"`) showcasing NAKA's concept visuals (`space-coffee-bar.jpg`, `hero-atmosphere.jpg`, `space-indoor-seating.jpg`, `space-greenery-corner.jpg`).
- **Asymmetric Dual-Photo `Designed to linger` (`.section--courtyard-story` on Beige `#E7DCD0`):** Editorial story copy and actions on the left paired beside an asymmetric 2-photo architectural composition (`space-communal-table.jpg` wide + `space-indoor-seating.jpg` tall) featuring subtle hover zoom (`scale(1.03)`).

### Terracotta Brand Profile Band & Logo Plaque
- **Home (`section--teaser`):** Full-bleed gradient (`#A34600` to `#7A3200`) with `#BF5501` architectural hairlines and high-contrast Cream (`#F4EEE7`) typography (`5.31:1` to `7.98:1`). Displays the official stacked vertical NAKA logo (`#BF5501`) framed inside a crisp rectilinear Cream (`#F4EEE7`) architectural plaque alongside the 4-material strip and a high-contrast CTA to `about.html`.

### Our Space Mosaic & Lightbox
- Asymmetric 12-column photographic showcase of 5 architectural concept visuals (`Coffee Bar`, `Indoor Seating`, `Terracotta Courtyard`, `Communal Pavilion`, `Garden Corner`), each with a `1px` inset hairline mat that intensifies with calibrated terracotta on hover and minimal title/zone caption.
- Working `All` / `Indoor` / `Outdoor` filter buttons (`aria-pressed`, `>= 44px` tap targets) with strengthened terracotta active styling.
- Clicking any tile opens a native `<dialog>` lightbox displaying the full image, title, zone and positional counter (`zone · n / total`), Previous/Next buttons, arrow-key navigation, and Escape/backdrop close.

### Find Us Location Band
- Beige (`#E7DCD0`) split layout featuring terracotta architectural corner ticks, a terracotta map pin marker, honest location-pending copy, and a `Get Directions` button opening the placeholder dialog until the official Google Maps link is confirmed.

### Animated Solid Terracotta Ink Footer (`.site-footer`)
- **Structure & Responsive Layout:** Shared across `index.html` and `about.html` on solid Terracotta Ink (`#8C3B00`), topped by a `2px` Terracotta Deep (`#7A3200`) seam. Hairlines use `rgba(244, 238, 231, 0.24)`. The `.footer-grid` uses a 3-column directory grid on desktop (`> 960px`), shifts to `Brand & Follow Us` full-width above 2 columns (`Explore` + `Contact`) on tablet (`<= 960px`), and stacks into a single column on mobile (`<= 620px`).
- **Kinetic Brand Ticker (`.footer-ticker`):** Full-width architectural ticker across the top of the footer (`NAKA COFFEE & SPACE · FIRED TERRACOTTA · MATTE BLACK STEEL · POURED CONCRETE · OPEN-AIR GREENERY · CIRACAS, EAST JAKARTA`) running on a smooth slow horizontal loop that pauses on hover/focus and remains static under `prefers-reduced-motion`.
- **3-Column Vertical Directory (`.footer-grid` with `data-footer-reveal`):** Each column enters with a calm staggered reveal (`data-footer-reveal`):
  - **Column 1 (`Brand & Follow Us`):** Stacked vertical NAKA logo (`n` emblem + `NAKA COFFEE & SPACE`) in crisp monochrome Cream (`#F4EEE7`, `6.65:1` AA+), concise Warm Cream Muted (`#F9E5D2`, `6.14:1` AA) factual description, and Cream `Follow Us` heading paired with `44px × 44px` circular Instagram and TikTok icon buttons (`.social-circle`: Cream `#F4EEE7` circles with Terracotta Ink `#8C3B00` glyphs at `6.65:1` contrast, stepping to Charcoal `#211F1D` fill with Cream `#F4EEE7` glyphs at `14.26:1` on hover; opening an honest pending-link `<dialog>` until official profile URLs are supplied). Circular `50%` radius is used strictly for these social icon badges while architectural surfaces and buttons remain rectilinear (`0–2px`).
  - **Column 2 (`Explore`):** Vertical navbar-style navigation links (`Home`, `About`, `Our Space`, `Location`) in Warm Cream Muted (`#F9E5D2`) with a `44px` minimum target height, stepping to Cream (`#F4EEE7`) with an animated Cream underline on hover, focus, or current page.
  - **Column 3 (`Contact`, `#contact`):** Sleek editorial rows separated by `rgba(244, 238, 231, 0.24)` hairlines: two direct `https://wa.me/...` WhatsApp lines (`Customer Service` `+62 812 0000 0001` and `Bulk & Event Order` `+62 812 0000 0002`, with monochrome Cream `#F4EEE7` WhatsApp icons and tabular values, Warm Cream Muted `#F9E5D2` labels, and diagonal external arrows that shift to Cream on hover), a direct clickable Google Maps Location row (`Jl. Pengantin Ali No. 55, Ciracas, East Jakarta` linking to `https://maps.app.goo.gl/RC8scp3rpt9zcupy8`), and a Warm Cream Muted prototype disclosure note.
- **Giant Architectural `"NAKA."` Signoff & Back-to-Top (`.footer-signoff`):** Monumental `"NAKA."` display wordmark with calm staggered letter-by-letter rise (`data-wordmark`) paired beside a tactile `Back to top` button (`>= 44px` height, animated upward arrow) scrolling cleanly to `#top`.
- **Bottom Legal Bar (`.footer-bottom`):** `rgba(244, 238, 231, 0.24)` hairline-separated bottom bar displaying the copyright line and pre-launch prototype disclosure in Warm Cream Muted (`#F9E5D2`).

### Placeholder Dialog
- Native `<dialog>` used for pending external actions (`Instagram`, `TikTok`, `Get Directions`), closing via Close button, Escape, or backdrop click and returning focus to the triggering control.

## Do's and Don'ts

### Do:
- **Do** use the official supplied NAKA SVG lockups and follow the adaptive color rules for White, Cream, Charcoal, and Terracotta grounds (including monochrome Cream `#F4EEE7` on the unscrolled Terracotta Ink `#8C3B00` header and flat `#8C3B00` footer, and `#BF5501` + `#8C3B00` on the scrolled White `.is-stuck` header).
- **Do** keep hero photographs cleanly separated below the fixed navbar (`.hero-stage` / `.about-stage` with `padding-top: var(--header-height)`) and full-bleed at `calc(100svh - var(--header-height))` on both Home and About so the opening photograph fills the entire remaining first viewport cleanly on desktop, tablet, and mobile with zero clipped text or buttons at the fold and zero text, buttons, dark scrim, or top-fade scrim over the photo, revealing the intact Cream `.hero-intro` / `.about-intro` editorial band immediately below upon scrolling.
- **Do** keep architectural surfaces and buttons flat with `1px` hairlines and `0–2px` corners (reserving `50%` circular radius strictly for the `.social-circle` social icon badges).
- **Do** use Terracotta Ink (`#8C3B00`) or darker for terracotta buttons, text on light grounds, and the flat solid footer; pair `#8C3B00` footer surfaces with Cream (`#F4EEE7`, `6.65:1`) for primary content and Warm Cream Muted (`#F9E5D2`, `6.14:1`) for secondary content.
- **Do** frame the `#BF5501` stacked logo inside a crisp Cream (`#F4EEE7`) plaque whenever placing it on the Terracotta Brand Profile gradient.
- **Do** alternate layouts and grounds across `about.html` (Cream `.about-intro` -> Charcoal `.section--statement` -> Cream `.section--materials` -> Beige `.section--courtyard-story` -> Terracotta Ink `.site-footer`) and ensure scroll word-highlights, footer reveals, and ticker motion degrade cleanly to full static visibility under no-JS and `prefers-reduced-motion`.
- **Do** keep all functional labels at or above `0.75rem` (12px) and interactive targets at least `44px`.
- **Do** clearly label concept visuals, dummy WhatsApp numbers, and pending links until official NAKA assets replace them.
- **Do** verify every color pairing mathematically for WCAG AA contrast.

### Don't:
- **Don't** overlay the fixed navbar, headlines, buttons, dark scrims, or top-fade scrims onto the Home or About hero photographs; keep `.hero-stage` and `.about-stage` starting directly below the navbar (`padding-top: var(--header-height)`).
- **Don't** replace the Home `.hero-intro` architectural `Instrument Sans` `NAKA. / Coffee and Space` display headline with a logo graphic (and don't italicize `Coffee and Space`).
- **Don't** set small body text in base `#BF5501` on Cream `#F4EEE7` (`4.04:1` fails AA for normal text).
- **Don't** invent business history, awards, opening hours, menu prices, address, coordinates, or testimonials.
- **Don't** repeat adjacent layouts or ground colors on `about.html`, or place stacked button rows inside `.about-intro`.
- **Don't** re-introduce a separate Gallery section or decorative sequence numbers in navigation.
- **Don't** add pill shapes, decorative shadows, glows, or em dashes (`—`) in UI copy.
