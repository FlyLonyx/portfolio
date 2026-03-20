"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  badge: string;
  title: string;
  description?: string;
}

export function SectionHeading({ badge, title, description }: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="text-center mb-16"
    >
      <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20 mb-4">
        {badge}
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
    </motion.div>
  );
}
