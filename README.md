# Accredit Enterprise

Build a modern, responsive marketing website called "Accredian Enterprise" —

an enterprise upskilling/L&D platform that partners with IITs, IIMs, and

global universities to train corporate teams in Data Science, AI, Product

Management, and Leadership.

IMPORTANT TECHNICAL CONSTRAINT:

This project will later be migrated into a Next.js 14 App Router app. So:

- Use functional components + hooks only (no class components).

- Do NOT use react-router-dom for navigation — use plain anchor links / smooth

  scroll to in-page sections (this is a single landing page with anchor nav).

- Keep each section as its own reusable component file (e.g. Hero.jsx,

  Features.jsx, HowItWorks.jsx, Testimonials.jsx, LeadForm.jsx, Footer.jsx)

  inside a /components folder, and compose them in a single Home/Landing page —

  this mirrors how Next.js App Router pages will import them later.

- Use Tailwind CSS for all styling (no styled-components, no CSS-in-JS).

- Avoid any Vite-only or browser-storage APIs (no localStorage/sessionStorage

  for anything that must persist — use React state, and API calls for

  persistence).

DESIGN DIRECTION:

Clean, confident, enterprise-SaaS aesthetic (think Notion/Linear/enterprise

EdTech) — generous whitespace, a strong primary accent color, subtle gradients

or soft shadows, no clutter. Fully responsive (mobile-first, then tablet,

then desktop). Smooth scroll navigation between sections.

SECTIONS TO BUILD:

1. Navbar (sticky)

   - Logo/wordmark, in-page nav links (Programs, Why Us, How It Works,

     Testimonials, Contact), a prominent "Book a Demo" CTA button.

   - Collapses into a mobile hamburger menu with slide-in drawer below md.

2. Hero

   - Headline: "Upskill Your Workforce at Scale"

   - Subheadline about partnering with IITs, IIMs, and global universities

     for curated programs, live mentorship, and real-time analytics.

   - Primary CTA ("Talk to Us") + secondary CTA ("Explore Programs").

   - A supporting visual/illustration or stat strip (e.g. "500+ mentors",

     "94% completion rate", "300+ enterprises").

3. Trusted By / Logo strip

   - Row of placeholder partner/university logos (grayscale, hover color).

4. Why Accredian Enterprise (feature grid)

   - Reusable <FeatureCard icon title description /> component, 6 cards:

     Curated curriculum with IIT/IIM partners, Live 1:1 mentorship,

     Real-time analytics & ROI dashboard, Cohort-based peer learning,

     Fully customizable programs, Globally recognized certifications.

5. How It Works (process timeline)

   - 4 numbered steps as a horizontal stepper on desktop, vertical stack on

     mobile: Skill-gap assessment → Custom curriculum co-design → Team

     onboarding & mentor assignment → Ongoing analytics & reviews.

6. Analytics/Dashboard showcase

   - A section describing the real-time analytics dashboard (completion

     rates, engagement metrics, ROI reporting) with a mock dashboard

     screenshot/illustration or simple animated stat cards.

7. Testimonials

   - Reusable <TestimonialCard quote name role company /> component.

     Carousel or grid of 3, each an L&D leader / CHRO quote about outcomes

     (e.g. improved team velocity, high completion rates).

8. Lead Capture Form (BONUS — build this)

   - Fields: Full Name, Work Email, Company Name, Team Size (dropdown),

     Area of Interest (multi-select or dropdown: AI/ML, Data Science,

     Product, Leadership), Message (optional).

   - Client-side validation (required fields, email format).

   - On submit, call a POST request to `/api/leads` (this will hit the

     Node.js backend later — for now, mock it with a fake async function

     and show a success/error toast/state).

   - Loading and success states clearly shown to the user.

9. FAQ (accordion) — 4-5 common questions enterprises would ask.

10. Footer

    - Columns: Company, Programs, Resources, Contact + social icons +

      newsletter signup input + copyright.

EXTRA UX IMPROVEMENTS TO ADD (beyond the reference site):

- Smooth scroll + active-link highlighting in navbar based on scroll position.

- Scroll-reveal fade/slide-in animations on each section (subtle, not gimmicky).

- A sticky "Book a Demo" button that appears on scroll for mobile.

- Skeleton/loading state pattern used consistently wherever data is fetched.

- Accessible markup: semantic HTML5 tags, alt text, proper heading hierarchy,

  focus states on all interactive elements, keyboard-navigable mobile menu.

- Dark-mode-ready color tokens (even if you only ship light mode, use

  Tailwind CSS variables/theme extension so dark mode is a one-line addition).

Structure the code cleanly: one component per file, a constants/data file

for static content (testimonials, features, FAQ) so it's easy to later swap

for real API data, and clear prop types via comments or PropTypes.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/0a6ea9c0-8ed2-4f90-ab31-68eb135650aa).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
