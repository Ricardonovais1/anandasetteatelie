import Image from "next/image";
import { contato } from "./dados";
import { IconeWhatsApp, LinhaAgulha, Nuvem, PontoCruz, Seta } from "./Ornaments";

const marcos = [
  { numero: "1998", texto: "estilista e figurinista" },
  { numero: "2013", texto: "ensinando costura afetiva" },
  { numero: "2023", texto: "conduzindo grupos de mulheres" },
];

export default function Hero() {
  return (
    <section id="topo" className="relative overflow-hidden pt-[72px] lg:pt-[86px]">
      {/* névoa de cor ao fundo */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(120% 80% at 78% 8%, rgba(104,144,120,0.20) 0%, rgba(104,144,120,0) 58%), radial-gradient(90% 60% at 6% 92%, rgba(176,96,60,0.13) 0%, rgba(176,96,60,0) 60%)",
        }}
      />

      <div className="u-container grid items-center gap-14 pb-24 pt-14 lg:grid-cols-12 lg:gap-12 lg:pb-28 lg:pt-20">
        {/* Coluna de texto */}
        <div className="lg:col-span-6 xl:col-span-6">
          <p
            data-reveal
            className="eyebrow flex items-center gap-3 text-sage-2"
          >
            <PontoCruz className="h-[11px] w-[11px]" />
            Ateliê em {contato.cidade}
          </p>

          <h1
            data-reveal
            style={{ ["--reveal-delay" as string]: "80ms" }}
            className="display-xl mt-6"
          >
            Costurar é um jeito de{" "}
            <em className="not-italic">
              <span className="font-display italic text-sage-2">voltar para casa</span>
            </em>
            .
          </h1>

          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "160ms" }}
            className="mt-7 max-w-[46ch] text-lg text-verde-2/90 lg:text-[1.15rem]"
          >
            Aulas de costura, bordado e tecelagem — e grupos de arteterapia têxtil
            para mulheres. Antes de ser arte ou técnica, o fazer manual é encontro,
            escuta, troca e pertencimento.
          </p>

          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "240ms" }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href={contato.whatsappTexto}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-terra"
            >
              <IconeWhatsApp className="h-[18px] w-[18px]" />
              Quero uma vaga
            </a>
            <a href="#caminhos" className="btn btn-ghost">
              Ver os caminhos
              <Seta className="h-4 w-4" />
            </a>
          </div>

          {/* marcos de trajetória */}
          <dl
            data-reveal
            style={{ ["--reveal-delay" as string]: "320ms" }}
            className="mt-12 grid max-w-lg grid-cols-3 gap-5 border-t border-dashed border-verde/20 pt-7"
          >
            {marcos.map((m) => (
              <div key={m.numero}>
                <dt className="font-display text-[1.6rem] leading-none text-verde">
                  {m.numero}
                </dt>
                <dd className="mt-2 text-[0.78rem] leading-snug text-verde-3">
                  {m.texto}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Coluna de imagens */}
        <div className="relative lg:col-span-6 xl:col-span-6">
          <div
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
            className="relative mx-auto max-w-[34rem] lg:ml-auto lg:mr-0"
          >
            {/* alinhavo deslocado atrás */}
            <span
              aria-hidden="true"
              className="stitch-box absolute -left-4 -top-4 h-full w-full rounded-[2rem] sm:-left-6 sm:-top-6"
            />

            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-linho-2 shadow-[0_40px_80px_-50px_rgba(56,64,48,0.7)]">
              <Image
                src="/img/atelie-parede.webp"
                alt="Parede do ateliê da Ananda Sette coberta de cones de linha coloridos, bastidores bordados e bonecas de pano"
                fill
                priority
                sizes="(min-width: 1024px) 34rem, 92vw"
                className="object-cover"
                style={{ objectPosition: "56% 52%" }}
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 bg-gradient-to-t from-verde/25 via-transparent to-transparent"
              />
            </div>

            {/* cartão sobreposto */}
            <figure className="absolute -bottom-10 -left-3 w-[58%] max-w-[15rem] sm:-left-8 lg:-left-14">
              <div className="overflow-hidden rounded-2xl border-[6px] border-linho bg-linho shadow-[0_26px_50px_-28px_rgba(56,64,48,0.75)]">
                <Image
                  src="/img/maos-bordando.webp"
                  alt="Mãos bordando à mão sobre um tecido florido"
                  width={1400}
                  height={934}
                  sizes="(min-width: 640px) 15rem, 55vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </div>
            </figure>

            {/* nuvem da marca */}
            <Nuvem
              className="absolute -right-2 -top-9 h-16 w-auto text-teal/85 sm:-right-6 sm:-top-12 sm:h-20"
            />
          </div>
        </div>
      </div>

      <LinhaAgulha
        className="u-container mx-auto mb-2 hidden h-12 w-full max-w-3xl text-verde/45 lg:block"
      />
    </section>
  );
}
