"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "motion/react";
import { site } from "@/lib/data";

const ease = [0.16, 1, 0.3, 1] as const;

const floatingBadges = [
  { label: "Flutter", side: "left", top: "28%", delay: 0 },
  { label: "Laravel", side: "right", top: "24%", delay: 0.35 },
  { label: "Next.js", side: "left", top: "52%", delay: 0.7 },
  { label: "Supabase", side: "right", top: "48%", delay: 1.05 },
] as const;

export function Hero() {
  const reduce = useReducedMotion();

  const item = (delay: number) =>
    reduce
      ? undefined
      : {
          initial: { opacity: 0, y: 24 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.7, delay, ease },
        };

  return (
    <section
      id="top"
      className="relative flex min-h-[100dvh] flex-col overflow-hidden"
    >
      {/* Atmosphere */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-[40%] h-[70vmax] w-[70vmax] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(198,93,37,0.22)_0%,transparent_62%)]" />
        <div className="absolute left-1/2 top-[55%] h-[40%] w-[55%] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(59,130,246,0.16)_0%,transparent_70%)] blur-2xl" />
      </div>

      {/* Giant name: viewport-centered so overflow clips equally on both sides */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[28%] z-0 w-max max-w-none -translate-x-1/2 md:top-[24%]"
      >
        <motion.p
          className="hero-name-back whitespace-nowrap text-center text-[clamp(2.75rem,14vw,11rem)] font-extrabold uppercase leading-none tracking-[-0.04em]"
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease }}
        >
          Arwin Renardi
        </motion.p>
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-[1400px] flex-1 flex-col items-center px-4 pb-20 pt-20 md:px-8 md:pb-24 md:pt-24">
        {/* Badge only at top */}
        <motion.span
          className="relative z-30 inline-flex items-center rounded-full border border-accent/40 bg-accent-soft/80 px-3 py-1.5 text-xs font-medium text-accent backdrop-blur-md"
          {...item(0.05)}
        >
          Open to Freelance & Contract
        </motion.span>

        {/* Portrait ABOVE name layer: name sits behind the body */}
        <div className="relative mt-4 flex w-full flex-1 items-center justify-center md:mt-6">
          {/* Soft glow plate */}
          <div
            aria-hidden
            className="pointer-events-none absolute left-1/2 top-[45%] h-[70%] w-[min(92%,520px)] -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(198,93,37,0.32)_0%,rgba(17,24,39,0.45)_48%,transparent_72%)]"
          />

          {floatingBadges.map((badge) => (
            <motion.span
              key={badge.label}
              className={`pointer-events-none absolute z-20 hidden rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-xs font-medium text-foreground shadow-[0_8px_30px_rgba(0,0,0,0.35)] backdrop-blur-md md:inline-flex ${
                badge.side === "left"
                  ? "left-[2%] lg:left-[10%]"
                  : "right-[2%] lg:right-[10%]"
              }`}
              style={{ top: badge.top }}
              animate={
                reduce
                  ? undefined
                  : {
                      y: [0, -12, 0],
                    }
              }
              transition={{
                duration: 4.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: badge.delay,
              }}
            >
              {badge.label}
            </motion.span>
          ))}

          {/* Photo on top of name */}
          <motion.div
            className="relative z-10 h-[48vh] w-[min(88vw,380px)] bg-transparent sm:h-[52vh] md:h-[56vh] md:w-[420px]"
            initial={reduce ? false : { opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.12, ease }}
          >
            <Image
              src="/images/hero-subject.png"
              alt="Arwin Renardi"
              fill
              priority
              unoptimized
              className="bg-transparent object-contain object-bottom [filter:drop-shadow(0_0_28px_rgba(198,93,37,0.45))_drop-shadow(0_28px_50px_rgba(0,0,0,0.55))]"
              sizes="(max-width: 768px) 88vw, 420px"
            />
          </motion.div>
        </div>

        {/* Headline + CTAs BELOW the feet - no overlap on mobile */}
        <div className="relative z-30 mt-2 flex max-w-xl flex-col items-center text-center md:mt-4">
          <motion.h1
            className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl lg:text-5xl"
            {...item(0.2)}
          >
            Mobile & Web Developer
          </motion.h1>

          <motion.p
            className="mt-3 max-w-[40ch] text-sm leading-relaxed text-muted md:text-base"
            {...item(0.28)}
          >
            Specializing in Flutter, Laravel, Next.js, and Supabase. 3+ years
            building cross-platform apps and enterprise web systems.
          </motion.p>

          <motion.p className="mt-2 text-xs text-muted" {...item(0.32)}>
            Based in {site.location}
          </motion.p>

          <motion.div
            className="mt-5 flex flex-wrap items-center justify-center gap-3"
            {...item(0.38)}
          >
            <a
              href="#projects"
              className="inline-flex h-11 items-center justify-center rounded-full bg-accent px-7 text-sm font-semibold text-bg accent-glow transition-colors hover:bg-accent-hover active:scale-[0.98]"
            >
              View Work
            </a>
            <a
              href="#contact"
              className="inline-flex h-11 items-center justify-center rounded-full border border-white/10 bg-white/5 px-7 text-sm font-semibold text-foreground backdrop-blur-md transition-colors hover:border-accent/50 hover:bg-accent-soft active:scale-[0.98]"
            >
              Contact Me
            </a>
          </motion.div>
        </div>
      </div>

      <motion.a
        href="#about"
        className="absolute bottom-4 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent"
        initial={reduce ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        aria-label="Scroll down to about"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.2em]">
          Scroll
        </span>
        <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-white/25 p-1">
          <motion.span
            className="h-1.5 w-1 rounded-full bg-accent"
            animate={
              reduce ? undefined : { y: [0, 12, 0], opacity: [1, 0.35, 1] }
            }
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.a>
    </section>
  );
}
