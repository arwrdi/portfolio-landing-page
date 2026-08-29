"use client";

import { motion, useReducedMotion } from "motion/react";
import { slideClassName } from "@/lib/slides";
import { site } from "@/lib/data";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className={slideClassName}>
      <div className="relative z-10 mx-auto flex h-full w-full max-w-5xl flex-col justify-center">
        <motion.p
          className="font-mono text-xs uppercase tracking-[0.22em] text-accent"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Flutter Developer · Jakarta, Indonesia
        </motion.p>

        <motion.h1
          className="mt-6 max-w-4xl text-5xl font-bold leading-[1.02] tracking-[-0.045em] text-foreground sm:text-6xl md:text-7xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
        >
          Building reliable mobile products with Flutter.
        </motion.h1>

        <motion.p
          className="mt-7 max-w-2xl text-base leading-7 text-muted md:text-lg"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          I&apos;m {site.fullName}, a Flutter-focused developer with 3+ years of
          software development experience across enterprise and financial
          applications, plus hands-on full-stack experience with Next.js,
          TypeScript, Supabase, and PostgreSQL.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-wrap gap-3"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          <a
            href="#projects"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-foreground px-6 text-sm font-semibold text-bg transition-opacity hover:opacity-85"
          >
            View selected work
          </a>
          <a
            href="#experience"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border px-6 text-sm font-semibold text-foreground transition-colors hover:bg-white/[0.04]"
          >
            Experience
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex h-11 items-center justify-center px-2 text-sm font-medium text-muted transition-colors hover:text-foreground"
          >
            {site.email}
          </a>
        </motion.div>
      </div>
    </section>
  );
}
