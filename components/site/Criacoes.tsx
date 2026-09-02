import Image from "next/image";
import { PontoCruz } from "./Ornaments";

const criacoes = [
  {
    src: "/img/criacao-02.webp",
    alt: "Bonecas de pano vestidas com tecidos estampados, dispostas sobre cartas e rendas",
    w: 900,
    h: 900,
  },
  {
    src: "/img/criacao-05.webp",
    alt: "Bolsa de tecido tingido com um coração bordado em relevo no centro",
    w: 900,
    h: 1199,
  },
  {
    src: "/img/criacao-01.webp",
    alt: "Painel bordado com flores, pássaros e figuras femininas em cores vivas",
    w: 471,
    h: 661,
  },
  {
    src: "/img/criacao-09.webp",
    alt: "Bastidor com colcha de retalhos bordada com a palavra família",
    w: 900,
    h: 506,
  },
  {
    src: "/img/criacao-04.webp",
    alt: "Mãos segurando um pequeno estandarte de feltro laranja bordado com uma estrela",
    w: 675,
    h: 1200,
  },
  {
    src: "/img/criacao-03.webp",
    alt: "Tecelagem em lã colorida montada sobre um galho de árvore",
    w: 675,
    h: 1200,
  },
  {
    src: "/img/criacao-06.webp",
    alt: "Boneca de pano com vestido estampado e chapéu de retalhos",
    w: 605,
    h: 807,
  },
  {
    src: "/img/criacao-08.webp",
    alt: "Peça em forma de folha bordada à mão com a palavra fé",
    w: 675,
    h: 1200,
  },
  {
    src: "/img/criacao-07.webp",
    alt: "Caixa-moldura com bonecas de pano e um pássaro de feltro",
    w: 360,
    h: 640,
  },
  {
    src: "/img/criacao-10.webp",
    alt: "Folha seca bordada com linhas coloridas em ponto livre",
    w: 307,
    h: 640,
  },
];

export default function Criacoes() {
  return (
    <section
      id="criacoes"
      className="relative scroll-mt-24 overflow-hidden bg-linho-2 py-16 sm:py-24 lg:py-32"
    >
      <div className="u-container">
        <header className="mx-auto max-w-2xl text-center">
          <p
            data-reveal
            className="eyebrow flex items-center justify-center gap-3 text-sage-2"
          >
            <PontoCruz className="h-[11px] w-[11px]" />
            Criações
          </p>
          <h2 data-reveal className="display-l mt-6">
            O que sai das mãos daqui
          </h2>
          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "100ms" }}
            className="mx-auto mt-6 max-w-[46ch] text-[1.05rem] text-verde-2/85"
          >
            Peças feitas por participantes de grupos arteterapêuticos anteriores.
            Nenhuma igual à outra — porque nenhuma história é igual à outra.
          </p>
        </header>

        <div className="mt-16 columns-2 gap-3 sm:gap-5 lg:columns-3 xl:columns-4">
          {criacoes.map((c, i) => (
            <figure
              key={c.src}
              data-reveal
              style={{ ["--reveal-delay" as string]: (i % 4) * 80 + "ms" }}
              className="group mb-3 break-inside-avoid overflow-hidden rounded-[1.25rem] bg-linho shadow-[0_20px_44px_-34px_rgba(56,64,48,0.8)] sm:mb-5"
            >
              <Image
                src={c.src}
                alt={c.alt}
                width={c.w}
                height={c.h}
                sizes="(min-width: 1280px) 18rem, (min-width: 1024px) 22rem, (min-width: 640px) 45vw, 46vw"
                className="w-full transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
