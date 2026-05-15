"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Typewriter from "typewriter-effect";
import { ArrowRight, Download, Terminal } from "lucide-react";
import { PERSONAL_INFO, ROTATING_TITLES } from "@/lib/constants";

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden section-wrapper">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,212,255,0.05)_0%,transparent_50%)] animate-pulse-slow"></div>
      
      <div className="container mx-auto px-6 z-10">
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          {/* Terminal Intro */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
          >
            <Terminal size={16} className="text-blue-electric" />
            <span className="font-mono text-sm text-white/80">
              <Typewriter
                options={{
                  strings: ["System Initialized...", "Welcome to the Portfolio", "Hello World!"],
                  autoStart: true,
                  loop: true,
                  delay: 50,
                  deleteSpeed: 30,
                }}
              />
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4"
          >
            <span className="text-white">{PERSONAL_INFO.firstName}</span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-purple-neon">
              {PERSONAL_INFO.lastName}
            </span>
          </motion.h1>

          {/* Rotating Subtitle */}
          <div className="h-12 md:h-16 overflow-hidden mb-8 relative flex justify-center w-full">
            <AnimatePresence mode="wait">
              <motion.h2
                key={titleIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                transition={{ duration: 0.5, ease: "anticipate" }}
                className="text-2xl md:text-4xl font-light text-white/70 absolute"
              >
                {ROTATING_TITLES[titleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="text-lg md:text-xl text-white/50 max-w-2xl mb-12"
          >
            {PERSONAL_INFO.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 md:gap-6 items-center justify-center w-full"
          >
            <a href="#projects" className="magnetic-btn btn-primary w-full sm:w-auto">
              View Projects
              <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <a href="/resume.pdf" target="_blank" className="magnetic-btn btn-ghost w-full sm:w-auto">
              <Download size={18} className="mr-2" />
              Download Resume
            </a>
            
            <a href="#contact" className="text-white/60 hover:text-white transition-colors text-sm font-medium underline underline-offset-4 decoration-white/20 hover:decoration-white w-full sm:w-auto mt-4 sm:mt-0">
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em] text-white/30 font-mono">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/30 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-blue-electric animate-scan-line"></div>
        </div>
      </motion.div>
    </section>
  );
}
