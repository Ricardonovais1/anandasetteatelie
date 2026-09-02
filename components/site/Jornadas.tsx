import Image from "next/image";
import Link from "next/link";
import { jornadas } from "../jornada/dados";
import { contato } from "./dados";
import { IconeWhatsApp, PontoCruz, Seta } from "./Ornaments";

const pilares = [
  {
    titulo: "Teoria",
    texto:
      "A cada encontro um tema é trazido à roda: contos, poemas, mitos e músicas que despertam a alma, com resumo, citações e imagens.",
  },
  {
    titulo: "Atividade expressiva",
    texto:
      "Uma proposta prática pertinente ao tema, feita com materiais e técnicas têxteis — costura manual, bordado, tecelagem, e também pintura, desenho e escrita criativa.",
  },
  {
    titulo: "Partilha",
    texto:
      "As participantes trocam e compartilham experiências e percepções. Cada grupo cria a sua própria egrégora de força e cumplicidade.",
  },
];

export default function Jornadas() {
  return (
    <section
      id="jornadas"
      className="relative scroll-mt-24 overflow-hidden bg-verde py-16 text-linho sm:py-24 lg:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-70"
        style={{
          background:
            "radial-gradient(70% 50% at 85% 0%, rgba(104,144,120,0.32) 0%, rgba(104,144,120,0) 65%), radial-gradient(60% 45% at 5% 100%, rgba(176,96,60,0.22) 0%, rgba(176,96,60,0) 65%)",
        }}
      />

      <div className="u-container relative">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-14">
          <header className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <p data-reveal className="eyebrow flex items-center gap-3 text-sage-cl">
              <PontoCruz className="h-[11px] w-[11px]" />
              Arteterapia têxtil
            </p>
            <h2 data-reveal className="display-l mt-6 !text-linho">
              Mulheres crescem quando{" "}
              <span className="font-display italic text-sage-cl">se encontram</span>
            </h2>
            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "100ms" }}
              className="mt-7 max-w-[46ch] text-[1.05rem] text-linho/80"
            >
              As vivências de arteterapia têxtil unem a arte, o têxtil e o simbólico
              para gerar transformação — alinhando pensar, sentir e agir de forma
              criativa, amorosa e feminina.
            </p>
            <p
              data-reveal
              style={{ ["--reveal-delay" as string]: "160ms" }}
              className="mt-5 max-w-[46ch] text-[1.05rem] text-linho/80"
            >
              As jornadas são para todas as mulheres que queiram iniciar ou
              aprofundar seu processo de autoconhecimento e cura por meio da
              potência dos trabalhos manuais. Não é preciso saber costurar.
            </p>

            <figure
              data-reveal
              style={{ ["--reveal-delay" as string]: "220ms" }}
              className="mt-11 max-w-md overflow-hidden rounded-[1.5rem] border border-linho/12"
            >
              <Image
                src="/img/agulha-tesoura.webp"
                alt="Agulha com linha e tesoura antiga sobre um tecido de linho cru"
                width={1600}
                height={1060}
                sizes="(min-width: 1024px) 28rem, 92vw"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </header>

          <div className="lg:col-span-7">
            {/* pilares */}
            <ol className="grid gap-px overflow-hidden rounded-[1.5rem] bg-linho/12 sm:grid-cols-3">
              {pilares.map((p, i) => (
                <li
                  key={p.titulo}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 90}ms` }}
                  className="bg-verde/95 p-6 backdrop-blur-sm lg:p-7"
                >
                  <span className="font-display text-sm text-sage-cl">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-[1.3rem] !text-linho">
                    {p.titulo}
                  </h3>
                  <p className="mt-3 text-[0.88rem] leading-relaxed text-linho/70">
                    {p.texto}
                  </p>
                </li>
              ))}
            </ol>

            <p
              data-reveal
              className="mt-10 text-center font-display text-xl italic text-sage-cl lg:text-2xl"
            >
              &ldquo;O fio organiza o tempo, a palavra organiza a experiência.&rdquo;
            </p>

            {/* turmas */}
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {jornadas.map((t, i) => (
                <Link
                  key={t.nome}
                  href={t.slug}
                  data-reveal
                  style={{ ["--reveal-delay" as string]: `${i * 110}ms` }}
                  className="group flex flex-col rounded-[1.5rem] border border-linho/15 bg-linho/[0.06] p-7 backdrop-blur-sm transition-[background-color,transform] duration-500 hover:-translate-y-1 hover:bg-linho/[0.11]"
                >
                  <h3 className="font-display text-[1.45rem] leading-tight !text-linho">
                    {t.nome}
                  </h3>
                  <p className="mt-1.5 font-display text-[0.95rem] italic text-sage-cl">
                    {t.subtitulo}
                  </p>
                  <p className="mt-4 text-[0.9rem] leading-relaxed text-linho/72">
                    {t.resumo}
                  </p>
                  <dl className="mt-6 grid gap-3 border-t border-dashed border-linho/22 pt-5 text-[0.82rem]">
                    {t.fatos.map(([rotulo, valor]) => (
                      <div key={rotulo} className="flex gap-3">
                        <dt className="w-[5.5rem] shrink-0 text-linho/50">{rotulo}</dt>
                        <dd className="text-linho/90">{valor}</dd>
                      </div>
                    ))}
                  </dl>
                  <span className="link-stitch mt-6 inline-flex items-center gap-2 self-start text-[0.88rem] font-medium text-linho">
                    Conhecer a jornada
                    <Seta className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
                </Link>
              ))}
            </div>

            <div
              data-reveal
              className="mt-9 flex flex-wrap items-center gap-4 rounded-[1.5rem] border border-dashed border-linho/25 p-6"
            >
              <p className="min-w-[16rem] flex-1 text-[0.92rem] text-linho/75">
                Vagas limitadas por turma. Fale com a Ananda para saber sobre datas,
                valores e materiais.
              </p>
              <a
                href={contato.whatsappTexto}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-light"
              >
                <IconeWhatsApp className="h-[18px] w-[18px]" />
                Consultar vagas
                <Seta className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
