"use client";

import { motion, useReducedMotion } from "motion/react";
import { experience } from "@/lib/data";
import { slideClassName } from "@/lib/slides";

export function Experience() {
  const reduce = useReducedMotion();

  return (
    <section id="experience" className={slideClassName}>
      <div className="relative z-10 mx-auto flex h-full w-full max-w-3xl flex-col justify-center">
        <motion.h2
          className="text-3xl font-bold tracking-tight text-foreground md:text-4xl"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
        >
          Work Experience
        </motion.h2>

        <ol className="mt-6 space-y-3">
          {experience.map((item, i) => (
            <motion.li
              key={`${item.company}-${item.period}`}
              layoutId={reduce ? undefined : `exp-${item.company}`}
              className="glass-panel card-glow list-none p-5 md:p-6"
              initial={reduce ? false : { opacity: 0, y: 36, scale: 0.96 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.35 }}
              transition={{
                type: "spring",
                stiffness: 150,
                damping: 18,
                delay: i * 0.06,
              }}
              whileHover={reduce ? undefined : { y: -4, scale: 1.01 }}
            >
              <div className="flex flex-wrap items-center gap-2">
                <span className="font-mono text-xs text-accent">
                  {item.period}
                </span>
                <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-[11px] text-muted">
                  {item.type}
                </span>
              </div>
              <h3 className="mt-2 text-base font-semibold text-foreground md:text-lg">
                {item.role}
              </h3>
              <p className="mt-0.5 text-sm text-muted">{item.company}</p>
              <ul className="mt-3 space-y-1.5">
                {item.highlights.slice(0, 2).map((line) => (
                  <li
                    key={line}
                    className="border-l-2 border-accent/40 pl-3 text-sm leading-relaxed text-muted"
                  >
                    {line}
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
