import Image from "next/image";
import Link from "next/link";
import { contato } from "../site/dados";
import {
  Aspas,
  DivisorCosturado,
  IconeWhatsApp,
  PontoCruz,
  Seta,
} from "../site/Ornaments";
import type { ResumoJornada } from "./dados";
import { temas, type Tema } from "./tema";

/* Peças compartilhadas pelas páginas internas — as jornadas de arteterapia
 * e os cursos do ateliê usam a mesma anatomia, só muda o tema. */

type ComTema = { tema: Tema };

/* ---------------------------------------------------------------- topo */

export function JornadaHero({
  tema,
  eyebrow,
  nome,
  subtitulo,
  paragrafos,
  fatos,
  imagem,
}: ComTema & {
  eyebrow: string;
  nome: string;
  subtitulo: string;
  paragrafos: string[];
  fatos: [string, string][];
  imagem: { src: string; alt: string; w: number; h: number };
}) {
  const t = temas[tema];

  return (
    <section
      id="topo"
      className={`relative overflow-hidden ${t.fundoEscuro} pb-16 pt-32 text-linho sm:pb-20 lg:pb-28 lg:pt-40`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-80"
        style={{ background: t.brilhoHero }}
      />

      <div className="u-container relative">
        <nav aria-label="Trilha" className="mb-9">
          <Link
            href="/"
            className="link-stitch inline-flex items-center gap-2 text-[0.82rem] text-linho/60 transition-colors hover:text-linho"
          >
            <Seta className="h-3.5 w-3.5 rotate-180" />
            Ateliê Ananda Sette
          </Link>
        </nav>

        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p
              data-reveal
              className={`eyebrow flex items-center gap-3 ${t.acentoClaro}`}
            >
              <PontoCruz className="h-[11px] w-[11px]" />
              {eyebrow}
            </p>
            <h1 data-reveal className="display-xl mt-6 !text-linho">
              {nome}
            </h1>
            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
              className={`mt-4 font-display text-[1.35rem] italic leading-snug ${t.acentoClaro} lg:text-[1.6rem]`}
            >
              {subtitulo}
            </p>

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "140ms" }}
              className="mt-8 grid max-w-[52ch] gap-4 text-[1.02rem] leading-relaxed text-linho/80"
            >
              {paragrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <a
              data-reveal
              style={{ ["--reveal-delay" as string]: "200ms" }}
              href={contato.whatsappTexto}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light mt-9 w-full sm:w-auto"
            >
              <IconeWhatsApp className="h-[18px] w-[18px]" />
              Quero saber mais
              <Seta className="hidden h-4 w-4 sm:block" />
            </a>
          </div>

          <div className="lg:col-span-5">
            <figure
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
              className={`overflow-hidden rounded-[2rem] border ${t.bordaClara} shadow-[0_40px_80px_-50px_rgba(0,0,0,0.7)]`}
            >
              <Image
                src={imagem.src}
                alt={imagem.alt}
                width={imagem.w}
                height={imagem.h}
                preload
                sizes="(min-width: 1024px) 26rem, 92vw"
                className="aspect-square w-full object-cover"
              />
            </figure>
          </div>
        </div>

        <dl
          data-reveal
          style={{ ["--reveal-delay" as string]: "260ms" }}
          className={`mt-14 grid gap-px overflow-hidden rounded-[1.5rem] border ${t.bordaClara} bg-linho/12 sm:grid-cols-3`}
        >
          {fatos.map(([rotulo, valor]) => (
            <div key={rotulo} className={`${t.fundoEscuroSuave} p-6 backdrop-blur-sm`}>
              <dt className="eyebrow text-linho/50">{rotulo}</dt>
              <dd className="mt-2.5 font-display text-[1.1rem] leading-snug text-linho">
                {valor}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------- seções */

export function Secao({
  tema,
  id,
  eyebrow,
  titulo,
  intro,
  children,
  claro = false,
}: ComTema & {
  id?: string;
  eyebrow?: string;
  titulo: React.ReactNode;
  intro?: string;
  children: React.ReactNode;
  claro?: boolean;
}) {
  const t = temas[tema];

  return (
    <section
      id={id}
      className={`relative scroll-mt-28 py-16 sm:py-24 lg:py-28 ${
        claro ? t.fundoClaro : ""
      }`}
    >
      <div className="u-container">
        <header className="max-w-2xl">
          {eyebrow && (
            <p data-reveal className={`eyebrow flex items-center gap-3 ${t.eyebrow}`}>
              <PontoCruz className="h-[11px] w-[11px]" />
              {eyebrow}
            </p>
          )}
          <h2 data-reveal className="display-l mt-6">
            {titulo}
          </h2>
          {intro && (
            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "100ms" }}
              className="mt-6 text-[1.05rem] leading-relaxed text-verde-2/85"
            >
              {intro}
            </p>
          )}
        </header>
        <div className="mt-12 lg:mt-14">{children}</div>
      </div>
    </section>
  );
}

/** Lista numerada em cartões — usada para etapas e pilares. */
export function Cartoes({
  tema,
  itens,
  numerado = true,
}: ComTema & {
  itens: { titulo: string; texto: string }[];
  numerado?: boolean;
}) {
  const t = temas[tema];

  return (
    <ol
      className={`grid gap-px overflow-hidden rounded-[1.5rem] bg-verde/12 sm:grid-cols-2 ${
        itens.length % 3 === 0 ? "lg:grid-cols-3" : ""
      }`}
    >
      {itens.map((item, i) => (
        <li
          key={item.titulo}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}
          className={`${t.cartaoClaro} p-7 lg:p-8`}
        >
          {numerado ? (
            <span className={`font-display text-sm ${t.acento}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
          ) : (
            <PontoCruz className={`h-3.5 w-3.5 ${t.ornamento}`} />
          )}
          <h3 className="mt-3.5 font-display text-[1.3rem] leading-snug text-verde">
            {item.titulo}
          </h3>
          <p className="mt-3 text-[0.94rem] leading-relaxed text-verde-2/85">
            {item.texto}
          </p>
        </li>
      ))}
    </ol>
  );
}

/** Faixa de citação em fundo cheio. */
export function Citacao({
  tema,
  texto,
  fonte,
}: ComTema & { texto: string; fonte?: string }) {
  const t = temas[tema];

  return (
    <section
      className={`relative overflow-hidden ${t.fundoEscuro} py-16 text-linho sm:py-20 lg:py-24`}
    >
      <div className="u-container relative text-center">
        <Aspas className={`mx-auto h-8 w-8 ${t.acentoClaro} opacity-60`} />
        <blockquote
          data-reveal
          className="mx-auto mt-6 max-w-3xl font-display text-[1.5rem] leading-snug !text-linho lg:text-[2rem]"
        >
          {texto}
        </blockquote>
        {fonte && (
          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "90ms" }}
            className={`eyebrow mt-7 flex items-center justify-center gap-3 ${t.acentoClaro}`}
          >
            <PontoCruz className="h-[11px] w-[11px]" />
            {fonte}
            <PontoCruz className="h-[11px] w-[11px]" />
          </p>
        )}
      </div>
    </section>
  );
}

/** Funcionamento do grupo + chamada para o WhatsApp. */
export function Funcionamento({
  tema,
  fatos,
  observacao,
}: ComTema & { fatos: [string, string][]; observacao: string }) {
  const t = temas[tema];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <dl className="lg:col-span-7">
        {fatos.map(([rotulo, valor], i) => (
          <div
            key={rotulo}
            data-reveal
            style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
            className={`flex flex-col gap-1 border-b border-dashed ${t.bordaEscura} py-5 sm:flex-row sm:gap-8 ${
              i === 0 ? "border-t" : ""
            }`}
          >
            <dt className="eyebrow shrink-0 pt-1 text-verde-3 sm:w-[9rem]">
              {rotulo}
            </dt>
            <dd className="font-display text-[1.15rem] leading-snug text-verde">
              {valor}
            </dd>
          </div>
        ))}
      </dl>

      <div
        data-reveal
        style={{ ["--reveal-delay" as string]: "160ms" }}
        className={`lg:col-span-5 ${t.cartaoClaro} flex flex-col justify-center rounded-[1.5rem] border border-dashed ${t.bordaEscura} p-7 lg:p-8`}
      >
        <p className="text-[0.95rem] leading-relaxed text-verde-2/85">
          {observacao}
        </p>
        <a
          href={contato.whatsappTexto}
          target="_blank"
          rel="noopener noreferrer"
          className={`${t.botaoSolido} mt-7 w-full sm:w-auto sm:self-start`}
        >
          <IconeWhatsApp className="h-[18px] w-[18px]" />
          Consultar vagas e valores
        </a>
        <p className="mt-4 text-[0.82rem] text-verde-3">
          A Ananda responde pessoalmente.
        </p>
      </div>
    </div>
  );
}

/* -------------------------------------------------------- facilitadora */

/** Nas jornadas ela assina como facilitadora; nos cursos, como professora.
 *  Os textos padrão servem às duas — só o rótulo e a linha de abertura mudam. */
export function Facilitadora({
  tema,
  rotulo = "Facilitadora",
  chamada = "Arteterapeuta junguiana especializada em costura, bordado e grupos de mulheres.",
  paragrafos = [
    "Graduada em Belas Artes e Estilismo pela UFMG, pós-graduada em Design de Moda pelo SENAI CETIQT e em Arteterapia pela FAV. Atua como estilista e figurinista desde 1998.",
    "No seu ateliê, ensina costura afetiva para crianças e mulheres desde 2013. Conduz a Jornada Tecer Alma, de arteterapia têxtil, desde 2023.",
  ],
}: ComTema & {
  rotulo?: string;
  chamada?: string;
  paragrafos?: string[];
}) {
  const t = temas[tema];

  return (
    <section className="relative py-16 sm:py-24 lg:py-28">
      <div className="u-container">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <figure
              data-reveal
              className="relative mx-auto max-w-[20rem] overflow-hidden rounded-[2rem] bg-linho-2 shadow-[0_36px_70px_-48px_rgba(56,64,48,0.75)]"
            >
              <Image
                src="/img/ananda-bastidor.webp"
                alt="Retrato de Ananda Sette emoldurado por um bastidor de bordado"
                width={1100}
                height={1031}
                sizes="(min-width: 1024px) 20rem, 70vw"
                className="w-full object-cover"
              />
            </figure>
          </div>

          <div className="lg:col-span-8">
            <p data-reveal className={`eyebrow flex items-center gap-3 ${t.eyebrow}`}>
              <PontoCruz className="h-[11px] w-[11px]" />
              {rotulo}
            </p>
            <h2 data-reveal className="display-m mt-5">
              Ananda Sette
            </h2>
            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
              className={`mt-4 max-w-[40ch] font-display text-[1.2rem] italic leading-snug ${t.acento}`}
            >
              {chamada}
            </p>

            <DivisorCosturado className="mt-7 max-w-[16rem]" />

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "140ms" }}
              className="mt-7 grid max-w-[58ch] gap-4 text-[1rem] leading-relaxed text-verde-2/88"
            >
              {paragrafos.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------ o caminho vizinho */

/** Cartão de saída no pé da página: a outra jornada, ou o outro curso. */
export function OutraJornada({
  jornada,
  rotulo = "A outra jornada",
  chamada = "Conhecer esta jornada",
}: {
  jornada: ResumoJornada;
  rotulo?: string;
  chamada?: string;
}) {
  const t = temas[jornada.tema];

  return (
    <section className="relative pb-20 pt-4 lg:pb-28">
      <div className="u-container">
        <Link
          href={jornada.slug}
          data-reveal
          className={`group flex flex-col gap-7 overflow-hidden rounded-[2rem] ${t.fundoEscuro} p-8 text-linho transition-transform duration-500 hover:-translate-y-1 lg:flex-row lg:items-center lg:p-10`}
        >
          <div className="lg:flex-1">
            <p className={`eyebrow ${t.acentoClaro}`}>{rotulo}</p>
            <h2 className="mt-4 font-display text-[1.7rem] leading-tight !text-linho lg:text-[2rem]">
              {jornada.nome}
            </h2>
            <p
              className={`mt-2 font-display text-[1rem] italic ${t.acentoClaro}`}
            >
              {jornada.subtitulo}
            </p>
            <p className="mt-5 max-w-[54ch] text-[0.95rem] leading-relaxed text-linho/75">
              {jornada.resumo}
            </p>
            <span className="link-stitch mt-7 inline-flex items-center gap-2 text-[0.9rem] font-medium text-linho">
              {chamada}
              <Seta className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>

          <figure className="overflow-hidden rounded-[1.5rem] lg:w-[16rem] lg:shrink-0">
            <Image
              src={jornada.imagem.src}
              alt=""
              width={jornada.imagem.w}
              height={jornada.imagem.h}
              sizes="(min-width: 1024px) 16rem, 92vw"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05] lg:aspect-square"
            />
          </figure>
        </Link>
      </div>
    </section>
  );
}
