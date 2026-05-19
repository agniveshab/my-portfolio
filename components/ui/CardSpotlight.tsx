"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";

interface CardSpotlightProps {
  children: ReactNode;
  className?: string;
  spotlightColor?: string;
  onClick?: () => void;
}

export function CardSpotlight({
  children,
  className = "",
  spotlightColor = "rgba(255, 120, 50, 0.07)",
  onClick,
}: CardSpotlightProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
      className={`relative overflow-hidden ${className}`}
    >
      {/* Corner spotlight glow */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(320px circle at ${mousePos.x}px ${mousePos.y}px, ${spotlightColor}, transparent 60%)`,
        }}
      />

      {/* Border glow at cursor position */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-0 rounded-[inherit] transition-opacity duration-500"
        animate={{ opacity: isHovered ? 1 : 0 }}
        style={{
          background: `radial-gradient(200px circle at ${mousePos.x}px ${mousePos.y}px, rgba(255, 140, 50, 0.12), transparent 50%)`,
          mask: `linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)`,
          maskComposite: "exclude",
          WebkitMaskComposite: "xor",
          padding: "1px",
        }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
}
