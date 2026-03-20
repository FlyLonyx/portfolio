export interface Project {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  features: string[];
  challenges: string;
  tags: string[];
  category: "Frontend" | "Backend" | "Full Stack" | "DevOps";
  gradient: string;
  cover: string;
  year: string;
  status: "En production" | "En développement" | "Terminé" | "Open Source";
  github: string;
  demo: string | null;
  duration: string;
  role: string;
}

export const projects: Project[] = [
  {
    slug: "portfolio",
    title: "Portfolio Personnel",
    description: "Mon site portfolio développeur — design moderne, dark/light mode, animations fluides et architecture Next.js.",
    longDescription:
      "Site vitrine conçu pour présenter mes compétences et projets en tant que développeur full stack. Construit avec Next.js 15 et l'App Router, il adopte une esthétique flat SaaS moderne avec un système de thème clair/sombre, des animations Framer Motion, une navigation fluide et un design responsive pixel-perfect. Le tout est stylé avec Tailwind CSS v4 et utilise des composants réutilisables pour une maintenabilité optimale.",
    features: [
      "Dark mode / Light mode avec next-themes",
      "Animations d'entrée et scroll avec Framer Motion",
      "Pages dynamiques par projet avec slugs",
      "Design flat moderne style SaaS",
      "Formulaire de contact avec mailto prérempli",
      "Responsive mobile-first avec navbar adaptative",
    ],
    challenges: "Le principal défi a été de créer un design system cohérent entre les modes clair et sombre tout en gardant une identité visuelle forte. Le choix d'une palette blue-violet / cyan avec des variables CSS permet de switcher de thème sans flash ni incohérence, et les composants réutilisables (card-flat, btn-primary, tags) assurent la cohérence sur toutes les pages.",
    tags: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    category: "Frontend",
    gradient: "from-[#7c3aed] to-[#22d3ee]",
    cover: "/projects/portfolio.png",
    year: "2025",
    status: "En production",
    github: "https://github.com",
    demo: null,
    duration: "1 semaine",
    role: "Design & Développement",
  },
];

export const categories = ["Tous", "Frontend", "Backend", "Full Stack", "DevOps"] as const;
export type Category = (typeof categories)[number];

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}
