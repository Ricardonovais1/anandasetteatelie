import Link from "next/link";
import { DivisorCosturado, PontoCruz, Seta } from "./Ornaments";

export type BlocoLegal = {
  titulo: string;
  paragrafos?: string[];
  itens?: string[];
};

/** Casca das páginas de texto legal: um cabeçalho sóbrio e prosa larga. */
export default function PaginaLegal({
  titulo,
  resumo,
  atualizadoEm,
  blocos,
}: {
  titulo: string;
  resumo: string;
  atualizadoEm: string;
  blocos: BlocoLegal[];
}) {
  return (
    <>
      <section className="relative overflow-hidden bg-verde pb-14 pt-32 text-linho lg:pb-16 lg:pt-40">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-80"
          style={{
            background:
              "radial-gradient(70% 55% at 82% 0%, rgba(104,144,120,0.34) 0%, rgba(104,144,120,0) 68%)",
          }}
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

          <p className="eyebrow flex items-center gap-3 text-sage-cl">
            <PontoCruz className="h-[11px] w-[11px]" />
            Documentos do site
          </p>
          <h1 className="mt-5 text-[clamp(2rem,3.6vw,2.9rem)] !text-linho">{titulo}</h1>
          <p className="mt-4 max-w-[60ch] text-[1rem] leading-relaxed text-linho/80">{resumo}</p>
          <p className="mt-6 text-[0.82rem] text-linho/55">
            Última atualização: {atualizadoEm}
          </p>
        </div>
      </section>

      <div className="u-container py-14 lg:py-20">
        <div className="max-w-[68ch]">
          {blocos.map((b, i) => (
            <section key={b.titulo} className={i ? "mt-12" : ""}>
              <h2 className="font-display text-[1.35rem] leading-snug text-verde lg:text-[1.5rem]">
                {b.titulo}
              </h2>

              {b.paragrafos?.length ? (
                <div className="mt-4 grid gap-4 text-[1rem] leading-relaxed text-verde-2/88">
                  {b.paragrafos.map((p) => (
                    <p key={p.slice(0, 30)}>{p}</p>
                  ))}
                </div>
              ) : null}

              {b.itens?.length ? (
                <ul className="mt-4 grid gap-3">
                  {b.itens.map((item) => (
                    <li
                      key={item.slice(0, 30)}
                      className="flex items-start gap-3 text-[0.98rem] leading-relaxed text-verde-2/88"
                    >
                      <PontoCruz className="mt-[7px] h-3 w-3 shrink-0 text-sage" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}

          <DivisorCosturado className="mt-14 max-w-[16rem]" />
        </div>
      </div>
    </>
  );
}
