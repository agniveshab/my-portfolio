"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EXPERIENCE } from "@/lib/constants";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

export function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="experience"
      ref={ref}
      className="section-wrapper py-32 sm:py-40"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header — centered */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[12px] font-mono font-medium tracking-[0.2em] uppercase text-white/30">
              Experience
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/90 leading-[1.15]"
          >
            Where I&apos;ve worked.
          </motion.h2>
        </div>

        {/* Experience cards */}
        <div className="space-y-5">
          {EXPERIENCE.map((exp, idx) => (
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
                className="rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 cursor-default"
                spotlightColor="rgba(255, 100, 30, 0.06)"
              >
                <div className="p-7 sm:p-8">
                  {/* Header row */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-9 h-9 rounded-xl bg-orange-500/10 border border-orange-500/15 flex items-center justify-center">
                          <Briefcase className="w-4 h-4 text-orange-400/80" />
                        </div>
                        <div>
                          <h3 className="text-[17px] font-semibold text-white/90">
                            {exp.role}
                          </h3>
                          <p className="text-[14px] font-medium text-white/45">
                            {exp.company}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 sm:gap-5">
                      <span className="inline-flex items-center gap-1.5 text-[12px] text-white/30">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="inline-flex items-center gap-1.5 text-[12px] text-white/25">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {/* Divider */}
                  <div className="h-px bg-white/[0.04] mb-6" />

                  {/* Points in a 2-column grid for wider layouts */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {exp.points.map((point, i) => (
                      <div
                        key={i}
                        className="flex gap-3 text-[13px] text-white/40 leading-relaxed font-light"
                      >
                        <span className="mt-[7px] w-1 h-1 rounded-full bg-orange-400/30 flex-shrink-0" />
                        {point}
                      </div>
                    ))}
                  </div>

                  {/* Badge */}
                  <div className="mt-6">
                    <span className="px-3 py-1 rounded-full text-[11px] font-medium text-white/30 bg-white/[0.03] border border-white/[0.05]">
                      {exp.type}
                    </span>
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
