"use client";

import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";
import { useSlides } from "@/components/slide-provider";
import { site } from "@/lib/data";
import { slides, type SlideId } from "@/lib/slides";

const navLinks = [
  { id: "about" as const, label: "About" },
  { id: "skills" as const, label: "Skills" },
  { id: "experience" as const, label: "Experience" },
  { id: "projects" as const, label: "Projects" },
  { id: "contact" as const, label: "Contact" },
];

function linkClass(active: boolean) {
  return active ? "text-accent" : "text-muted hover:text-foreground";
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const { active, goTo } = useSlides();

  const jump = (id: SlideId) => {
    goTo(id);
    setOpen(false);
  };

  return (
    <header className="pointer-events-none fixed inset-x-0 top-0 z-50">
      <nav className="pointer-events-auto mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 md:h-[72px] md:px-8">
        <button
          type="button"
          onClick={() => jump("top")}
          className="flex shrink-0 items-center gap-2.5 rounded-full border border-white/10 bg-bg/70 px-3 py-1.5 text-lg font-bold tracking-tight text-foreground backdrop-blur-xl"
        >
          <Image
            src="/images/logo-ar-white.png"
            alt=""
            width={56}
            height={32}
            className="h-7 w-auto object-contain md:h-8"
            priority
          />
          <span className="hidden sm:inline">{site.name.toUpperCase()}.</span>
        </button>

        <ul className="hidden items-center gap-1 rounded-full border border-white/10 bg-bg/70 px-2 py-1.5 backdrop-blur-xl lg:flex">
          {navLinks.map((link) => {
            const isActive = active === link.id;
            return (
              <li key={link.id}>
                <button
                  type="button"
                  aria-current={isActive ? "true" : undefined}
                  className={`relative px-3 py-1.5 text-sm font-medium transition-colors ${linkClass(isActive)}`}
                  onClick={() => jump(link.id)}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`absolute inset-x-2 -bottom-0.5 h-0.5 origin-left rounded-full bg-accent transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </button>
              </li>
            );
          })}
        </ul>

        <button
          type="button"
          onClick={() => jump("contact")}
          className="hidden h-10 items-center rounded-full bg-accent px-5 text-sm font-semibold text-bg accent-glow transition-colors hover:bg-accent-hover md:inline-flex"
        >
          Get in Touch
        </button>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border bg-bg/70 text-foreground backdrop-blur-xl lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={20} weight="bold" /> : <List size={20} weight="bold" />}
        </button>
      </nav>

      {open ? (
        <div
          id="mobile-nav"
          className="pointer-events-auto border-t border-border bg-bg-elevated/95 px-4 py-4 backdrop-blur-xl lg:hidden"
        >
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => {
              const isActive = active === link.id;
              return (
                <li key={link.id}>
                  <button
                    type="button"
                    className={`block w-full rounded-xl px-3 py-2 text-left text-base font-medium transition-colors ${
                      isActive
                        ? "bg-accent-soft text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                    onClick={() => jump(link.id)}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
            <li>
              <button
                type="button"
                className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-full bg-accent text-sm font-semibold text-bg"
                onClick={() => jump("contact")}
              >
                Get in Touch
              </button>
            </li>
          </ul>
        </div>
      ) : null}

      <span className="sr-only">
        Slides: {slides.map((s) => s.label).join(", ")}
      </span>
    </header>
  );
}
