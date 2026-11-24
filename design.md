# NAKA Coffee and Space --- Design Specification

> **Document:** `design.md`\
> **Project:** NAKA Coffee and Space Company Profile\
> **Version:** 1.0\
> **Design direction:** Modern Industrial Coffee Brand\
> **Primary format:** Responsive single-page website

------------------------------------------------------------------------

## 1. Project Overview

Create a modern, visually distinctive company profile website for **NAKA
Coffee and Space**, an Indonesian coffee shop.

The website acts as NAKA's digital brand presence and promotional
platform. It introduces the business, communicates its atmosphere,
showcases the physical space, provides location information, and directs
visitors to NAKA's social channels.

The design should feel authentic to the physical coffee shop rather than
like a generic café template.

### Primary objectives

-   Introduce NAKA Coffee and Space and its identity.
-   Showcase the café's atmosphere, seating areas, and facilities.
-   Make location information easy to find through an embedded map and
    directions link.
-   Provide clear access to Instagram and WhatsApp.
-   Deliver a polished experience on desktop and mobile devices.

### Out of scope

This is a company profile, not a transactional application. The initial
version does **not** require:

-   User registration or login.
-   Admin dashboard.
-   Database.
-   Online ordering or payment.
-   Reservation management.
-   Backend services.

------------------------------------------------------------------------

## 2. Brand Identity

### 2.1 Visual direction

**Modern Industrial Coffee Brand**

The visual language takes inspiration from NAKA's actual outdoor area:

-   Terracotta-orange exterior wall.
-   Black metal structural elements.
-   Grey concrete and paving.
-   Green trees and natural surroundings.
-   Simple café furniture and open-air seating.

Combine these details into a modern, warm, editorial website. Use strong
typography, generous spacing, clear layouts, and authentic photography.

### 2.2 Color palette

Use the following colors consistently:

  -----------------------------------------------------------------------
  Token                   Hex                     Intended use
  ----------------------- ----------------------- -----------------------
  `brand-terracotta`      `#C84F2D`               Primary brand color,
                                                  highlights, CTA accents

  `brand-charcoal`        `#211F1D`               Dark sections, navbar,
                                                  footer, overlays

  `background-cream`      `#F4EEE7`               Main light background

  `surface-beige`         `#E7DCD0`               Secondary surfaces and
                                                  image captions

  `text-dark`             `#292522`               Text on light
                                                  backgrounds

  `text-light`            `#F4EEE7`               Text on dark
                                                  backgrounds

  `accent-olive`          `#7C8655`               Optional, restrained
                                                  natural accent
  -----------------------------------------------------------------------

### 2.3 Gradient guidance

Use gradients as supporting visual elements, not as decoration on every
section.

Suggested gradients:

``` css
/* Brand gradient */
linear-gradient(135deg, #C84F2D 0%, #8F3524 100%);

/* Dark overlay */
linear-gradient(90deg, rgba(33, 31, 29, 0.82), rgba(33, 31, 29, 0.18));

/* Dark section gradient */
linear-gradient(135deg, #211F1D 0%, #3B302B 100%);
```

Use a dark overlay over hero photography when text needs stronger
contrast. Avoid neon colors, oversaturated orange, and excessive
gradient effects.

### 2.4 Typography

Use a distinctive display typeface for large headings and a highly
readable sans-serif for body text.

Suggested pairing:

-   Display: `DM Serif Display` or `Playfair Display`.
-   Body and navigation: `DM Sans` or `Inter`.

Typography guidance:

-   Large, confident hero headline.
-   Clear hierarchy between section headings and body copy.
-   Short paragraphs with comfortable line height.
-   Avoid overly decorative fonts for navigation and body text.

### 2.5 Logo

Place the NAKA logo or wordmark at the **top-left** of the navigation
bar.

Until the official logo file is supplied, use a clean text-based
placeholder reading `NAKA`. Do not invent a new official logo or alter
the brand mark.

------------------------------------------------------------------------

## 3. Website Structure

Build a **single-page scrolling website** with the following sections:

1.  Navigation bar
2.  Hero
3.  About NAKA
4.  Our Space
5.  Gallery
6.  Location
7.  Contact
8.  Footer

Navigation links should scroll to their corresponding sections.

------------------------------------------------------------------------

## 4. Section Specifications

### 4.1 Navigation Bar

