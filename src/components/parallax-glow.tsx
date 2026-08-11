"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef } from "react";

type ParallaxGlowProps = {
  className?: string;
  /** Slow drift distance in px */
  distance?: number;
  direction?: "up" | "down";
};

/** Slow background orb that drifts opposite/along scroll for depth. */
export function ParallaxGlow({
  className,
  distance = 140,
  direction = "down",
}: ParallaxGlowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const from = direction === "down" ? -distance : distance;
  const to = direction === "down" ? distance : -distance;
  const y = useTransform(scrollYProgress, [0, 1], [from, to]);

  if (reduce) {
    return <div aria-hidden ref={ref} className={className} />;
  }

  return (
    <motion.div aria-hidden ref={ref} className={className} style={{ y }} />
  );
}
