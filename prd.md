ROLE
You are a senior frontend engineer and UI designer specialized in premium B2B telecom and infrastructure websites.

GOAL
Build a modern premium multipage corporate website for a German telecom company named ConnexaLine using Astro with static output only.

IMPORTANT
The final result must be a fully static site that can be uploaded to shared hosting (Hostinger). No server runtime, no Node on the server.

TECH STACK
- Astro (static site generation)
- Tailwind CSS
- Motion One for animations
- Minimal JavaScript
- Static export to /dist
- No React runtime on the client unless absolutely required

BRANDING (LOCKED)
- Brand: ConnexaLine
- Tagline: Verbindung, die Zukunft schafft.
- Primary accent color: #1EC8E8
- Background: #0B0E11
- Text color: #FFFFFF
- Muted text: #A7B0B8
- Style: industrial, telecom grade, trustworthy, German enterprise
- No neon glow, no loud gradients, no gimmicks

SITE STRUCTURE (LEAN MULTIPAGE)
Create only these routes:

- / (Home)
- /services
- /services/ftth
- /services/infrastructure
- /services/maintenance
- /projects
- /about
- /contact
- /impressum
- /datenschutz

IMPORTANT STRUCTURE RULES
- Do NOT create a standalone /process page
- The process must be embedded as a section on:
  - Home page
  - Services overview page

ARCHITECTURE
- Shared BaseLayout (navigation + footer)
- Reusable components:
  - Hero
  - SectionHeader
  - ServiceCard
  - ProcessSteps
  - ProjectCard
  - CTASection
- Clean folder structure
- SEO friendly markup

HOME PAGE (/)
Hero section:
- Headline:
  ConnexaLine Verbindung, die Zukunft schafft.
- Intro text (3 to 4 lines):
  ConnexaLine ist Ihr Partner für moderne Telekommunikations und Glasfaserinfrastruktur.
  Von Planung über Bau bis Aktivierung zuverlässig effizient deutschlandweit.
- Primary CTA: Projekt anfragen
- Secondary CTA: Kontakt aufnehmen

Home sections:
- Services overview (3 cards linking to service subpages)
- Embedded process section (5 steps)
- Trust metrics (realistic placeholders)
- Featured projects (3 cards)
- CTA section

SERVICES OVERVIEW (/services)
- Intro explaining service scope
- Grid of 3 service cards:
  - Glasfaser und Telekommunikation
  - Infrastruktur und Bau
  - Service und Wartung
- Embedded process section
- CTA

SERVICE DETAIL PAGES
Each service page must include:
- Clear description of the problem
- What ConnexaLine delivers
- How we work
- Typical clients
- CTA linking to /contact

Service pages:
- /services/ftth
- /services/infrastructure
- /services/maintenance

PROJECTS PAGE (/projects)
- Grid of 6 project cards
- Each card includes:
  - Project title
  - Scope
  - Location tag
  - Services involved
- Keep claims realistic and credible

ABOUT PAGE (/about)
- Company overview
- Values:
  - Zuverlässigkeit
  - Qualität
  - Dokumentation
  - Sicherheit
- Short explanation of experience and coverage
- CTA

CONTACT PAGE (/contact)
- Contact information placeholders (phone, email, address)
- Static contact form with fields:
  Name
  Firma
  Email
  Telefon
  Nachricht
  GDPR consent checkbox
- Include note that a form service is required (Formspree or similar)

LEGAL PAGES
- /impressum
- /datenschutz
Use clean layouts with placeholders suitable for German legal requirements

NAVIGATION
- Sticky navigation on all pages
- Active page indicator
- Mobile menu
- Clear hierarchy
- Footer with legal links

ANIMATIONS (SUBTLE AND PREMIUM)
- Use Motion One
- Hero content animates on load (fade and slide)
- Sections reveal on scroll using IntersectionObserver
- Buttons and cards have gentle hover and tap interactions
- No animation overload

CONTENT RULES
- German language only
- Do NOT use dash characters in text
- Professional, direct tone
- No buzzwords
- No exaggerated marketing claims

PERFORMANCE
- Fast loading
- Minimal JavaScript
- Accessible contrast
- Semantic HTML

OUTPUT REQUIREMENTS
- Provide full Astro project structure
- Tailwind configuration
- Key components
- All page files
- Ensure astro build outputs a static /dist folder ready for upload

PRIORITY RULE
If there is a choice between cool and trustworthy, always choose trustworthy.

PREMIUM MOTION AND EFFECTS RULES

Implement a restrained premium motion system suitable for a German B2B telecom and infrastructure brand.

RULES
- Motion must feel engineered, calm, and intentional
- No flashy effects, no parallax, no looping animations
- Animations must enhance hierarchy and readability

ENTRANCE ANIMATIONS
- Fade in and slide up by 12 to 20px
- Duration between 0.6s and 0.8s
- Ease out only
- Stagger children by 80ms
- Animate once on first scroll reveal

SCROLL BEHAVIOR
- Use IntersectionObserver
- Do not re animate on scroll up
- No continuous motion tied to scroll position

CARDS
- Subtle hover elevation
- Border highlight using brand accent color
- Max scale 1.01
- TranslateY max -2px

BUTTONS
- Hover: slight background brightness change
- Tap: scale to 0.98 for 100ms
- No bounce or elastic easing

NAVIGATION
- Sticky navigation
- Background transitions from transparent to solid on scroll
- Subtle backdrop blur
- Active link underline animates in

VISUAL DEPTH
- Use spacing, borders, shadows, and typography
- Prefer whitespace over visual noise
- Dark layered backgrounds instead of gradients

QUALITY CONTROL
If an animation draws attention to itself, remove it.
If unsure, reduce intensity by 50 percent.

The result must feel premium, calm, and trustworthy.

Do not include explanations.
Output only the final code and project structure.