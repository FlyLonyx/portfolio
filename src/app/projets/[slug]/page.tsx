"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowUpRight,
  GitBranchIcon,
  Calendar,
  Clock,
  User,
  CheckCircle2,
  ExternalLink,
  Layers,
} from "lucide-react";
import { getProjectBySlug, projects } from "@/data/projects";
import { notFound } from "next/navigation";

const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.45, ease: [0.22, 1, 0.36, 1] as const },
});

export default function ProjectPage() {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  // Next / prev projects
  const currentIndex = projects.findIndex((p) => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  const meta = [
    { icon: Calendar, label: "Année", value: project.year },
    { icon: Clock, label: "Durée", value: project.duration },
    { icon: User, label: "Rôle", value: project.role },
    { icon: Layers, label: "Catégorie", value: project.category },
  ];

  return (
    <section className="py-8 md:py-16">
      <div className="mx-auto max-w-4xl px-6 md:px-8">
        {/* Breadcrumb */}
        <motion.div {...fadeUp(0)} className="mb-8">
          <Link
            href="/projets"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
          >
            <ArrowLeft size={14} className="transition-transform group-hover:-translate-x-1" />
            Retour aux projets
          </Link>
        </motion.div>

        {/* Hero cover */}
        <motion.div
          {...fadeUp(0.05)}
          className={`h-56 md:h-80 rounded-2xl bg-gradient-to-br ${project.gradient} relative overflow-hidden mb-8`}
        >
          <img
            src={project.cover}
            alt={project.title}
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => { (e.target as HTMLImageElement).style.display = "none"; }}
          />
          {/* Fallback: title watermark when no image */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white/20 font-display font-bold text-5xl md:text-7xl tracking-tight select-none">
              {project.title}
            </span>
          </div>
          {/* Status badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-black/30 backdrop-blur-sm text-white/90 text-[11px] font-semibold px-3 py-1.5 rounded-lg">
              {project.status}
            </span>
          </div>
        </motion.div>

        {/* Title + Actions */}
        <motion.div {...fadeUp(0.1)} className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
            <div>
              <span className="tag mb-2 inline-block">{project.category}</span>
              <h1 className="font-display text-3xl md:text-4xl font-bold tracking-tight">
                {project.title}
              </h1>
            </div>
            <div className="flex gap-2 shrink-0">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary py-2.5! px-4! text-xs! group"
                >
                  <GitBranchIcon size={14} />
                  Code source
                  <ArrowUpRight size={12} className="opacity-50 group-hover:opacity-100 transition-opacity" />
                </a>
              )}
              {project.demo && (
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary py-2.5! px-4! text-xs! group"
                >
                  <ExternalLink size={14} />
                  Démo live
                  <ArrowUpRight size={12} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
              )}
            </div>
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed">{project.description}</p>
        </motion.div>

        {/* Meta cards */}
        <motion.div {...fadeUp(0.15)} className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10">
          {meta.map((item) => (
            <div key={item.label} className="card-flat p-4 flex items-center gap-3">
              <div className="h-9 w-9 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                <item.icon size={16} className="text-primary" />
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold">{item.label}</p>
                <p className="text-sm font-semibold">{item.value}</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Technologies */}
        <motion.div {...fadeUp(0.2)} className="mb-10">
          <h2 className="font-display font-bold text-lg mb-3">Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="tag">{tag}</span>
            ))}
          </div>
        </motion.div>

        {/* Description */}
        <motion.div {...fadeUp(0.25)} className="mb-10">
          <h2 className="font-display font-bold text-lg mb-3">À propos du projet</h2>
          <div className="card-flat p-6">
            <p className="text-muted-foreground leading-relaxed">{project.longDescription}</p>
          </div>
        </motion.div>

        {/* Features */}
        <motion.div {...fadeUp(0.3)} className="mb-10">
          <h2 className="font-display font-bold text-lg mb-3">Fonctionnalités clés</h2>
          <div className="grid sm:grid-cols-2 gap-2">
            {project.features.map((feature) => (
              <div key={feature} className="card-flat p-4 flex items-start gap-3">
                <CheckCircle2 size={16} className="text-primary mt-0.5 shrink-0" />
                <span className="text-sm">{feature}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Challenges */}
        <motion.div {...fadeUp(0.35)} className="mb-16">
          <h2 className="font-display font-bold text-lg mb-3">Défis techniques</h2>
          <div className="card-flat p-6 border-l-4 border-l-primary/30">
            <p className="text-muted-foreground leading-relaxed">{project.challenges}</p>
          </div>
        </motion.div>

        {/* Navigation prev/next */}
        <motion.div {...fadeUp(0.4)} className="grid sm:grid-cols-2 gap-3">
          {prevProject ? (
            <Link
              href={`/projets/${prevProject.slug}`}
              className="card-flat p-5 group hover:-translate-y-0.5 transition-transform duration-200"
            >
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                ← Projet précédent
              </p>
              <p className="font-display font-bold group-hover:text-primary transition-colors">
                {prevProject.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Link
              href={`/projets/${nextProject.slug}`}
              className="card-flat p-5 group text-right hover:-translate-y-0.5 transition-transform duration-200"
            >
              <p className="text-[10px] uppercase tracking-wider text-muted-foreground font-semibold mb-1">
                Projet suivant →
              </p>
              <p className="font-display font-bold group-hover:text-primary transition-colors">
                {nextProject.title}
              </p>
            </Link>
          ) : (
            <div />
          )}
        </motion.div>
      </div>
    </section>
  );
}
