"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowRight, Trophy, Star } from "lucide-react";

const projects = [
  {
    title: "Guardian",
    description:
      "AI-powered fraud detection platform that won 1st place at Cal Hacks 11.0. Real-time anomaly detection serving 500+ users with 99.9% uptime.",
    tech: [
      "Python",
      "TensorFlow",
      "FastAPI",
      "React",
      "PostgreSQL",
      "Docker",
      "GCP",
    ],
    link: "#",
    badge: "🏆 Cal Hacks 1st Place",
    image: "/images/projects/guardian.jpg",
    featured: true,
  },
  {
    title: "Code Linguo",
    description:
      "Intelligent language learning platform powered by AI. Adaptive curriculum that personalizes to each learner's pace and style.",
    tech: [
      "TypeScript",
      "Next.js",
      "TailwindCSS",
      "OpenAI API",
      "PostgreSQL",
      "Vercel",
    ],
    link: "#",
    badge: null,
    image: "/images/projects/code-linguo.jpg",
    featured: false,
  },
  {
    title: "EduBill",
    description:
      "Educational billing analytics platform that secured 1st place in a national datathon. Provides real-time insights into educational spending patterns.",
    tech: ["React", "Node.js", "MongoDB", "D3.js", "Python", "Pandas"],
    link: "#",
    badge: "🏆 Datathon 1st Place",
    image: "/images/projects/edubill.jpg",
    featured: true,
  },
  {
    title: "InferenceGate",
    description:
      "ML inference optimization platform for deploying models at scale with minimal latency.",
    tech: ["Python", "PyTorch", "Kubernetes", "Redis", "gRPC"],
    link: "#",
    badge: null,
    image: "/images/projects/inferencegate.jpg",
    featured: false,
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
            Building impactful products that solve real-world problems at scale
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.a
              key={project.title}
              href={project.link}
              className="group relative bg-gradient-to-br from-surface to-surface/50 border-2 border-border rounded-3xl overflow-hidden hover:border-accent/50 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-dim opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl -z-10" />

              <div className="relative h-64 md:h-80 overflow-hidden bg-accent/20">
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
                <div className="flex items-center gap-3 text-accent font-medium group-hover:gap-5 transition-all">
                  <span className="font-mono">View →</span>
                  <ArrowRight
                    size={20}
                    className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all"
                  />
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
