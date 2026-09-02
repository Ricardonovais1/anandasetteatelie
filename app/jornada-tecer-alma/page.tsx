import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Reveal from "@/components/site/Reveal";
import { DivisorCosturado, PontoCruz } from "@/components/site/Ornaments";
import {
  Cartoes,
  Citacao,
  Facilitadora,
  Funcionamento,
  JornadaHero,
  OutraJornada,
  Secao,
} from "@/components/jornada/Partes";
import { mulherSelvagem, tecerAlma } from "@/components/jornada/dados";

const tema = "verde" as const;

export const metadata: Metadata = {
  title: "Jornada Tecer Alma — arteterapia têxtil para mulheres",
  description:
    "Grupo de arteterapia têxtil conduzido por Ananda Sette em Belo Horizonte. 16 encontros semanais de costura, bordado e partilha entre mulheres. Turma 2026, de abril a julho.",
  alternates: { canonical: "/jornada-tecer-alma/" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    title: "Jornada Tecer Alma — o caminho de volta para casa",
    description:
      "Um espaço seguro para percorrer o caminho de volta para si mesma, com a força de um grupo de mulheres. 16 encontros de arteterapia têxtil.",
    images: [{ url: "/og/jornada-tecer-alma.jpg", width: 1200, height: 630, alt: "Ateliê Ananda Sette" }],
  },
};

const naRoda = [
  {
    titulo: "Contos, poemas e músicas",
    texto:
      "A cada encontro um tema é trazido à roda e trabalhado em profundidade pela arteterapia junguiana. Histórias que despertam a alma e abrem o assunto do dia.",
  },
  {
    titulo: "Meditações",
    texto:
      "Práticas guiadas que voltam o olhar para dentro antes de as mãos começarem. É o que separa o fazer manual do fazer distraído.",
  },
  {
    titulo: "Objetos têxteis com propósito",
    texto:
      "Bonecas de várias culturas, mandalas bordadas, pingentes e outras peças feitas com costura manual — cada uma ligada ao tema do encontro.",
  },
  {
    titulo: "Trocas e partilhas",
    texto:
      "As participantes compartilham experiências e percepções. É onde a roda vira grupo, e o grupo vira lugar seguro.",
  },
];

const funcionamento: [string, string][] = [
  ["Encontros", "16 encontros semanais"],
  ["Frequência", "1 vez por semana, às sextas-feiras"],
  ["Duração", "3 horas por encontro, das 9h às 12h"],
  ["Turma 2026", "De 3 de abril a 24 de julho"],
  ["Onde", "No ateliê, em Belo Horizonte · MG"],
  ["Pré-requisito", "Nenhum — não é preciso saber costurar"],
];

