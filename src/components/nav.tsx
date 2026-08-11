"use client";

import { List, X } from "@phosphor-icons/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/lib/data";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
] as const;

type SectionHref = (typeof links)[number]["href"];

function linkClass(active: boolean) {
  return active
    ? "text-accent"
    : "text-muted hover:text-foreground";
}

export function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<SectionHref | "#top" | null>(null);

  useEffect(() => {
    const sectionIds = links.map((link) => link.href.slice(1));

    const updateActive = () => {
      const navOffset = 96;
      const scrollBottom =
        window.scrollY + window.innerHeight >=
        document.documentElement.scrollHeight - 48;

      if (scrollBottom) {
        setActive("#contact");
        return;
      }

      let current: SectionHref | "#top" | null = "#top";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.getBoundingClientRect().top - navOffset <= 0) {
          current = `#${id}` as SectionHref;
        }
      }

      setActive(current === "#top" ? null : current);
    };

    updateActive();
    window.addEventListener("scroll", updateActive, { passive: true });
    window.addEventListener("resize", updateActive);
    return () => {
      window.removeEventListener("scroll", updateActive);
      window.removeEventListener("resize", updateActive);
    };
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/50 bg-bg/70 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-[1400px] items-center justify-between gap-4 px-4 md:h-[72px] md:px-8">
        <a
          href="#top"
          className="flex shrink-0 items-center gap-2.5 text-lg font-bold tracking-tight text-foreground"
          onClick={() => setActive(null)}
        >
          <Image
            src="/images/logo-ar-white.png"
            alt=""
            width={56}
            height={32}
            className="h-7 w-auto object-contain md:h-8"
            priority
          />
          <span>{site.name.toUpperCase()}.</span>
        </a>

        <ul className="hidden items-center gap-7 lg:flex">
          {links.map((link) => {
            const isActive = active === link.href;
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  aria-current={isActive ? "true" : undefined}
                  className={`relative text-sm font-medium transition-colors ${linkClass(isActive)}`}
                  onClick={() => setActive(link.href)}
                >
                  {link.label}
                  <span
                    aria-hidden
                    className={`absolute -bottom-1 left-0 h-0.5 w-full origin-left rounded-full bg-accent transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0"
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden h-10 items-center rounded-full bg-accent px-5 text-sm font-semibold text-bg accent-glow transition-colors hover:bg-accent-hover md:inline-flex"
          onClick={() => setActive("#contact")}
        >
          Get in Touch
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-border text-foreground lg:hidden"
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
          className="border-t border-border bg-bg-elevated px-4 py-4 lg:hidden"
        >
          <ul className="flex flex-col gap-2">
            {links.map((link) => {
              const isActive = active === link.href;
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? "true" : undefined}
                    className={`block rounded-xl px-3 py-2 text-base font-medium transition-colors ${
                      isActive
                        ? "bg-accent-soft text-accent"
                        : "text-muted hover:text-foreground"
                    }`}
                    onClick={() => {
                      setActive(link.href);
                      setOpen(false);
                    }}
                  >
                    {link.label}
                  </a>
                </li>
              );
            })}
            <li>
              <a
                href="#contact"
                className="mt-2 inline-flex h-11 w-full items-center justify-center rounded-full bg-accent text-sm font-semibold text-bg"
                onClick={() => {
                  setActive("#contact");
                  setOpen(false);
                }}
              >
                Get in Touch
              </a>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
