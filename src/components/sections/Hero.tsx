"use client";

import { motion } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { Typewriter } from "@/components/ui/Typewriter";
import { HeroOrb } from "@/components/ui/HeroOrb";

const ROLES = [
  "Software Engineer",
  "Data Scientist",
  "Product Builder",
  "Founder",
];

export function Hero() {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="grain-overlay" />
      <div className="absolute inset-0 bg-gradient-to-br from-indigo/10 via-transparent to-cyan/10" />
      <div className="absolute top-0 left-0 w-1/2 h-1/2 bg-indigo/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-cyan/5 rounded-full blur-3xl" />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="z-10">
            <motion.div
              className="inline-flex items-center gap-2 px-4 py-2 bg-indigo/10 backdrop-blur-xl border border-indigo/20 rounded-full mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Sparkles className="text-indigo" size={16} />
              <span className="text-indigo text-sm font-medium font-mono">
                Available for Summer 2026
              </span>
            </motion.div>

            <motion.h1
              className="text-6xl md:text-7xl lg:text-8xl font-bold text-foreground mb-8 leading-[1.1]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              Building{" "}
              <span className="bg-gradient-to-r from-indigo via-purple-500 to-cyan bg-clip-text text-transparent">
                systems
              </span>{" "}
              that matter.
            </motion.h1>

            <motion.div
              className="mb-8 h-10 flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-b from-indigo to-cyan rounded-full" />
                <Typewriter roles={ROLES} />
              </div>
            </motion.div>

            <motion.p
              className="text-text-gray text-lg md:text-xl mb-10 leading-relaxed max-w-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              CS & Data Science @{" "}
              <span className="text-indigo font-semibold">UC Berkeley</span> ·
              Co-Founder,{" "}
              <span className="text-cyan font-semibold">Guardian</span> · SWE
              Intern
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 }}
            >
              <motion.button
                onClick={() => {
                  const projectsSection = document.querySelector("#projects");
                  if (projectsSection) {
                    projectsSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group relative px-8 py-4 bg-gradient-to-r from-indigo to-purple-600 text-white rounded-2xl font-semibold overflow-hidden shadow-xl shadow-indigo/30"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="relative flex items-center gap-2">
                  View My Work
                  <ChevronDown className="rotate-[-90deg]" size={18} />
                </span>
              </motion.button>

              <motion.button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  if (contactSection) {
                    contactSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="group px-8 py-4 border-2 border-foreground/20 backdrop-blur-xl text-foreground rounded-2xl font-semibold hover:border-indigo hover:bg-indigo/10 transition-all shadow-lg"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="relative h-[500px] md:h-[700px] hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <HeroOrb />
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 cursor-pointer flex flex-col items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        onClick={scrollToAbout}
      >
        <span className="text-text-gray text-sm font-mono">
          Scroll to explore
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="text-indigo" size={32} />
        </motion.div>
      </motion.div>
    </section>
  );
}
