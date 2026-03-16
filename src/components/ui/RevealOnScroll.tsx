"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";
import { ANIMATIONS } from "@/constants/animations";

interface RevealOnScrollProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  amount?: number;
  once?: boolean;
}

export function RevealOnScroll({
  children,
  className,
  delay = 0,
  staggerDelay = 0,
  amount = 0.2,
  once = true,
}: RevealOnScrollProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, y: ANIMATIONS.distance.fadeUp }}
      animate={
        isInView
          ? { opacity: 1, y: 0 }
          : { opacity: 0, y: ANIMATIONS.distance.fadeUp }
      }
      transition={{
        duration: ANIMATIONS.duration.slow / 1000,
        delay: delay + staggerDelay,
        ease: ANIMATIONS.easing.default,
      }}
    >
      {children}
    </motion.div>
  );
}

interface RevealOnScrollStaggerProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  amount?: number;
  once?: boolean;
}

export function RevealOnScrollStagger({
  children,
  className,
  staggerDelay = 0.1,
  amount = 0.2,
  once = true,
}: RevealOnScrollStaggerProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount });

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
        hidden: {},
      }}
    >
      {children}
    </motion.div>
  );
}
