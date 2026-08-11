"use client";

import { Certificate, GraduationCap } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { certifications, education } from "@/lib/data";

export function Certifications() {
  const reduce = useReducedMotion();

  return (
    <section id="certifications" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Education & Certifications
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2">
          <Reveal>
            <motion.div
              className="glass-panel card-glow h-full p-7"
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <GraduationCap size={22} weight="duotone" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                {education.school}
              </h3>
              <p className="mt-2 text-sm text-muted">{education.degree}</p>
              <p className="mt-3 font-mono text-xs text-accent">
                {education.period}
              </p>
            </motion.div>
          </Reveal>

          <Reveal delay={0.08}>
            <motion.div
              className="glass-panel card-glow h-full p-7"
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 280, damping: 22 }}
            >
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-accent-soft text-accent">
                <Certificate size={22} weight="duotone" />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">
                Certifications
              </h3>
              <ul className="mt-5 space-y-4">
                {certifications.map((cert) => (
                  <li
                    key={cert.title}
                    className="border-b border-white/10 pb-4 last:border-0 last:pb-0"
                  >
                    <p className="text-sm font-medium text-foreground">
                      {cert.title}
                    </p>
                    <p className="mt-1 text-xs text-muted">
                      {cert.issuer} · {cert.period}
                    </p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