**Purpose:** Provide clear navigation and persistent brand recognition.

Requirements:

-   NAKA wordmark/logo on the left.
-   Navigation links on the right:
    -   Home
    -   About
    -   Our Space
    -   Gallery
    -   Location
    -   Contact
-   Sticky navigation after scrolling.
-   Smooth-scroll navigation.
-   Responsive mobile menu.
-   Use a transparent or dark treatment over the hero, then transition
    to a solid dark or cream background when scrolling, depending on
    contrast with the section underneath.

### 4.2 Hero Section

**Purpose:** Make a strong first impression and immediately communicate
the brand.

Requirements:

-   Full-width, high-quality photograph of the actual NAKA café.
-   Large headline: `NAKA COFFEE AND SPACE`.
-   Suggested tagline: `A Place to Connect and Enjoy Your Moment.`
-   Primary CTA: `Explore Our Space`.
-   Secondary CTA: `Find Our Location`.
-   Dark charcoal overlay or subtle terracotta-to-charcoal gradient
    behind the text.
-   Ensure text remains readable over the photograph.
-   Keep the composition uncluttered and editorial.

The hero should use real NAKA photography when available. Do not present
generated or unrelated café imagery as a photograph of the actual
location.

### 4.3 About NAKA

**Purpose:** Introduce the business and communicate its identity.

Layout:

-   Editorial split layout: photography on one side, text on the other.
-   Clear section heading such as `Discover NAKA`.
-   Short introduction describing NAKA Coffee and Space.
-   Keep copy factual and concise.

Content rules:

-   Do not invent the founding date, business history, awards, or brand
    claims.
-   Use temporary copy placeholders until the owner provides approved
    information.

### 4.4 Our Space

**Purpose:** Show the physical environment and visitor experience.

Showcase available areas, such as:

-   Outdoor seating.
-   Communal tables.
-   Café interior or service area, if photographs are available.
-   Surrounding greenery and atmosphere.

Use a balanced image grid or editorial split layout. Each image should
have consistent cropping and subtle hover treatment.

Only label facilities that are confirmed to exist at NAKA.

### 4.5 Gallery

**Purpose:** Create a visual overview of NAKA.

Requirements:

-   Responsive editorial grid or masonry-inspired layout.
-   Use actual photographs of NAKA.
-   Consistent image spacing and corner treatment.
-   Optional subtle hover zoom.
-   Avoid excessive captions or decorative frames.

### 4.6 Location

**Purpose:** Help visitors find the café.

Requirements:

-   Section heading: `Find Us`.
-   Embedded Google Maps iframe placeholder.
-   Official address placeholder.
-   `Get Directions` button linking to the correct Google Maps
    destination.
-   Layout should work on desktop and mobile.

Do not invent an address, coordinates, map embed, or directions URL.
Replace placeholders only after the official location is confirmed.

### 4.7 Contact

**Purpose:** Give visitors a direct way to contact NAKA.

Include:

-   Instagram link.
-   WhatsApp contact button.
-   Optional short invitation such as `Let's Connect`.
-   Use placeholders until the official profile URL and WhatsApp number
    are supplied.

External links should open appropriately and be clearly identifiable.

### 4.8 Footer

Include:

-   NAKA wordmark/logo.
-   Short brand description.
-   Quick navigation links.
-   Instagram link.
-   WhatsApp link.
-   Confirmed address or location link.
-   Copyright notice.

Keep the footer visually connected to the charcoal and terracotta brand
palette.

------------------------------------------------------------------------

## 5. Layout and Responsive Behavior

### Desktop

-   Prioritize a wide, editorial composition.
-   Use a centered content container with consistent maximum width.
-   Allow hero photography to span the viewport.
-   Use two-column layouts where they improve storytelling.
-   Keep section spacing generous.

### Tablet

-   Reduce horizontal padding.
-   Allow split layouts to become narrower or stack when needed.
-   Keep navigation usable without crowding.

### Mobile

-   Use a compact navigation menu.
-   Stack split layouts vertically.
-   Keep headings readable and avoid oversized text that causes
    overflow.
-   Use full-width or appropriately cropped images.
-   Make CTA buttons easy to tap.
-   Ensure the map fits the viewport.
-   Prevent horizontal scrolling.

------------------------------------------------------------------------

## 6. Interaction and Motion

Use subtle motion to improve the experience without distracting
visitors.

Required interactions:

