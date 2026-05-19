"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export function AmbientBackground() {
  const { scrollYProgress } = useScroll();

  // Parallax transforms for gradient orbs
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -300]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -500]);
  const orb3Y = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const orb4Y = useTransform(scrollYProgress, [0, 1], [0, -400]);

  const orb1X = useTransform(scrollYProgress, [0, 0.5, 1], [0, 30, -20]);
  const orb2X = useTransform(scrollYProgress, [0, 0.5, 1], [0, -40, 20]);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Primary warm orb — top center, orange-red */}
      <motion.div
        style={{ y: orb1Y, x: orb1X }}
        className="absolute -top-[20vh] left-1/2 -translate-x-1/2 w-[90vw] h-[70vh]"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(220,80,20,0.06)_0%,rgba(180,50,10,0.02)_40%,transparent_70%)]" />
      </motion.div>

      {/* Secondary orb — right side, deep red */}
      <motion.div
        style={{ y: orb2Y, x: orb2X }}
        className="absolute top-[30vh] -right-[10vw] w-[50vw] h-[60vh]"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(180,40,20,0.04)_0%,transparent_65%)]" />
      </motion.div>

      {/* Tertiary orb — bottom left, warm amber */}
      <motion.div
        style={{ y: orb3Y }}
        className="absolute top-[80vh] -left-[5vw] w-[40vw] h-[50vh]"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(240,120,30,0.03)_0%,transparent_60%)]" />
      </motion.div>

      {/* Deep accent — mid page, very subtle red */}
      <motion.div
        style={{ y: orb4Y }}
        className="absolute top-[150vh] left-[30%] w-[50vw] h-[40vh]"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(200,50,30,0.035)_0%,transparent_60%)]" />
      </motion.div>

      {/* Lower page warm glow */}
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [0, -350]) }}
        className="absolute top-[250vh] right-[10%] w-[45vw] h-[50vh]"
      >
        <div className="w-full h-full bg-[radial-gradient(ellipse_at_center,rgba(230,90,20,0.03)_0%,transparent_60%)]" />
      </motion.div>
    </div>
  );
}
