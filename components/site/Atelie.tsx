import Image from "next/image";
import { DivisorCosturado, PontoCruz } from "./Ornaments";

const detalhes = [
  {
    titulo: "Um lugar, não uma sala de aula",
    texto:
      "Parede de linhas, bastidores pendurados, bonecas de pano e máquinas antigas. Tudo fica à mão porque tudo é para ser usado.",
  },
  {
    titulo: "Turmas pequenas",
    texto:
      "Cada pessoa costura o seu projeto, no seu ritmo, com acompanhamento de perto. Ninguém sai daqui com a mesma peça da vizinha.",
  },
  {
    titulo: "Do zero ou de onde você parou",
    texto:
      "Crianças, adolescentes e mulheres adultas. Quem nunca pegou numa agulha e quem quer aprofundar técnica encontram lugar.",
  },
];

export default function Atelie() {
  return (
    <section id="atelie" className="relative scroll-mt-24 py-16 sm:py-24 lg:py-32">
      <div className="u-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:items-center lg:gap-14">
          <div className="lg:col-span-5">
            <p data-reveal className="eyebrow flex items-center gap-3 text-sage-2">
              <PontoCruz className="h-[11px] w-[11px]" />
              O ateliê
            </p>
            <h2 data-reveal className="display-l mt-6">
              Desde 2013, uma casa aberta para quem quer{" "}
              <span className="font-display italic text-terra">fazer com as mãos</span>
            </h2>
            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "100ms" }}
              className="mt-7 max-w-[42ch] text-[1.02rem] text-verde-2/85"
            >
              Fica tudo à vista: os cones de linha, os bastidores começados, as
              bonecas que alguém deixou para terminar semana que vem. É um ateliê de
              verdade, e quem chega já entra costurando.
            </p>
            <DivisorCosturado className="mt-9 max-w-[16rem]" />
          </div>

          <div className="lg:col-span-7">
            <div className="grid grid-cols-6 gap-4 sm:gap-5">
              <figure
                data-reveal
                className="col-span-6 overflow-hidden rounded-[1.75rem] bg-linho-2 shadow-[0_30px_60px_-45px_rgba(56,64,48,0.8)]"
              >
                <Image
                  src="/img/atelie-parede-2.webp"
                  alt="Vista do ateliê: bastidores de bordado e quadros de tecido pendurados na parede verde-azulada"
                  width={1472}
                  height={747}
                  sizes="(min-width: 1024px) 44rem, 92vw"
                  className="aspect-[16/9] w-full object-cover"
                />
              </figure>

              <figure
                data-reveal
                style={{ ["--reveal-delay" as string]: "110ms" }}
                className="col-span-3 overflow-hidden rounded-[1.5rem] bg-linho-2 shadow-[0_26px_50px_-40px_rgba(56,64,48,0.8)]"
              >
                <Image
                  src="/img/aula-turma.webp"
                  alt="Ananda na máquina de costura com um grupo de crianças ao redor, acompanhando o trabalho"
                  width={1080}
                  height={1080}
                  sizes="(min-width: 1024px) 21rem, 45vw"
                  className="aspect-square w-full object-cover"
                />
              </figure>

              <figure
                data-reveal
                style={{ ["--reveal-delay" as string]: "180ms" }}
                className="col-span-3 overflow-hidden rounded-[1.5rem] bg-linho-2 shadow-[0_26px_50px_-40px_rgba(56,64,48,0.8)]"
              >
                <Image
                  src="/img/ananda-tecidos.webp"
                  alt="Ananda atrás de uma pilha de tecidos dobrados ao lado de uma máquina de costura antiga"
                  width={1200}
                  height={800}
                  sizes="(min-width: 1024px) 21rem, 45vw"
                  className="aspect-square w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>

        <ul className="mt-16 grid gap-px overflow-hidden rounded-[1.5rem] bg-verde/12 sm:grid-cols-3 lg:mt-20">
          {detalhes.map((d, i) => (
            <li
              key={d.titulo}
              data-reveal
              style={{ ["--reveal-delay" as string]: i * 90 + "ms" }}
              className="bg-linho p-7 lg:p-8"
            >
              <PontoCruz className="h-3.5 w-3.5 text-sage" />
              <h3 className="mt-4 font-display text-[1.3rem] leading-snug text-verde">
                {d.titulo}
              </h3>
              <p className="mt-3 text-[0.94rem] leading-relaxed text-verde-2/85">
                {d.texto}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
