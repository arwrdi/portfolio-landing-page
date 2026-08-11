"use client";

import { Certificate, GraduationCap } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import {
  certifications,
  education,
  techGroups,
} from "@/lib/data";
import { slideClassName } from "@/lib/slides";

export function TechStack() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className={slideClassName}>
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-center">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
        >
          Skills & Credentials
        </motion.h2>

        <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {techGroups.map((group, i) => (
            <motion.div
              key={group.title}
              layoutId={reduce ? undefined : `skill-card-${group.title}`}
              className="glass-panel card-glow p-4 md:p-5"
              initial={reduce ? false : { opacity: 0, scale: 0.9, y: 28 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{
                type: "spring",
                stiffness: 160,
                damping: 18,
                delay: i * 0.05,
              }}
              whileHover={reduce ? undefined : { y: -4, scale: 1.02 }}
            >
              <h3 className="text-sm font-semibold text-accent">{group.title}</h3>
              <ul className="mt-3 flex flex-wrap gap-1.5">
                {group.items.slice(0, 6).map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-2.5 py-1 text-[11px] text-muted"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 grid grid-cols-1 gap-3 md:grid-cols-2">
          <motion.div
            className="glass-panel flex items-start gap-3 p-4"
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.15 }}
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <GraduationCap size={20} weight="duotone" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                {education.school}
              </p>
              <p className="mt-1 text-xs text-muted">{education.degree}</p>
              <p className="mt-1 font-mono text-[11px] text-accent">
                {education.period}
              </p>
            </div>
          </motion.div>

          <motion.div
            className="glass-panel flex items-start gap-3 p-4"
            initial={reduce ? false : { opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ type: "spring", stiffness: 140, damping: 18, delay: 0.2 }}
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent-soft text-accent">
              <Certificate size={20} weight="duotone" />
            </span>
            <div>
              <p className="text-sm font-semibold text-foreground">
                Certifications
              </p>
              <ul className="mt-1 space-y-1">
                {certifications.map((cert) => (
                  <li key={cert.title} className="text-xs text-muted">
                    {cert.title} · {cert.period}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
