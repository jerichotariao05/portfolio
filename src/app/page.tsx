import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";
import HeroSection from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactSection />
    </main>
  );
}
