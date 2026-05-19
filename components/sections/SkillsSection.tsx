"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { SKILLS } from "@/lib/constants";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

export function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const categories = Object.entries(SKILLS);

  // Bento grid: assign different sizes to create visual variety
  const gridSpans: Record<string, string> = {
    Frontend: "md:col-span-2",         // wide
    Backend: "md:col-span-1",          // standard
    Programming: "md:col-span-1",      // standard
    "AI / ML": "md:col-span-2",        // wide
    "Database & Cloud": "md:col-span-1", // standard
  };

  return (
    <section
      id="skills"
      ref={ref}
      className="section-wrapper py-32 sm:py-40"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Section header — offset left */}
        <div className="max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[12px] font-mono font-medium tracking-[0.2em] uppercase text-white/30">
              Skills
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/90 mb-4 leading-[1.15]"
          >
            Technologies I work with.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[16px] text-white/35 mb-16 font-light leading-relaxed"
          >
            From frontend craft to low-level systems — here's what I reach for.
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {categories.map(([category, skills], catIdx) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + catIdx * 0.08,
                ease: [0.16, 1, 0.3, 1],
              }}
              className={gridSpans[category] || "md:col-span-1"}
            >
              <CardSpotlight
                className="rounded-2xl bg-white/[0.02] border border-white/[0.06] p-6 h-full hover:border-white/[0.1] transition-all duration-500 cursor-default"
                spotlightColor="rgba(255, 100, 30, 0.06)"
              >
                {/* Category title */}
                <div className="flex items-center gap-2.5 mb-5">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400/50" />
                  <h3 className="text-[13px] font-semibold tracking-wide uppercase text-white/45">
                    {category}
                  </h3>
                </div>

                {/* Skill tags */}
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span
                      key={skill.name}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-[13px] font-medium text-white/55 bg-white/[0.03] border border-white/[0.05] hover:bg-white/[0.06] hover:border-white/[0.1] hover:text-white/80 transition-all duration-300 cursor-default"
                    >
                      <span className="text-xs opacity-70">{skill.icon}</span>
                      {skill.name}
                    </span>
                  ))}
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
