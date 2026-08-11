"use client";

import { useRef } from "react";
import { About } from "@/components/about";
import { BrandLayout } from "@/components/brand-name";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { SlideIndicator } from "@/components/slide-indicator";
import { SlideProvider } from "@/components/slide-provider";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  const scrollerRef = useRef<HTMLElement>(null);

  return (
    <SlideProvider containerRef={scrollerRef}>
      <BrandLayout>
        <Nav />
        <main
          ref={scrollerRef}
          className="h-dvh w-full snap-y snap-mandatory overflow-x-hidden overflow-y-auto overscroll-y-contain [scroll-behavior:auto]"
        >
          <Hero />
          <About />
          <TechStack />
          <Experience />
          <Projects />
          <Contact />
        </main>
        <SlideIndicator />
      </BrandLayout>
    </SlideProvider>
  );
}
