"use client";

import Image from "next/image";
import { ArrowUpRight } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { projects } from "@/lib/data";
import { slideClassName } from "@/lib/slides";

export function Projects() {
  const reduce = useReducedMotion();

  return (
    <section id="projects" className={slideClassName}>
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col justify-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.6 }}
          transition={{ type: "spring", stiffness: 140, damping: 18 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Featured Projects
          </h2>
          <p className="mt-2 max-w-[48ch] text-sm text-muted md:text-base">
            Selected product work across booking, enterprise mobile, and finance.
          </p>
        </motion.div>

        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:gap-5">
          {projects.map((project, index) => {
            const className =
              "project-card group glass-panel card-glow block overflow-hidden";

            const inner = (
              <>
                <div className="relative aspect-[16/10] overflow-hidden bg-bg-elevated/40">
                  <Image
                    src={project.image}
                    alt={`Preview of ${project.title}`}
                    fill
                    unoptimized={project.collage}
                    className={
                      project.collage
                        ? "object-contain p-2"
                        : "object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                    }
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  {project.href ? (
                    <span className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-bg">
                      <ArrowUpRight size={16} weight="bold" />
                    </span>
                  ) : null}
                </div>
                <div className="p-4 md:p-5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent-soft px-2 py-0.5 text-[11px] font-medium text-accent">
                      {project.status}
                    </span>
                    <span className="text-[11px] text-muted">
                      {project.statusDetail}
                    </span>
                  </div>
                  <h3 className="mt-2 text-base font-semibold tracking-tight text-foreground md:text-lg">
                    {project.title}
                  </h3>
                  <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-muted md:text-sm">
                    {project.description}
                  </p>
                </div>
              </>
            );

            const motionProps = {
              layoutId: reduce ? undefined : `project-${project.title}`,
              initial: reduce ? false : { opacity: 0, y: 40, scale: 0.94 },
              whileInView: { opacity: 1, y: 0, scale: 1 },
              viewport: { once: false, amount: 0.25 },
              transition: {
                type: "spring" as const,
                stiffness: 140,
                damping: 18,
                delay: index * 0.05,
              },
              whileHover: reduce ? undefined : { y: -6, rotateX: 2 },
              style: { transformPerspective: 900 },
            };

            return project.href ? (
              <motion.a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className={className}
                {...motionProps}
              >
                {inner}
              </motion.a>
            ) : (
              <motion.article
                key={project.title}
                className={className}
                {...motionProps}
              >
                {inner}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
