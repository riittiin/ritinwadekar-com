import { Nav } from "@/components/nav/Nav";
import { Hero } from "@/components/hero/Hero";
import { WorkSection } from "@/components/work/WorkSection";
import { FlagshipSection } from "@/components/flagship/FlagshipSection";
import { MetricsSection } from "@/components/metrics/MetricsSection";
import { ProjectsSection } from "@/components/projects/ProjectsSection";
import { CapabilitiesSection } from "@/components/capabilities/CapabilitiesSection";
import { AboutSection } from "@/components/about/AboutSection";
import { ContactSection } from "@/components/contact/ContactSection";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <WorkSection />
        <FlagshipSection />
        <MetricsSection />
        <ProjectsSection />
        <CapabilitiesSection />
        <AboutSection />
        <ContactSection />
      </main>
    </>
  );
}
