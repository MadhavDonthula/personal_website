"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Code2, Database, Zap } from "lucide-react";

const skillCategories = [
  {
    title: "Languages & Frameworks",
    icon: Code2,
    skills: [
      "Python",
      "Java",
      "C++",
      "Go",
      "JavaScript",
      "TypeScript",
      "React",
      "Node.js",
      "FastAPI",
      "Django",
      "Next.js",
      "TailwindCSS",
    ],
  },
  {
    title: "Systems & Infra",
    icon: Database,
    skills: [
      "PostgreSQL",
      "MongoDB",
      "Redis",
      "Docker",
      "Kubernetes",
      "AWS",
      "GCP",
      "Terraform",
      "Linux",
      "Git",
      "CI/CD",
      "Nginx",
    ],
  },
  {
    title: "Data Science & ML",
    icon: Zap,
    skills: [
      "TensorFlow",
      "PyTorch",
      "scikit-learn",
      "Pandas",
      "NumPy",
      "Spark",
      "Kafka",
      "Airflow",
      "Jupyter",
      "R",
      "SQL",
      "MLOps",
    ],
  },
];

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="skills"
      className="py-32 md:py-40 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-surface/20 to-transparent" />
      <div className="absolute top-1/3 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <div className="text-center mb-20">
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-foreground mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            Skills
          </motion.h2>
          <motion.p
            className="text-text-gray text-lg md:text-xl max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            A comprehensive toolkit for building modern software solutions
          </motion.p>
        </div>

        <div className="space-y-16">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.6,
                delay: 0.2 + categoryIndex * 0.15,
              }}
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 bg-accent/10 border-2 border-accent/20 rounded-2xl flex items-center justify-center">
                  <category.icon className="text-accent" size={28} />
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-accent font-mono">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    className="group relative px-6 py-3 bg-gradient-to-br from-surface to-surface/50 border-2 border-border text-foreground rounded-2xl hover:border-accent hover:bg-accent transition-all duration-300 cursor-default overflow-hidden font-mono"
                    style={{
                      animation: `float ${4 + (skillIndex % 3)}s ease-in-out infinite`,
                      animationDelay: `${(skillIndex % 5) * 0.2}s`,
                    }}
                    initial={{ opacity: 0, scale: 0.8, y: 20 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1, y: 0 }
                        : { opacity: 0, scale: 0.8, y: 20 }
                    }
                    transition={{
                      duration: 0.4,
                      delay: 0.3 + categoryIndex * 0.15 + skillIndex * 0.03,
                    }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <span className="relative font-semibold group-hover:text-white transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
