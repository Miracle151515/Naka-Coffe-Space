# NAKA Coffee and Space: Design Specification

> **Document:** `design.md`
> **Project:** NAKA Coffee and Space Company Profile & Menu Showcase
> **Version:** 2.1
> **Design direction:** Modern Industrial Coffee Brand (Calibrated Material Board & Editorial Showcase)
> **Primary format:** Responsive 3-page static website (`index.html`, `menu.html`, `about.html`)

---

## 1. Project Overview

**NAKA Coffee and Space** is an Indonesian coffee shop located in Ciracas, East Jakarta. This 3-page static website serves as NAKA's digital brand presence, architectural space showcase, and browse-only menu showcase (etalase).

The site introduces NAKA's physical environment and official brand identity, presents the complete food and beverage menu with real product specimen photography from NAKA's official menu book, provides verified location and operating hours, and connects visitors directly to NAKA's WhatsApp channels and social profiles.

### Primary objectives

- Lead with NAKA's real material character: burnt terracotta walls, matte black steel structure, poured concrete, and open-air tropical greenery.
- Showcase indoor and outdoor seating areas through a clean, visual-first architectural gallery inside **Our Space**.
- Present NAKA's complete **Menu Showcase** (`menu.html`) through a zero-scroll 2-column Split Studio Showcase with custom architectural SVG category icons, real 32-bit RGBA product specimens, clear tabular pricing in thousands IDR (`K`), and a full animated 10-page editorial Menu Book adapted from NAKA's official Heyzine flipbook.
- Make location, Google Maps directions, and daily operating hours (`09:00 - 23:00`) effortless to verify on mobile and desktop.
- Provide direct one-tap WhatsApp contact lines (`Customer Service` and `Bulk & Event Order`) and clear access to social channels.
- Stay honest about pre-launch prototype items (concept space visuals, dummy WhatsApp numbers, pending social links, and pending business story) while presenting all confirmed business facts accurately.

### Out of scope

This website is a static company profile and browse-only menu showcase, not a transactional web application. It intentionally excludes:

- Shopping cart, online ordering, or checkout flows.
- Payment processing or delivery integration.
- Table reservation management.
- User registration, login, or accounts.
- Admin dashboard, CMS, database, or backend services.

---

## 2. Brand Identity

### 2.1 Visual direction

**Modern Industrial Coffee Brand**

The visual language translates NAKA's actual physical space and official logo into a warm, flat, architectural web system:

- Fired burnt terracotta exterior and feature walls (`#BF5501` / `#8C3B00`).
- Matte black structural steel framing and canopy (`#211F1D`).
- Grey poured concrete floors, bar counter, and paving (`#E7DCD0` / `#4A433C`).
- Tropical courtyard trees and greenery (`#7C8655`).
- Clean Cream paper-like editorial grounds (`#F4EEE7`) with rectilinear `1px` hairlines and zero decorative ornament.

### 2.2 Color palette (Calibrated System)

Every color is calibrated directly to the official NAKA logo and verified mathematically for WCAG 2.2 AA contrast.

| Token | Hex / Value | Role and Contrast Guidance |
| :--- | :--- | :--- |
| `--color-brand` | `#BF5501` | Exact official NAKA logo terracotta. Surface, emblem on white/cream, hairlines, active accents, and material swatch only (`4.04:1` on cream; never small body text on cream). |
| `--color-brand-ink` | `#8C3B00` | Readable deep terracotta (`6.65:1` on cream `#F4EEE7`, `5.67:1` on beige `#E7DCD0`). Unscrolled navbar ground, flat solid footer ground, primary button fill, scrolled navbar wordmark, Home hero `Coffee and Space` subtitle, active category selector tab and Menu Book ink accents, active filter/link accents, and `.social-circle` default glyph. |
| `--color-brand-strong` | `#A34600` | Primary button hover fill and bright stop of the Terracotta Plan Your Visit (`#visit-info`) gradient (`5.31:1` with cream text, AA). |
| `--color-brand-deep` | `#7A3200` | Deep stop of the Terracotta Plan Your Visit (`#visit-info`) gradient (`7.98:1` with cream text, AAA), `1px` unscrolled navbar bottom border, and `2px` footer top seam. |
| `--color-brand-light` | `#E88432` | Warm luminous terracotta for Charcoal `#211F1D` dark grounds (`6.08:1` AA): mobile menu emblem, active mobile nav item, and dark-ground Our Space accents. |
| `--color-brand-muted` | `#F9E5D2` | Warm cream muted text for secondary copy, labels, inactive nav links, and prototype notes on `#8C3B00` footer and Terracotta Plan Your Visit (`#visit-info`) surfaces (`6.14:1` AA). |
| `--color-charcoal` | `#211F1D` | Our Space section ground, Animated Menu Book studio table band (`#menu-book`) and binding crease, mobile menu drawer ground, dark-outline ghost button border/hover fill, `.button--on-brand` fill, and `.social-circle` hover fill (`14.26:1` with cream). |
| `--color-charcoal-soft` | `#3B302B` | Secondary dark stop for subtle dark surface gradients. |
| `--color-cream` | `#F4EEE7` | Primary light ground (Home `.hero-intro`, Home `#menu-preview`, Menu Split Studio Showcase `.menu-studio`, Animated Menu Book paper sheets, About `.about-intro` and Material Character), monochrome footer logo/primary text, Plan Your Visit primary text/icons, and `.social-circle` default fill/hover glyph. |
| `--color-beige` | `#E7DCD0` | Secondary warm stone surface for Menu visual stage (`.menu-visual-stage`), Home Find Us (`#location`), and About `Designed to linger` (`.section--courtyard-story`). |
| `--color-text-dark` | `#292522` | Primary dark ink on cream (`13.19:1`) and beige; Home hero `NAKA.` display wordmark; scrolled White header links. |
| `--color-text-muted-dark` | `#4A433C` | Secondary body copy, menu item descriptions, and metadata on cream (`8.44:1`) and beige (`7.20:1`). |
| `--color-text-muted-light` | `#CBBFB3` | Secondary text and captions on charcoal (`9.11:1`). |
| `--color-olive` | `#7C8655` | Restrained natural greenery accent used strictly once on the About Material Character 4-swatch board (with `--color-olive-deep: #6D784A`). Never used as body text. |

