"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle2 } from "lucide-react";

export function ResumeSection() {
  return (
    <section id="resume" className="py-32 relative section-wrapper overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20">
        <div className="w-[800px] h-[800px] bg-purple-neon blur-[150px] rounded-full mix-blend-screen"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card rounded-3xl p-8 md:p-16 border border-purple-neon/30 max-w-5xl mx-auto shadow-[0_0_100px_rgba(191,90,242,0.15)] relative overflow-hidden group">

          <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-blue-electric/20 to-purple-neon/20 blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            {/* Resume Preview Icon */}
            <div className="w-full md:w-1/3 flex justify-center perspective">
              <motion.div
                whileHover={{ rotateY: 15, rotateX: 5, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="w-48 h-64 bg-white/5 border border-white/20 rounded-xl shadow-2xl relative flex items-center justify-center overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                <div className="absolute top-4 left-4 right-4 flex flex-col gap-2 opacity-30">
                  <div className="w-1/2 h-2 bg-white rounded-full"></div>
                  <div className="w-3/4 h-2 bg-white rounded-full"></div>
                  <div className="w-full h-px bg-white/50 mt-4"></div>
                  <div className="w-full h-2 bg-white rounded-full mt-4"></div>
                  <div className="w-5/6 h-2 bg-white rounded-full"></div>
                </div>
                <FileText size={64} className="text-purple-neon/50 drop-shadow-[0_0_15px_rgba(191,90,242,0.5)]" />
              </motion.div>
            </div>

            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Ready for <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-electric to-purple-neon">Opportunities</span>
              </h2>

              <p className="text-white/60 text-lg mb-8 leading-relaxed">
                Download my ATS-friendly resume to view my full academic background, professional experience, and technical skill set in detail. Let's build something amazing together.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 mb-8">
                <a href="https://drive.google.com/file/d/1My0HWDW1wyrRAcAfOn1XVfriW1wRZ5uv/view?usp=sharing" target="_blank" className="btn-primary w-full sm:w-auto !py-4 px-8 text-lg flex items-center justify-center gap-3 group border-purple-neon hover:border-purple-neon shadow-[0_0_20px_rgba(191,90,242,0.3)]">
                  <Download size={20} className="group-hover:-translate-y-1 transition-transform" />
                  Download Resume
                </a>
              </div>

              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-white/50 font-mono">
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> ATS Optimized</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> 1 Page format</span>
                <span className="flex items-center gap-1"><CheckCircle2 size={14} className="text-green-400" /> PDF Format</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
