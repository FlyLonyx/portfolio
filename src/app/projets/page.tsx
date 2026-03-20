"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { GitBranchIcon, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useState } from "react";
import { projects, categories, type Category } from "@/data/projects";

export default function ProjetsPage() {
  const [activeFilter, setActiveFilter] = useState<Category>("Tous");

  const filtered = activeFilter === "Tous" ? projects : projects.filter((p) => p.category === activeFilter);

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          badge="Portfolio"
          title="Mes projets"
          description="Une sélection de projets personnels et professionnels qui reflètent ma polyvalence technique."
        />

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "bg-muted text-muted-foreground hover:text-foreground hover:bg-surface border border-transparent hover:border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-4">
          {filtered.map((project, i) => (
            <motion.div
              key={project.slug}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
            >
              <Link
                href={`/projets/${project.slug}`}
                className="card-flat group block overflow-hidden hover:-translate-y-1 transition-transform duration-200"
              >
                {/* Cover */}
                <div className={`h-40 bg-gradient-to-br ${project.gradient} relative overflow-hidden`}>
                  <img
                    src={project.cover}
                    alt={project.title}
                    className="absolute inset-0 w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                      Voir le détail
                    </span>
                  </div>
                  {/* Badges */}
                  <div className="absolute top-3 left-3 flex gap-2">
                    <span className="bg-black/30 backdrop-blur-sm text-white/90 text-[10px] font-semibold px-2.5 py-1 rounded-md">
                      {project.year}
                    </span>
                    <span className="bg-black/30 backdrop-blur-sm text-white/90 text-[10px] font-semibold px-2.5 py-1 rounded-md">
                      {project.status}
                    </span>
                  </div>
                  {/* Actions */}
                  <div className="absolute top-3 right-3 flex gap-1.5">
                    {project.github && (
                      <span
                        onClick={(e) => { e.preventDefault(); window.open(project.github, "_blank"); }}
                        className="h-7 w-7 rounded-md bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/40 transition-all cursor-pointer"
                      >
                        <GitBranchIcon size={13} />
                      </span>
                    )}
                    {project.demo && (
                      <span
                        onClick={(e) => { e.preventDefault(); window.open(project.demo!, "_blank"); }}
                        className="h-7 w-7 rounded-md bg-black/30 backdrop-blur-sm flex items-center justify-center text-white/80 hover:text-white hover:bg-black/40 transition-all cursor-pointer"
                      >
                        <ArrowUpRight size={13} />
                      </span>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-primary">
                      {project.category}
                    </span>
                    <span className="text-border">·</span>
                    <span className="text-[10px] text-muted-foreground">{project.role}</span>
                  </div>
                  <h3 className="font-display font-bold text-lg mb-1.5">{project.title}</h3>
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 5).map((tag) => (
                      <span key={tag} className="tag text-[10px]">{tag}</span>
                    ))}
                    {project.tags.length > 5 && (
                      <span className="tag text-[10px]">+{project.tags.length - 5}</span>
                    )}
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="card-flat inline-flex items-center gap-3 px-6 py-4">
            <p className="text-sm text-muted-foreground">
              Envie de voir plus ?
            </p>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary py-2! px-4! text-xs! group"
            >
              GitHub
              <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
