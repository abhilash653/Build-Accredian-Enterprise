import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { LogoStrip } from "@/components/LogoStrip";
import { Programs } from "@/components/Programs";
import { Features } from "@/components/Features";
import { HowItWorks } from "@/components/HowItWorks";
import { AnalyticsShowcase } from "@/components/AnalyticsShowcase";
import { Testimonials } from "@/components/Testimonials";
import { LeadForm } from "@/components/LeadForm";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { SearchLeads } from "@/components/SearchLeads";
import { StickyDemoCta } from "@/components/StickyDemoCta";

const title = "Accredian Enterprise — Upskill Your Workforce at Scale";
const description =
  "Enterprise upskilling in AI, Data Science, Product and Leadership, delivered with IITs, IIMs and global universities. Live mentorship and real-time ROI analytics.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Landing,
});

function Landing() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <SearchLeads />
        <Hero />
        <LogoStrip />
        <Programs />
        <Features />
        <HowItWorks />
        <AnalyticsShowcase />
        <Testimonials />
        <LeadForm />
        <FAQ />
      </main>
      <Footer />
      <StickyDemoCta />
    </div>
  );
}
