/**
 * Centralized animation constants for the portfolio.
 * All duration, easing, and distance values live here.
 */

export const ANIMATIONS = {
  // Durations (ms)
  duration: {
    fast: 200,
    normal: 400,
    slow: 600,
    pageLoad: 800,
    typewriter: 80,
    typewriterPause: 2000,
  },

  // Easing
  easing: {
    default: "cubic-bezier(0.4, 0, 0.2, 1)",
    spring: { type: "spring" as const, stiffness: 300, damping: 30 },
    springGentle: { type: "spring" as const, stiffness: 100, damping: 20 },
  },

  // Distances (px)
  distance: {
    fadeUp: 20,
    fadeUpLarge: 30,
    slideIn: 50,
  },
} as const;
