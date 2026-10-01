# SGS (Sanskar Growth Solutions) — UI Reference Guide

> **Single Source of Truth**: This reference guide codifies the official **SGS Brand Guidelines** (Canva release, 22 Sept 2026). Every designer, developer, and agent working on the SGS interface must strictly adhere to these specifications. Do not invent alternative colors, fonts, shapes, or design trends.

---

## 1. Brand Identity & Positioning

* **Company Name**: Sanskar Growth Solutions (SGS)
* **Tagline**: *"Your Growth. Our Mission."*
* **Core Value Statement**: *"Integrated solutions to build, grow, and scale your business."*
* **Mission**: *"To help businesses achieve measurable and sustainable growth through innovative, result-driven solutions while building long-term partnerships based on trust, quality, and transparency."*
* **Vision**: *"To become a globally trusted business growth company, empowering organizations through technology, digital innovation, strategic marketing, business media, and integrated growth solutions."*
* **Positioning**: One strategic partner integrating **Technology, Marketing, Branding, Business Media, Consulting, and AI Solutions** for startups, SMEs, and mid-market enterprises.
* **Brand Personality**: **Strategic, Professional, Confident, Clear, Innovative, Reliable**.

---

## 2. Color System & Accessibility Matrix

### 2.1 The 5 Official Brand Colors

| Color Name | Hex Code | Role in Interface | Usage Rules |
| :--- | :--- | :--- | :--- |
| **Midnight** | `#0F1B64` | **Depth / Primary Dark Canvas** | Header/footer backgrounds, navigation, deep section canvas, authoritative cards, text on Lime buttons. |
| **Lime Charge** | `#AFEB00` *(Alt: `#AFEB00`)* | **Accent / Primary CTA** | Primary CTA buttons, key growth metrics, active tab indicators, text selection, high-contrast highlights. |
| **Electric Blue** | `#2033FF` | **Secondary Brand Surface & Accent** | Section kickers, secondary CTAs, hyperlinks, active states, strategic feature callouts, visual framing. |
| **Cloud** | `#F5FAFF` | **Neutral Light Surface** | Clean light section canvas, card backgrounds, alternating section rhythm, subtle dividers. |
| **Ink** | `#141414` | **High-Contrast Text** | Primary typography on light surfaces (Cloud/White), high-contrast labels on Lime buttons. |

*Additional neutral surfaces*:
* **Elevated White**: `#FFFFFF` (for crisp cards on Cloud `#F5FAFF` canvas).
* **Muted Ink**: `#525252` (for secondary supporting descriptions).
* **Border Neutral**: `#E2E8F0` / `#DDE8F5` (light mode) and `rgba(255, 255, 255, 0.15)` (dark mode).

### 2.2 Approved Color Combinations & WCAG Accessibility

Only use these 5 documented high-contrast combinations:

1. **Electric Blue Canvas (`#2033FF`)**:
   - Primary text: White (`#FFFFFF`)
   - Supporting text: Cloud (`#F5FAFF`)
2. **Lime Charge Canvas (`#AFEB00` / `#AFEB00`)**:
   - Primary text: Midnight (`#0F1B64`) or Ink (`#141414`)
   - Supporting text: White (`#FFFFFF`) *(for bold/high-weight accents only)*
3. **Midnight Canvas (`#0F1B64`)**:
   - Primary text: White (`#FFFFFF`)
   - Accents / Kickers: Electric Blue (`#2033FF`) or Lime Charge (`#AFEB00`)
4. **Cloud / Light Canvas (`#F5FAFF` / `#FFFFFF`)**:
   - Primary text: Ink (`#141414`)
   - Accents / Links: Electric Blue (`#2033FF`) or Midnight (`#0F1B64`)
5. **Ink Canvas (`#141414`)**:
   - Primary text: White (`#FFFFFF`)
   - Accent text: Lime Charge (`#AFEB00`)

---

## 3. Logo Anatomy & Usage Guidelines

### 3.1 Anatomical Structure
* **Monogram**: Geometric **SGS** letterforms with bold rounded edges.
* **Growth Symbol**: An upward-moving arrow integrated into the counter of the letter **"G"**, signifying upward movement, business advancement, and compounding growth.
* **Full Wordmark**: `"SANSKAR GROWTH SOLUTIONS"` with `"GROWTH"` rendered in **Lime Charge**, and `"SANSKAR"` and `"SOLUTIONS"` rendered in **White** (or Midnight on light canvas).

