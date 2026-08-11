import { About } from "@/components/about";
import { Certifications } from "@/components/certifications";
import { Contact } from "@/components/contact";
import { Experience } from "@/components/experience";
import { Hero } from "@/components/hero";
import { Nav } from "@/components/nav";
import { Projects } from "@/components/projects";
import { TechStack } from "@/components/tech-stack";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <TechStack />
        <Experience />
        <Projects />
        <Certifications />
      </main>
      <Contact />
    </>
  );
}