export default function JornadaTecerAlma() {
  return (
    <>
      <Header solido />
      <main id="conteudo">
        <JornadaHero
          tema={tema}
          eyebrow="Arteterapia têxtil · Turma 2026"
          nome={tecerAlma.nome}
          subtitulo={tecerAlma.subtitulo}
          paragrafos={[
            "Com a força de um grupo de mulheres, criamos um espaço seguro para percorrer o caminho de volta para nós mesmas, para a nossa própria essência.",
            "Ao longo do tempo, em diferentes culturas, mulheres sempre se reuniram para bordar, tecer e costurar juntas. Antes de ser arte ou técnica, o fazer manual é encontro, escuta, troca e pertencimento.",
          ]}
          fatos={tecerAlma.fatos}
          imagem={tecerAlma.imagem}
        />

        <Secao
          tema={tema}
          id="a-roda"
          eyebrow="Criatividade e autoconhecimento"
          titulo={
            <>
              O que acontece{" "}
              <span className="font-display italic text-sage-2">em cada roda</span>
            </>
          }
          intro="Todo encontro tem a mesma espinha dorsal, e nenhum encontro é igual ao anterior. O tema muda, o material muda, e o que cada uma traz para a mesa muda tudo."
        >
          <Cartoes tema={tema} itens={naRoda} />
        </Secao>

        <Citacao
          tema={tema}
          texto="O fio organiza o tempo, a palavra organiza a experiência."
        />

        <Secao
          tema={tema}
          claro
          eyebrow="Arteterapia têxtil"
          titulo="O suporte da transformação"
        >
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <div className="grid max-w-[54ch] gap-5 text-[1.05rem] leading-relaxed text-verde-2/88">
                <p>
                  As vivências de arteterapia têxtil promovem o bem-estar e o
                  desenvolvimento pessoal integral, alinhando pensar, sentir e agir
                  de forma criativa, amorosa e feminina. Unimos a arte, o têxtil e o
                  simbólico para gerar transformação.
                </p>
                <p>
                  A expressão artística aqui é usada para revelar o que o inconsciente
                  guarda. Não se trata de fazer bonito — trata-se de deixar a mão
                  dizer o que ainda não tem palavra.
                </p>
              </div>

              <blockquote className="mt-9 border-l-2 border-sage/50 pl-6 font-display text-[1.15rem] italic leading-snug text-verde">
                &ldquo;O ofício de fazer é uma parte importante do trabalho. Ocupar as
                mãos na criação de algo, esse algo é a alma. E sempre que alimentamos
                a alma, ela garante expansão.&rdquo;
                <footer className="eyebrow mt-4 not-italic text-sage-2">
                  Clarissa Pinkola Estés
                </footer>
              </blockquote>
            </div>

            <figure
              data-reveal
              className="overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-45px_rgba(56,64,48,0.8)] lg:col-span-6"
            >
              <Image
                src="/img/bordando-folhas.webp"
                alt="Mãos bordando folhas verdes em um bastidor apoiado sobre a mesa do ateliê"
                width={1600}
                height={844}
                sizes="(min-width: 1024px) 34rem, 92vw"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </div>
        </Secao>

        <Secao
          tema={tema}
          eyebrow="A arte do fazer"
          titulo="O que você vai aprender"
          intro="A jornada não exige nenhuma experiência anterior. Quem nunca pegou numa agulha aprende junto; quem já costura encontra onde aprofundar."
        >
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <h3 className="font-display text-[1.45rem] text-verde">Técnicas têxteis</h3>
              <p className="mt-4 max-w-[40ch] text-[0.98rem] leading-relaxed text-verde-2/85">
                As participantes aprendem e praticam costura manual, bordado e
                tecelagem ao longo dos encontros.
              </p>
              <DivisorCosturado className="mt-8 max-w-[14rem]" />

              <h3 className="mt-10 font-display text-[1.45rem] text-verde">
                Outras atividades expressivas
              </h3>
              <p className="mt-4 max-w-[40ch] text-[0.98rem] leading-relaxed text-verde-2/85">
                Também entram na roda pintura, desenho e escrita criativa, sempre a
                serviço do tema do encontro.
              </p>
            </div>

            <figure
              data-reveal
              className="overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-45px_rgba(56,64,48,0.8)] lg:col-span-7"
            >
              <Image
                src="/img/costura-manual.webp"
                alt="Mãos costurando à mão um tecido claro estampado de flores lilases"
                width={1400}
                height={934}
                sizes="(min-width: 1024px) 40rem, 92vw"
                className="aspect-[3/2] w-full object-cover"
              />
            </figure>
          </div>
        </Secao>

        <Secao
          tema={tema}
          claro
          eyebrow="Para quem é"
          titulo={
            <>
              Mulheres crescem quando{" "}
              <span className="font-display italic text-sage-2">se encontram</span>
            </>
          }
        >
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <div className="grid max-w-[52ch] gap-5 text-[1.05rem] leading-relaxed text-verde-2/88">
                <p>
                  Um grupo de mulheres é um espaço privilegiado de socialização,
                  rituais de troca e pertencimento. Cada novo grupo gera uma egrégora
                  própria, de força e cumplicidade.
                </p>
                <p>
                  Neste círculo nos nutrimos da energia feminina, nos reconectando com
                  a nossa verdadeira essência para re-energizar e florescer.
                </p>
                <p className="font-display text-[1.15rem] italic leading-snug text-verde">
                  A Jornada Tecer Alma é destinada a todas as mulheres que queiram
                  iniciar ou aprofundar seu processo de autoconhecimento e cura por
                  meio da potência dos trabalhos manuais.
                </p>
              </div>
            </div>

            <figure
              data-reveal
              className="overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-45px_rgba(56,64,48,0.8)] lg:col-span-6"
            >
              <Image
                src="/img/roda-ar-livre.webp"
                alt="Roda de mulheres sentadas ao ar livre em volta de uma toalha bordada com flores"
                width={1238}
                height={691}
                sizes="(min-width: 1024px) 34rem, 92vw"
                className="aspect-[16/10] w-full object-cover"
              />
            </figure>
          </div>
        </Secao>

        <Secao
          tema={tema}
          id="funcionamento"
          eyebrow="Funcionamento do grupo"
          titulo="Como a turma 2026 acontece"
        >
          <Funcionamento
            tema={tema}
            fatos={funcionamento}
            observacao="As vagas são limitadas para manter a roda pequena o bastante para todo mundo ser ouvido. Fale com a Ananda para saber sobre valores, materiais e as vagas ainda abertas."
          />
        </Secao>

        <Facilitadora tema={tema} />

        <Citacao
          tema={tema}
          texto="Tecer era tudo o que fazia. Tecer era tudo o que queria fazer."
          fonte="Marina Colasanti · A moça tecelã"
        />

        <div className="u-container py-14 lg:py-16">
          <p className="flex items-center justify-center gap-3 text-center text-[0.9rem] text-verde-3">
            <PontoCruz className="h-3 w-3 shrink-0 text-sage" />
            A jornada acontece no ateliê, em Belo Horizonte · MG
          </p>
        </div>

        <OutraJornada jornada={mulherSelvagem} />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
