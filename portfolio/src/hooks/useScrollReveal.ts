"use client";

import { useRef, useEffect, useState } from "react";
import { ANIMATIONS } from "@/constants/animations";

interface UseScrollRevealOptions {
  once?: boolean;
  amount?: number;
  rootMargin?: string;
}

export function useScrollReveal(options: UseScrollRevealOptions = {}) {
  const { once = true, amount = 0.2, rootMargin = "0px" } = options;
  const ref = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once && element) {
            observer.unobserve(element);
          }
        } else if (!once) {
          setIsInView(false);
        }
      },
      { threshold: amount, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once, amount, rootMargin]);

  return { ref, isInView };
}