### 3.2 Lockup Variations & Application
1. **Primary Horizontal Lockup**:
   - Monogram on top with underline rule and `"SANSKAR GROWTH SOLUTIONS"` below, or side-by-side horizontal lockup.
   - *Use Case*: Website navbar, hero headers, presentations, proposals, and official documents.
2. **Secondary Stacked Lockup**:
   - Monogram on left with stacked `"SANSKAR"`, `"GROWTH"`, `"SOLUTIONS"`.
   - *Use Case*: Medium-width containers, collateral, sidebars.
3. **Standalone Monogram**:
   - Standalone **SGS** mark with the upward green arrow inside the "G".
   - *Use Case*: Mobile headers, web favicons, app icons, social avatars, and spaces narrower than $90\text{ px}$.

### 3.3 Protection Rules
* **Clear Space**: Maintain a minimum clear space of **$0.5X$** (where $X$ is the height of the logo mark) around all sides. No text, imagery, or UI borders may encroach.
* **Minimum Digital Width**: **$90\text{ px}$**. (If available space is $<90\text{ px}$, switch to the standalone monogram).
* **Minimum Print Width**: **$25\text{ mm}$**.
* **Zero Distortion**: Prohibit skewing, rotating, altering letterform proportions, or reconstructing the logo using CSS fonts.

---

## 4. Typography Scale & Editorial Hierarchy

### 4.1 Approved Font Families
* **Heading Font**: **Space Grotesk** (`font-heading`) — Modern, geometric, technical, confident.
* **Body Font**: **DM Sans** (`font-sans` / `font-body`) — Clean, neutral, highly legible corporate grotesque.
* **Prohibited Fonts**: No serif fonts (`Playfair Display`, `Georgia`), no handwritten scripts (`Caveat`, `Brush`), no generic system fallbacks.

### 4.2 Exact Typographic Scale

| Level | Font Family | Size (Reference / Web) | Line Height | Weight | Usage |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Title (H1)** | Space Grotesk | $60\text{ pt}$ (`text-4xl sm:text-5xl lg:text-6xl`) | `1.08` | Bold (700) | Hero headlines, primary value statements |
| **Heading (H2)** | Space Grotesk | $32\text{ pt}$ (`text-2xl sm:text-3xl lg:text-4xl`) | `1.15` | Bold (700) | Major section headers |
| **Subtitle (H3)** | DM Sans | $24\text{ pt}$ (`text-lg sm:text-xl lg:text-2xl`) | `1.3` | Medium (500) | Section lead-ins, executive overviews |
| **Section Header** | Space Grotesk | $16\text{ pt}$ (`text-base sm:text-lg`) | `1.4` | SemiBold (600) | Card titles, methodology step titles |
| **Subheading / Kicker** | Space Grotesk | $12\text{ pt}$ (`text-xs font-mono`) | `1.4` | Bold (700), Track `0.2em` | Category kickers, eyebrow tags, status pills |
| **Body** | DM Sans | $12\text{ pt}$ (`text-xs sm:text-sm lg:text-base`) | `1.6` | Regular (400) | Descriptive paragraphs, capability narratives |
| **Quote** | DM Sans | $15\text{ pt}$ (`text-sm sm:text-base`) | `1.5` | Medium (500) | Executive testimonials, pull-quotes |
| **Caption** | DM Sans | $9\text{ pt}$ (`text-[10px] sm:text-xs`) | `1.4` | Regular / Medium | Form labels, SLAs, metadata, footers |

---

## 5. Signature Geometric Brand Motifs

Use these 5 geometric forms from the brand guidelines as recurring visual motifs:

1. **Blue Domes / Semicircles**: Vertical stacked half-circle arches representing architectural solidity and foundation.
2. **Triple Lime Ovals**: Three ascending vertical capsule pills representing energy, momentum, and growth acceleration.
3. **Concentric Nested Squares**: Electric Blue bounding frame $\rightarrow$ Lime Square $\rightarrow$ Midnight Core $\rightarrow$ White Center.
4. **Diagonal Ribbon / Zigzag**: $45^\circ$ angular blue and midnight diagonal geometric facets.
5. **2x2 Geometric Quadrant Block**: Alternating solid color tiles creating structured rhythm.

