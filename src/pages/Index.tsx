import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Movies } from "@/components/site/Movies";
import { News } from "@/components/site/News";
import { Careers } from "@/components/site/Careers";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { SideMarquee } from "@/components/site/SideMarquee";
import { useReveal } from "@/hooks/use-reveal";

const Index = () => {
  // Initialize scroll reveal for elements with the .reveal class
  useReveal();

  return (
    <div className="relative">
      {/* Vertical marquees on both sides (watanare-inspired) */}
      <SideMarquee side="left" text="LIME × NOTE × SNS  ♥  " />
      <SideMarquee side="right" text="LIMENOTE  ✦  FUKUOKA  ✦  " />

      <Header />
      <main>
        <h1 className="sr-only">LimeNote</h1>
        <Hero />
        <About />
        <Services />
        <Movies />
        <News />
        <Careers />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
