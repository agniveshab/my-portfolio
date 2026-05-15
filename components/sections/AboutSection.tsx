"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ABOUT_POINTS } from "@/lib/constants";
import { Terminal, Code2, Database, Cpu } from "lucide-react";

export function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-100, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const ICONS = [Terminal, Code2, Database, Cpu];

  return (
    <section id="about" className="py-32 relative section-wrapper" ref={containerRef}>
      <div className="container mx-auto px-6">
        <motion.div 
          style={{ opacity }}
          className="flex flex-col items-center mb-20"
        >
          <span className="section-label mb-4">01. // Identity</span>
          <h2 className="section-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-electric to-purple-neon mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            {ABOUT_POINTS.map((point, index) => {
              const Icon = ICONS[index % ICONS.length];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-4 p-4 rounded-2xl glass-card group hover:-translate-y-1 transition-transform"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-blue-electric/10 group-hover:border-blue-electric/30 transition-colors">
                    <Icon size={20} className="text-white/50 group-hover:text-blue-electric transition-colors" />
                  </div>
                  <p className="text-white/80 leading-relaxed text-sm md:text-base">
                    {point}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Abstract Visual / Stats */}
          <div className="relative h-full min-h-[400px] flex items-center justify-center">
            {/* Background elements */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(191,90,242,0.15)_0%,transparent_60%)]"></div>
            
            <motion.div 
              style={{ y: y1, borderStyle: 'dashed' }}
              className="absolute top-10 left-10 w-32 h-32 border border-blue-electric/30 rounded-full animate-spin-slow"
            />
            
            <motion.div 
              style={{ y: y2 }}
              className="absolute bottom-10 right-10 w-48 h-48 border border-purple-neon/20 rounded-full animate-pulse-slow"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative z-10 p-8 glass-card rounded-3xl w-full max-w-md neon-border"
            >
              <div className="flex flex-col gap-8">
                <div className="terminal w-full">
                  <div className="terminal-header">
                    <div className="flex gap-2">
                      <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                      <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
                    </div>
                    <span className="text-xs text-white/50 ml-2">sys_info.sh</span>
                  </div>
                  <div className="terminal-body font-mono text-sm space-y-2">
                    <p><span className="text-blue-electric">root@agnivesh</span>:<span className="text-purple-neon">~</span>$ whoami</p>
                    <p className="text-green-400">Agnivesh AB</p>
                    <p><span className="text-blue-electric">root@agnivesh</span>:<span className="text-purple-neon">~</span>$ cat focus.txt</p>
                    <p className="text-white/70">Building practical AI systems,</p>
                    <p className="text-white/70">Offline local inference,</p>
                    <p className="text-white/70">Clean backend architecture.</p>
                    <p><span className="text-blue-electric">root@agnivesh</span>:<span className="text-purple-neon">~</span>$ <span className="terminal-cursor"></span></p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
