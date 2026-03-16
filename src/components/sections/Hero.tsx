"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import Image from "next/image";

const ROLES = [
  "Software Engineer",
  "Data Scientist",
  "Product Builder",
  "Founder",
];

export function Hero() {
  const [currentRole, setCurrentRole] = useState(0);
  const [imageError, setImageError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Subtle top-left glow */}
      <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-accent/[0.04] rounded-full blur-3xl" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          {/* Photo */}
          <motion.div
            className="relative flex-shrink-0 order-1 lg:order-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="relative w-56 h-56 md:w-72 md:h-72 lg:w-80 lg:h-80">
              {/* Glow behind photo */}
              <div className="absolute inset-0 rounded-3xl bg-accent/10 blur-2xl scale-110" />
              {/* Photo container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-border bg-surface">
                {!imageError ? (
                  <Image
                    src="/images/hero/face.jpg"
                    alt="Madhav Donthula"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                    onError={() => setImageError(true)}
                  />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-accent/10 to-accent/5 flex items-center justify-center">
                    <span className="text-5xl font-bold text-accent/40">MD</span>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Text content */}
          <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4 }}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-xs font-medium font-mono tracking-wide">
                Open to Summer 2026 opportunities
              </span>
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-4 leading-[1.1] tracking-tight"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.05 }}
            >
              Madhav
              <br />
              <span className="text-accent">Donthula</span>
            </motion.h1>

            <motion.div
              className="mb-6 h-8 flex items-center justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.15 }}
            >
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentRole}
                  className="text-text-gray text-lg md:text-xl font-mono"
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  {ROLES[currentRole]}
                </motion.span>
              </AnimatePresence>
            </motion.div>

            <motion.p
              className="text-text-gray text-base md:text-lg mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              CS & Data Science @{" "}
              <span className="text-foreground font-medium">UC Berkeley</span> · Co-Founder,{" "}
              <span className="text-accent font-medium">Guardian</span> · SWE Intern
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-3 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.25 }}
            >
              <button
                onClick={() => document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 bg-accent text-background rounded-xl font-semibold text-sm hover:bg-accent-dim transition-colors flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={16} />
              </button>
              <button
                onClick={() => document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })}
                className="px-6 py-3 border border-border text-foreground rounded-xl font-semibold text-sm hover:border-accent/50 hover:text-accent transition-colors"
              >
                Get In Touch
              </button>
            </motion.div>

            {/* Quick stats */}
            <motion.div
              className="flex gap-8 mt-10 pt-8 border-t border-border justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.35 }}
            >
              {[
                { label: "GPA", value: "3.8" },
                { label: "Hackathon Wins", value: "2" },
                { label: "Users Served", value: "500+" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold text-foreground font-mono">{stat.value}</div>
                  <div className="text-text-gray text-xs mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.5 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <ArrowDown size={20} className="text-text-gray" />
      </motion.div>
    </section>
  );
}
