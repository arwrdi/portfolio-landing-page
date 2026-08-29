"use client";

import { motion, useReducedMotion } from "motion/react";
import { slideClassName } from "@/lib/slides";

export function About() {
  const reduce = useReducedMotion();

  return (
    <section id="about" className={slideClassName}>
      <div className="relative z-10 mx-auto grid w-full max-w-5xl gap-8 md:grid-cols-[0.7fr_1.3fr] md:gap-16">
        <div>
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">About</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Mobile first. Product minded.
          </h2>
        </div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          className="border-t border-border pt-6 md:border-l md:border-t-0 md:pl-10 md:pt-0"
        >
          <p className="text-lg leading-8 text-foreground">
            I build cross-platform mobile applications with Flutter and take
            ownership from implementation and API integration through testing
            and production releases.
          </p>
          <p className="mt-5 leading-7 text-muted">
            My recent work includes enterprise employee workflows, financial
            applications, AWS Cognito authentication, biometrics, Firebase,
            Riverpod, and REST APIs. I also build full-stack products with
            Next.js, TypeScript, Supabase/PostgreSQL, and payment integrations.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
