"use client";

import {
  ArrowUp,
  EnvelopeSimple,
  GithubLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/data";

export function Contact() {
  const reduce = useReducedMotion();

  return (
    <footer id="contact" className="relative border-t border-border py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <motion.div
          className="glass-panel flex flex-col gap-8 p-8 md:flex-row md:items-end md:justify-between md:p-10"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
        >
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Let&apos;s build something together.
            </h2>
            <p className="mt-3 max-w-[40ch] text-sm text-muted md:text-base">
              Open to freelance and contract work across mobile and web.
            </p>

            <ul className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
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
          </div>

          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-12 shrink-0 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-bg accent-glow transition-colors hover:bg-accent-hover active:scale-[0.98]"
          >
            Get in Touch
          </a>
        </motion.div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} {site.fullName}. All rights reserved.
          </p>
          <a
            href="#top"
            className="inline-flex items-center gap-2 text-xs font-medium text-muted transition-colors hover:text-accent"
          >
            Back to Top
            <ArrowUp size={14} weight="bold" />
          </a>
        </div>
      </div>
    </footer>
  );
}
