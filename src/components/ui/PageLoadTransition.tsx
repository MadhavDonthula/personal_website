"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ANIMATIONS } from "@/constants/animations";

export function PageLoadTransition() {
  const [isComplete, setIsComplete] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => setIsComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (shouldReduceMotion) return null;

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent to-accent-dim z-[60]"
      initial={{ scaleX: 0 }}
      animate={{ scaleX: isComplete ? 1 : 0 }}
      transition={{
        duration: ANIMATIONS.duration.pageLoad / 1000,
        delay: 0.5,
        ease: [0.4, 0, 0.2, 1],
      }}
      style={{ transformOrigin: "left" }}
    />
  );
}
