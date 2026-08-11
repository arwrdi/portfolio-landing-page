"use client";

import { Reveal } from "@/components/reveal";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-[1400px] px-4 md:px-8">
        <Reveal>
          <div className="glass-panel card-glow mx-auto max-w-3xl p-8 md:p-10">
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              About
            </h2>
            <p className="mt-5 max-w-[65ch] text-base leading-relaxed text-muted md:text-lg">
              Mobile & Web Developer dengan pengalaman 3+ tahun membangun
              aplikasi cross-platform dan sistem web skala enterprise. Fokus
              pada Flutter untuk mobile, serta Laravel, Next.js, dan Supabase
              untuk web dan backend, dari arsitektur sampai rilis ke Play Store
              dan App Store.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
