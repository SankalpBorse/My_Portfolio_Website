import { AboutSection } from "@/components/sections/about-section";
import { AnimatedBackground } from "@/components/animated-background";
import { ChatWidget } from "@/components/chat-widget";
import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { LoadingScreen } from "@/components/loading-screen";
import { ProjectsSection } from "@/components/sections/projects-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { Navbar } from "@/components/navbar";

export default function Home() {
  return (
    <>
      <AnimatedBackground />
      <LoadingScreen />
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <SkillsSection />
        <AboutSection />
        <ContactSection />
      </main>
      <ChatWidget />
    </>
  );
}
