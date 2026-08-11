"use client";

import { motion, useReducedMotion } from "motion/react";
import { BrandName } from "@/components/brand-name";
import { slideClassName } from "@/lib/slides";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className={slideClassName}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(198,93,37,0.1),transparent_55%)]"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center">
        <div className="mb-6 md:mb-8">
          <BrandName slot="about" />
        </div>

        <motion.div
          className="glass-panel card-glow w-full p-8 md:p-10"
          initial={reduce ? false : { opacity: 0, y: 40, scale: 0.94 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ type: "spring", stiffness: 55, damping: 20, mass: 1 }}
        >
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
            About
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Building products end to end
          </h2>
          <p className="mt-5 text-base leading-relaxed text-muted md:text-lg">
            Mobile & Web Developer dengan pengalaman 3+ tahun membangun
            aplikasi cross-platform dan sistem web skala enterprise. Fokus pada
            Flutter untuk mobile, serta Laravel, Next.js, dan Supabase untuk web
            dan backend, dari arsitektur sampai rilis ke Play Store dan App
            Store.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
