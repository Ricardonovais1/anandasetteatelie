import Image from "next/image";
import { contato } from "./dados";
import {
  IconeEmail,
  IconeInstagram,
  IconeWhatsApp,
  IconeYouTube,
  PontoCruz,
  Seta,
} from "./Ornaments";

const canais = [
  {
    Icone: IconeWhatsApp,
    rotulo: "WhatsApp",
    valor: contato.telefone,
    href: contato.whatsappTexto,
  },
  {
    Icone: IconeEmail,
    rotulo: "E-mail",
    valor: contato.email,
    href: "mailto:" + contato.email,
  },
  {
    Icone: IconeInstagram,
    rotulo: "Instagram",
    valor: "@anandasette",
    href: contato.instagram,
  },
  {
    Icone: IconeYouTube,
    rotulo: "YouTube",
    valor: "Ananda Sette Ateliê",
    href: contato.youtube,
  },
];

export default function Contato() {
  return (
    <section id="contato" className="relative scroll-mt-24 py-16 sm:py-24 lg:py-32">
      <div className="u-container">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-verde text-linho">
          <div aria-hidden="true" className="absolute inset-0 opacity-[0.20]">
            <Image
              src="/img/linhas.webp"
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-0 bg-gradient-to-br from-verde via-verde/95 to-verde/80"
          />

          <div className="relative grid gap-12 p-7 sm:p-14 lg:grid-cols-12 lg:gap-14 lg:p-16">
            <div className="lg:col-span-6">
              <p data-reveal className="eyebrow flex items-center gap-3 text-sage-cl">
                <PontoCruz className="h-[11px] w-[11px]" />
                Contato
              </p>
              <h2 data-reveal className="display-l mt-6 !text-linho">
                Vem costurar{" "}
                <span className="font-display italic text-sage-cl">com a gente</span>
              </h2>
              <p
                data-reveal
                style={{ ["--reveal-delay" as string]: "100ms" }}
                className="mt-7 max-w-[42ch] text-[1.05rem] text-linho/80"
              >
                Conte o que você procura — uma aula para a sua filha, um projeto seu
                parado há anos, ou um grupo para caminhar junto. A Ananda responde
                pessoalmente.
              </p>

              <a
                data-reveal
                style={{ ["--reveal-delay" as string]: "180ms" }}
                href={contato.whatsappTexto}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-terra mt-9 w-full sm:w-auto"
              >
                <IconeWhatsApp className="h-[18px] w-[18px]" />
                Chamar no WhatsApp
                <Seta className="hidden h-4 w-4 sm:block" />
              </a>

              <p
                data-reveal
                className="mt-8 flex items-center gap-3 text-[0.85rem] text-linho/60"
              >
                <PontoCruz className="h-3 w-3 text-sage-cl" />
                Aulas presenciais em {contato.cidade}
              </p>
            </div>

            <div className="lg:col-span-6">
              <ul
                data-reveal
                style={{ ["--reveal-delay" as string]: "120ms" }}
                className="grid gap-px overflow-hidden rounded-[1.5rem] bg-linho/12 sm:grid-cols-2"
              >
                {canais.map(({ Icone, rotulo, valor, href }) => {
                  const externo = !href.startsWith("mailto:");
                  return (
                    <li key={rotulo} className="bg-verde">
                      <a
                        href={href}
                        target={externo ? "_blank" : undefined}
                        rel={externo ? "noopener noreferrer" : undefined}
                        className="group flex h-full flex-col gap-3 p-6 transition-colors duration-300 hover:bg-linho/[0.07] lg:p-7"
                      >
                        <Icone className="h-5 w-5 text-sage-cl transition-transform duration-300 group-hover:scale-110" />
                        <span className="eyebrow text-linho/50">{rotulo}</span>
                        <span className="text-[0.95rem] text-linho/95">{valor}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>

              <figure
                data-reveal
                style={{ ["--reveal-delay" as string]: "200ms" }}
                className="mt-5 overflow-hidden rounded-[1.5rem] border border-linho/12"
              >
                <Image
                  src="/img/atelie-mulheres.webp"
                  alt="Grupo de mulheres sorrindo atrás de uma fileira de bolas de tecido que bordaram no ateliê"
                  width={1221}
                  height={917}
                  sizes="(min-width: 1024px) 30rem, 92vw"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
