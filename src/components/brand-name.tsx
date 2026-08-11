"use client";

import { LayoutGroup, motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { useSlides } from "@/components/slide-provider";

type BrandNameProps = {
  slot: "hero" | "about";
};

const brandTransition = {
  type: "spring" as const,
  stiffness: 38,
  damping: 22,
  mass: 1.15,
};

const brandBaseClass =
  "hero-name-back whitespace-nowrap text-center font-extrabold uppercase leading-none tracking-[-0.04em]";

/**
 * Shared morphing brand — same outline design in hero & about, only size/position change.
 */
export function BrandName({ slot }: BrandNameProps) {
  const { active } = useSlides();
  const reduce = useReducedMotion();

  const show = slot === "hero" ? active === "top" : active !== "top";
  if (!show) return null;

  return (
    <motion.p
      layoutId={reduce ? undefined : "brand-name"}
      className={
        slot === "hero"
          ? `${brandBaseClass} text-[clamp(2.75rem,12vw,10rem)]`
          : `${brandBaseClass} text-[clamp(1.75rem,5vw,3.25rem)]`
      }
      transition={reduce ? { duration: 0 } : brandTransition}
    >
      Arwin Renardi
    </motion.p>
  );
}

export function BrandLayout({ children }: { children: ReactNode }) {
  return <LayoutGroup id="portfolio-brand">{children}</LayoutGroup>;
}
