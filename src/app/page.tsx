import Header from "@/components/header";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Projects from "@/components/projects";
import About from "@/components/about";
import Footer from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main aria-label="محتوای اصلی">
        <Hero />
        <Services />
        <Projects />
        <About />
      </main>
      <Footer />
    </>
  );
}
