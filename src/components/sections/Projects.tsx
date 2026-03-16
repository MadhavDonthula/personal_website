"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Trophy, Star, Github } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Guardian",
    description:
      "Real-time fraud detection platform built in 36 hours at Cal Hacks 11.0. Won 1st place among 3,600+ participants. Now Bright Data-backed, piloting with 2 community banks.",
    tech: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
      "GCP",
    ],
    github: "https://github.com/madhavdonthula/guardian",
    devpost: "#",
    badge: "🏆 Cal Hacks 1st Place",
    image: "/images/projects/guardian.jpg",
    featured: true,
  },
  {
    title: "Code Linguo",
    description:
      "AI speech tutoring platform serving 500+ learners. Processes 40,000+ audio samples via Whisper with real-time GPT-4 scoring, deployed on Kubernetes.",
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "OpenAI API",
      "Whisper",
      "Kubernetes",
    ],
    github: "https://github.com/madhavdonthula/code-linguo",
    devpost: null,
    badge: null,
    image: "/images/projects/codelinguo-1.png",
    featured: true,
  },
  {
    title: "EduBill",
    description:
      "Won 1st at UC Berkeley Datathon among 80+ teams. Maps 200+ federal bills to outcome data across 21,461 US colleges using 4 XGBoost models.",
    tech: ["React", "Node.js", "MongoDB", "D3.js", "Python", "XGBoost"],
    github: "https://github.com/madhavdonthula/edubill",
    devpost: null,
    badge: "🏆 Datathon 1st Place",
    image: "/images/projects/edubill.jpg",
    featured: true,
  },
];

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="projects"
      className="py-32 md:py-40 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-accent/5" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <div className="text-center mb-20">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Star className="text-accent" size={16} />
            <span className="text-accent text-sm font-medium font-mono">
              Featured Work
            </span>
          </motion.div>
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="text-text-gray text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            A few things I&apos;ve built and shipped.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className={`group relative bg-gradient-to-br from-surface to-surface/50 border-2 border-border rounded-3xl overflow-hidden hover:border-accent/50 transition-all duration-300 ${
                index === 0 ? "md:col-span-2" : ""
              }`}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dim opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

              <div className="relative h-64 md:h-80 overflow-hidden bg-accent/10">
                {project.image.includes("codelinguo") || project.image.includes("guardian") || project.image.includes("edubill") ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    onError={(e) => {
                      const target = e.currentTarget;
                      target.style.display = "none";
                    }}
                  />
                ) : null}
                <div className="w-full h-full flex items-center justify-center text-6xl font-bold text-accent">
                  {project.title.charAt(0)}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />

                {project.badge && (
                  <div className="absolute top-6 right-6 px-4 py-2 bg-yellow-500/20 backdrop-blur-xl border border-yellow-500/40 rounded-full text-yellow-500 text-sm font-bold flex items-center gap-2 shadow-lg">
                    <Trophy size={16} />
                    {project.badge}
                  </div>
                )}
              </div>

              <div className="p-8">
                <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-accent transition-colors">
                  {project.title}
                </h3>
                <p className="text-text-gray text-base leading-relaxed mb-6">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1.5 bg-surface/50 border border-border text-accent rounded-lg text-xs font-medium hover:bg-accent hover:text-white transition-all font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex items-center gap-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-accent font-medium hover:text-foreground transition-colors font-mono"
                  >
                    <Github size={18} />
                    <span>GitHub</span>
                  </a>
                  {project.devpost && (
                    <a
                      href={project.devpost}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-accent font-medium hover:text-foreground transition-colors font-mono"
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853h-1.336z" />
                      </svg>
                      <span>Devpost</span>
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-auto flex items-center gap-3 text-accent font-medium group-hover:gap-5 transition-all"
                  >
                    <span className="font-mono">View →</span>
                    <ArrowRight
                      size={20}
                      className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                    />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
