"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { Mail, Linkedin, Github, Send, Sparkles } from "lucide-react";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    value: "madhav@berkeley.edu",
    href: "mailto:madhav@berkeley.edu",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "madhavdonthula",
    href: "https://linkedin.com/in/madhavdonthula",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "madhavdonthula",
    href: "https://github.com/madhavdonthula",
  },
];

export function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    <section
      id="contact"
      className="py-32 md:py-40 relative overflow-hidden"
      ref={ref}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-indigo/10 via-purple-500/5 to-cyan/10" />
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-indigo/20 rounded-full blur-3xl animate-pulse" />
      <div
        className="absolute bottom-20 right-1/4 w-96 h-96 bg-cyan/20 rounded-full blur-3xl animate-pulse"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 md:px-20 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo/10 backdrop-blur-xl border border-indigo/20 rounded-full mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Sparkles className="text-indigo" size={16} />
            <span className="text-indigo text-sm font-medium font-mono">
              Let&apos;s Connect
            </span>
          </motion.div>

          <motion.h2
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="bg-gradient-to-r from-indigo via-purple-500 to-cyan bg-clip-text text-transparent">
              Let&apos;s build
            </span>
            <br />
            <span className="text-foreground">something.</span>
          </motion.h2>

          <motion.p
            className="text-text-gray text-lg md:text-xl mb-16 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            I&apos;m open to{" "}
            <span className="text-indigo font-semibold">
              Software Engineering
            </span>
            ,{" "}
            <span className="text-cyan font-semibold">Product Management</span>,
            and{" "}
            <span className="text-purple-500 font-semibold">Data Science</span>{" "}
            roles.
            <br />
            Let&apos;s connect and discuss how we can work together.
          </motion.p>

          <motion.div
            className="grid md:grid-cols-3 gap-6 mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {contactLinks.map((contact, index) => (
              <motion.a
                key={contact.label}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative bg-gradient-to-br from-surface to-surface/50 border-2 border-border rounded-3xl p-10 hover:border-indigo transition-all duration-500 hover:shadow-2xl hover:shadow-indigo/20 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo/0 to-cyan/0 group-hover:from-indigo/10 group-hover:to-cyan/10 transition-all duration-500" />
                <div className="relative flex flex-col items-center gap-6">
                  <motion.div
                    className="relative w-20 h-20 bg-gradient-to-br from-indigo/10 to-cyan/10 border-2 border-indigo/20 rounded-2xl flex items-center justify-center group-hover:border-indigo transition-all duration-300"
                    whileHover={{ rotate: [0, -5, 5, 0], scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <contact.icon
                      className="text-indigo group-hover:scale-110 transition-transform relative z-10"
                      size={32}
                    />
                  </motion.div>
                  <div className="text-center">
                    <div className="font-bold text-foreground text-lg mb-2 group-hover:text-indigo transition-colors">
                      {contact.label}
                    </div>
                    <div className="text-text-gray text-sm group-hover:text-cyan transition-colors font-mono">
                      {contact.value}
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-surface to-surface/50 border-2 border-border rounded-3xl p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-2 text-center">
                Send a Message
              </h3>
              <p className="text-text-gray text-center mb-8">
                Or reach out directly via any of the channels above
              </p>

              <form
                className="space-y-6"
                onSubmit={(e) => {
                  e.preventDefault();
                  setIsSubmitting(true);
                  setTimeout(() => setIsSubmitting(false), 1500);
                }}
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      placeholder=" "
                      className="peer w-full px-6 py-4 bg-background/50 border-2 border-border rounded-2xl text-foreground placeholder-transparent focus:border-indigo focus:bg-background transition-all outline-none focus:ring-2 focus:ring-indigo/20"
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-6 top-4 text-text-gray transition-all pointer-events-none peer-focus:top-[-10px] peer-focus:left-4 peer-focus:text-indigo peer-focus:text-sm peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-indigo"
                    >
                      Your Name
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="email"
                      id="email"
                      placeholder=" "
                      className="peer w-full px-6 py-4 bg-background/50 border-2 border-border rounded-2xl text-foreground placeholder-transparent focus:border-indigo focus:bg-background transition-all outline-none focus:ring-2 focus:ring-indigo/20"
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-6 top-4 text-text-gray transition-all pointer-events-none peer-focus:top-[-10px] peer-focus:left-4 peer-focus:text-indigo peer-focus:text-sm peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-indigo"
                    >
                      Your Email
                    </label>
                  </div>
                </div>
                <div className="relative">
                  <textarea
                    id="message"
                    placeholder=" "
                    rows={6}
                    className="peer w-full px-6 py-4 bg-background/50 border-2 border-border rounded-2xl text-foreground placeholder-transparent focus:border-indigo focus:bg-background transition-all outline-none resize-none focus:ring-2 focus:ring-indigo/20"
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-6 top-4 text-text-gray transition-all pointer-events-none peer-focus:top-[-10px] peer-focus:left-4 peer-focus:text-indigo peer-focus:text-sm peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:left-4 peer-[:not(:placeholder-shown)]:text-sm peer-[:not(:placeholder-shown)]:text-indigo"
                  >
                    Your Message
                  </label>
                </div>
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="group w-full px-8 py-5 bg-gradient-to-r from-indigo to-purple-600 text-white rounded-2xl font-bold text-lg overflow-hidden relative shadow-xl shadow-indigo/30 disabled:opacity-70"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center justify-center gap-2">
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send
                      size={20}
                      className={`group-hover:translate-x-1 transition-transform ${isSubmitting ? "animate-pulse" : ""}`}
                    />
                  </span>
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
