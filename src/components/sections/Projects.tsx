"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Trophy, Star, Github, Play, ExternalLink } from "lucide-react";
import Image from "next/image";

const projects = [
  {
    title: "Guardian",
    description:
      "Real-time fraud detection platform built in 36 hours at Cal Hacks 11.0. Won 1st place among 3,600+ participants. Now Bright Data-backed, piloting with 2 community banks.",
    tech: ["Python", "TensorFlow", "FastAPI", "React", "PostgreSQL", "Docker", "GCP"],
    github: "https://github.com/aryan-gupta123/Guardian",
    devpost: "https://devpost.com/software/guardian-ai-powered-fraud-prevention-for-your-money",
    video: "https://youtu.be/dWRFXnRT234",
    badge: "Cal Hacks 1st Place",
    images: [
      "/images/projects/guardian-1.png",
      "/images/projects/guardian-2.png",
      "/images/projects/guardian-3.png",
    ],
  },
  {
    title: "Code Linguo",
    description:
      "AI speech tutoring platform serving 500+ learners. Processes 40,000+ audio samples via Whisper with real-time GPT-4 scoring, deployed on Kubernetes.",
    tech: ["TypeScript", "Next.js", "TailwindCSS", "OpenAI API", "Whisper", "Kubernetes"],
    github: "https://github.com/MadhavDonthula/Learn_Linguo",
    devpost: null,
    video: null,
    badge: null,
    images: [
      "/images/projects/codelinguo-1.png",
      "/images/projects/codelinguo-2.png",
      "/images/projects/codelinguo-3.png",
      "/images/projects/codelinguo-4.png",
    ],
  },
  {
    title: "EduBill",
    description:
      "Won 1st at UC Berkeley Datathon among 80+ teams. Maps 200+ federal bills to outcome data across 21,461 US colleges using 4 XGBoost models.",
    tech: ["React", "Node.js", "MongoDB", "D3.js", "Python", "XGBoost"],
    github: "https://github.com/madhavdonthula/edubill",
    devpost: null,
    video: "https://www.loom.com/share/2e695caf0c8f4b7794b86b962f8aba6b",
    badge: "Datathon 1st Place",
    images: [
      "/images/projects/edubill-1.png",
      "/images/projects/edubill-2.png",
    ],
  },
];

function ImageCarousel({ images, title }: { images: string[]; title: string }) {
  const [current, setCurrent] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isHovered || images.length <= 1) return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length, isHovered]);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      if (images.length <= 1) return;
      e.preventDefault();
      if (e.deltaY > 0) {
        setCurrent((prev) => (prev + 1) % images.length);
      } else {
        setCurrent((prev) => (prev - 1 + images.length) % images.length);
      }
    },
    [images.length]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onWheel={handleWheel}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          className="absolute inset-0"
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          <Image
            src={images[current]}
            alt={`${title} screenshot ${current + 1}`}
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
      </AnimatePresence>

      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      {images.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-6 bg-accent"
                  : "w-1.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
      )}

      {images.length > 1 && isHovered && (
        <>
          <button
            onClick={() => setCurrent((prev) => (prev - 1 + images.length) % images.length)}
            className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-black/60 hover:text-white transition-all z-10"
          >
            ‹
          </button>
          <button
            onClick={() => setCurrent((prev) => (prev + 1) % images.length)}
            className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center text-white/80 hover:bg-black/60 hover:text-white transition-all z-10"
          >
            ›
          </button>
        </>
      )}
    </div>
  );
}

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section
      id="projects"
      className="py-32 md:py-40 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-accent/[0.03] via-transparent to-accent/[0.03]" />

      <div className="max-w-[1200px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/20 rounded-full mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <Star className="text-accent" size={14} />
            <span className="text-accent text-sm font-medium font-mono">
              Featured Work
            </span>
          </motion.div>
          <motion.h2
            className="text-5xl md:text-7xl font-bold text-foreground mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.05 }}
          >
            Projects
          </motion.h2>
          <motion.p
            className="text-text-gray text-lg max-w-md mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            A few things I&apos;ve built and shipped.
          </motion.p>
        </div>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative bg-surface/80 border border-border rounded-2xl overflow-hidden hover:border-accent/40 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
            >
              <div className="flex flex-col lg:flex-row">
                <div className="relative lg:w-[55%] h-64 sm:h-72 lg:h-auto lg:min-h-[340px]">
                  <ImageCarousel images={project.images} title={project.title} />
                </div>

                <div className="flex-1 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <h3 className="text-2xl sm:text-3xl font-bold text-foreground group-hover:text-accent transition-colors">
                        {project.title}
                      </h3>
                      {project.badge && (
                        <span className="px-2.5 py-1 bg-yellow-500/15 border border-yellow-500/30 rounded-lg text-yellow-500 text-xs font-bold flex items-center gap-1.5 whitespace-nowrap">
                          <Trophy size={12} />
                          {project.badge}
                        </span>
                      )}
                    </div>

                    <p className="text-text-gray text-sm sm:text-base leading-relaxed mb-5">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-accent/[0.07] border border-accent/15 text-accent rounded-md text-xs font-medium font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3 flex-wrap">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-sm text-foreground hover:border-accent/50 hover:text-accent transition-all font-mono"
                    >
                      <Github size={15} />
                      GitHub
                    </a>

                    {project.devpost && (
                      <a
                        href={project.devpost}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-surface border border-border rounded-lg text-sm text-foreground hover:border-accent/50 hover:text-accent transition-all font-mono"
                      >
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61H6.002zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31 0 4.436-3.21 6.302-6.456 6.302H7.595V5.694zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861.009-2.569-1.096-3.853-3.767-3.853h-1.336z" />
                        </svg>
                        Devpost
                      </a>
                    )}

                    {project.video && (
                      <a
                        href={project.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/25 rounded-lg text-sm text-accent hover:bg-accent/20 transition-all font-mono"
                      >
                        <Play size={14} fill="currentColor" />
                        Demo
                      </a>
                    )}

                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ml-auto inline-flex items-center gap-1.5 text-sm text-text-gray hover:text-accent transition-colors"
                    >
                      <ExternalLink size={14} />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
