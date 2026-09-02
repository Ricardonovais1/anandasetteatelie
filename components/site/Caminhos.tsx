import Image from "next/image";
import Link from "next/link";
import { costuraCriancas, modelagem } from "../venda/dados";
import { PontoCruz, Seta } from "./Ornaments";

const caminhos = [
  {
    numero: "01",
    titulo: "Costura afetiva",
    para: "Curso online · pais e educadores",
    texto:
      "Costurar é crescer. O curso ensina o adulto a conduzir a costura com as crianças: didática lúdica, projetos passo a passo e moldes, da pré-costura à máquina.",
    itens: ["15 módulos em vídeo", "Moldes em PDF para imprimir", "Certificado de 30 horas"],
    imagem: "/img/aula-crianca.webp",
    alt: "Ananda ensinando uma menina a costurar em uma mesa cheia de tecidos coloridos",
    destino: costuraCriancas.slug,
    chamada: "Ver o curso",
  },
  {
    numero: "02",
    titulo: "Modelagem descomplicada",
    para: "Curso online · do zero ao avançado",
    texto:
      "Autonomia em modelagem e costura em até 3 meses, mesmo sem nunca ter modelado. Saias, blusas, vestidos, calças, macacões, mangas e camisas nas suas medidas.",
    itens: ["8 módulos, 7 peças modeladas", "Moldes base para imprimir", "Certificado de 45 horas"],
    imagem: "/img/alunas.webp",
    alt: "Duas alunas do ateliê exibindo as batas de algodão que modelaram e costuraram",
    destino: modelagem.slug,
    chamada: "Ver o curso",
  },
  {
    numero: "03",
    titulo: "Arteterapia têxtil",
    para: "Grupos de mulheres",
    texto:
      "A expressão artística usada para revelar o que o inconsciente guarda. Com base na arteterapia junguiana, o fio, a agulha e o tecido viram linguagem para o que ainda não tem palavra.",
    itens: ["Encontros semanais em grupo", "Contos, meditação e partilha", "Objetos têxteis com propósito"],
    imagem: "/img/bordando-bastidor.webp",
    alt: "Mãos bordando linhas verdes em um bastidor de madeira",
    destino: "/#jornadas",
    chamada: "Conhecer as jornadas",
    destaque: true,
  },
];

export default function Caminhos() {
  return (
    <section
      id="caminhos"
      className="relative scroll-mt-24 overflow-hidden bg-linho-2 py-16 sm:py-24 lg:py-32"
    >
      <div className="u-container">
        <header className="mx-auto max-w-2xl text-center">
          <p data-reveal className="eyebrow flex items-center justify-center gap-3 text-sage-2">
            <PontoCruz className="h-[11px] w-[11px]" />
            Caminhos
          </p>
          <h2 data-reveal className="display-l mt-6">
            Três formas de entrar
          </h2>
          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "100ms" }}
            className="mx-auto mt-6 max-w-[48ch] text-[1.05rem] text-verde-2/85"
          >
            Todas passam pelo mesmo lugar: a mão que faz. O que muda é o que cada
            uma vem buscar.
          </p>
        </header>

        <div className="mt-16 grid gap-7 md:grid-cols-3 lg:mt-20 lg:gap-8">
          {caminhos.map((c, i) => (
            <article
              key={c.titulo}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
              className={`card-paper group flex flex-col overflow-hidden rounded-[1.75rem] transition-[transform,box-shadow] duration-500 hover:-translate-y-1.5 hover:shadow-[0_36px_60px_-40px_rgba(56,64,48,0.6)] ${
                c.destaque ? "ring-1 ring-sage/40" : ""
              }`}
            >
              <div className="relative aspect-[5/4] overflow-hidden bg-linho-3">
                <Image
                  src={c.imagem}
                  alt={c.alt}
                  fill
                  sizes="(min-width: 768px) 24rem, 92vw"
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                />
                <span className="absolute left-5 top-5 rounded-full bg-linho/92 px-3 py-1 font-display text-xs tracking-[0.14em] text-verde backdrop-blur-sm">
                  {c.numero}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-7 lg:p-8">
                <p className="eyebrow text-terra">{c.para}</p>
                <h3 className="mt-3 font-display text-[1.7rem] leading-tight text-verde">
                  {c.titulo}
                </h3>
                <p className="mt-4 text-[0.97rem] leading-relaxed text-verde-2/85">
                  {c.texto}
                </p>

                <ul className="mt-6 grid gap-2.5 border-t border-dashed border-verde/18 pt-6">
                  {c.itens.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-[0.9rem] text-verde-2/90">
                      <PontoCruz className="mt-[6px] h-2.5 w-2.5 shrink-0 text-sage" />
                      {item}
                    </li>
                  ))}
                </ul>

                <Link
                  href={c.destino}
                  className="link-stitch mt-7 inline-flex items-center gap-2 self-start text-[0.9rem] font-medium text-verde"
                >
                  {c.chamada}
                  <Seta className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
