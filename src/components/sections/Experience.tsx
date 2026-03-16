"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Trophy, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Synopsys",
    role: "Software Engineering Intern",
    date: "Summer 2025",
    description: [
      "Developing high-performance backend services for semiconductor design automation tools",
      "Building scalable data pipelines to process terabytes of design verification data",
      "Implementing RESTful APIs and microservices architecture using Python and Go",
      "Collaborating with cross-functional teams to deliver enterprise-grade software solutions",
    ],
    tech: ["Python", "Go", "PostgreSQL", "Docker", "Kubernetes", "AWS"],
    image: "/images/experience/synopsys.jpg",
    badge: null as string | null,
  },
  {
    company: "Handbook",
    role: "Software Engineering Intern",
    date: "Jan 2025 - Present",
    description: [
      "Built full-stack features for a collaborative knowledge management platform",
      "Implemented real-time collaboration features using WebSockets and React",
      "Optimized database queries reducing page load times by 40%",
      "Developed RESTful APIs and integrated third-party services",
    ],
    tech: ["React", "TypeScript", "Node.js", "MongoDB", "Redis", "WebSockets"],
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
            From startups to enterprise — building impactful software at scale
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

                    <div className="md:w-64 flex-shrink-0">
                      <motion.div
                        className="relative w-full aspect-video rounded-xl overflow-hidden bg-accent/20"
                        whileHover={{
                          rotateX: 5,
                          rotateY: 5,
                          transition: { duration: 0.3 },
                        }}
                        style={{ transformStyle: "preserve-3d" }}
                      >
                        <div className="w-full h-full flex items-center justify-center text-4xl font-bold text-accent">
                          {exp.company.charAt(0)}
                        </div>
                      </motion.div>
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
