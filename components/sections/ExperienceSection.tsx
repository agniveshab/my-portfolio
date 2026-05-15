"use client";

import { motion } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function ExperienceSection() {
  return (
    <section id="experience" className="py-32 relative section-wrapper">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <span className="section-label mb-4">04. // Journey</span>
          <h2 className="section-title">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-electric to-purple-neon mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto relative">
          {/* Timeline central line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/10 -translate-x-1/2">
            <div className="w-full h-1/3 bg-gradient-to-b from-blue-electric to-purple-neon animate-scan-line"></div>
          </div>

          <div className="space-y-12">
            {EXPERIENCE.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative flex flex-col md:flex-row gap-8 items-center md:items-start justify-center group"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-1/2 top-8 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0a0a14] border-2 border-blue-electric items-center justify-center z-10 transition-transform group-hover:scale-150">
                  <div className="w-1 h-1 bg-blue-electric rounded-full animate-ping"></div>
                </div>

                {/* Left Side (Empty or Time) */}
                <div className="w-full md:w-1/2 md:pr-12 md:text-right hidden md:block pt-8">
                  <div className="flex items-center justify-end gap-2 text-white/60 mb-2">
                    <span className="font-mono">{exp.period}</span>
                    <Calendar size={16} className="text-blue-electric" />
                  </div>
                  <div className="flex items-center justify-end gap-2 text-white/50 text-sm">
                    <span>{exp.location}</span>
                    <MapPin size={14} className="text-purple-neon" />
                  </div>
                </div>

                {/* Right Side (Card) */}
                <div className="w-full md:w-1/2 md:pl-12">
                  <div className="glass-card p-8 rounded-2xl border-l-4 border-l-blue-electric hover:border-l-purple-neon transition-colors duration-300">
                    {/* Mobile time/location */}
                    <div className="md:hidden flex flex-wrap gap-4 mb-4 text-sm text-white/60">
                      <div className="flex items-center gap-2">
                        <Calendar size={14} className="text-blue-electric" />
                        <span className="font-mono">{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin size={14} className="text-purple-neon" />
                        <span>{exp.location}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 mb-2">
                      <Briefcase size={20} className="text-blue-electric" />
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                    </div>
                    
                    <h4 className="text-lg text-white/80 mb-6 flex items-center gap-2">
                      <span className="text-blue-electric">@</span> {exp.company}
                      <span className="badge ml-2 bg-blue-electric/10 text-blue-electric border-blue-electric/30">{exp.type}</span>
                    </h4>

                    <ul className="space-y-3">
                      {exp.points.map((point, i) => (
                        <li key={i} className="flex gap-3 text-white/70 text-sm leading-relaxed">
                          <span className="text-blue-electric mt-1">▹</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
