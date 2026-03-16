"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ANIMATIONS } from "@/constants/animations";

interface TypewriterProps {
  roles: string[];
}

export function Typewriter({ roles }: TypewriterProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = roles[currentIndex];

    if (!isDeleting) {
      if (displayText.length < currentRole.length) {
        const timer = setTimeout(() => {
          setDisplayText(currentRole.slice(0, displayText.length + 1));
        }, ANIMATIONS.duration.typewriter);
        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => setIsDeleting(true), ANIMATIONS.duration.typewriterPause);
        return () => clearTimeout(timer);
      }
    } else {
      if (displayText.length > 0) {
        const timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, ANIMATIONS.duration.typewriter);
        return () => clearTimeout(timer);
      } else {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % roles.length);
      }
    }
  }, [displayText, isDeleting, currentIndex, roles]);

  return (
    <div className="flex items-center gap-1 min-h-[2rem]">
      <span className="text-cyan text-xl md:text-2xl font-bold font-mono">
        {displayText}
      </span>
      <motion.span
        className="inline-block w-0.5 h-6 bg-cyan"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.5, repeat: Infinity }}
      />
    </div>
  );
}
