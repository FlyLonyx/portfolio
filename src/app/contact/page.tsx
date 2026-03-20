"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Clock, GitBranchIcon, Linkedin, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/section-heading";
import { useState } from "react";

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "jegotitouan44@email.com",
    href: "mailto:jegotitouan44@email.com",
  },
  {
    icon: MapPin,
    label: "Localisation",
    value: "France",
    href: null,
  },
  {
    icon: Clock,
    label: "Disponibilité",
    value: "Sous 24h",
    href: null,
  },
];

const socials = [
  { icon: GitBranchIcon, label: "GitHub", href: "https://github.com" },
  { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
];

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function openMail() {
    const sub = subject || "Prise de contact";
    const body = `Bonjour Titouan,\n\n${message}\n\n---\nNom : ${name}\nEmail : ${email}`;
    const gmailUrl = `mailto:jegotitouan44@email.com?subject=${encodeURIComponent(sub)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, "_blank");
  }

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-6xl px-6 md:px-8">
        <SectionHeading
          badge="Contact"
          title="Travaillons ensemble"
          description="Vous avez un projet en tête ? N'hésitez pas à me contacter pour en discuter."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Left — Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-2 space-y-4"
          >
            {contactInfo.map((info, i) => (
              <motion.div
                key={info.label}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 + i * 0.08, duration: 0.4 }}
                className="card-flat p-5 flex items-center gap-4 group"
              >
                <div className="h-10 w-10 rounded-lg bg-primary/8 flex items-center justify-center shrink-0">
                  <info.icon size={18} className="text-primary" />
                </div>
                <div>
                  <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider">
                    {info.label}
                  </p>
                  {info.href ? (
                    <a
                      href={info.href}
                      className="text-sm font-semibold hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold">{info.value}</p>
                  )}
                </div>
              </motion.div>
            ))}

            {/* Socials */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.4 }}
              className="card-flat p-5"
            >
              <p className="text-[10px] text-muted-foreground font-semibold uppercase tracking-wider mb-3">
                Retrouvez-moi sur
              </p>
              <div className="flex gap-2">
                {socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary py-2! px-3.5! text-xs! group"
                  >
                    <social.icon size={14} />
                    {social.label}
                    <ArrowRight size={10} className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                  </a>
                ))}
              </div>
            </motion.div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.55, duration: 0.4 }}
              className="card-flat p-5 border-l-4 border-l-primary/20"
            >
              <p className="text-sm text-muted-foreground italic leading-relaxed">
                &ldquo;Le code propre fait toujours l&apos;air d&apos;avoir été écrit par quelqu&apos;un qui
                s&apos;en soucie.&rdquo;
              </p>
              <p className="text-xs text-primary font-semibold mt-2">— Robert C. Martin</p>
            </motion.div>
          </motion.div>

          {/* Right — Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
            className="lg:col-span-3"
          >
            <div className="card-flat p-8 md:p-10">
                <div className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Nom <span className="text-primary">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="Votre nom"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email <span className="text-primary">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="vous@exemple.com"
                        className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Sujet
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={subject}
                      onChange={(e) => setSubject(e.target.value)}
                      placeholder="De quoi voulez-vous discuter ?"
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message <span className="text-primary">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Décrivez votre projet, vos besoins..."
                      className="w-full px-4 py-3 rounded-xl bg-surface border border-border text-sm placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/30 transition-all resize-none"
                    />
                  </div>

                  <button
                    type="button"
                    onClick={openMail}
                    className="btn-primary w-full sm:w-auto group"
                  >
                    Envoyer
                    <Mail size={15} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </button>
                </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
