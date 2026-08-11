"use client";

import {
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/data";
import { slideClassName } from "@/lib/slides";
import { useSlides } from "@/components/slide-provider";

export function Contact() {
  const reduce = useReducedMotion();
  const { goTo } = useSlides();

  return (
    <section id="contact" className={slideClassName}>
      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <motion.div
          className="glass-panel card-glow w-full p-8 md:p-10"
          initial={reduce ? false : { opacity: 0, y: 36, scale: 0.95 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 120, damping: 16 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Let&apos;s build something together.
          </h2>
          <p className="mx-auto mt-3 max-w-[40ch] text-sm text-muted md:text-base">
            Open to freelance and contract work across mobile and web.
          </p>

          <ul className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6">
            <li>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <EnvelopeSimple size={18} weight="duotone" />
                {site.email}
              </a>
            </li>
            <li>
              <a
                href={site.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <LinkedinLogo size={18} weight="duotone" />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
              >
                <GithubLogo size={18} weight="duotone" />
                GitHub
              </a>
            </li>
          </ul>

          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-bg accent-glow transition-colors hover:bg-accent-hover"
          >
            Get in Touch
          </a>
        </motion.div>

        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:gap-6">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.fullName}
          </p>
          <button
            type="button"
            onClick={() => goTo("top")}
            className="text-xs font-medium text-muted transition-colors hover:text-accent"
          >
            Back to first slide
          </button>
        </div>
      </div>
    </section>
  );
}
