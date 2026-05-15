"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

const NAV_LINKS = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Resume", href: "#resume" },
  { name: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-black/60 backdrop-blur-xl border-b border-white/5 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="#" className="relative group">
          <span className="font-mono text-xl font-bold tracking-tighter text-white">
            {PERSONAL_INFO.firstName}
            <span className="text-blue-electric">.</span>
          </span>
          <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-blue-electric transition-all duration-300 group-hover:w-full"></span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white/70 hover:text-white transition-colors duration-200"
            >
              <span className="text-blue-electric/50 mr-1">/</span>
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 text-sm font-medium text-blue-electric border border-blue-electric/30 rounded-full hover:bg-blue-electric/10 transition-colors duration-300"
          >
            Let's Talk
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{
          height: mobileMenuOpen ? "auto" : 0,
          opacity: mobileMenuOpen ? 1 : 0,
        }}
        className="md:hidden overflow-hidden bg-black/95 backdrop-blur-3xl border-b border-white/10"
      >
        <nav className="flex flex-col px-6 py-6 gap-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-lg font-medium text-white/80 hover:text-blue-electric transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
