"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { FileText, Download, Eye } from "lucide-react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

export function ResumeSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="resume"
      ref={ref}
      className="section-wrapper py-32 sm:py-40"
    >
      <div className="max-w-4xl mx-auto px-6">
        {/* Center-aligned header */}
        <div className="text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[12px] font-mono font-medium tracking-[0.2em] uppercase text-white/30">
              Resume
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/90 mb-4 leading-[1.15]"
          >
            Get my resume.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[16px] text-white/35 max-w-md mx-auto font-light"
          >
            ATS-friendly and up to date.
          </motion.p>
        </div>

        {/* Resume card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{
            duration: 0.6,
            delay: 0.25,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <CardSpotlight
            className="rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 cursor-default"
            spotlightColor="rgba(255, 100, 30, 0.06)"
          >
            <div className="p-8 sm:p-10">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-orange-500/10 border border-orange-500/12 flex items-center justify-center flex-shrink-0">
                  <FileText className="w-6 h-6 text-orange-400/80" />
                </div>

                {/* Info */}
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white/85 mb-1">
                    AGNIVESH AB — Resume
                  </h3>
                  <p className="text-[13px] text-white/35 font-light">
                    Full Stack Developer · AI/ML Engineer · Flutter Developer
                  </p>
                </div>

                {/* Actions */}
                <div className="flex gap-3 flex-shrink-0">
                  <a
                    href="/resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-[13px] font-medium text-white/55 bg-white/[0.04] border border-white/[0.06] hover:bg-white/[0.07] hover:text-white/80 transition-all"
                  >
                    <Eye className="w-4 h-4" />
                    View
                  </a>
                  <a
                    href="/resume.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-[13px] font-medium hover:bg-white/90 transition-colors"
                  >
                    <Download className="w-4 h-4" />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </CardSpotlight>
        </motion.div>
      </div>
    </section>
  );
}
