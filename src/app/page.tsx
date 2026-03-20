"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Code2, Server, Database, Zap, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { projects } from "@/data/projects";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

const skills = [
  {
    icon: Code2,
    title: "Frontend",
    description: "Interfaces modernes et réactives avec les derniers frameworks.",
    tags: ["React", "Next.js", "TypeScript", "Tailwind"],
    color: "bg-violet-500/10 text-violet-500 dark:text-violet-400",
    iconBg: "bg-violet-500/10",
  },
  {
    icon: Server,
    title: "Backend",
    description: "APIs robustes et scalables, architectures microservices.",
    tags: ["Java", "Go", "Python", "REST"],
    color: "bg-cyan-500/10 text-cyan-500 dark:text-cyan-400",
    iconBg: "bg-cyan-500/10",
  },
  {
    icon: Database,
    title: "Base de données",
    description: "Modélisation et optimisation de bases relationnelles et NoSQL.",
    tags: ["PostgreSQL", "MongoDB", "Redis", "SQL"],
    color: "bg-pink-500/10 text-pink-500 dark:text-pink-400",
    iconBg: "bg-pink-500/10",
  },
  {
    icon: Zap,
    title: "DevOps",
    description: "CI/CD, conteneurisation et déploiement cloud automatisé.",
    tags: ["Docker", "Git", "CI/CD", "Linux"],
    color: "bg-emerald-500/10 text-emerald-500 dark:text-emerald-400",
    iconBg: "bg-emerald-500/10",
  },
];

const featuredProjects = projects.slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* ═══════════ HERO — Centered ═══════════ */}
      <section className="relative min-h-[90vh] flex items-center justify-center">
        <div className="mx-auto max-w-4xl px-6 md:px-8 py-20 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={0}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-primary/10 text-primary border border-primary/20">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
              </span>
              Disponible pour de nouveaux projets
            </span>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="font-display text-5xl md:text-6xl lg:text-[4.5rem] font-bold leading-[1.08] mb-6 tracking-tight"
          >
            Je crée des expériences
            <br />
            <span className="gradient-text">web modernes</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            <strong className="text-foreground font-semibold">Titouan Jego</strong> — Développeur Full Stack.
            Je conçois des applications performantes et élégantes, du backend robuste au frontend pixel-perfect.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="flex flex-wrap justify-center gap-4"
          >
            <Link href="/projets" className="btn-primary group">
              Voir mes projets
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/contact" className="btn-secondary group">
              Me contacter
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1 opacity-50" />
            </Link>
          </motion.div>

          {/* Tech stack badges */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={4}
            className="mt-16 flex flex-wrap justify-center gap-2"
          >
            {["Java", "Go", "Python", "React", "Next.js", "TypeScript", "Docker"].map((tech) => (
              <span key={tech} className="tag">{tech}</span>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ═══════════ SKILLS ═══════════ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionHeading
            badge="Compétences"
            title="Mon expertise technique"
            description="Des technologies modernes pour construire des applications robustes et scalables."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
                className="card-flat group p-6 hover:-translate-y-1 transition-transform duration-200"
              >
                <div className={`h-10 w-10 rounded-xl ${skill.iconBg} flex items-center justify-center mb-4`}>
                  <skill.icon size={20} className={skill.color.split(" ").slice(1).join(" ")} />
                </div>
                <h3 className="font-display font-bold text-base mb-1.5">{skill.title}</h3>
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{skill.description}</p>
                <div className="flex flex-wrap gap-1.5">
                  {skill.tags.map((tag) => (
                    <span key={tag} className="tag text-[10px]">{tag}</span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ FEATURED PROJECTS ═══════════ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <SectionHeading
            badge="Projets"
            title="Travaux récents"
            description="Quelques projets qui illustrent mon approche et mes compétences."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {featuredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ delay: i * 0.1, duration: 0.4, ease: [0.22, 1, 0.36, 1] as const }}
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
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-200 flex items-center justify-center">
                      <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        Voir le projet
                      </span>
                    </div>
                    <div className="absolute top-3 right-3">
                      <span className="bg-black/30 backdrop-blur-sm text-white/90 text-[10px] font-semibold px-2.5 py-1 rounded-md">
                        {project.year}
                      </span>
                    </div>
                  </div>

                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-display font-bold">{project.title}</h3>
                      <ArrowUpRight size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                    <p className="text-sm text-muted-foreground mb-3 leading-relaxed line-clamp-2">{project.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 3).map((tag) => (
                        <span key={tag} className="tag text-[10px]">{tag}</span>
                      ))}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/projets" className="btn-secondary group">
              Tous les projets
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA ═══════════ */}
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-6xl px-6 md:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5 }}
            className="card-flat relative overflow-hidden p-12 md:p-16 text-center"
          >
            {/* Subtle glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-48 bg-primary/10 rounded-full blur-[80px] pointer-events-none" />

            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 relative tracking-tight">
              Un projet en tête ?
            </h2>
            <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-8 relative">
              Discutons de votre prochain projet et voyons comment le concrétiser ensemble.
            </p>
            <Link href="/contact" className="btn-primary group relative">
              Démarrer une conversation
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
