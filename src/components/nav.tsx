"use client";

import { List, X } from "@phosphor-icons/react";
import { useState } from "react";
import { site } from "@/lib/data";

const navLinks = [
  { id: "about", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "skills", label: "Skills" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="liquid-glass mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full px-3 md:px-4">
        <a href="#top" className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-extrabold tracking-[-0.04em] text-foreground">
          AR
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className="rounded-full px-3 py-2 text-xs font-medium text-muted transition-colors hover:bg-white/[0.06] hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={`mailto:${site.email}`}
          className="hidden rounded-full bg-accent px-4 py-2 text-xs font-semibold text-white shadow-[0_10px_30px_rgba(205,93,36,0.28)] transition-transform hover:-translate-y-0.5 md:inline-flex"
        >
          Get in Touch
        </a>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-foreground md:hidden"
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X size={18} weight="bold" /> : <List size={18} weight="bold" />}
        </button>
      </nav>

      {open ? (
        <div className="liquid-glass mx-auto mt-2 max-w-6xl rounded-3xl p-3 md:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className="rounded-2xl px-4 py-3 text-sm text-muted hover:bg-white/[0.06] hover:text-foreground"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={`mailto:${site.email}`}
              className="mt-1 rounded-2xl bg-accent px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get in Touch
            </a>
          </div>
        </div>
      ) : null}
    </header>
  );
}
