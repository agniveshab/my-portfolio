"use client";

import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { PERSONAL_INFO } from "@/lib/constants";
import { Mail, Github, Send, CheckCircle, Loader2 } from "lucide-react";
import { CardSpotlight } from "@/components/ui/CardSpotlight";

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formState, setFormState] = useState<"idle" | "sending" | "sent">(
    "idle"
  );

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("sending");
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setFormState("sent");
    setFormData({ name: "", email: "", message: "" });
    setTimeout(() => setFormState("idle"), 3000);
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="section-wrapper py-32 sm:py-40"
    >
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="mb-4"
          >
            <span className="text-[12px] font-mono font-medium tracking-[0.2em] uppercase text-white/30">
              Contact
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white/90 mb-4 leading-[1.15]"
          >
            Let&apos;s connect.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="text-[16px] text-white/35 font-light leading-relaxed"
          >
            Open to collaborations, internships, and exciting opportunities.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Contact links — stacked cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 space-y-3"
          >
            <CardSpotlight
              className="rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 cursor-pointer"
              spotlightColor="rgba(255, 100, 30, 0.06)"
            >
              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="flex items-center gap-4 p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-orange-500/10 border border-orange-500/12 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 text-orange-400/80" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] uppercase tracking-wider text-white/25 mb-0.5 font-medium">
                    Email
                  </p>
                  <p className="text-[13px] text-white/60 truncate">
                    {PERSONAL_INFO.email}
                  </p>
                </div>
              </a>
            </CardSpotlight>

            <CardSpotlight
              className="rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 cursor-pointer"
              spotlightColor="rgba(255, 100, 30, 0.06)"
            >
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-white/[0.03] border border-white/[0.06] flex items-center justify-center flex-shrink-0">
                  <Github className="w-4 h-4 text-white/45" />
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/25 mb-0.5 font-medium">
                    GitHub
                  </p>
                  <p className="text-[13px] text-white/60">@agniveshab</p>
                </div>
              </a>
            </CardSpotlight>

            <CardSpotlight
              className="rounded-xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 cursor-pointer"
              spotlightColor="rgba(255, 100, 30, 0.06)"
            >
              <a
                href={PERSONAL_INFO.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4"
              >
                <div className="w-10 h-10 rounded-xl bg-pink-500/10 border border-pink-500/12 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-4 h-4 text-pink-400/80"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[11px] uppercase tracking-wider text-white/25 mb-0.5 font-medium">
                    Instagram
                  </p>
                  <p className="text-[13px] text-white/60">@agniveshab</p>
                </div>
              </a>
            </CardSpotlight>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-8"
          >
            <CardSpotlight
              className="rounded-2xl bg-white/[0.02] border border-white/[0.06] hover:border-white/[0.1] transition-all duration-500 cursor-default"
              spotlightColor="rgba(255, 100, 30, 0.04)"
            >
              <form onSubmit={handleSubmit} className="p-7 sm:p-8 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={(e) =>
                      setFormData({ ...formData, name: e.target.value })
                    }
                    required
                    className="input-field"
                  />
                  <input
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={(e) =>
                      setFormData({ ...formData, email: e.target.value })
                    }
                    required
                    className="input-field"
                  />
                </div>
                <textarea
                  placeholder="Tell me about your project or idea..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  required
                  className="input-field resize-none"
                />
                <button
                  type="submit"
                  disabled={formState !== "idle"}
                  className="inline-flex items-center gap-2.5 px-6 py-3 rounded-xl bg-white text-black text-[14px] font-medium hover:bg-white/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300"
                >
                  {formState === "idle" && (
                    <>
                      <Send className="w-4 h-4" />
                      Send Message
                    </>
                  )}
                  {formState === "sending" && (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      Sending...
                    </>
                  )}
                  {formState === "sent" && (
                    <>
                      <CheckCircle className="w-4 h-4" />
                      Sent!
                    </>
                  )}
                </button>
              </form>
            </CardSpotlight>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
