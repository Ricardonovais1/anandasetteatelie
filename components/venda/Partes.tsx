import Image from "next/image";
import Link from "next/link";
import { contato } from "../site/dados";
import {
  Cadeado,
  Chevron,
  DivisorCosturado,
  Escudo,
  IconeWhatsApp,
  Play,
  PontoCruz,
  Seta,
  Visto,
  Xis,
} from "../site/Ornaments";
import { temas, type Tema } from "../jornada/tema";
import type { Bonus, Curso, Depoimento, Modulo, Oferta, Pergunta, Prosa } from "./tipos";

type ComTema = { tema: Tema };

/* --------------------------------------------------------- botão ---- */

/** O botão de compra. Todos apontam para o mesmo checkout da oferta. */
export function BotaoCompra({
  tema,
  oferta,
  claro = false,
  largo = false,
}: ComTema & { oferta: Oferta; claro?: boolean; largo?: boolean }) {
  const t = temas[tema];

  return (
    <a
      href={oferta.checkout}
      target="_blank"
      rel="noopener noreferrer"
      className={`${claro ? "btn btn-light" : t.botaoSolido} ${
        largo ? "w-full sm:w-auto" : ""
      } !whitespace-normal text-center text-[0.95rem] sm:text-[1rem]`}
    >
      {oferta.botao}
      <Seta className="hidden h-4 w-4 shrink-0 sm:block" />
    </a>
  );
}

/** Linha de segurança que acompanha todo botão de compra. */
function Microcopy({ oferta, claro = false }: { oferta: Oferta; claro?: boolean }) {
  const cor = claro ? "text-linho/65" : "text-verde-3";
  return (
    <p className={`mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-[0.82rem] ${cor}`}>
      <span className="inline-flex items-center gap-1.5">
        <Cadeado className="h-3.5 w-3.5" />
        Compra segura na Hotmart
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Escudo className="h-3.5 w-3.5" />
        {oferta.garantiaDias} dias de garantia
      </span>
      <span className="inline-flex items-center gap-1.5">
        <Play className="h-3.5 w-3.5" />
        {oferta.acesso}
      </span>
    </p>
  );
}

/* ----------------------------------------------------------- topo ---- */

