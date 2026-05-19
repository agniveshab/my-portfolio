"use client";

import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { PROJECTS, Project } from "@/lib/constants";
import { ExternalLink, Github, X, ArrowUpRight } from "lucide-react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

function StatusBadge({ status }: { status: Project["status"] }) {
  const colors = {
    Live: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    "In Progress": "bg-amber-500/10 text-amber-400 border-amber-500/20",
    Completed: "bg-white/[0.04] text-white/40 border-white/[0.06]",
    Experimental: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  };

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium border ${colors[status]}`}
    >
      {status === "Live" && (
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
      )}
      {status}
    </span>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-overlay"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 20, scale: 0.98 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="modal-content p-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center gap-4">
            <span className="text-3xl">{project.icon}</span>
            <div>
              <h3 className="text-xl font-bold text-white/90 mb-1.5">
                {project.title}
              </h3>
              <StatusBadge status={project.status} />
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl text-white/30 hover:text-white/60 hover:bg-white/[0.05] transition-all"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="text-[15px] text-white/50 leading-relaxed mb-8">
          {project.longDesc}
        </p>

        <div className="flex flex-wrap gap-2 mb-8">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-lg text-[12px] font-medium text-white/45 bg-white/[0.04] border border-white/[0.06]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3">
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-black text-[13px] font-medium hover:bg-white/90 transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              Visit Live
            </a>
          )}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white/[0.05] text-white/70 text-[13px] font-medium border border-white/[0.08] hover:bg-white/[0.08] hover:text-white transition-all"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

export function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Varied layout: first project is featured (full width), then alternating sizes
  const featured = PROJECTS[0];
  const rest = PROJECTS.slice(1);

  return (
    <>
      <section
        id="projects"
        ref={ref}
        className="section-wrapper py-32 sm:py-40"
      >
        <div className="max-w-6xl mx-auto px-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6 }}
                className="mb-4"
              >
                <span className="text-[12px] font-mono font-medium tracking-[0.2em] uppercase text-white/30">
                  Projects
                </span>
              </motion.div>

              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/90 leading-[1.15]"
              >
                Selected work.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="text-[15px] text-white/35 max-w-sm font-light leading-relaxed lg:text-right"
            >
              A collection of projects spanning AI, full-stack, mobile, and systems programming.
            </motion.p>
          </div>

          {/* Featured project — full width */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="mb-4"
          >
            <CardSpotlight
              className="rounded-2xl bg-white/[0.02] border border-white/[0.06] cursor-pointer hover:border-white/[0.12] transition-all duration-500"
              spotlightColor="rgba(255, 100, 30, 0.06)"
              onClick={() => setSelectedProject(featured)}
            >
              <div className="p-8 sm:p-10 flex flex-col lg:flex-row lg:items-center gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">{featured.icon}</span>
                    <StatusBadge status={featured.status} />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white/90 mb-3">
                    {featured.title}
                  </h3>
                  <p className="text-[15px] text-white/40 leading-relaxed mb-6 max-w-lg font-light">
                    {featured.longDesc.slice(0, 180)}...
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {featured.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium text-white/35 bg-white/[0.03] border border-white/[0.05]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex-shrink-0 flex items-center">
                  <span className="inline-flex items-center gap-1.5 text-[13px] font-medium text-white/25 hover:text-white/50 transition-colors">
                    View Details
                    <ArrowUpRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </CardSpotlight>
          </motion.div>

          {/* Rest of projects — asymmetric grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {rest.map((project, idx) => {
              // Create visual variety: alternate between different column spans
              const spanClass =
                idx === 0 || idx === 4
                  ? "md:col-span-2"  // wider cards at positions 0 and 4
                  : "md:col-span-1";

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + idx * 0.06,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className={spanClass}
                >
                  <CardSpotlight
                    className="rounded-2xl bg-white/[0.02] border border-white/[0.06] cursor-pointer hover:border-white/[0.12] transition-all duration-500 h-full"
                    spotlightColor="rgba(255, 100, 30, 0.06)"
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="p-6">
                      {/* Top: Icon + Status */}
                      <div className="flex items-start justify-between mb-4">
                        <span className="text-xl">{project.icon}</span>
                        <StatusBadge status={project.status} />
                      </div>

                      {/* Title */}
                      <h3 className="text-[16px] font-semibold text-white/80 mb-2 leading-snug">
                        {project.title}
                      </h3>

                      {/* Short description */}
                      <p className="text-[13px] text-white/35 leading-relaxed mb-4 font-light">
                        {project.shortDesc}
                      </p>

                      {/* Tags — show fewer in small cards */}
                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.tags.slice(0, spanClass.includes("2") ? 5 : 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-0.5 rounded-md text-[10px] font-medium text-white/30 bg-white/[0.03]"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > (spanClass.includes("2") ? 5 : 3) && (
                          <span className="px-2 py-0.5 rounded-md text-[10px] font-medium text-white/20">
                            +{project.tags.length - (spanClass.includes("2") ? 5 : 3)}
                          </span>
                        )}
                      </div>

                      {/* Footer */}
                      <div className="flex items-center gap-3">
                        {project.link && (
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1.5 text-[11px] font-medium text-emerald-400/60 hover:text-emerald-300 transition-colors"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Live
                          </a>
                        )}
                        <span className="inline-flex items-center gap-1 text-[11px] font-medium text-white/20 ml-auto">
                          Details
                          <ArrowUpRight className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </CardSpotlight>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
