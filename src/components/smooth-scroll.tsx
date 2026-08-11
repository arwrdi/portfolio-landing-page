"use client";

import { type ReactNode } from "react";

/** Lenis disabled — CSS scroll-snap PPT mode owns scrolling. */
export function SmoothScroll({ children }: { children: ReactNode }) {
  return <>{children}</>;
}