### 2.3 Gradients, surfaces, and geometry

- **Flat architectural planes:** Pages alternate cleanly across tonal bands (`Cream`, `Charcoal`, `Terracotta Plan Your Visit`, `Beige`, `Terracotta Ink`) separated by `1px` hairlines (`--color-line-dark: rgba(41, 37, 34, 0.22)` on light, `--color-line-light: rgba(244, 238, 231, 0.22)` on dark, `rgba(244, 238, 231, 0.24)` on `#visit-info` and the `#8C3B00` footer).
- **Restrained gradient use:** Only two calibrated gradients exist in the system:
  - `--gradient-brand: linear-gradient(135deg, #A34600 0%, #7A3200 100%)` for the Home Terracotta Plan Your Visit band (`#visit-info`, `.section--visit`).
  - `--gradient-dark: linear-gradient(135deg, #211F1D 0%, #3B302B 100%)` for subtle dark material depth.
- **Rectilinear geometry:** `0` corner radius on space photo frames, Animated Menu Book paper sheets, hairline ledger rows, outlet facility rows, material swatches, footer contact rows, and `<dialog>` sheets; `2px` (`--radius`) on interactive buttons, category selector tabs, and book navigation controls. Circular `50%` radius is reserved strictly for the `44px x 44px` `.social-circle` footer icon buttons. Menu product photographs (true 32-bit RGBA transparent PNGs) are rendered **borderless** (no outer box borders and no inset hairline frames) so drinks, snacks, and bowls sit directly on the warm surface.
- **No decorative shadows or pills:** No drop shadows, glows, glassmorphism, or pill badges anywhere. The only `box-shadow` in the stylesheet is the functional dual-ring `:focus-visible` indicator (`outline: 2px solid #F4EEE7` + `box-shadow: 0 0 0 5px #211F1D`).

### 2.4 Typography

A single self-hosted variable typeface carries the entire brand across all three pages, matching NAKA's real Instagram voice ("Meet Naka.", "Hai, aku Naka."):

- **Font family:** `Instrument Sans` (`.woff2` variable font, `wght` `400-700`, `wdth` `75%-100%`, `font-display: swap`, fallback `Helvetica Neue, Arial, sans-serif`).
- **Display headlines:** Weight `600`, `font-stretch: 92%`, `line-height: 0.82`, `letter-spacing: -0.038em`. Home `.hero-intro` sets `NAKA.` in `#292522` paired with upright `Coffee and Space` in `#8C3B00` (weight `500`, `font-stretch: 96%`, never italic).
- **Section headlines:** Weight `600`, `font-stretch: 94%`, `line-height: 0.94`, `letter-spacing: -0.032em`.
- **Lead statements:** Weight `500`, `font-stretch: 97%`, `line-height: 1.32`, `letter-spacing: -0.018em`.
- **Body, navigation, labels, wordmarks:** Weight `400-600`, `font-stretch: 100%`, comfortable `1.65` body line height. All functional labels stay at or above `0.75rem` (`12px`).
- **Tabular numerals:** `font-variant-numeric: tabular-nums` is required on all menu prices (`K` values), item counts, opening hours, and WhatsApp phone numbers so ledger columns align cleanly.

### 2.5 Official Logo System

