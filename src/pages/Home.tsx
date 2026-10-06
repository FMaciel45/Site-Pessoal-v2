import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Hero } from "../sections/Hero";
import { About } from "../sections/About";
import { Experience } from "../sections/Experience";
import { Stack } from "../sections/Stack";
import { Projects } from "../sections/Projects";
import { Contact } from "../sections/Contact";
import { useReveal } from "../hooks/useReveal";

export function Home() {
  useReveal();

  return (
    <>
      <a href="#conteudo" className="skip-link">Ir para o conteúdo</a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Experience />
        <Stack />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
