"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { Reveal } from "@/components/reveal";
import { projects } from "@/lib/data";

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className="relative overflow-hidden py-24 md:py-32">
      <div className="relative mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-4 max-w-[48ch] text-base text-muted">
            Selected product work across booking, enterprise mobile, and
            finance.
          </p>
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {projects.map((project, index) => {
            const cardInner = (
              <>
                <div className="relative aspect-[4/3] overflow-hidden bg-bg-elevated/40">
                  <Image
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    fill
                    unoptimized={project.collage}
                    className={`${
                      project.collage
                        ? "object-contain p-2 md:p-3"
                        : "object-cover"
                    } transition-transform duration-500 group-hover:scale-[1.04]`}
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {!project.collage ? (
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-transparent to-transparent" />
                  ) : null}
                  {project.href ? (
                    <span className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full bg-accent text-bg">
                      <ArrowUpRight size={18} weight="bold" />
                    </span>
                  ) : null}
                </div>
                <div className="p-6 md:p-7">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent-soft px-2.5 py-1 text-xs font-medium text-accent">
                      {project.status}
                    </span>
                    <span className="text-xs text-muted">
                      {project.statusDetail}
                    </span>
                  </div>
                  <h3 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-[44ch] text-sm leading-relaxed text-muted">
                    {project.description}
                  </p>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {project.stack.map((tag) => (
                      <li
                        key={tag}
                        className="rounded-full border border-white/10 px-2.5 py-1 text-[11px] text-muted"
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                  {project.href && project.linkLabel ? (
                    <p className="mt-4 text-sm font-medium text-accent">
                      {project.linkLabel}
                    </p>
                  ) : null}
                </div>
              </>
            );

            const className = `project-card group glass-panel card-glow overflow-hidden ${
              index % 2 === 1 ? "md:mt-12" : ""
            }`;

            return (
              <Reveal key={project.title} delay={reduce ? 0 : index * 0.06}>
                {project.href ? (
                  <motion.a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block ${className}`}
                    whileHover={reduce ? undefined : { y: -8, rotateX: 3 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    style={{ transformPerspective: 900 }}
                  >
                    {cardInner}
                  </motion.a>
                ) : (
                  <motion.article
                    className={className}
                    whileHover={reduce ? undefined : { y: -8, rotateX: 3 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    style={{ transformPerspective: 900 }}
                  >
                    {cardInner}
                  </motion.article>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
