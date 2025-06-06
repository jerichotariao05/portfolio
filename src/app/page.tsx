import AboutSection from "@/sections/About";
import ContactSection from "@/sections/Contact";
import FooterSection from "@/sections/Footer";
import Header from "@/sections/Header";
import HeroSection from "@/sections/Hero";
import ProjectsSection from "@/sections/Projects";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <FooterSection />
      <Toaster position="top-right" />
    </>
  );
}
