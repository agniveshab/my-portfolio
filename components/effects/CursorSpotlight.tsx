"use client";

import { useEffect, useState } from "react";

export function CursorSpotlight() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
      
      // Update global CSS variables for spotlight effects
      document.documentElement.style.setProperty("--mouse-x", `${ev.clientX}px`);
      document.documentElement.style.setProperty("--mouse-y", `${ev.clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <>
      <div className="spotlight" />
      <div 
        className="custom-cursor hidden md:block" 
        style={{ 
          transform: `translate(${mousePosition.x - 10}px, ${mousePosition.y - 10}px)` 
        }} 
      />
      <div 
        className="cursor-dot hidden md:block" 
        style={{ 
          transform: `translate(${mousePosition.x - 3}px, ${mousePosition.y - 3}px)` 
        }} 
      />
    </>
  );
}
