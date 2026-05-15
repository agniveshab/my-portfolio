"use client";

import { useState, useEffect } from "react";
import { User, Code2, Briefcase, Mail, Home } from "lucide-react";

const NAV_ITEMS = [
  { id: "hero", icon: Home, label: "Home" },
  { id: "about", icon: User, label: "About" },
  { id: "projects", icon: Code2, label: "Work" },
  { id: "experience", icon: Briefcase, label: "Exp" },
  { id: "contact", icon: Mail, label: "Contact" },
];

export function FloatingDock() {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_ITEMS.map(item => document.getElementById(item.id));
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    } else if (id === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <div className="floating-dock hidden md:flex">
      {NAV_ITEMS.map((item) => (
        <button
          key={item.id}
          onClick={() => scrollTo(item.id)}
          className={`dock-item ${activeSection === item.id ? "active" : ""}`}
        >
          <item.icon size={20} />
          <span className="opacity-0 w-0 h-0 overflow-hidden transition-all group-hover:opacity-100 group-hover:w-auto group-hover:h-auto mt-1">
            {item.label}
          </span>
        </button>
      ))}
    </div>
  );
}
