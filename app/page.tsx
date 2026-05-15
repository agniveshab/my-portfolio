"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

import { Navbar } from "@/components/layout/Navbar";
import { FloatingDock } from "@/components/layout/FloatingDock";
import { CursorSpotlight } from "@/components/effects/CursorSpotlight";

import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { AIAssistantSection } from "@/components/sections/AIAssistantSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Initialize smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  if (!mounted) return null; // Prevent hydration mismatch

  return (
    <main className="relative bg-[#050508] text-white selection:bg-blue-electric/30 selection:text-white min-h-screen">
      {/* Global Effects */}
      <CursorSpotlight />
      <div className="animated-bg"></div>
      <div className="grid-overlay"></div>
      <div className="noise-overlay"></div>

      {/* Navigation */}
      <Navbar />
      <FloatingDock />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <AIAssistantSection />
      <ResumeSection />
      <ContactSection />
      
      <FooterSection />
    </main>
  );
}
