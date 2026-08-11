"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { BrandName } from "@/components/brand-name";
import { slideClassName } from "@/lib/slides";
import { site } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const floatingBadges = [
  { label: "Flutter", side: "left", top: "22%", delay: 0 },
  { label: "Laravel", side: "right", top: "20%", delay: 0.12 },
  { label: "Next.js", side: "left", top: "58%", delay: 0.24 },
  { label: "Supabase", side: "right", top: "54%", delay: 0.36 },
] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const enter = (delay: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 24, scale: 0.96 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          viewport: { once: false, amount: 0.45 },
          transition: {
            type: "spring" as const,
            stiffness: 120,
            damping: 18,
            delay,
          },
        };

  return (
    <section id="top" className={slideClassName}>
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[40%] h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(198,93,37,0.22)_0%,transparent_62%)]" />
        <div className="absolute left-1/2 top-[55%] h-[40%] w-[55%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(154,52,18,0.16)_0%,transparent_70%)] blur-2xl" />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[26%] z-0 w-max max-w-none -translate-x-1/2 md:top-[22%]"
      >
        <BrandName slot="hero" />
      </div>

      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] flex-col items-center">
        <motion.span
          className="relative z-30 inline-flex items-center rounded-full border border-accent/40 bg-accent-soft/80 px-3 py-1.5 text-xs font-medium text-accent backdrop-blur-md"
          {...enter(0.05)}
        >
          Open to Freelance & Contract
        </motion.span>

        <div className="relative mt-2 flex w-full flex-1 items-center justify-center">
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[45%] h-[70%] w-[min(92%,520px)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(198,93,37,0.32)_0%,rgba(17,24,39,0.45)_48%,transparent_72%)]"
          />

          {floatingBadges.map((badge, i) => (
            <motion.span
              key={badge.label}
              layoutId={reduce ? undefined : `tech-badge-${badge.label}`}
              className={`pointer-events-none absolute z-20 hidden rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md md:inline-flex ${
                badge.side === "left"
                  ? "left-[2%] lg:left-[10%]"
                  : "right-[2%] lg:right-[10%]"
              }`}
              style={{ top: badge.top }}
              initial={reduce ? false : { opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                type: "spring",
                stiffness: 200,
                damping: 16,
                delay: 0.2 + i * 0.08,
              }}
            >
              {badge.label}
            </motion.span>
          ))}

          <motion.div
            className="relative z-10 h-[42vh] w-[min(88vw,360px)] sm:h-[46vh] md:h-[50vh] md:w-[400px]"
            initial={reduce ? false : { opacity: 0, scale: 0.92, y: 28 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: false, amount: 0.35 }}
            transition={{ type: "spring", stiffness: 90, damping: 16, delay: 0.12 }}
          >
            <Image
              src="/images/hero-subject.png"
              alt="Arwin Renardi"
              fill
              priority
              unoptimized
              className="bg-transparent object-contain object-bottom [filter:drop-shadow(0_0_28px_rgba(198,93,37,0.45))_drop-shadow(0_28px_50px_rgba(0,0,0,0.55))]"
              sizes="(max-width: 768px) 88vw, 400px"
            />
          </motion.div>
        </div>

        <motion.div
          className="relative z-30 mb-2 flex max-w-xl flex-col items-center text-center"
          {...enter(0.2)}
        >
          <h1 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Mobile & Web Developer
          </h1>
          <p className="mt-2 max-w-[40ch] text-sm leading-relaxed text-muted md:text-base">
            Specializing in Flutter, Laravel, Next.js, and Supabase. Based in{" "}
            {site.location}.
          </p>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-bg accent-glow transition-colors hover:bg-accent-hover"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-accent/50 hover:bg-accent-soft"
            >
              Contact Me
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