Official supplied NAKA SVG assets are live in the project: an organic cursive `n` emblem topped with a small spiral and dot, paired with uppercase `NAKA COFFEE & SPACE`.

- **Asset files:** `assets/images/naka-mark.svg`, `assets/images/naka-logo-vertical.svg`, `assets/images/favicon.svg`, plus inline SVG lockups in HTML for crisp adaptive color inheritance.
- **Placement:**
  - Top-left Navbar and Mobile Menu header: horizontal lockup (`n` emblem + `NAKA COFFEE & SPACE`).
  - Shared Footer: stacked vertical lockup.
  - Browser favicon: `n` emblem on Cream `#F4EEE7` square.
  - Home Hero `.hero-intro`: keeps architectural `Instrument Sans` display typography (`NAKA.` / `Coffee and Space`), never replaced by a logo graphic.
- **Adaptive color rules:**
  - Unscrolled Terracotta Ink Navbar (`#8C3B00`): monochrome Cream `#F4EEE7` emblem and wordmark (`6.65:1` AA+).
  - Scrolled White Navbar (`.is-stuck`, `#FFFFFF`): `#BF5501` emblem + `#8C3B00` wordmark + `#292522` nav links.
  - Charcoal Mobile Menu (`#211F1D`): `#E88432` emblem + `#F4EEE7` wordmark.
  - Flat Terracotta Ink Footer (`#8C3B00`): monochrome Cream `#F4EEE7` stacked emblem and wordmark (`6.65:1` AA+).

---

## 3. Website Architecture (3 Static Pages)

The website is organized into **three static HTML pages** sharing one fixed header, one mobile navigation drawer, and one flat solid Terracotta Ink footer. The legacy v1.0 Gallery section has been folded into **Our Space**.

