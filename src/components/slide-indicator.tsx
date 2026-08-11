"use client";

import { motion } from "motion/react";
import { slides } from "@/lib/slides";
import { useSlides } from "@/components/slide-provider";

export function SlideIndicator() {
  const { active, index, total, goTo } = useSlides();

  return (
    <div className="pointer-events-none fixed right-3 top-1/2 z-[60] flex -translate-y-1/2 flex-col items-center gap-4 md:right-6">
      <p className="pointer-events-none font-mono text-[10px] tracking-widest text-muted">
        {String(index + 1).padStart(2, "0")}
        <span className="text-white/25"> / </span>
        {String(total).padStart(2, "0")}
      </p>

      <ul className="pointer-events-auto flex flex-col items-center gap-3">
        {slides.map((slide) => {
          const isActive = active === slide.id;
          return (
            <li key={slide.id}>
              <button
                type="button"
                aria-label={`Go to ${slide.label}`}
                aria-current={isActive ? "true" : undefined}
                onClick={() => goTo(slide.id)}
                className="group relative flex h-4 w-4 items-center justify-center"
              >
                <motion.span
                  className={`block rounded-full transition-colors ${
                    isActive
                      ? "h-2.5 w-2.5 bg-accent"
                      : "h-1.5 w-1.5 bg-white/30 group-hover:bg-white/60"
                  }`}
                  layout
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                />
                <span className="pointer-events-none absolute right-5 hidden whitespace-nowrap rounded-md border border-white/10 bg-bg-elevated/90 px-2 py-1 text-[10px] text-muted opacity-0 backdrop-blur-md transition-opacity group-hover:opacity-100 md:inline">
                  {slide.label}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
