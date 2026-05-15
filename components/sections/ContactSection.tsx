"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, Github, Instagram } from "lucide-react";
import { PERSONAL_INFO } from "@/lib/constants";

export function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate sending
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      setTimeout(() => setSubmitted(false), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-32 relative section-wrapper">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-blue-electric/5 pointer-events-none"></div>
      
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20 text-center"
        >
          <span className="section-label mb-4">07. // Connect</span>
          <h2 className="section-title">
            Let's <span className="gradient-text">Talk</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-electric to-purple-neon mt-6 rounded-full"></div>
        </motion.div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Side: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-white mb-6">Open to opportunities</h3>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
            </p>

            <div className="space-y-6 mb-12">
              <a href={`mailto:${PERSONAL_INFO.email}`} className="flex items-center gap-4 text-white/80 hover:text-blue-electric transition-colors group">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-blue-electric/50 group-hover:bg-blue-electric/10 transition-all">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-xs uppercase tracking-widest text-white/40 mb-1 font-mono">Email</h4>
                  <p className="font-medium text-lg">{PERSONAL_INFO.email}</p>
                </div>
              </a>
            </div>

            <div className="flex gap-4">
              <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-black hover:bg-white transition-all hover:-translate-y-1">
                <Github size={20} />
              </a>
              <a href={PERSONAL_INFO.instagram} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:text-white hover:bg-gradient-to-tr hover:from-yellow-400 hover:via-red-500 hover:to-purple-500 hover:border-transparent transition-all hover:-translate-y-1">
                <Instagram size={20} />
              </a>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl border border-white/10 space-y-6">
              
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-mono text-white/60 ml-2 uppercase tracking-wider">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="John Doe"
                  className="input-field"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-mono text-white/60 ml-2 uppercase tracking-wider">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="john@example.com"
                  className="input-field"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-white/60 ml-2 uppercase tracking-wider">Message</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Hello, I'd like to talk about..."
                  rows={5}
                  className="input-field resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting || submitted}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  submitted 
                    ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                    : "bg-blue-electric text-black hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] disabled:opacity-70"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-black/30 border-t-black rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : submitted ? (
                  "Message Sent!"
                ) : (
                  <>
                    Send Message <Send size={18} />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
