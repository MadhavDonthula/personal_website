"use client";

import { motion } from "framer-motion";

export function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-[1440px] mx-auto px-6 md:px-20">
        <motion.p
          className="text-center text-text-gray text-sm font-mono"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Designed & built by Madhav Donthula · Berkeley, CA · 2026
        </motion.p>
      </div>
    </footer>
  );
}
