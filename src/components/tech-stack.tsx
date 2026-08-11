"use client";

import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { techGroups } from "@/lib/data";

export function TechStack() {
  const reduce = useReducedMotion();

  return (
    <section id="skills" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Technical Skills
          </h2>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {techGroups.map((group, i) => (
            <Reveal key={group.title} delay={reduce ? 0 : i * 0.06}>
              <motion.div
                className="glass-panel card-glow h-full p-6"
                whileHover={reduce ? undefined : { y: -6, rotateX: 2, rotateY: -2 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                style={{ transformPerspective: 800 }}
              >
                <h3 className="text-base font-semibold text-accent">
                  {group.title}
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-muted"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
