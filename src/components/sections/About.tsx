"use client";

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { Award, Code2, Rocket, Users } from "lucide-react";

const stats = [
  { label: "Competitors at Cal Hacks", value: 3600, suffix: "+", icon: Award },
  { label: "Hackathon 1st Places", value: 2, suffix: "", icon: Code2 },
  { label: "Users across live platforms", value: 500, suffix: "+", icon: Users },
  { label: "GPA — Regents' & Chancellor's Scholar", value: 3.8, suffix: "", isDecimal: true, icon: Rocket },
];

function CountUpStat({
  value,
  suffix,
  isDecimal,
  inView,
}: {
  value: number;
  suffix: string;
  isDecimal?: boolean;
  inView: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 2000;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(current);
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [value, inView]);

  return (
    <span>
      {isDecimal ? count.toFixed(1) : Math.floor(count)}
      {suffix}
    </span>
  );
}

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section id="about" className="py-32 md:py-40 relative overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <motion.h2
          className="text-5xl md:text-7xl font-bold text-foreground mb-20 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          About
        </motion.h2>

        <div className="max-w-3xl mx-auto mb-20">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <p className="text-text-gray text-lg md:text-xl leading-relaxed">
              I&apos;m a junior at{" "}
              <span className="text-accent font-semibold">UC Berkeley</span> studying
              Computer Science and Data Science, recognized as a{" "}
              <span className="text-foreground font-semibold">
                Regents&apos; and Chancellor&apos;s Scholar
              </span>{" "}
              — awarded to the top 1% of applicants.
            </p>
            <p className="text-text-gray text-lg md:text-xl leading-relaxed">
              I started{" "}
              <span className="text-accent font-semibold">Guardian</span> after getting
              scammed at 14. It won{" "}
              <span className="text-yellow-500 font-semibold">
                1st place at Cal Hacks 11.0
              </span>{" "}
              among 3,600+ participants and is now Bright Data-backed, piloting with 2
              community banks across 10,000+ accounts.
            </p>
            <p className="text-text-gray text-lg md:text-xl leading-relaxed">
              Outside of Guardian, I&apos;m a SWE Intern at{" "}
              <span className="text-accent font-semibold">Handbook</span> (SkyDeck-backed)
              and an ML Systems Engineer at{" "}
              <span className="text-accent font-semibold">Synopsys</span>, building
              XGBoost-based prediction tooling for hardware engineering teams.
            </p>
            <p className="text-text-gray text-lg md:text-xl leading-relaxed">
              I care about building things that actually work — fast, reliable, and useful
              to real people.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="group relative bg-gradient-to-br from-surface to-surface/50 border-2 border-border rounded-2xl p-8 text-center hover:border-accent/50 transition-colors duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.05 }}
            >
              <div className="w-14 h-14 mx-auto mb-4 bg-accent/10 rounded-xl flex items-center justify-center">
                <stat.icon className="text-accent" size={24} />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-accent mb-3 font-mono">
                <CountUpStat
                  value={stat.value}
                  suffix={stat.suffix}
                  isDecimal={stat.isDecimal}
                  inView={isInView}
                />
              </div>
              <div className="text-sm text-text-gray leading-snug">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