1. **`index.html` (Home):**
   - Fixed Header (6 links)
   - Visual-First Hero (`#top`: tall full-viewport unobstructed `.hero-photo` without subtracting navbar height + Cream `.hero-intro` with short brand intro and `Read About NAKA` link)
   - Our Space (`#our-space`: Charcoal 5-photo mosaic, Indoor/Outdoor filter, native `<dialog>` lightbox)
   - Menu Showcase Teaser (`#menu-preview`: Cream architectural preview of signature categories with real NAKA product specimens and `Explore Full Menu` CTA)
   - Plan Your Visit Band (`#visit-info`, `.section--visit`: dominant Terracotta gradient `#A34600` to `#7A3200` tailored to NAKA's single Ciracas outlet, opening hours, single-outlet summary, CTAs, and 5-item hairline `Outlet Facilities` ledger)
   - Find Us (`#location`: Beige split layout with verified Ciracas address, daily hours `09:00 - 23:00`, live Google Maps embed, and `Get Directions` link)
   - Flat Terracotta Ink Footer (`#footer` / `#contact`)
2. **`menu.html` (Menu Showcase / Etalase):**
   - Tonal rhythm: Terracotta Ink `#8C3B00` Header -> Cream `#F4EEE7` Split Studio Showcase -> Charcoal `#211F1D` Animated Menu Book -> Terracotta Ink `#8C3B00` Footer
   - Fixed Header (6 links, `Menu` active via `aria-current="page"`)
   - **Part 1: Zero-Scroll 2-Column Split Studio Showcase (`.menu-studio`, Cream `#F4EEE7`):** Desktop `292px` sticky Left Category Rail (`.menu-rail`) with 8 interactive category selector tabs (no `All` button; defaults to `Coffee`, supports `?category=` deep links), custom authored `1.5px` SVG category icons, right-aligned tabular counts, and `#menu-book` jump link, paired with Right Interactive Stage & Ledger (`.menu-stage-col`) housing the full-width Beige `#E7DCD0` visual stage (`.menu-visual-stage`) and compact 2-column hairline ledger (`.menu-items-grid`) covering all **68 main items + 4 Coffee Add-Ons**
   - **Part 2: Full Animated NAKA Editorial Menu Book (`#menu-book`, Charcoal `#211F1D`):** Interactive 10-page Cream `#F4EEE7` Heyzine-style flipbook edition featuring all 9 extracted NAKA 32-bit RGBA product specimens, 6 desktop book states (`Page 01` closed cover, `Pages 02 - 03` through `Pages 08 - 09` open spreads, `Page 10` closing single page on `> 900px`; single-page `Page 01 / 10` to `Page 10 / 10` on `<= 900px`), dynamic layered paper-edge depth stacks, no visible Previous/Next buttons, direct pointer/touch drag-to-flip (3D `rotateY` turning leaf tracking cursor/finger live across the spine) and click-to-flip on left/right pages with subtle outer-corner lift/fold hover cue, bottom `1-10` range scrubber slider, chapter quick-jump buttons, keyboard Left/Right arrows on the focusable book stage, `#page/1`..`#page/10` hash support, and `Open Original Heyzine Flipbook` link
   - Flat Terracotta Ink Footer (`#footer` / `#contact`)
3. **`about.html` (About):**
   - Fixed Header (6 links, `About` active via `aria-current="page"`)
   - Visual-First Courtyard Hero (`#top`: 100svh unobstructed courtyard photo + Cream `.about-intro`)
   - Material Character (`section--materials`: Cream 4-swatch architectural board)
   - Designed to Linger (`section--courtyard-story`: Beige single-photo split with `space-communal-table.jpg`)
   - Flat Terracotta Ink Footer (`#footer` / `#contact`)

---

## 4. Page & Section Specifications

### 4.1 Shared Navigation Bar & Mobile Drawer

- **Desktop (`> 960px`):** Fixed `.site-header` (`--header-height: 84px`) sits above page content rather than overlaying hero photography. Starts as solid Terracotta Ink `#8C3B00` with a `1px` `#7A3200` bottom border and monochrome Cream `#F4EEE7` logo and links, bookending the `#8C3B00` footer. Past `20px` scroll (`.is-stuck`), transitions to crisp White `#FFFFFF` with a `1px` dark hairline border, `#BF5501` emblem, `#8C3B00` wordmark, and `#292522` links.
- **6 Navigation Links:** `Home`, `Menu`, `About`, `Our Space`, `Location`, `Contact`. Animated `1px` underline (`#F4EEE7` unscrolled, `#BF5501` scrolled).
- **Mobile (`<= 960px`):** `44px` bordered `Menu` toggle opens a full-screen Charcoal `#211F1D` drawer with all 6 links, focus trap, `inert` background, Escape close, and focus restoration.
- **No-JS Fallback:** Header becomes static and inline navigation wraps cleanly at `<= 960px`.

### 4.2 Home (`index.html`)

- **Hero (`#top`):** `.hero-stage` starts directly below the navbar (`padding-top: var(--header-height)`). The opening full-bleed `hero-atmosphere.jpg` inside `.hero-photo` is sized at full-viewport height without subtracting navbar height (`clamp(640px, 106svh, 1120px)` on desktop, `clamp(540px, 104svh, 1020px)` on tablet, `clamp(500px, 100svh, 900px)` on mobile) with zero overlaid text, buttons, dark scrim, or top fade. Scrolling immediately reveals the Cream `#F4EEE7` `.hero-intro` band containing `NAKA.` + upright `Coffee and Space`, tagline (`A place to connect and enjoy your moment.`), short brand introduction (`.hero-intro__story`), primary (`#8C3B00`) and dark-outline ghost actions paired with the understated `Read About NAKA` `.text-link` to `about.html` (no duplicate 4-swatch material board on Home), and a quiet hairline meta bar (`Concept photography pending official NAKA shoot.` + `Ciracas, East Jakarta · Open Daily 09:00 - 23:00`).
- **Our Space (`#our-space`):** Charcoal `#211F1D` asymmetric 12-column mosaic displaying 5 architectural concept visuals (`Coffee Bar`, `Indoor Seating`, `Terracotta Courtyard`, `Communal Pavilion`, `Garden Corner`), `All` / `Indoor` / `Outdoor` filter buttons (`aria-pressed`, `>= 44px` tap targets), terracotta-accented `1px` hover mats, and a native `<dialog>` lightbox with Previous/Next and keyboard navigation.
- **Menu Showcase Teaser (`#menu-preview`):** Cream `#F4EEE7` editorial showcase section placed between `#our-space` and `#visit-info` (`.section--visit`). Highlights signature NAKA menu categories using **borderless** real NAKA 32-bit RGBA product specimens extracted from the official Heyzine PDF (no outer box borders, no inset hairline frames, zero captions underneath images, no pill shapes or shadows) sitting directly on the warm surface alongside concise category copy and a primary `Explore Full Menu` CTA linking directly to `menu.html`.
- **Plan Your Visit (`#visit-info`, `.section--visit`):** Dominant full-bleed calibrated Terracotta gradient (`#A34600` to `#7A3200`) tailored to NAKA's single outlet in Ciracas, East Jakarta. Two-column `.visit-layout` (stacking at `<= 960px`) pairs `Plan Your Visit`, a concise single-outlet overview, a hairline `.visit-summary` (`Opening Hours`: `Open Daily, 09:00 - 23:00` in tabular numerals; `Outlet`: `Single Location · Ciracas, East Jakarta`), and CTAs (`See Location & Map` `.button--on-brand` + `Ask on WhatsApp` `.text-link--on-brand`) on the left with a 5-item hairline `Outlet Facilities` ledger (`.facility-ledger`) on the right covering NAKA's confirmed facilities:
  - `Indoor AC & Open-Air Courtyard`
  - `Free Wi-Fi & Power Outlets`
  - `Smoking & Non-Smoking Areas`
  - `Prayer Room (Mushola)`
  - `Parking Area` (motorcycles and cars)
- **Find Us (`#location`):** Beige `#E7DCD0` two-column split layout displaying:
  - Area: `Ciracas, East Jakarta`
  - Address: `Jl. Pengantin Ali No. 55, RT.4/RW.6, Ciracas, East Jakarta, DKI Jakarta 13740`
  - Open Hours: `Daily, 09:00 - 23:00` (confirmed from the official NAKA menu cover)
  - Live embedded Google Maps iframe (`NAKA Coffee & Space`)
  - Direct `Get Directions` button opening `https://maps.app.goo.gl/RC8scp3rpt9zcupy8` in a new tab.

### 4.3 Menu Showcase (`menu.html`)

**Purpose:** Give visitors an immediate, zero-scroll architectural menu browser paired with an interactive 10-page editorial Menu Book so they can explore everything NAKA serves before visiting, without any e-commerce clutter.

- **Browse-only strictly:** Zero cart icons, zero quantity pickers, zero "Order Now" or checkout buttons.
- **Tonal Rhythm:** Terracotta Ink `#8C3B00` Header -> Cream `#F4EEE7` Split Studio Showcase -> Charcoal `#211F1D` Animated Menu Book -> Terracotta Ink `#8C3B00` Footer.
- **Exact Verified Menu Tally (68 main items + 4 Coffee Add-Ons across 8 categories):**
  - Sourced directly from NAKA's official 10-page Heyzine menu book (`https://heyzine.com/flip-book/d3431d27da.html`):
    - `Coffee`: 6 items + 4 Coffee Add-Ons
    - `Cold Brew`: 7 items
    - `Signature Coffee`: 11 items
    - `More Drinks`: 15 items
    - `Snacks`: 14 items
    - `Nusantara`: 5 items
    - `Donburi`: 5 items
    - `Ramen`: 5 items
- **Part 1: Zero-Scroll 2-Column Split Studio Showcase (`.menu-studio`, Cream `#F4EEE7` ground, directly below the fixed header via `padding-top: var(--header-height)`):**
  - **Left Category Rail (`.menu-rail`, desktop `292px` sticky sidebar):**
    - Compact `Menu` header, confirmed daily hours (`09:00 - 23:00`), and `Prices in K IDR`.
    - **8 interactive category selector tabs** (`Coffee`, `Cold Brew`, `Signature Coffee`, `More Drinks`, `Snacks`, `Nusantara`, `Donburi`, `Ramen`) with **no `All` button**. Defaults to `Coffee` active on initial load and supports `?category=` deep links from Home (`#menu-preview`).
    - Each tab pairs a **custom authored `1.5px` architectural SVG category icon** (adaptive monochrome Cream/Charcoal/Terracotta, zero emoji) with the category title and right-aligned tabular item count (`font-variant-numeric: tabular-nums`).
    - Includes a direct jump link down to `#menu-book`.
    - **Responsive Grid Adaptation:** Adapts into a `4x2` bordered icon grid on tablet (`<= 960px`) and a compact `2x4` bordered icon grid (`>= 48px` tap targets) on mobile (`<= 620px`) stacked cleanly above the visual stage.
  - **Right Interactive Stage & Ledger (`.menu-stage-col`):**
    - Opens with a **full-width borderless visual stage (`.menu-visual-stage`)** on warm Beige `#E7DCD0` (no outer box borders and no inset hairline frames) displaying the active category's real extracted NAKA 32-bit RGBA transparent PNG product specimen sitting cleanly and directly on the warm surface.
    - Switching categories updates the visual stage instantaneously in place with a subtle settle transition; `Snacks` renders a paired borderless specimen layout combining `menu-snacks.png` + `menu-takoyaki.png`. Strictly zero captions underneath product images, zero box frames, zero pill badges, and zero decorative shadows.
    - Directly above a **compact 2-column hairline menu ledger (`.menu-items-grid`)** with `1px` hairline rows separating item names, concise English descriptors (where applicable), and right-aligned tabular prices (`K`), plus the 4 Coffee Add-Ons block under `Coffee`, allowing visitors to browse any category without long vertical scrolling.
- **Part 2: Full Animated NAKA Editorial Menu Book (`#menu-book`, Charcoal `#211F1D` studio table band above the `#8C3B00` footer):**
  - Full interactive 10-page Heyzine-style flipbook edition (`https://heyzine.com/flip-book/d3431d27da.html#page/1`) redesigned in NAKA's Cream `#F4EEE7` paper, Charcoal binding crease, Terracotta Ink `#8C3B00`, `Instrument Sans`, and all 9 extracted NAKA 32-bit RGBA transparent PNG product specimens rendered **borderless** (no outer box borders or inset hairline frames) directly on the warm Cream paper.
  - **Desktop (`> 900px`) 6 Book States covering all 10 pages:**
    1. `Page 01` (Closed Front Cover centered on the Charcoal desk with right-edge paper stack)
    2. `Pages 02 - 03` (Open spread: Coffee + Based Cold Brew)
    3. `Pages 04 - 05` (Open spread: Signature Coffee + More Drinks)
    4. `Pages 06 - 07` (Open spread: Snacks + More Snacks)
    5. `Pages 08 - 09` (Open spread: Nusantara + Donburi)
    6. `Page 10` (Closing single page: Ramen with left-edge paper stack)
  - **Mobile & Tablet (`<= 900px`):** Single-page flip mode (`Page 01 / 10` to `Page 10 / 10`) for crisp legibility (`>= 12px` floor) and zero horizontal overflow from `320px` up.
  - **Heyzine-Style Flipbook Controls & 3D Page-Flip Interaction:** Zero visible Previous/Next buttons; pages turn via **direct pointer/touch drag-to-flip** (3D perspective `rotateY` turning leaf tracks cursor/finger live across the spine, respecting `prefers-reduced-motion: reduce`) and **click-to-flip** on left/right pages with a subtle outer-corner lift/fold hover cue, alongside dynamic layered paper page-edge depth stacks on each side, an interactive bottom `1-10` range scrubber slider with tabular page readout, chapter quick-jump buttons, keyboard Left/Right arrow keys on the focusable book stage, `#page/1`..`#page/10` deep-link hash support, and a direct `Open Original Heyzine Flipbook` reference link in the book header.

### 4.4 About (`about.html`)

- **Courtyard Hero (`#top`):** `.about-stage` begins directly below the navbar (`padding-top: var(--header-height)`) with 100% unobstructed full-bleed `space-terracotta-courtyard.jpg` at `calc(100svh - var(--header-height))`, followed by the minimalist Cream `#F4EEE7` `.about-intro` band (`Discover NAKA`, concise intro, prototype business-story note, and understated `.text-link` actions without stacked button rows).
- **Material Character (`section--materials`):** Cream `#F4EEE7` editorial intro paired with the 4-swatch `.material-band` (`Terracotta`, `Black Steel`, `Concrete`, `Greenery`) labelled via Charcoal `.material__tag` chips.
- **Designed to Linger (`section--courtyard-story`):** Beige `#E7DCD0` asymmetric `.courtyard-split` pairing `space-communal-table.jpg` on the left beside concise story copy, `See All Space Views` primary button, and `Back to Home` `.text-link` on the right.

### 4.5 Shared Flat Solid Terracotta Ink Footer (`.site-footer`)

Shared across `index.html`, `menu.html`, and `about.html` on flat solid Terracotta Ink `#8C3B00` topped by a `2px` `#7A3200` seam and `rgba(244, 238, 231, 0.24)` hairlines:

- **Column 1 (`Brand & Follow Us`):** Monochrome Cream `#F4EEE7` stacked vertical NAKA logo, concise Warm Cream Muted `#F9E5D2` description, and `44px x 44px` circular Instagram and TikTok icon buttons (`.social-circle`: Cream fill with `#8C3B00` glyphs, stepping to Charcoal `#211F1D` fill with Cream glyphs on hover; opening the honest pending-link `<dialog>` until official URLs are confirmed).
- **Column 2 (`Explore`):** Vertical navigation links (`Home`, `Menu`, `About`, `Our Space`, `Location`) in Warm Cream Muted `#F9E5D2` (`>= 44px` tap target height), stepping to Cream `#F4EEE7` with animated Cream underline on hover, focus, or current page.
- **Column 3 (`Contact`, `#contact`):** Hairline-separated rows featuring two direct `https://wa.me/...` WhatsApp lines (`Customer Service` `+62 812 0000 0001` and `Bulk & Event Order` `+62 812 0000 0002`, tabular numerals, prototype dummy numbers disclosed), one clickable Google Maps Location row (`Jl. Pengantin Ali No. 55, Ciracas, East Jakarta`), and a concise Warm Cream Muted prototype disclosure note.
- **Bottom Legal Bar (`.footer-bottom`):** Copyright line (`© 2026 NAKA Coffee and Space.`) and pre-launch prototype disclosure.

---

## 5. Layout, Responsive Behavior & Accessibility

- **Container & Fluid Spacing:** Centered `.page-shell` capped at `1240px` with fluid gutters `clamp(20px, 4.8vw, 64px)` and section padding `clamp(68px, 9vw, 128px)`.
- **Breakpoints:**
  - `> 960px` (Desktop): Inline 6-link navigation, 12-column Our Space mosaic, 2-column Menu Split Studio Showcase (`292px` sticky `.menu-rail` + `.menu-stage-col` with 2-column `.menu-items-grid`), 4-column material board, 3-column footer directory.
  - `<= 960px` (Tablet): Mobile `Menu` drawer replaces inline nav; split layouts stack; `.menu-rail` adapts into a `4x2` bordered icon grid above `.menu-visual-stage`; material board shifts to 2 columns; footer shifts to `Brand & Follow Us` full-width above 2 columns (`Explore` + `Contact`).
  - `> 900px` vs `<= 900px` (Animated Menu Book `#menu-book`): Renders 6 Heyzine-style book states above `900px` (`Page 01` centered closed cover with right-edge paper stack, 4 open spreads `Pages 02 - 03` through `Pages 08 - 09`, and `Page 10` closing single page with left-edge paper stack), switching to single-page flip mode (`Page 01 / 10` to `Page 10 / 10`) at `<= 900px` to preserve `>= 12px` typography and zero overflow.
  - `<= 620px` (Mobile): Single-column space mosaic, stacked hero CTAs, `.menu-rail` adapts into a compact `2x4` bordered icon grid (`>= 48px` tap targets) above `.menu-visual-stage` with single-column menu ledger, single-column footer stack.
  - `<= 360px` (Small mobile): Compact header wordmark spacing; zero horizontal overflow down to `320px`.
- **WCAG 2.2 AA Targets:**
  - All text pairings mathematically verified `>= 4.5:1` (`>= 3:1` for large graphics/UI controls).
  - Keyboard operable navigation, category selector tabs, Animated Menu Book (no visible Previous/Next buttons; direct pointer/touch drag-to-flip and click-to-flip pages, bottom `1-10` range scrubber slider, chapter quick-jump buttons, `Left`/`Right` arrow keys on the focusable book stage, and `#page/1`..`#page/10` hash navigation), mobile drawer, lightbox, and dialogs with dual-ring `:focus-visible` outlines.
  - Touch targets `>= 44px x 44px` across all buttons, filters, nav links, and social icon circles (`>= 48px` on mobile `2x4` menu category tabs).
  - Full `prefers-reduced-motion: reduce` support (including disabling 3D `rotateY` page flips), semantic HTML5 landmarks, descriptive `alt` text, and readable layout at `200%` zoom.
- **Editorial Copy Standard:** Concise English UI copy across all pages. Never use em dashes (U+2014) in UI copy or examples; use colons, commas, parentheses, or hyphens instead.

---

## 6. Verified Facts vs. Pending Placeholders

| Information / Asset | Status | Source / Notes |
| :--- | :--- | :--- |
| Official NAKA SVG Logo & Favicon | **Confirmed** | Official supplied assets (`naka-mark.svg`, `naka-logo-vertical.svg`, `favicon.svg`). |
| Address & Google Maps Destination | **Confirmed** | `Jl. Pengantin Ali No. 55, RT.4/RW.6, Ciracas, East Jakarta, DKI Jakarta 13740` (`https://maps.app.goo.gl/RC8scp3rpt9zcupy8`, live iframe embed). |
| Daily Operating Hours | **Confirmed** | `Daily, 09:00 - 23:00` (from official NAKA menu cover). |
| Outlet Facilities | **Confirmed** | Single-outlet Ciracas facilities listed in `#visit-info`: Indoor AC & Open-Air Courtyard, Free Wi-Fi & Power Outlets, Smoking & Non-Smoking Areas, Prayer Room (Mushola), and Parking Area (motorcycles and cars). |
| Complete 8-Category Menu & Prices | **Confirmed** | **68 main items + 4 Coffee Add-Ons** (`6 Coffee + 4 Add-Ons`, `7 Cold Brew`, `11 Signature Coffee`, `15 More Drinks`, `14 Snacks`, `5 Nusantara`, `5 Donburi`, `5 Ramen`), priced in thousands IDR (`K`), from NAKA's official 10-page Heyzine menu book (`https://heyzine.com/flip-book/d3431d27da.html`). |
| Product Specimen Photography | **Confirmed** | All 9 real NAKA 32-bit RGBA drink and food product specimens extracted from the official 10-page Heyzine menu PDF (including paired `menu-snacks.png` + `menu-takoyaki.png` for Snacks). |
| Architectural Space Photography | **Pending** | Owner-approved architectural concept visuals (`hero-atmosphere.jpg`, `space-*.jpg`) are displayed with explicit disclosure notes pending official NAKA shoot. |
| WhatsApp Numbers | **Pending** | Dummy prototype numbers (`+62 812 0000 0001`, `+62 812 0000 0002`) clearly labelled in UI and HTML comments. |
| Instagram & TikTok URLs | **Pending** | Circular footer buttons open the honest pending-link `<dialog>` until official URLs are supplied. |
| Official Business Story / History | **Pending** | Short factual architectural summary with explicit disclosure note on `about.html`. No invented founding date, awards, or testimonials. |

---

## 7. Technical Design Tokens

```css
:root {
  --color-brand: #BF5501;
  --color-brand-light: #E88432;
  --color-brand-ink: #8C3B00;
  --color-brand-strong: #A34600;
  --color-brand-deep: #7A3200;
  --color-brand-muted: #F9E5D2;
  --color-charcoal: #211F1D;
  --color-charcoal-soft: #3B302B;
  --color-cream: #F4EEE7;
  --color-beige: #E7DCD0;
  --color-text-dark: #292522;
  --color-text-light: #F4EEE7;
  --color-text-muted-dark: #4A433C;
  --color-text-muted-light: #CBBFB3;
  --color-olive: #7C8655;
  --color-olive-deep: #6D784A;
  --color-line-dark: rgba(41, 37, 34, 0.22);
  --color-line-light: rgba(244, 238, 231, 0.22);
  --gradient-brand: linear-gradient(135deg, #A34600 0%, #7A3200 100%);
  --gradient-dark: linear-gradient(135deg, #211F1D 0%, #3B302B 100%);
  --content-width: 1240px;
  --gutter: clamp(20px, 4.8vw, 64px);
  --section-space: clamp(68px, 9vw, 128px);
  --header-height: 84px;
  --radius: 2px;
  --focus-inner: #F4EEE7;
  --focus-outer: #211F1D;
}
```

---

## 8. Design Acceptance Checklist

- [x] Official NAKA SVG lockups follow adaptive color rules across `#8C3B00`, `#FFFFFF`, and `#211F1D` grounds.
- [x] Calibrated terracotta system (`#BF5501`, `#8C3B00`, `#A34600`, `#7A3200`, `#E88432`, `#F9E5D2`) paired with Charcoal (`#211F1D`), Cream (`#F4EEE7`), Beige (`#E7DCD0`), and restrained Olive (`#7C8655`).
- [x] Single self-hosted variable `Instrument Sans` typography with tabular numerals for menu prices and phone numbers.
- [x] 3-page static architecture (`index.html`, `menu.html`, `about.html`) with 6 consistent navigation links (`Home`, `Menu`, `About`, `Our Space`, `Location`, `Contact`) and updated footer `Explore` directory (`Home`, `Menu`, `About`, `Our Space`, `Location`).
- [x] Home (`index.html`) features the tall full-viewport unobstructed `.hero-photo` (`clamp(640px, 106svh, 1120px)` desktop) above `.hero-intro` (carrying the concise brand intro and `Read About NAKA` link), the Cream `#menu-preview` Menu Showcase Teaser with real NAKA product specimens and `Explore Full Menu` CTA, the dominant Terracotta `#visit-info` Plan Your Visit & 5-item Outlet Facilities band, and Find Us with verified Ciracas address, live Google Maps embed, and daily hours `09:00 - 23:00`.
- [x] Menu (`menu.html`) follows the two-part browse-only architecture (Terracotta Ink Header -> Cream `.menu-studio` Split Studio Showcase -> Charcoal `#menu-book` Animated 10-Page Editorial Menu Book -> Terracotta Ink Footer) covering all **68 main items + 4 Coffee Add-Ons** across 8 categories (`6 Coffee + 4 Add-Ons`, `7 Cold Brew`, `11 Signature Coffee`, `15 More Drinks`, `14 Snacks`, `5 Nusantara`, `5 Donburi`, `5 Ramen`), with 8 custom `1.5px` SVG category tabs (no `All` button, defaulting to `Coffee`, supporting `?category=` deep links), Beige `.menu-visual-stage` with borderless real 32-bit RGBA specimens (no outer box borders or inset hairline frames, zero captions underneath), compact 2-column `.menu-items-grid` ledger with tabular `K` prices, and Heyzine-style 3D `rotateY` flipbook (6 desktop book states on `> 900px` from `Page 01` closed cover through `Pages 02 - 03`..`Pages 08 - 09` to `Page 10` closing page, single-page `Page 01 / 10` to `Page 10 / 10` on `<= 900px`, layered paper-edge stacks, no visible Previous/Next buttons, direct pointer/touch drag-to-flip tracking cursor/finger live across the spine and click-to-flip pages with subtle outer-corner lift/fold hover cue, bottom `1-10` range scrubber slider, chapter quick-jump buttons, keyboard Left/Right arrows on the focusable book stage, `#page/1`..`#page/10` hash support, respecting `prefers-reduced-motion: reduce`) plus `Open Original Heyzine Flipbook` link.
- [x] Flat rectilinear surfaces (`0-2px` corners, `50%` strictly for `.social-circle`), zero decorative shadows or pill shapes, and zero em dashes in UI copy.
- [x] Confirmed facts and pending prototype placeholders are cleanly separated and honestly disclosed.