---

## 6. Brand Voice & Tone Matrix

### 6.1 Core Voice Attributes
* **Strategic**: Connect every action to a commercial objective. *"We focus on the outcome, not just the service."*
* **Innovative**: Harness cutting-edge tech and practical AI. *"Technology becomes valuable when it creates real business impact."*
* **Result-Driven**: Obsess over EBITDA, conversions, and measurable velocity. *"Every initiative should contribute to meaningful growth."*
* **Trustworthy**: Deliver total transparency and IP ownership. *"Strong growth begins with a strong partnership."*

### 6.2 Channel Tone Calibration
* **Website UI**: Professional, confident, strategic.
  * *"Integrated technology, marketing, and business solutions designed around your growth."*
* **Social Media**: Clear, energetic, forward-thinking.
  * *"Build smarter. Grow faster. Scale with confidence."*
* **Business Proposals**: Consultative, precise, result-driven.
  * *"We align strategy, technology, and execution with your business objectives to create measurable outcomes."*
* **Client Communication**: Professional, transparent, collaborative.
  * *"Let's understand your business goals and build a solution that delivers measurable value."*
* **Marketing Campaigns**: Bold, concise, growth-focused.
  * *"Your business has potential. Let's turn it into growth."*
* **Corporate & Media**: Authoritative, credible, visionary.
  * *"Empowering businesses through technology, innovation, and strategic growth."*

---

## 7. Component Rules & Layout Architecture

### 7.1 Buttons & Interactive CTAs
* **Primary Button (`.btn-sgs-primary`)**:
  * Surface: Lime Charge (`bg-[#AFEB00]`, Hover: `hover:bg-[#9CD100]`)
  * Label: Midnight (`text-[#0F1B64]`) or Ink (`text-[#141414]`), Space Grotesk Bold
  * Geometry: **`rounded-xl`** (Avoid arbitrary `rounded-full` pill buttons for standard CTAs)
  * Spacing: `px-7 py-3.5` (desktop), `px-5 py-3` (mobile)
  * Interaction: `hover:-translate-y-0.5 shadow-lg shadow-[#AFEB00]/25 transition-all`
* **Secondary Button (`.btn-sgs-secondary`)**:
  * Surface on Dark: Midnight `bg-[#0F1B64] text-white border border-white/20 hover:bg-[#2033FF]`
  * Surface on Light: White `bg-white text-[#0F1B64] border border-slate-300 hover:bg-[#F5FAFF]`
  * Geometry: **`rounded-xl`**

### 7.2 Card Architecture
* **Do NOT build walls of identical cards**.
* Radius: **`rounded-2xl`** (desktop) or **`rounded-xl`** (compact). Avoid bubbly `rounded-3xl` cards.
* Borders: Subtle 1px structural framing (`border-white/15` on dark canvas; `border-slate-200` on light canvas).
* Photographic Cards: Maintain gentle, bottom-only overlays (75%–85% image visibility) with crisp text drop shadows for legibility.

### 7.3 Page Rhythm & Section Transitions
Pages must transition harmoniously between:
1. **Midnight Depth (`#0F1B64`)**: High-authority hero, bottom summit banner, and footer.
2. **Cloud Light (`#F5FAFF` / White)**: Approach timeline, capabilities spread, client case studies.
3. **Electric Blue Accents (`#2033FF`)**: Strategic banners and key diagnostic callouts.
4. **Lime Charge Moments (`#AFEB00`)**: Conversion CTAs, KPI stat numbers, and growth indicators.

---

## 8. Anti-Patterns (Strictly Prohibited)

* ❌ **No generic SaaS startup templates**: Avoid cartoon illustrations and floating blobs.
* ❌ **No decorative serif or script fonts**: Do not use `Playfair Display`, `Caveat`, or handwritten styles.
* ❌ **No excessive pill-shaped buttons**: Restrict pills to small metadata badges; standard buttons must be `rounded-xl`.
* ❌ **No neon cyberpunk styling**: Avoid heavy glow rings and rainbow borders.
* ❌ **No AI-generated looking imagery**: Use authentic, premium corporate and tech photography.
* ❌ **No rogue colors**: Do not introduce off-brand greens (`#10B981`, `#22C55E`), yellows, or purples.
