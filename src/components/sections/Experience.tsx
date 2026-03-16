"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Guardian",
    role: "Co-Founder",
    date: "October 2024 – Present",
    description: [
      "Won 1st place at Cal Hacks among 3,600+ participants — built full fraud detection platform in 36 hours",
      "Deployed iOS push notifications via APNs dispatching fraud alerts within 200ms of detection",
      "Containerized Django backend and PostgreSQL with Docker, standardizing the dev environment",
      "Piloting with 2 community banks, processing live transaction feeds across 10,000+ accounts",
    ],
    tech: ["Python", "Django", "PostgreSQL", "Docker", "Swift", "TensorFlow", "GCP"],
    image: "/images/experience/guardian.jpg",
    badge: "🏆 Cal Hacks 1st Place",
  },
  {
    company: "Synopsys",
    role: "ML Systems Engineering Intern",
    date: "December 2025 – Present",
    description: [
      "Built a React + Django dashboard surfacing real-time ML outputs across 50+ hardware benchmarks for chip design engineers",
      "Built end-to-end ML inference pipelines for chip power prediction, reducing simulation costs by 10x",
      "Enforced GitHub PR review workflow with branch protection across a 3-engineer team",
    ],
    tech: ["Python", "React", "Django", "XGBoost", "Docker", "PostgreSQL"],
    image: "/images/experience/synopsys.jpg",
    badge: null as string | null,
  },
  {
    company: "Handbook",
    role: "Software Engineering Intern",
    date: "January 2026 – Present",
    description: [
      "Led development of an AI workflow automation platform with Slack and Teams integration, deployed across 4 enterprise clients",
      "Wrote 40+ pytest unit tests achieving 100% coverage across 3 core REST endpoints",
      "Resolved a critical XSS vulnerability by refactoring the email preview input sanitization pipeline",
      "Built an automated email outreach system in Node.js + SendGrid scaling to 500+ contacts",
    ],
    tech: ["React", "TypeScript", "Node.js", "Python", "SendGrid", "Slack API"],
    image: "/images/experience/handbook.jpg",
    badge: null as string | null,
  },
];

export function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="experience"
      className="py-32 md:py-40 relative overflow-hidden bg-gradient-to-b from-transparent via-surface/20 to-transparent"
      ref={ref}
    >
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent text-sm font-medium font-mono">
              Professional Journey
            </span>
          </motion.div>
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Experience
          </motion.h2>
          <motion.p
            className="text-text-gray text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Where I&apos;ve worked.
          </motion.p>
        </div>

        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent-dim hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={exp.company}
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.15 }}
              >
                <div className="absolute left-6 top-10 w-5 h-5 rounded-full bg-accent border-4 border-background shadow-lg shadow-accent/20 hidden md:block z-10" />

                <div className="md:ml-20 group relative bg-gradient-to-br from-surface to-surface/50 border-2 border-border rounded-3xl p-8 md:p-10 hover:border-accent/50 transition-all duration-500 hover:shadow-2xl hover:shadow-accent/10 overflow-hidden">
                  <motion.div
                    className="absolute left-0 top-0 w-1 bg-gradient-to-b from-accent to-accent-dim"
                    initial={{ height: 0 }}
                    whileInView={{ height: "100%" }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.8,
                      delay: 0.4 + index * 0.15,
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/0 to-accent/0 group-hover:from-accent/5 group-hover:to-accent/5 transition-all duration-500 pointer-events-none" />

                  <div className="relative flex flex-col md:flex-row gap-6">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                          {exp.company}
                        </h3>
                        {exp.badge && (
                          <span className="px-3 py-1.5 bg-yellow-500/20 border border-yellow-500/40 rounded-xl text-yellow-500 text-xs font-bold flex items-center gap-1.5 shadow-lg">
                            <Trophy size={14} />
                            {exp.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-accent text-lg md:text-xl font-semibold mb-2 font-mono">
                        {exp.role}
                      </p>
                      <div className="flex items-center gap-2 text-text-gray mb-6">
                        <Calendar size={16} />
                        <span className="text-sm whitespace-nowrap font-mono">
                          {exp.date}
                        </span>
                      </div>

                      <ul className="space-y-3 mb-8">
                        {exp.description.map((item, i) => (
                          <motion.li
                            key={i}
                            className="text-text-gray text-base md:text-lg flex gap-3 leading-relaxed"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.4,
                              delay: 0.5 + index * 0.15 + i * 0.1,
                            }}
                          >
                            <span className="text-accent mt-1.5 font-bold">
                              ▸
                            </span>
                            <span>{item}</span>
                          </motion.li>
                        ))}
                      </ul>

                      <div className="flex flex-wrap gap-2">
                        {exp.tech.map((tech, i) => (
                          <motion.span
                            key={tech}
                            className="px-4 py-2 bg-surface/50 border border-border text-accent rounded-xl text-sm font-medium hover:bg-accent hover:text-white hover:border-accent transition-all cursor-default font-mono"
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{
                              duration: 0.3,
                              delay: 0.6 + index * 0.15 + i * 0.05,
                            }}
                            whileHover={{ scale: 1.02 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
