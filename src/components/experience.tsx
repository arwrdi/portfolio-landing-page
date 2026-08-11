"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Work Experience
          </h2>
        </Reveal>

        <ol className="mt-12 max-w-3xl space-y-5">
          {experience.map((item, i) => (
            <Reveal key={`${item.company}-${item.period}`} delay={reduce ? 0 : i * 0.06}>
              <motion.li
                className="glass-panel card-glow list-none p-6 md:p-7"
                whileHover={reduce ? undefined : { y: -4, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 280, damping: 22 }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-mono text-xs text-accent">
                    {item.period}
                  </span>
                  <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-muted">
                    {item.type}
                  </span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-foreground">
                  {item.role}
                </h3>
                <p className="mt-1 text-sm text-muted">{item.company}</p>
                <ul className="mt-4 space-y-2">
                  {item.highlights.map((line) => (
                    <li
                      key={line}
                      className="border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-muted"
                    >
                      {line}
                    </li>
                  ))}
                </ul>
              </motion.li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
