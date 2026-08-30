"use client";

import { EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/data";
import { slideClassName } from "@/lib/slides";

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <section id="contact" className={slideClassName}>
      <div className="liquid-blob liquid-blob-orange -right-28 bottom-8 h-64 w-64" />
      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <motion.div
          className="liquid-glass grid gap-8 rounded-[2rem] p-7 md:grid-cols-[1.2fr_0.8fr] md:p-10"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
        >
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">Let&apos;s Work Together</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Let&apos;s build something great.
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-6 text-muted md:text-base">
              Open to remote opportunities and interesting mobile or full-stack projects.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href={`mailto:${site.email}`} className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(205,93,36,0.28)]">
                Get in Touch
              </a>
              <a href="#top" className="liquid-pill px-5 py-3 text-sm font-semibold text-foreground">
                Back to Top
              </a>
            </div>
          </div>

          <div className="liquid-glass rounded-3xl p-5">
            <ul className="space-y-4 text-sm text-muted">
              <li>
                <a href={site.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-foreground">
                  <GithubLogo size={18} weight="fill" />
                  github.com/arwrdi
                </a>
              </li>
              <li>
                <a href={site.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-foreground">
                  <LinkedinLogo size={18} weight="fill" />
                  linkedin.com/in/arwin-renardi
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-3 hover:text-foreground">
                  <EnvelopeSimple size={18} weight="fill" />
                  {site.email}
                </a>
              </li>
            </ul>
          </div>
        </motion.div>

        <footer className="mt-8 flex flex-col gap-3 border-t border-white/10 pt-5 text-xs text-muted sm:flex-row sm:items-center sm:justify-between">
          <span className="font-bold tracking-[-0.04em] text-foreground">AR</span>
          <span>© {new Date().getFullYear()} {site.fullName}</span>
          <span>Flutter · Next.js</span>
        </footer>
      </div>
    </section>
  );
}
