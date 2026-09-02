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
import { costuraCriancas as curso, modelagem } from "@/components/venda/dados";

const tema = curso.tema;

export const metadata: Metadata = {
  title: "Costura Afetiva para Crianças — curso online de costura na infância",
  description:
    "Curso online para pais, mães e educadores que querem costurar com as crianças. 15 módulos, moldes em PDF, acesso vitalício e certificado de 30 horas, com Ananda Sette.",
  alternates: { canonical: "/costura-afetiva-para-criancas/" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    title: "Costura Afetiva para Crianças — costurar é crescer",
    description:
      "Plantar a semente da costura e das poéticas manuais nos corações das crianças. Curso 100% online, 15 módulos, acesso vitalício.",
    images: [{ url: "/og/costura-afetiva-para-criancas.jpg", width: 1200, height: 630, alt: "Ateliê Ananda Sette" }],
  },
};

export default function CosturaAfetivaParaCriancas() {
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

        {curso.sobre && (
          <Secao tema={tema} eyebrow="O curso" titulo={curso.sobre.titulo}>
            <TextoLongo tema={tema} prosa={curso.sobre} />
          </Secao>
        )}

        <Citacao
          tema={tema}
          texto="Aulas de costura desenvolvem nas crianças o estado contemplativo e a beleza de viver o tempo presente."
        />

        {curso.comoFunciona && (
          <Secao tema={tema} claro eyebrow="Como funciona" titulo={curso.comoFunciona.titulo}>
            <TextoLongo tema={tema} prosa={curso.comoFunciona} />
          </Secao>
        )}

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

        <Beneficios tema={tema} titulo={curso.beneficios.titulo} itens={curso.beneficios.itens} />

        <Secao tema={tema} eyebrow="Depois do curso" titulo="Onde isso te leva">
          <EsperarEAtuar tema={tema} esperar={curso.esperar} atuacao={curso.atuacao} />
        </Secao>

        <Secao
          tema={tema}
          claro
          eyebrow="Além das aulas"
          titulo="Bônus inclusos"
          intro="Material que amplia o curso e continua útil muito depois da última aula."
        >
          <Bonus tema={tema} itens={curso.bonus} />
        </Secao>

        <Secao tema={tema} eyebrow="Quem já participou" titulo="Depoimentos">
          <Depoimentos tema={tema} itens={curso.depoimentos} />
        </Secao>

        <Secao tema={tema} claro eyebrow="Antes de decidir" titulo="Para quem é este curso">
          <ParaQuem tema={tema} sim={curso.paraQuemSim} nao={curso.paraQuemNao} />
        </Secao>

        <Professora curso={curso} />

        <OfertaBloco tema={tema} oferta={curso.oferta} />

        <Garantia
          tema={tema}
          oferta={curso.oferta}
          texto="Assista às aulas, imprima os moldes, faça a primeira atividade com a criança. Se achar que não era isso, escreva para setteananda@gmail.com dentro do prazo e devolvemos cada centavo — sem formulário e sem justificativa."
        />

        <Secao tema={tema} eyebrow="Dúvidas" titulo="Perguntas frequentes">
          <Faq tema={tema} itens={curso.faq} />
        </Secao>

        <CtaFinal tema={tema} oferta={curso.oferta} texto={curso.ctaFinal} />

        <OutroCurso curso={modelagem} />
      </main>
      <Footer />
      <div aria-hidden="true" className="h-[4.75rem] sm:hidden" />
      <BarraCompra tema={tema} oferta={curso.oferta} />
      <Reveal />
    </>
  );
}
