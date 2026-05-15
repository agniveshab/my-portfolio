"use client";

import { motion } from "framer-motion";
import { EDUCATION } from "@/lib/constants";

export function EducationSection() {
  return (
    <section id="education" className="py-32 relative section-wrapper">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20 text-center"
        >
          <span className="section-label mb-4">05. // Background</span>
          <h2 className="section-title">
            Academic <span className="gradient-text">Education</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-electric to-purple-neon mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-3xl mx-auto grid gap-8">
          {EDUCATION.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card p-6 md:p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-center md:items-start group hover:border-white/20"
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl shadow-lg border shrink-0 transition-transform group-hover:scale-110"
                style={{ 
                  background: `linear-gradient(135deg, ${edu.color}20, transparent)`, 
                  borderColor: `${edu.color}40`,
                  boxShadow: `0 0 20px ${edu.color}20` 
                }}
              >
                {edu.icon}
              </div>

              <div className="flex-grow text-center md:text-left">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-electric group-hover:to-purple-neon transition-all">
                  {edu.degree}
                </h3>
                <h4 className="text-lg text-white/70 mb-4">{edu.institution}</h4>
                
                <div className="flex flex-wrap justify-center md:justify-start gap-3">
                  <span className="badge bg-white/5 border-white/10 text-white/60 font-mono">
                    {edu.period}
                  </span>
                  <span 
                    className="badge"
                    style={{ 
                      backgroundColor: `${edu.color}15`, 
                      borderColor: `${edu.color}40`, 
                      color: edu.color 
                    }}
                  >
                    Grade: {edu.grade}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
