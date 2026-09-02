import Ananda from "@/components/site/Ananda";
import Atelie from "@/components/site/Atelie";
import Caminhos from "@/components/site/Caminhos";
import Contato from "@/components/site/Contato";
import Criacoes from "@/components/site/Criacoes";
import Faixa from "@/components/site/Faixa";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Hero from "@/components/site/Hero";
import Jornadas from "@/components/site/Jornadas";
import Manifesto from "@/components/site/Manifesto";
import Reveal from "@/components/site/Reveal";

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <Hero />
        <Faixa />
        <Atelie />
        <Caminhos />
        <Manifesto />
        <Jornadas />
        <Ananda />
        <Criacoes />
        <Contato />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
