"use client";

import Image from "next/image";
import { GithubLogo, LinkedinLogo } from "@phosphor-icons/react";
import { motion, useReducedMotion } from "motion/react";
import { slideClassName } from "@/lib/slides";
import { site } from "@/lib/data";

const skills = ["Flutter", "Dart", "Riverpod", "Firebase", "Clean Architecture"];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className={`${slideClassName} pt-32 md:pt-36`}>
      <div className="liquid-blob liquid-blob-orange -left-24 top-36 h-56 w-56 md:h-72 md:w-72" />
      <div className="liquid-blob liquid-blob-blue -right-24 top-20 h-64 w-64 md:h-96 md:w-96" />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-10 md:grid-cols-[1.08fr_0.92fr] md:gap-12">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          <span className="liquid-pill inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-foreground">
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Available for Remote Work
          </span>

          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            Flutter Developer
          </p>
          <h1 className="mt-3 max-w-2xl text-5xl font-extrabold leading-[0.98] tracking-[-0.05em] text-foreground sm:text-6xl md:text-7xl">
            Building mobile products that ship.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-7 text-muted md:text-lg">
            I&apos;m {site.fullName}, a Flutter-focused developer with 3+ years of
            software development experience across enterprise and financial
            applications, plus hands-on full-stack experience.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span key={skill} className="liquid-pill px-3 py-1.5 text-xs text-foreground/90">
                {skill}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="rounded-full bg-accent px-5 py-3 text-sm font-semibold text-white shadow-[0_12px_32px_rgba(205,93,36,0.28)] transition-transform hover:-translate-y-0.5">
              View My Work
            </a>
            <a href={`mailto:${site.email}`} className="liquid-pill px-5 py-3 text-sm font-semibold text-foreground">
              Get in Touch
            </a>
            <a href={site.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="liquid-icon">
              <GithubLogo size={18} weight="fill" />
            </a>
            <a href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="liquid-icon">
              <LinkedinLogo size={18} weight="fill" />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, scale: 0.96, y: 14 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.08 }}
          className="relative mx-auto w-full max-w-sm md:max-w-md"
        >
          <div className="liquid-glass relative aspect-[5/4] overflow-hidden rounded-[2rem] p-4 md:aspect-[4/3]">
            <div className="absolute inset-6 rounded-[1.6rem] bg-[radial-gradient(circle_at_45%_25%,rgba(205,93,36,0.20),transparent_34%),radial-gradient(circle_at_76%_72%,rgba(30,80,140,0.24),transparent_40%)]" />
            <div className="absolute inset-x-4 bottom-0 top-4 overflow-hidden rounded-[1.5rem] bg-transparent">
              <Image
                src="/images/hero-arwin-original.jpg"
                alt="Arwin Renardi"
                fill
                priority
                className="object-cover object-[50%_12%] scale-[1.04]"
                sizes="(max-width: 768px) 88vw, 420px"
              />
            </div>
            <div className="liquid-pill absolute right-4 top-4 px-3 py-2 text-[11px] leading-5 text-muted">
              Jakarta, Indonesia<br />Open to Remote
            </div>
            <div className="liquid-glass absolute bottom-4 left-4 rounded-2xl px-4 py-3 font-mono text-xs leading-5 text-muted">
              &gt; code<br />&gt; build<br />&gt; ship
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
