"use client";

import { motion } from "framer-motion";
import { SKILLS } from "@/lib/constants";

export function SkillsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-32 relative section-wrapper">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-64 h-64 bg-blue-electric/5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <span className="section-label mb-4">02. // Capabilities</span>
          <h2 className="section-title">
            Technical <span className="gradient-text">Arsenal</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-electric to-purple-neon mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(SKILLS).map(([category, items], categoryIndex) => (
            <motion.div
              key={category}
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              className="glass-card p-6 rounded-2xl relative overflow-hidden group"
            >
              {/* Category Glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-blue-electric/10 rounded-full blur-3xl group-hover:bg-purple-neon/20 transition-colors duration-500"></div>
              
              <h3 className="text-xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="w-2 h-2 rounded-full bg-blue-electric"></span>
                {category}
              </h3>
              
              <div className="flex flex-wrap gap-3">
                {items.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="skill-tag"
                  >
                    <span className="text-sm">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
