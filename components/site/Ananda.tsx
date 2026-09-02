import Image from "next/image";
import { contato } from "./dados";
import { DivisorCosturado, IconeInstagram, PontoCruz } from "./Ornaments";

const formacao = [
  "Belas Artes e Estilismo — UFMG",
  "Pós-graduação em Design de Moda — SENAI CETIQT",
  "Pós-graduação em Arteterapia — FAV",
];

export default function Ananda() {
  return (
    <section id="ananda" className="relative scroll-mt-24 py-16 sm:py-24 lg:py-32">
      <div className="u-container">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-16">
          {/* retrato */}
          <div className="lg:col-span-5">
            <div data-reveal className="relative mx-auto max-w-[26rem]">
              <span
                aria-hidden="true"
                className="stitch-box absolute -bottom-5 -right-5 h-full w-full rounded-[2rem]"
              />
              <div className="relative overflow-hidden rounded-[2rem] bg-linho-2 shadow-[0_36px_70px_-48px_rgba(56,64,48,0.75)]">
                <Image
                  src="/img/ananda-bastidor.webp"
                  alt="Retrato de Ananda Sette emoldurado por um bastidor de bordado sobre tecido de linho"
                  width={1100}
                  height={1031}
                  sizes="(min-width: 1024px) 26rem, 88vw"
                  className="w-full object-cover"
                />
              </div>
              <span className="absolute -left-1 bottom-5 rotate-[-4deg] rounded-full bg-terra px-4 py-2 font-display text-[0.8rem] tracking-wide text-linho shadow-lg sm:-left-4 sm:bottom-6">
                Arteterapeuta junguiana
              </span>
            </div>
          </div>

          {/* texto */}
          <div className="lg:col-span-7">
            <p data-reveal className="eyebrow flex items-center gap-3 text-sage-2">
              <PontoCruz className="h-[11px] w-[11px]" />
              Quem conduz
            </p>
            <h2 data-reveal className="display-l mt-6">
              Ananda Sette
            </h2>
            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
              className="mt-5 max-w-[44ch] font-display text-[1.35rem] italic leading-snug text-sage-2"
            >
              Arteterapeuta junguiana especializada em costura, bordado e grupos de
              mulheres.
            </p>

            <DivisorCosturado className="mt-8 max-w-[18rem]" />

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "140ms" }}
              className="mt-8 grid max-w-[54ch] gap-5 text-[1.02rem] text-verde-2/88"
            >
              <p>
                Estilista e figurinista desde 1998. No seu ateliê, ensina costura
                afetiva para crianças e mulheres desde 2013 — e desde 2023 conduz a
                Jornada Tecer Alma, de arteterapia têxtil.
              </p>
              <p>
                Por meio das artes manuais têxteis, inspira mulheres a se
                reconectarem consigo mesmas e com fazeres manuais ancestrais.
                Diferentemente de outros grupos, ao usar a arteterapia junguiana
                como ferramenta o conhecimento sai do papel e vira sabedoria
                vivenciada na prática.
              </p>
            </div>

            <ul
              data-reveal
              style={{ ["--reveal-delay" as string]: "200ms" }}
              className="mt-9 grid gap-3 border-t border-dashed border-verde/20 pt-8"
            >
              {formacao.map((f) => (
                <li key={f} className="flex items-start gap-3 text-[0.94rem] text-verde-2">
                  <PontoCruz className="mt-[7px] h-2.5 w-2.5 shrink-0 text-terra" />
                  {f}
                </li>
              ))}
            </ul>

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "260ms" }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <a
                href={contato.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !py-3 !text-[0.85rem]"
              >
                <IconeInstagram className="h-4 w-4" />
                @anandasette
              </a>
              <a
                href={contato.instagramTecerAlma}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-ghost !py-3 !text-[0.85rem]"
              >
                <IconeInstagram className="h-4 w-4" />
                @teceralma
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
