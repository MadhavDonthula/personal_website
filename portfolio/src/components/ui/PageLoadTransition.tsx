"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ANIMATIONS } from "@/constants/animations";

export function PageLoadTransition() {
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsComplete(true), 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo to-cyan z-[60]"
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
