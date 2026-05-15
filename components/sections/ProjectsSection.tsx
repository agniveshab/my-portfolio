"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PROJECTS, type Project } from "@/lib/constants";
import { ExternalLink, X, ChevronRight, Github } from "lucide-react";

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Disable body scroll when modal is open
  if (typeof window !== "undefined") {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }

  return (
    <section id="projects" className="py-32 relative section-wrapper">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-grid-white/[0.02] bg-[size:30px_30px] pointer-events-none [mask-image:linear-gradient(to_left,white,transparent)]"></div>

      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20 text-center"
        >
          <span className="section-label mb-4">03. // Work</span>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-electric to-purple-neon mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="project-card flex flex-col h-full"
              onClick={() => setSelectedProject(project)}
            >
              <div className="project-card-glow" />
              <div className="p-8 flex flex-col h-full z-10">
                <div className="flex justify-between items-start mb-6">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl shadow-lg border border-white/10"
                    style={{ background: `linear-gradient(135deg, ${project.color}20, transparent)`, borderColor: `${project.color}40` }}
                  >
                    {project.icon}
                  </div>
                  <div className="flex gap-2">
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noreferrer"
                        className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 hover:text-blue-electric transition-colors"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <ExternalLink size={18} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-electric transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-white/60 mb-6 flex-grow leading-relaxed">
                  {project.shortDesc}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.tags.slice(0, 3).map(tag => (
                    <span key={tag} className="badge">
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 3 && (
                    <span className="badge opacity-50">+{project.tags.length - 3}</span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="modal-overlay"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="modal-content relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header Cover */}
              <div 
                className="h-32 w-full relative"
                style={{ background: `linear-gradient(to right, ${selectedProject.color}30, transparent)` }}
              >
                <div className="absolute top-4 right-4 z-20">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="w-10 h-10 rounded-full bg-black/50 border border-white/20 flex items-center justify-center text-white/70 hover:text-white hover:bg-black transition-all"
                  >
                    <X size={20} />
                  </button>
                </div>
                <div className="absolute -bottom-10 left-8">
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-xl border border-white/20 bg-black"
                  >
                    {selectedProject.icon}
                  </div>
                </div>
              </div>

              <div className="p-8 pt-16">
                <div className="flex items-center gap-3 mb-4">
                  <h2 className="text-3xl font-bold text-white">{selectedProject.title}</h2>
                  <span 
                    className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                    style={{ backgroundColor: `${selectedProject.color}20`, color: selectedProject.color, border: `1px solid ${selectedProject.color}40` }}
                  >
                    {selectedProject.status}
                  </span>
                </div>

                <p className="text-white/70 text-lg leading-relaxed mb-8">
                  {selectedProject.longDesc}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-bold text-white/40 uppercase tracking-widest mb-4">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="skill-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  {selectedProject.link && (
                    <a 
                      href={selectedProject.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="btn-primary flex items-center gap-2"
                    >
                      View Live Site <ExternalLink size={16} />
                    </a>
                  )}
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="btn-ghost flex items-center gap-2">
                    <Github size={16} /> View on GitHub
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
