"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
  type ReactNode,
  type RefObject,
} from "react";
import { slides, type SlideId } from "@/lib/slides";

/** Slow-motion slide duration (ms) */
export const SLIDE_DURATION_MS = 1250;

type SlideContextValue = {
  active: SlideId;
  index: number;
  total: number;
  goTo: (id: SlideId) => void;
  isAnimating: boolean;
};

const SlideContext = createContext<SlideContextValue | null>(null);

export function useSlides() {
  const ctx = useContext(SlideContext);
  if (!ctx) {
    throw new Error("useSlides must be used within SlideProvider");
  }
  return ctx;
}

function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

function animateScrollTo(
  container: HTMLElement,
  targetTop: number,
  duration: number,
  onDone?: () => void,
) {
  const start = container.scrollTop;
  const delta = targetTop - start;
  if (Math.abs(delta) < 1) {
    onDone?.();
    return () => {};
  }

  const startTime = performance.now();
  let raf = 0;
  let cancelled = false;

  const tick = (now: number) => {
    if (cancelled) return;
    const t = Math.min(1, (now - startTime) / duration);
    container.scrollTop = start + delta * easeInOutCubic(t);
    if (t < 1) {
      raf = requestAnimationFrame(tick);
    } else {
      onDone?.();
    }
  };

  raf = requestAnimationFrame(tick);
  return () => {
    cancelled = true;
    cancelAnimationFrame(raf);
  };
}

type SlideProviderProps = {
  children: ReactNode;
  containerRef: RefObject<HTMLElement | null>;
};

export function SlideProvider({ children, containerRef }: SlideProviderProps) {
  const [active, setActive] = useState<SlideId>("top");
  const [isAnimating, setIsAnimating] = useState(false);
  const animatingRef = useRef(false);
  const cancelScrollRef = useRef<(() => void) | null>(null);

  const goTo = useCallback(
    (id: SlideId) => {
      const container = containerRef.current;
      const el = document.getElementById(id);
      if (!container || !el || animatingRef.current) return;

      const targetTop =
        el.getBoundingClientRect().top -
        container.getBoundingClientRect().top +
        container.scrollTop;

      animatingRef.current = true;
      setIsAnimating(true);
      setActive(id);
      cancelScrollRef.current?.();

      cancelScrollRef.current = animateScrollTo(
        container,
        targetTop,
        SLIDE_DURATION_MS,
        () => {
          animatingRef.current = false;
          setIsAnimating(false);
          cancelScrollRef.current = null;
        },
      );
    },
    [containerRef],
  );

  // Anchor clicks → slow slide
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      const anchor = target?.closest?.(
        'a[href^="#"]',
      ) as HTMLAnchorElement | null;
      if (!anchor) return;
      const id = anchor.getAttribute("href")?.slice(1) as SlideId | undefined;
      if (!id || !slides.some((s) => s.id === id)) return;
      event.preventDefault();
      goTo(id);
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, [goTo]);

  // Wheel / trackpad: one slow slide at a time
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      if (animatingRef.current) return;
      if (Math.abs(event.deltaY) < 8) return;

      const currentIndex = slides.findIndex((s) => s.id === active);
      const nextIndex =
        event.deltaY > 0
          ? Math.min(slides.length - 1, currentIndex + 1)
          : Math.max(0, currentIndex - 1);

      if (nextIndex === currentIndex) return;
      goTo(slides[nextIndex].id);
    };

    let touchStartY = 0;
    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0]?.clientY ?? 0;
    };
    const onTouchEnd = (event: TouchEvent) => {
      if (animatingRef.current) return;
      const endY = event.changedTouches[0]?.clientY ?? touchStartY;
      const delta = touchStartY - endY;
      if (Math.abs(delta) < 48) return;

      const currentIndex = slides.findIndex((s) => s.id === active);
      const nextIndex =
        delta > 0
          ? Math.min(slides.length - 1, currentIndex + 1)
          : Math.max(0, currentIndex - 1);

      if (nextIndex === currentIndex) return;
      goTo(slides[nextIndex].id);
    };

    container.addEventListener("wheel", onWheel, { passive: false });
    container.addEventListener("touchstart", onTouchStart, { passive: true });
    container.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      container.removeEventListener("wheel", onWheel);
      container.removeEventListener("touchstart", onTouchStart);
      container.removeEventListener("touchend", onTouchEnd);
    };
  }, [active, containerRef, goTo]);

  // Keyboard arrows / page keys
  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (animatingRef.current) return;
      const currentIndex = slides.findIndex((s) => s.id === active);
      if (event.key === "ArrowDown" || event.key === "PageDown") {
        event.preventDefault();
        const next = Math.min(slides.length - 1, currentIndex + 1);
        goTo(slides[next].id);
      }
      if (event.key === "ArrowUp" || event.key === "PageUp") {
        event.preventDefault();
        const next = Math.max(0, currentIndex - 1);
        goTo(slides[next].id);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active, goTo]);

  // Sync active when user finishes (or touch scroll settles)
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nodes = slides
      .map((s) => document.getElementById(s.id))
      .filter((n): n is HTMLElement => Boolean(n));

    const observer = new IntersectionObserver(
      (entries) => {
        if (animatingRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        const top = visible[0];
        if (top?.target?.id) {
          setActive(top.target.id as SlideId);
        }
      },
      {
        root: container,
        threshold: [0.45, 0.6, 0.75],
      },
    );

    nodes.forEach((n) => observer.observe(n));
    return () => observer.disconnect();
  }, [containerRef]);

  useEffect(
    () => () => {
      cancelScrollRef.current?.();
    },
    [],
  );

  const index = slides.findIndex((s) => s.id === active);

  const value = useMemo(
    () => ({
      active,
      index: index < 0 ? 0 : index,
      total: slides.length,
      goTo,
      isAnimating,
    }),
    [active, goTo, index, isAnimating],
  );

  return (
    <SlideContext.Provider value={value}>{children}</SlideContext.Provider>
  );
}
