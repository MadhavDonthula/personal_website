import { CustomCursor } from "@/components/ui/CustomCursor";
import { PageLoadTransition } from "@/components/ui/PageLoadTransition";
import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Experience } from "@/components/sections/Experience";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <CustomCursor />
      <PageLoadTransition />
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
