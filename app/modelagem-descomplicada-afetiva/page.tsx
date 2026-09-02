import type { Metadata } from "next";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Reveal from "@/components/site/Reveal";
import { Citacao, Secao } from "@/components/jornada/Partes";
import {
  BarraCompra,
  Beneficios,
  Bonus,
  CtaFinal,
  Depoimentos,
  DepoimentosVideo,
  EsperarEAtuar,
  Faq,
  Garantia,
  Modulos,
  Numeros,
  OfertaBloco,
  OQueTem,
  OutroCurso,
  ParaQuem,
  ParaQuemBloco,
  Professora,
  TextoLongo,
  VendaHero,
} from "@/components/venda/Partes";
import { costuraCriancas, modelagem as curso } from "@/components/venda/dados";

const tema = curso.tema;

export const metadata: Metadata = {
  title: "Modelagem Descomplicada Afetiva — curso online de modelagem e costura",
  description:
    "Curso online de modelagem e costura com Ananda Sette. 8 módulos para modelar saias, blusas, vestidos, calças, macacões, mangas e camisas nas suas medidas. Acesso vitalício.",
  alternates: { canonical: "/modelagem-descomplicada-afetiva/" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    title: "Modelagem Descomplicada Afetiva — curso online",
    description:
      "Autonomia em modelagem e costura de roupas em até 3 meses, mesmo que você nunca tenha modelado antes. 8 módulos, acesso vitalício.",
    images: [{ url: "/og/modelagem-descomplicada-afetiva.jpg", width: 1200, height: 630, alt: "Ateliê Ananda Sette" }],
  },
};

export default function ModelagemDescomplicadaAfetiva() {
  return (
    <>
      <Header solido />
      <main id="conteudo">
        <VendaHero curso={curso} />
        <Numeros tema={tema} itens={curso.numeros} />
        <ParaQuemBloco
          tema={tema}
          texto={curso.paraQuem.texto}
          prerequisito={curso.paraQuem.prerequisito}
        />

        <Secao
          tema={tema}
          id="conteudo-do-curso"
          eyebrow="O conteúdo"
          titulo={curso.tituloModulos}
          intro={curso.introModulos}
        >
          <Modulos tema={tema} itens={curso.modulos} />
          <OQueTem tema={tema} itens={curso.oQueTem} />
        </Secao>

        <Citacao
          tema={tema}
          texto="Aprenda comigo, a partir do zero, a modelar saias, blusas, vestidos, macacões e camisas."
        />

        {curso.sobre && (
          <Secao tema={tema} claro eyebrow="Competências" titulo={curso.sobre.titulo}>
            <TextoLongo tema={tema} prosa={curso.sobre} />
          </Secao>
        )}

        <Beneficios tema={tema} titulo={curso.beneficios.titulo} itens={curso.beneficios.itens} />

        <Secao tema={tema} eyebrow="Depois do curso" titulo="Onde isso te leva">
          <EsperarEAtuar tema={tema} esperar={curso.esperar} atuacao={curso.atuacao} />
        </Secao>

        <Secao
          tema={tema}
          claro
          eyebrow="Além das aulas"
          titulo="Bônus inclusos"
          intro="Quatro bônus e o grupo de alunas, que continuam servindo muito depois da última aula."
        >
          <Bonus tema={tema} itens={curso.bonus} />
        </Secao>

        <Secao tema={tema} eyebrow="Quem já costurou com a Ananda" titulo="Depoimentos">
          <Depoimentos tema={tema} itens={curso.depoimentos} />
          {curso.depoimentosVideo && (
            <DepoimentosVideo tema={tema} itens={curso.depoimentosVideo} />
          )}
        </Secao>

        <Secao tema={tema} claro eyebrow="Antes de decidir" titulo="Para quem é este curso">
          <ParaQuem tema={tema} sim={curso.paraQuemSim} nao={curso.paraQuemNao} />
        </Secao>

        <Professora curso={curso} />

        <OfertaBloco tema={tema} oferta={curso.oferta} />

        <Garantia
          tema={tema}
          oferta={curso.oferta}
          texto="Tire as suas medidas, trace a sua primeira base, acompanhe a montagem. Se achar que o curso não cumpre o que promete, escreva para setteananda@gmail.com dentro do prazo e devolvemos cada centavo — sem formulário e sem justificativa."
        />

        <Secao tema={tema} eyebrow="Dúvidas" titulo="Perguntas frequentes">
          <Faq tema={tema} itens={curso.faq} />
        </Secao>

        <CtaFinal tema={tema} oferta={curso.oferta} texto={curso.ctaFinal} />

        <OutroCurso curso={costuraCriancas} />
      </main>
      <Footer />
      <div aria-hidden="true" className="h-[4.75rem] sm:hidden" />
      <BarraCompra tema={tema} oferta={curso.oferta} />
      <Reveal />
    </>
  );
}
