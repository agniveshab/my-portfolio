"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ABOUT_PARAGRAPHS } from "@/lib/constants";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const stats = [
    { value: "8+", label: "Projects" },
    { value: "6+", label: "Tech Stacks" },
    { value: "2025", label: "First Internship" },
    { value: "2027", label: "Graduating" },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="section-wrapper py-32 sm:py-40"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Two-column layout for visual variety */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-20">
          {/* Left column — text content */}
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-4"
            >
              <span className="text-[12px] font-mono font-medium tracking-[0.2em] uppercase text-white/30">
                About
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/90 mb-10 leading-[1.15]"
            >
              Crafting software with
              <br />
              <span className="gradient-text">purpose and precision.</span>
            </motion.h2>

            <div className="space-y-5">
              {ABOUT_PARAGRAPHS.map((paragraph, index) => (
                <motion.p
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.2 + index * 0.08 }}
                  className="text-[16px] sm:text-[17px] text-white/40 leading-[1.75] font-light"
                >
                  {paragraph}
                </motion.p>
              ))}
            </div>
          </div>

          {/* Right column — stats cards */}
          <div className="lg:col-span-2 flex flex-col gap-3 lg:pt-20">
            {stats.map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + i * 0.1,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <CardSpotlight
                  className="rounded-xl bg-white/[0.02] border border-white/[0.06] p-5 hover:border-white/[0.1] transition-all duration-500 cursor-default"
                  spotlightColor="rgba(255, 100, 30, 0.06)"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[14px] text-white/35 font-medium">
                      {stat.label}
                    </span>
                    <span className="text-2xl font-bold text-white/80">
                      {stat.value}
                    </span>
                  </div>
                </CardSpotlight>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