-   Sticky navigation.
-   Smooth scrolling between sections.
-   Mobile navigation open/close behavior.
-   Subtle section reveal or fade-in effects.
-   Gentle image hover transitions on devices that support hover.
-   Clear button hover, focus, and active states.
-   Working external links for maps, Instagram, and WhatsApp.

Accessibility and usability:

-   Respect `prefers-reduced-motion`.
-   Provide visible keyboard focus states.
-   Use semantic headings and landmarks.
-   Add meaningful alt text to informative images.
-   Maintain sufficient text/background contrast.
-   Do not rely on color alone to communicate information.

------------------------------------------------------------------------

## 7. Photography and Asset Requirements

Use real NAKA photographs wherever possible.

Suggested assets to collect:

-   Official NAKA logo (preferably SVG or transparent PNG).
-   Wide exterior or outdoor-area photograph for the hero.
-   Additional outdoor seating photographs.
-   Interior photographs, if applicable.
-   Coffee and food photographs, if available.
-   Gallery photographs.
-   Official Google Maps destination.
-   Official Instagram URL.
-   Official WhatsApp contact link.

Image handling:

-   Use appropriately sized images.
-   Preserve the subject when cropping.
-   Use `object-fit: cover` for image cards where suitable.
-   Add descriptive alt text.
-   Avoid stretching images.
-   Do not use stock imagery in a way that misrepresents the actual
    café.

------------------------------------------------------------------------

## 8. Content and Placeholder Policy

The following information must be confirmed before launch:

  Information                     Status
  ------------------------------- -----------------
  Official logo                   To be supplied
  Official business description   To be confirmed
  Official address                To be confirmed
  Google Maps destination         To be supplied
  Instagram URL                   To be supplied
  WhatsApp number/link            To be supplied
  Approved café photographs       To be supplied

Use clear placeholders for missing information. Do not fabricate
business details, menu items, prices, opening hours, or customer
testimonials.

------------------------------------------------------------------------

## 9. Technical Design Handoff

The design should be practical to implement as a responsive company
profile website.

Recommended implementation:

-   HTML for semantic structure.
-   CSS for layout, typography, colors, gradients, and responsive
    behavior.
-   JavaScript for mobile navigation, smooth scrolling enhancements, and
    small interactions.
-   Google Maps iframe for the location section.
-   Direct external links for Instagram and WhatsApp.

Keep the implementation lightweight. Avoid adding unnecessary frameworks
or backend dependencies for this project.

### Suggested design tokens

``` css
:root {
  --color-brand: #C84F2D;
  --color-charcoal: #211F1D;
  --color-cream: #F4EEE7;
  --color-beige: #E7DCD0;
  --color-text-dark: #292522;
  --color-text-light: #F4EEE7;
  --color-olive: #7C8655;

  --gradient-brand: linear-gradient(
    135deg,
    #C84F2D 0%,
    #8F3524 100%
  );

  --gradient-dark: linear-gradient(
    135deg,
    #211F1D 0%,
    #3B302B 100%
  );

  --content-width: 1200px;
}
```

------------------------------------------------------------------------

## 10. Design Acceptance Checklist

The design is ready for implementation when:

-   [ ] NAKA logo/wordmark is visible at the top-left.
-   [ ] The terracotta `#C84F2D` is the primary brand color.
-   [ ] Charcoal and cream create a balanced visual contrast.
-   [ ] The hero uses a strong café photograph and readable overlay.
-   [ ] All required sections are present in one continuous page.
-   [ ] Navigation links point to the correct sections.
-   [ ] Location section has a clearly marked map placeholder.
-   [ ] Instagram and WhatsApp actions are represented.
-   [ ] Desktop and mobile layouts are both designed.
-   [ ] Buttons, links, and navigation have clear interaction states.
-   [ ] Missing business information remains placeholder content.
-   [ ] The overall result feels authentic to NAKA's actual environment.

------------------------------------------------------------------------

## 11. Instructions for Google Stitch

Use this document as the source of truth for the website's visual
direction and structure.

Generate the complete desktop homepage first, followed by its responsive
mobile version.

Prioritize the navigation, hero composition, typography,
terracotta/charcoal gradient treatment, and section transitions.

Use realistic image placeholders that can later be replaced with actual
NAKA photographs. Keep the design consistent across all sections.

Do not invent official business information or create unsupported brand
claims.