export function VendaHero({ curso }: { curso: Curso }) {
  const t = temas[curso.tema];

  return (
    <section
      id="topo"
      className={`relative overflow-hidden ${t.fundoEscuro} pb-14 pt-32 text-linho sm:pb-16 lg:pb-20 lg:pt-40`}
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

        {/* Três blocos, nesta ordem no DOM: título · vídeo · texto e botão.
            No celular empilham assim mesmo — o vídeo fica logo abaixo do
            título. No desktop o vídeo ocupa a coluna da direita inteira,
            atravessando as duas linhas da esquerda. */}
        <div className="grid items-start gap-8 lg:grid-cols-12 lg:gap-x-12 lg:gap-y-6">
          <div className="lg:col-span-6">
            <p className={`eyebrow flex items-center gap-3 ${t.acentoClaro}`}>
              <PontoCruz className="h-[11px] w-[11px]" />
              {curso.eyebrow}
            </p>
            <h1 className="mt-5 text-[clamp(2.15rem,4vw,3.3rem)] !text-linho">
              {curso.nome}
            </h1>
            <p className={`mt-4 max-w-[34ch] font-display text-[1.15rem] italic leading-snug ${t.acentoClaro} lg:text-[1.3rem]`}>
              {curso.promessa}
            </p>
          </div>

          {curso.vimeo ? (
            <div className="lg:col-span-6 lg:row-span-2 lg:self-center">
              <div
                className={`aspect-video overflow-hidden rounded-[1.25rem] border ${t.bordaClara} bg-black/25 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]`}
              >
                <iframe
                  src={`https://player.vimeo.com/video/${curso.vimeo}?dnt=1`}
                  title={`Vídeo de apresentação — ${curso.nome}`}
                  allow="fullscreen; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          ) : (
            <figure
              className={`overflow-hidden rounded-[1.25rem] border ${t.bordaClara} shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)] lg:col-span-6 lg:row-span-2 lg:self-center`}
            >
              <Image
                src={curso.imagem.src}
                alt={curso.imagem.alt}
                width={curso.imagem.w}
                height={curso.imagem.h}
                preload
                sizes="(min-width: 1024px) 32rem, 92vw"
                className="aspect-video w-full object-cover"
              />
            </figure>
          )}

          <div className="lg:col-span-6">
            <div className="grid max-w-[46ch] gap-3 text-[0.97rem] leading-relaxed text-linho/80">
              {curso.chamadaHero.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>

            <ul className="mt-6 grid gap-2 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
              {curso.destaquesHero.map((d) => (
                <li key={d} className="flex items-start gap-2.5 text-[0.9rem] text-linho/85">
                  <Visto className={`mt-[4px] h-3.5 w-3.5 shrink-0 ${t.acentoClaro}`} />
                  {d}
                </li>
              ))}
            </ul>

            {/* Sem `data-reveal` em nenhum lugar do herói: ele já nasce na
                tela, e o botão de compra não pode esperar um scroll para
                aparecer. A animação continua no resto da página. */}
            <div className="mt-8">
              <BotaoCompra tema={curso.tema} oferta={curso.oferta} claro largo />
              <Microcopy oferta={curso.oferta} claro />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------- prova social ---- */

export function Numeros({ tema, itens }: ComTema & { itens: [string, string][] }) {
  const t = temas[tema];

  return (
    <section className="py-10 lg:py-12">
      <div className="u-container">
        <dl className="grid gap-8 text-center sm:grid-cols-3">
          {itens.map(([valor, rotulo], i) => (
            <div key={rotulo} data-reveal style={{ ["--reveal-delay" as string]: `${i * 80}ms` }}>
              <dt className="sr-only">{rotulo}</dt>
              <dd>
                <span className={`block font-display text-[2rem] leading-none ${t.acento}`}>
                  {valor}
                </span>
                <span className="mt-2 block text-[0.88rem] text-verde-2/80">{rotulo}</span>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

/* ------------------------------------------------------ para quem ---- */

/** O bloco "para quem é este curso" + o pré-requisito, como na página antiga. */
export function ParaQuemBloco({
  tema,
  texto,
  prerequisito,
}: ComTema & { texto: string; prerequisito: string }) {
  const t = temas[tema];

  return (
    <section className={`${t.fundoEscuro} py-14 text-linho sm:py-16`}>
      <div className="u-container">
        <div className="mx-auto max-w-3xl text-center">
          <p data-reveal className={`eyebrow ${t.acentoClaro}`}>
            Para quem é este curso
          </p>
          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "80ms" }}
            className="mt-6 font-display text-[1.35rem] leading-snug !text-linho lg:text-[1.6rem]"
          >
            {texto}
          </p>
          <p
            data-reveal
            style={{ ["--reveal-delay" as string]: "140ms" }}
            className={`eyebrow mt-7 flex items-center justify-center gap-3 ${t.acentoClaro}`}
          >
            <PontoCruz className="h-[11px] w-[11px]" />
            {prerequisito}
            <PontoCruz className="h-[11px] w-[11px]" />
          </p>
        </div>
      </div>
    </section>
  );
}

export function ParaQuem({ tema, sim, nao }: ComTema & { sim: string[]; nao: string[] }) {
  const t = temas[tema];

  return (
    <div className="grid gap-5 lg:grid-cols-2 lg:gap-7">
      <div data-reveal className={`rounded-[1.5rem] ${t.fundoClaro} p-7 lg:p-8`}>
        <h3 className="font-display text-[1.35rem] text-verde">É para você que</h3>
        <ul className="mt-6 grid gap-3.5">
          {sim.map((s) => (
            <li
              key={s}
              className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-verde-2/90"
            >
              <Visto className={`mt-[5px] h-3.5 w-3.5 shrink-0 ${t.acento}`} />
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div
        data-reveal
        style={{ ["--reveal-delay" as string]: "100ms" }}
        className="rounded-[1.5rem] border border-dashed border-verde/20 p-7 lg:p-8"
      >
        <h3 className="font-display text-[1.35rem] text-verde-3">Não é para você que</h3>
        <ul className="mt-6 grid gap-3.5">
          {nao.map((n) => (
            <li
              key={n}
              className="flex items-start gap-3 text-[0.97rem] leading-relaxed text-verde-2/75"
            >
              <Xis className="mt-[5px] h-3.5 w-3.5 shrink-0 text-verde-3" />
              {n}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------- prosa ---- */

/** Texto corrido da página original, com a frase de destaque destacada. */
export function TextoLongo({ tema, prosa }: ComTema & { prosa: Prosa }) {
  const t = temas[tema];

  return (
    <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-7">
        <div className="grid max-w-[58ch] gap-5 text-[1.05rem] leading-relaxed text-verde-2/88">
          {prosa.paragrafos.map((p) => (
            <p key={p.slice(0, 24)}>{p}</p>
          ))}
        </div>
      </div>

      {prosa.destaque && (
        <div className="lg:col-span-5">
          <blockquote
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
            className={`rounded-[1.5rem] ${t.fundoClaro} p-7 font-display text-[1.2rem] italic leading-snug text-verde lg:p-8 lg:text-[1.35rem]`}
          >
            {prosa.destaque}
          </blockquote>
        </div>
      )}
    </div>
  );
}

/* --------------------------------------------------------- módulos ---- */

export function Modulos({ tema, itens }: ComTema & { itens: Modulo[] }) {
  const t = temas[tema];

  return (
    <ol className="grid gap-3">
      {itens.map((m, i) => (
        <li
          key={m.titulo}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${Math.min(i, 6) * 50}ms` }}
        >
          <details
            className={`group card-paper overflow-hidden rounded-2xl border-dashed ${t.bordaEscura}`}
          >
            <summary className="flex cursor-pointer list-none items-center gap-4 p-5 lg:px-7">
              <span className={`font-display text-[0.95rem] tabular-nums ${t.acento} shrink-0`}>
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="flex-1">
                <span className="block font-display text-[1.2rem] leading-snug text-verde">
                  {m.titulo}
                </span>
                {m.texto && (
                  <span className="mt-1.5 block text-[0.92rem] leading-relaxed text-verde-2/80">
                    {m.texto}
                  </span>
                )}
              </span>
              {m.aulas?.length ? (
                <Chevron
                  className={`h-5 w-5 shrink-0 ${t.ornamento} transition-transform duration-300 group-open:rotate-180`}
                />
              ) : null}
            </summary>

            {m.aulas?.length ? (
              <ul className="grid gap-2 border-t border-dashed border-verde/15 px-5 pb-5 pt-4 lg:px-7 lg:pl-[3.9rem]">
                {m.aulas.map((a) => (
                  <li key={a} className="flex items-start gap-2.5 text-[0.9rem] text-verde-2/85">
                    <Play className={`mt-[3px] h-3.5 w-3.5 shrink-0 ${t.ornamento}`} />
                    {a}
                  </li>
                ))}
              </ul>
            ) : null}
          </details>
        </li>
      ))}
    </ol>
  );
}

/** "O curso tem:" — a lista de entregáveis, ao lado dos módulos. */
export function OQueTem({ tema, itens }: ComTema & { itens: string[] }) {
  const t = temas[tema];

  return (
    <div
      data-reveal
      className={`mt-10 rounded-[1.5rem] border border-dashed ${t.bordaEscura} p-7 lg:p-8`}
    >
      <h3 className="font-display text-[1.35rem] text-verde">O curso tem</h3>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {itens.map((i) => (
          <li key={i} className="flex items-start gap-3 text-[0.95rem] text-verde-2/90">
            <Visto className={`mt-[5px] h-3.5 w-3.5 shrink-0 ${t.acento}`} />
            {i}
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ----------------------------------------------------- benefícios ---- */

export function Beneficios({
  tema,
  titulo,
  itens,
}: ComTema & { titulo: string; itens: string[] }) {
  const t = temas[tema];

  return (
    <section className={`${t.fundoClaro} py-14 sm:py-16 lg:py-20`}>
      <div className="u-container text-center">
        <h2 data-reveal className="display-m mx-auto max-w-2xl">
          {titulo}
        </h2>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {itens.map((i, n) => (
            <li
              key={i}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${Math.min(n, 7) * 60}ms` }}
              className="card-paper inline-flex items-center gap-2.5 rounded-full px-5 py-3 text-[0.95rem] text-verde-2"
            >
              <PontoCruz className={`h-3 w-3 shrink-0 ${t.ornamento}`} />
              {i}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** "O que esperar do curso" + "você poderá atuar como". */
export function EsperarEAtuar({
  tema,
  esperar,
  atuacao,
}: ComTema & { esperar: string[]; atuacao: { titulo: string; itens: string[] } }) {
  const t = temas[tema];

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:gap-14">
      <div>
        <h3 data-reveal className="font-display text-[1.5rem] leading-tight text-verde">
          O que esperar do curso
        </h3>
        <ul className="mt-6 grid gap-3.5">
          {esperar.map((e, i) => (
            <li
              key={e}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
              className={`flex items-start gap-3 border-b border-dashed ${t.bordaEscura} pb-3.5 text-[1rem] leading-relaxed text-verde-2/90`}
            >
              <Visto className={`mt-[5px] h-3.5 w-3.5 shrink-0 ${t.acento}`} />
              {e}
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 data-reveal className="font-display text-[1.5rem] leading-tight text-verde">
          {atuacao.titulo}
        </h3>
        <ul className="mt-6 grid gap-3.5">
          {atuacao.itens.map((a, i) => (
            <li
              key={a}
              data-reveal
              style={{ ["--reveal-delay" as string]: `${i * 60}ms` }}
              className={`flex items-start gap-3 border-b border-dashed ${t.bordaEscura} pb-3.5 text-[1rem] leading-relaxed text-verde-2/90`}
            >
              <PontoCruz className={`mt-[6px] h-3 w-3 shrink-0 ${t.ornamento}`} />
              {a}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ----------------------------------------------------------- bônus ---- */

export function Bonus({ tema, itens }: ComTema & { itens: Bonus[] }) {
  const t = temas[tema];

  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {itens.map((b, i) => (
        <article
          key={b.titulo}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${Math.min(i, 4) * 80}ms` }}
          className="card-paper flex gap-4 rounded-2xl p-5"
        >
          {b.imagem ? (
            <Image
              src={b.imagem.src}
              alt={b.imagem.alt}
              width={b.imagem.w}
              height={b.imagem.h}
              sizes="5rem"
              className="h-20 w-20 shrink-0 rounded-xl object-cover"
            />
          ) : (
            <span
              className={`mt-1 grid h-10 w-10 shrink-0 place-items-center rounded-full ${t.fundoClaro}`}
            >
              <PontoCruz className={`h-4 w-4 ${t.ornamento}`} />
            </span>
          )}

          <div className="min-w-0">
            <p className={`eyebrow ${t.acento}`}>Bônus {String(i + 1).padStart(2, "0")}</p>
            <h3 className="mt-2 font-display text-[1.1rem] leading-snug text-verde">
              {b.titulo}
            </h3>
            <p className="mt-2 text-[0.88rem] leading-relaxed text-verde-2/85">{b.texto}</p>
          </div>
        </article>
      ))}
    </div>
  );
}

/* ---------------------------------------------------- depoimentos ---- */

export function Depoimentos({ tema, itens }: ComTema & { itens: Depoimento[] }) {
  const t = temas[tema];

  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {itens.map((d, i) => (
        <figure
          key={d.nome}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${Math.min(i, 5) * 70}ms` }}
          className="card-paper flex flex-col rounded-2xl p-6"
        >
          <blockquote className="flex-1 text-[0.95rem] leading-relaxed text-verde-2/90">
            &ldquo;{d.texto}&rdquo;
          </blockquote>
          <figcaption className="mt-5 flex items-center gap-3 border-t border-dashed border-verde/15 pt-5">
            {d.avatar ? (
              <Image
                src={d.avatar}
                alt=""
                width={320}
                height={320}
                sizes="3rem"
                className="h-12 w-12 shrink-0 rounded-full object-cover"
              />
            ) : (
              <span
                className={`grid h-12 w-12 shrink-0 place-items-center rounded-full ${t.fundoClaro}`}
              >
                <PontoCruz className={`h-4 w-4 ${t.ornamento}`} />
              </span>
            )}
            <span className="min-w-0">
              <span className="block font-display text-[1rem] leading-tight text-verde">
                {d.nome}
              </span>
              <span className={`mt-0.5 block text-[0.78rem] leading-snug ${t.acento}`}>
                {d.detalhe}
              </span>
            </span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/** Os depoimentos gravados, em vídeo. */
export function DepoimentosVideo({
  tema,
  itens,
}: ComTema & { itens: { nome: string; vimeo: string; titulo: string }[] }) {
  const t = temas[tema];

  return (
    <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {itens.map((d, i) => (
        <figure
          key={d.nome}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
          className="overflow-hidden rounded-2xl"
        >
          <div className="aspect-video overflow-hidden rounded-2xl bg-verde/10">
            <iframe
              src={`https://player.vimeo.com/video/${d.vimeo}?dnt=1`}
              title={`Depoimento de ${d.nome} — ${d.titulo}`}
              allow="fullscreen; picture-in-picture"
              allowFullScreen
              loading="lazy"
              className="h-full w-full border-0"
            />
          </div>
          <figcaption className="mt-3.5 flex items-baseline gap-2.5">
            <span className="font-display text-[1.05rem] text-verde">{d.nome}</span>
            <span className={`text-[0.82rem] ${t.acento}`}>{d.titulo}</span>
          </figcaption>
        </figure>
      ))}
    </div>
  );
}

/* ------------------------------------------------------ professora ---- */

export function Professora({ curso }: { curso: Curso }) {
  const t = temas[curso.tema];

  return (
    <section className="relative py-16 sm:py-20 lg:py-24">
      <div className="u-container">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-4">
            <figure
              data-reveal
              className="relative mx-auto max-w-[15rem] overflow-hidden rounded-[1.5rem] bg-linho-2 shadow-[0_30px_60px_-48px_rgba(56,64,48,0.75)]"
            >
              <Image
                src="/img/ananda-bastidor.webp"
                alt="Retrato de Ananda Sette emoldurado por um bastidor de bordado"
                width={1100}
                height={1031}
                sizes="15rem"
                className="w-full object-cover"
              />
            </figure>
          </div>

          <div className="lg:col-span-8">
            <p data-reveal className={`eyebrow flex items-center gap-3 ${t.eyebrow}`}>
              <PontoCruz className="h-[11px] w-[11px]" />
              Quem ensina
            </p>
            <h2 data-reveal className="display-m mt-5">
              Ananda Sette
            </h2>
            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "80ms" }}
              className={`mt-4 max-w-[44ch] font-display text-[1.2rem] italic leading-snug ${t.acento}`}
            >
              {curso.bioChamada}
            </p>

            <DivisorCosturado className="mt-7 max-w-[16rem]" />

            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "140ms" }}
              className="mt-7 grid max-w-[58ch] gap-4 text-[1rem] leading-relaxed text-verde-2/88"
            >
              {curso.bio.map((p) => (
                <p key={p.slice(0, 24)}>{p}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* --------------------------------------------------------- oferta ---- */

export function OfertaBloco({ tema, oferta }: ComTema & { oferta: Oferta }) {
  const t = temas[tema];

  return (
    <section
      id="oferta"
      className={`relative scroll-mt-24 overflow-hidden ${t.fundoEscuro} py-16 text-linho sm:py-20 lg:py-24`}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{ background: t.brilhoHero }}
      />

      <div className="u-container relative">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <p data-reveal className={`eyebrow flex items-center gap-3 ${t.acentoClaro}`}>
              <PontoCruz className="h-[11px] w-[11px]" />
              A oferta
            </p>
            <h2 data-reveal className="display-l mt-6 !text-linho">
              Tudo que está incluso
            </h2>
            <ul className="mt-8 grid gap-3">
              {oferta.inclui.map((item, i) => (
                <li
                  key={item}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${Math.min(i, 8) * 50}ms` }}
                  className="flex items-start gap-3 border-b border-dashed border-linho/20 pb-3 text-[0.97rem] text-linho/85"
                >
                  <Visto className={`mt-[5px] h-3.5 w-3.5 shrink-0 ${t.acentoClaro}`} />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6">
            <div
              data-reveal
              style={{ ["--reveal-delay" as string]: "120ms" }}
              className="rounded-[1.75rem] bg-linho p-7 text-center shadow-[0_40px_80px_-50px_rgba(0,0,0,0.8)] lg:p-9"
            >
              {oferta.precoDe && (
                <p className="text-[0.95rem] text-verde-3">
                  De <span className="line-through">{oferta.precoDe}</span> por
                </p>
              )}
              <p className="mt-2 font-display text-[2.4rem] leading-none text-verde lg:text-[2.9rem]">
                {oferta.parcelas}
              </p>
              <p className="mt-3 text-[0.95rem] text-verde-2/85">
                ou {oferta.precoAVista} à vista
              </p>

              <DivisorCosturado className="mx-auto mt-7 max-w-[12rem]" />

              <div className="mt-7">
                <BotaoCompra tema={tema} oferta={oferta} largo />
              </div>

              <p className="mt-5 text-[0.82rem] leading-relaxed text-verde-3">
                Cartão, Pix ou boleto · {oferta.acesso}
                <br />
                {oferta.garantiaDias} dias de garantia incondicional
              </p>
            </div>

            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "180ms" }}
              className="mt-6 text-center text-[0.88rem] text-linho/70"
            >
              Ficou com dúvida antes de comprar?{" "}
              <a
                href={contato.whatsappTexto}
                target="_blank"
                rel="noopener noreferrer"
                className="link-stitch inline-flex items-center gap-1.5 font-medium text-linho"
              >
                <IconeWhatsApp className="h-4 w-4" />
                Fale com a Ananda
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------- garantia ---- */

export function Garantia({ tema, oferta, texto }: ComTema & { oferta: Oferta; texto: string }) {
  const t = temas[tema];

  return (
    <section className={`${t.fundoClaro} py-16 sm:py-20`}>
      <div className="u-container">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-7 text-center sm:flex-row sm:text-left">
          <Escudo data-reveal className={`h-16 w-16 shrink-0 ${t.acento}`} />
          <div data-reveal style={{ ["--reveal-delay" as string]: "80ms" }}>
            <h2 className="display-m">{oferta.garantiaDias} dias de garantia. O risco é meu.</h2>
            <p className="mt-4 text-[1rem] leading-relaxed text-verde-2/88">{texto}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------ FAQ ---- */

export function Faq({ tema, itens }: ComTema & { itens: Pergunta[] }) {
  const t = temas[tema];

  return (
    <div className="mx-auto grid max-w-3xl gap-3">
      {itens.map((p, i) => (
        <details
          key={p.pergunta}
          data-reveal
          style={{ ["--reveal-delay" as string]: `${Math.min(i, 6) * 50}ms` }}
          className={`group card-paper overflow-hidden rounded-2xl border-dashed ${t.bordaEscura}`}
        >
          <summary className="flex cursor-pointer list-none items-center gap-4 p-5 lg:px-7">
            <span className="flex-1 font-display text-[1.1rem] leading-snug text-verde">
              {p.pergunta}
            </span>
            <Chevron
              className={`h-5 w-5 shrink-0 ${t.ornamento} transition-transform duration-300 group-open:rotate-180`}
            />
          </summary>
          <p className="border-t border-dashed border-verde/15 px-5 pb-5 pt-4 text-[0.95rem] leading-relaxed text-verde-2/88 lg:px-7">
            {p.resposta}
          </p>
        </details>
      ))}
    </div>
  );
}

/* ------------------------------------------------------ CTA final ---- */

export function CtaFinal({ tema, oferta, texto }: ComTema & { oferta: Oferta; texto: string }) {
  return (
    <section className="py-16 sm:py-20 lg:py-24">
      <div className="u-container">
        <div className="mx-auto max-w-2xl text-center">
          <p
            data-reveal
            className="font-display text-[1.4rem] italic leading-snug text-verde lg:text-[1.7rem]"
          >
            {texto}
          </p>
          <div data-reveal style={{ ["--reveal-delay" as string]: "90ms" }} className="mt-9">
            <BotaoCompra tema={tema} oferta={oferta} largo />
            <div className="flex justify-center">
              <Microcopy oferta={oferta} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------- barra fixa no celular ---- */

/** No celular o botão de compra some ao rolar; esta barra o mantém à mão. */
export function BarraCompra({ tema, oferta }: ComTema & { oferta: Oferta }) {
  const t = temas[tema];

  return (
    <div
      className={`fixed inset-x-0 bottom-0 z-40 border-t ${t.bordaEscura} bg-linho/95 px-4 py-3 backdrop-blur-md sm:hidden`}
    >
      <div className="flex items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="font-display text-[1.05rem] leading-none text-verde">{oferta.parcelas}</p>
          <p className="mt-1 truncate text-[0.72rem] text-verde-3">
            {oferta.garantiaDias} dias de garantia
          </p>
        </div>
        <a
          href={oferta.checkout}
          target="_blank"
          rel="noopener noreferrer"
          className={`${t.botaoSolido} shrink-0 !px-5 !py-3 text-[0.85rem]`}
        >
          Quero o curso
        </a>
      </div>
    </div>
  );
}

/* ------------------------------------------------- o outro curso ---- */

export function OutroCurso({ curso }: { curso: Curso }) {
  const t = temas[curso.tema];

  return (
    <section className="relative pb-24 pt-4 sm:pb-20 lg:pb-24">
      <div className="u-container">
        <Link
          href={curso.slug}
          data-reveal
          className={`group flex flex-col gap-6 overflow-hidden rounded-[1.75rem] ${t.fundoEscuro} p-7 text-linho transition-transform duration-500 hover:-translate-y-1 lg:flex-row lg:items-center lg:p-9`}
        >
          <figure className="overflow-hidden rounded-2xl lg:order-2 lg:w-[11rem] lg:shrink-0">
            <Image
              src={curso.imagem.src}
              alt=""
              width={curso.imagem.w}
              height={curso.imagem.h}
              sizes="11rem"
              className="aspect-[4/3] w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
            />
          </figure>

          <div className="lg:flex-1">
            <p className={`eyebrow ${t.acentoClaro}`}>O outro curso do ateliê</p>
            <h2 className="mt-3 font-display text-[1.6rem] leading-tight !text-linho lg:text-[1.9rem]">
              {curso.nome}
            </h2>
            <p className="mt-4 max-w-[54ch] text-[0.95rem] leading-relaxed text-linho/75">
              {curso.resumo}
            </p>
            <span className="link-stitch mt-6 inline-flex items-center gap-2 text-[0.9rem] font-medium text-linho">
              Ver este curso
              <Seta className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </div>
        </Link>
      </div>
    </section>
  );
}
