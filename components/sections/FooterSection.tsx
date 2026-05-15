"use client";

import { motion } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { ArrowUp } from "lucide-react";

export function FooterSection() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-white/10 bg-black pt-16 pb-24 md:pb-8 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1px] bg-gradient-to-r from-transparent via-blue-electric/50 to-transparent"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-12">
          
          <div className="text-center md:text-left">
            <h2 className="font-mono text-2xl font-bold tracking-tighter text-white mb-2">
              {PERSONAL_INFO.firstName}
              <span className="text-blue-electric">.</span>
            </h2>
            <p className="text-white/50 text-sm max-w-xs mx-auto md:mx-0">
              {PERSONAL_INFO.tagline}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm font-medium">
            <a href="#about" className="text-white/60 hover:text-white transition-colors">About</a>
            <a href="#projects" className="text-white/60 hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="text-white/60 hover:text-white transition-colors">Experience</a>
            <a href="#contact" className="text-white/60 hover:text-white transition-colors">Contact</a>
          </div>

          <button 
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:bg-blue-electric/20 hover:border-blue-electric/50 transition-all group"
          >
            <ArrowUp size={18} className="group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/40 font-mono">
          <p>© {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <span>Designed & Built with</span>
            <span className="text-red-500 animate-pulse">❤</span>
            <span>in {PERSONAL_INFO.location}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
