"use client";

import { PERSONAL_INFO, NAV_LINKS } from "@/lib/constants";

export function FooterSection() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="section-wrapper border-t border-white/[0.04]">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Logo / Name */}
          <div className="flex items-center gap-2">
            <span className="text-[14px] font-semibold text-white/60 tracking-tight">
              {PERSONAL_INFO.firstName}
              <span className="text-indigo-400 ml-0.5">.</span>
            </span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {NAV_LINKS.slice(0, 4).map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[12px] text-white/30 hover:text-white/60 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <p className="text-[12px] text-white/20">
            © {currentYear} {PERSONAL_INFO.name}
          </p>
        </div>
      </div>
    </footer>
  );
}
