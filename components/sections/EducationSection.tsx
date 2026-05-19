"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EDUCATION } from "@/lib/constants";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

export function EducationSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="education"
      ref={ref}
      className="section-wrapper py-32 sm:py-40"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="mb-4"
        >
          <span className="text-[12px] font-mono font-medium tracking-[0.2em] uppercase text-white/30">
            Education
          </span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/90 mb-16 leading-[1.15]"
        >
          Academic background.
        </motion.h2>

        {/* Horizontal cards — side by side on larger screens */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + idx * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <CardSpotlight
                className="rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 cursor-default h-full"
                spotlightColor="rgba(255, 100, 30, 0.06)"
              >
                <div className="p-6 flex flex-col h-full">
                  {/* Icon + Period */}
                  <div className="flex items-center justify-between mb-5">
                    <span className="text-2xl">{edu.icon}</span>
                    <span className="text-[11px] text-white/25 font-mono">
                      {edu.period}
                    </span>
                  </div>

                  {/* Degree */}
                  <h3 className="text-[15px] font-semibold text-white/80 mb-2 leading-snug">
                    {edu.degree}
                  </h3>

                  {/* Institution */}
                  <p className="text-[13px] text-white/35 mb-auto font-light leading-relaxed">
                    {edu.institution}
                  </p>

                  {/* Grade */}
                  <div className="mt-5 pt-4 border-t border-white/[0.04]">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] uppercase tracking-wider text-white/20 font-medium">
                        Grade
                      </span>
                      <span className="text-[15px] font-bold text-white/70">
                        {edu.grade}
                      </span>
                    </div>
                  </div>
                </div>
              </CardSpotlight>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
