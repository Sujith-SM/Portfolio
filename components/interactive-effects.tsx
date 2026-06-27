"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function InteractiveEffects() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 20, mass: 0.2 });
  const [cursor, setCursor] = useState({ x: -200, y: -200 });

  useEffect(() => {
    const move = (e: MouseEvent) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <>
      <motion.div className="fixed left-0 right-0 top-0 z-[70] h-[2px] origin-left bg-white/80" style={{ scaleX }} />
      <motion.div
        aria-hidden
        className="pointer-events-none fixed z-[1] hidden h-40 w-40 rounded-full bg-white/10 blur-3xl md:block"
        animate={{ x: cursor.x - 80, y: cursor.y - 80 }}
        transition={{ type: "spring", stiffness: 120, damping: 18, mass: 0.5 }}
      />
    </>
  );
}
