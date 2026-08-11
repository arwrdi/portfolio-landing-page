"use client";

import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "motion/react";
import { useRef, type ReactNode } from "react";

type ParallaxCardProps = {
  children: ReactNode;
  className?: string;
  /** Vertical travel in px while scrolling through viewport */
  distance?: number;
  delay?: number;
};

export function ParallaxCard({
  children,
  className,
  distance = 48,
  delay = 0,
}: ParallaxCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 0.35, 1], [distance, 0, -distance * 0.35]);
  const opacity = useTransform(scrollYProgress, [0, 0.22, 0.85, 1], [0, 1, 1, 0.92]);
  const scale = useTransform(scrollYProgress, [0, 0.3, 1], [0.97, 1, 1]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ y, opacity, scale }}
      transition={{ delay }}
    >
      {children}
    </motion.div>
  );
}
