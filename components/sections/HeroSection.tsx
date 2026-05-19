"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { PERSONAL_INFO, ROTATING_TITLES } from "@/lib/constants";
import { ArrowDown, Github, FileText, Mail } from "lucide-react";

export function HeroSection() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const currentTitle = ROTATING_TITLES[titleIndex];

    if (!isDeleting) {
      if (displayText.length < currentTitle.length) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length + 1));
        }, 60);
      } else {
        timeoutRef.current = setTimeout(() => setIsDeleting(true), 2200);
      }
    } else {
      if (displayText.length > 0) {
        timeoutRef.current = setTimeout(() => {
          setDisplayText(currentTitle.slice(0, displayText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setTitleIndex((prev) => (prev + 1) % ROTATING_TITLES.length);
      }
    }

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [displayText, isDeleting, titleIndex]);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Status label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mb-8"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-[12px] font-medium tracking-wider uppercase text-orange-300/70 bg-orange-500/[0.06] border border-orange-500/[0.1]">
            <span className="w-1.5 h-1.5 rounded-full bg-orange-400/80 animate-pulse" />
            Available for opportunities
          </span>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          <span className="gradient-text-subtle">{PERSONAL_INFO.firstName}</span>
          <span className="text-white/15 ml-3 font-light">{PERSONAL_INFO.lastName}</span>
        </motion.h1>

        {/* Rotating title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="h-10 mb-8 flex items-center justify-center"
        >
          <span className="text-xl sm:text-2xl font-light text-orange-300/60">
            {displayText}
            <span className="inline-block w-[2px] h-6 bg-orange-400/50 ml-0.5 animate-pulse align-middle" />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="text-lg sm:text-xl text-white/35 max-w-2xl mx-auto leading-relaxed mb-12 font-light"
        >
          {PERSONAL_INFO.tagline}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2.5 px-6 py-3 rounded-full bg-white text-black text-[14px] font-medium hover:bg-white/90 transition-all duration-300 hover:shadow-lg hover:shadow-white/10"
          >
            View Projects
            <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
          </a>
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[14px] font-medium text-white/60 bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:text-white/80 transition-all duration-300"
          >
            <FileText className="w-4 h-4" />
            Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-3 rounded-full text-[14px] font-medium text-white/60 bg-white/[0.04] border border-white/[0.07] hover:bg-white/[0.07] hover:text-white/80 transition-all duration-300"
          >
            <Mail className="w-4 h-4" />
            Contact
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1 }}
          className="mt-16 flex items-center justify-center gap-5"
        >
          <a
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white/20 hover:text-white/50 transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          <a
            href={`mailto:${PERSONAL_INFO.email}`}
            className="text-white/20 hover:text-white/50 transition-colors"
            aria-label="Email"
          >
            <Mail className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/[0.08] flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-white/15" />
        </motion.div>
      </motion.div>
    </section>
  );
}
