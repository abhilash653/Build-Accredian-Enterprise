/**
 * Static content for the Accredian Enterprise landing page.
 * Swap any of these arrays for real API data later without touching components.
 */

export const NAV_LINKS = [
  { id: "programs", label: "Programs" },
  { id: "why-us", label: "Why Us" },
  { id: "how-it-works", label: "How It Works" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact" },
] as const;

export const HERO_STATS = [
  { value: "500+", label: "Expert mentors" },
  { value: "94%", label: "Completion rate" },
  { value: "300+", label: "Enterprises trained" },
] as const;

export const PARTNERS = [
  "IIT Guwahati",
  "IIM Kozhikode",
  "IIT Delhi",
  "XLRI",
  "Kellogg Exec Ed",
  "NUS Business",
] as const;

/** @typedef {{ slug: string, title: string, blurb: string, tracks: string[] }} Program */
export const PROGRAMS = [
  {
    slug: "ai-ml",
    title: "AI & Machine Learning",
    blurb: "Applied GenAI, MLOps and model governance for engineering and analytics teams.",
    tracks: ["Applied GenAI", "MLOps", "Deep Learning"],
  },
  {
    slug: "data-science",
    title: "Data Science & Analytics",
    blurb: "From SQL fluency to advanced experimentation and decision science.",
    tracks: ["Analytics Engineering", "Experimentation", "Visualisation"],
  },
  {
    slug: "product",
    title: "Product Management",
    blurb: "Discovery, roadmapping and outcome-driven delivery for product orgs.",
    tracks: ["Product Discovery", "Growth", "AI Products"],
  },
  {
    slug: "leadership",
    title: "Leadership & Strategy",
    blurb: "Executive programs for managers stepping into enterprise-scale ownership.",
    tracks: ["People Leadership", "Digital Strategy", "Change Management"],
  },
] as const;

/** @typedef {{ icon: string, title: string, description: string }} Feature */
export const FEATURES = [
  {
    icon: "GraduationCap",
    title: "Curated curriculum with IIT/IIM partners",
    description:
      "Every program is co-authored with faculty from IITs, IIMs and global universities, then mapped to your business outcomes.",
  },
  {
    icon: "Users",
    title: "Live 1:1 mentorship",
    description:
      "Practitioners from top product and data organisations coach your teams through real project work every week.",
  },
  {
    icon: "LineChart",
    title: "Real-time analytics & ROI dashboard",
    description:
      "Track completion, engagement and skill lift per team, and export board-ready ROI reporting in a click.",
  },
  {
    icon: "UsersRound",
    title: "Cohort-based peer learning",
    description:
      "Teams learn together in structured cohorts with capstones scored against your own internal use cases.",
  },
  {
    icon: "SlidersHorizontal",
    title: "Fully customizable programs",
    description:
      "Choose duration, depth, delivery mode and assessments. We co-design the syllabus with your L&D leaders.",
  },
  {
    icon: "BadgeCheck",
    title: "Globally recognized certifications",
    description:
      "Learners earn credentials from partner institutions that carry weight inside and outside your organisation.",
  },
] as const;

/** @typedef {{ step: number, title: string, description: string }} ProcessStep */
export const PROCESS_STEPS = [
  {
    step: 1,
    title: "Skill-gap assessment",
    description: "We benchmark your teams against role-based skill maps and surface the highest-impact gaps.",
  },
  {
    step: 2,
    title: "Custom curriculum co-design",
    description: "Faculty and your L&D team co-design a syllabus tied to live business problems.",
  },
  {
    step: 3,
    title: "Team onboarding & mentors",
    description: "Cohorts are launched, mentors assigned and schedules aligned to sprint calendars.",
  },
  {
    step: 4,
    title: "Ongoing analytics & reviews",
    description: "Quarterly business reviews with completion, engagement and ROI reporting.",
  },
] as const;

export const DASHBOARD_METRICS = [
  { label: "Avg. completion rate", value: 94, suffix: "%" },
  { label: "Weekly active learners", value: 2348, suffix: "" },
  { label: "Skill lift after 12 weeks", value: 37, suffix: "%" },
  { label: "Reported ROI multiple", value: 4, suffix: "x" },
] as const;

/** @typedef {{ quote: string, name: string, role: string, company: string }} Testimonial */
export const TESTIMONIALS = [
  {
    quote:
      "We moved 240 engineers through applied AI in two quarters. Team velocity on data products is up measurably, and the mentor model is what made it stick.",
    name: "Ananya Rao",
    role: "Head of Learning & Development",
    company: "Fintech scale-up, Bengaluru",
  },
  {
    quote:
      "The ROI dashboard finally gave my leadership team a defensible view of what training is doing. 94% completion across 18 cohorts is unheard of for us.",
    name: "Marcus Feld",
    role: "Chief Human Resources Officer",
    company: "Global manufacturing group",
  },
  {
    quote:
      "Co-designing the curriculum meant our product managers practised on our own roadmap, not case studies. Adoption was immediate.",
    name: "Priya Menon",
    role: "VP, Talent & Capability",
    company: "Enterprise SaaS, Pune",
  },
] as const;

export const TEAM_SIZES = ["1–50", "51–200", "201–1000", "1000+"] as const;

export const INTEREST_AREAS = ["AI/ML", "Data Science", "Product", "Leadership"] as const;

/** @typedef {{ question: string, answer: string }} Faq */
export const FAQS = [
  {
    question: "How quickly can a cohort go live?",
    answer:
      "Most enterprise cohorts launch within three to four weeks of the skill-gap assessment. Off-the-shelf tracks can start in under two weeks.",
  },
  {
    question: "Can programs be delivered to distributed teams?",
    answer:
      "Yes. Programs run live-online across time zones, with recorded sessions, regional mentor pods and optional on-site immersions.",
  },
  {
    question: "How is ROI measured?",
    answer:
      "We baseline role-based skills before the program, track engagement and assessments throughout, and report skill lift plus business KPIs you nominate at kickoff.",
  },
  {
    question: "Do learners receive certification?",
    answer:
      "Learners earn certificates from the partner institution backing their track, awarded on completion of coursework and the capstone review.",
  },
  {
    question: "What does pricing look like?",
    answer:
      "Pricing is per-seat with volume tiers, and custom co-designed programs are quoted per engagement. Talk to us for an indicative proposal.",
  },
] as const;

export const FOOTER_COLUMNS = [
  {
    title: "Company",
    links: ["About us", "Careers", "Newsroom", "Partner institutions"],
  },
  {
    title: "Programs",
    links: ["AI & Machine Learning", "Data Science", "Product Management", "Leadership"],
  },
  {
    title: "Resources",
    links: ["L&D playbooks", "Case studies", "Webinars", "Help centre"],
  },
] as const;
