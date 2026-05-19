"use client";

import { useEffect, useState } from "react";
import Lenis from "lenis";

import { Navbar } from "@/components/layout/Navbar";
import { AmbientBackground } from "@/components/effects/AmbientBackground";
import { Component as EtheralShadow } from "@/components/ui/etheral-shadow";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { SkillsSection } from "@/components/sections/SkillsSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { EducationSection } from "@/components/sections/EducationSection";
import { ResumeSection } from "@/components/sections/ResumeSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FooterSection } from "@/components/sections/FooterSection";

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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

  if (!mounted) return null;

  return (
    <main className="relative bg-[#09090b] text-white selection:bg-orange-500/15 selection:text-white min-h-screen">
      {/* Etheral Shadow — fixed animated background */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <EtheralShadow
          color="rgba(180, 60, 20, 0.35)"
          animation={{ scale: 60, speed: 40 }}
          noise={{ opacity: 0.6, scale: 1.2 }}
          sizing="fill"
        />
      </div>

      {/* Warm ambient gradient orbs with scroll parallax */}
      <AmbientBackground />
      <div className="noise-overlay" />

      {/* Navigation */}
      <Navbar />

      {/* Sections */}
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <ResumeSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
