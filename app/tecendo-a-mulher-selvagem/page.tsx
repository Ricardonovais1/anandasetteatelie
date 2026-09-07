import type { Metadata } from "next";
import Image from "next/image";
import Footer from "@/components/site/Footer";
import Header from "@/components/site/Header";
import Reveal from "@/components/site/Reveal";
import { PontoCruz } from "@/components/site/Ornaments";
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
import { listaEspera } from "@/components/site/dados";

const tema = "vinho" as const;

export const metadata: Metadata = {
  title: "Tecendo a Mulher Selvagem — grupo de arteterapia têxtil",
  description:
    "Um ano de travessia pelos contos de Mulheres que Correm com os Lobos, de Clarissa Pinkola Estés, vivenciados pela arteterapia têxtil junguiana. 38 encontros em Belo Horizonte. Lista de espera aberta para 2027.",
  alternates: { canonical: "/tecendo-a-mulher-selvagem/" },
  openGraph: {
    type: "article",
    locale: "pt_BR",
    title: "Tecendo a Mulher Selvagem — arteterapia têxtil junguiana",
    description:
      "Ler o livro é um passo importante no autoconhecimento de uma mulher. Vivenciá-lo em grupo é ainda mais potente. 38 encontros ao longo de um ano inteiro.",
    images: [{ url: "/og/tecendo-a-mulher-selvagem.jpg", width: 1200, height: 630, alt: "Ateliê Ananda Sette" }],
  },
};

const juntasVamos = [
  "Reconhecer as armadilhas que desafiam o nosso desenvolvimento",
  "Nos reconectar e fortalecer a nossa intuição",
  "Celebrar a existência de várias maneiras",
  "Nutrir a criatividade e honrar os nossos ciclos",
  "Nos fortalecer para agir mais alinhadas com o nosso sentir e pensar",
];

const pilares = [
  {
    titulo: "Teoria",
    texto:
      "A leitura é feita por cada uma individualmente, mas a cada encontro é apresentado um resumo do capítulo, com citações, imagens e comentários.",
  },
  {
    titulo: "Atividade expressiva",
    texto:
      "A cada sessão é proposta uma atividade pertinente ao tema e ao conto trabalhado, feita com materiais e técnicas têxteis.",
  },
  {
    titulo: "Partilha",
    texto:
      "As participantes trocam e compartilham suas experiências e percepções. É onde a leitura sai do papel e vira vivência coletiva.",
  },
];

const funcionamento: [string, string][] = [
  ["Programa", "Introdução + os 15 capítulos do livro"],
  ["Encontros", "38 encontros presenciais"],
  ["Frequência", "1 vez por semana, às sextas-feiras"],
  ["Duração", "3 horas por encontro, das 14h30 às 17h30"],
  ["Onde", "No ateliê, em Belo Horizonte · MG"],
  ["Turma 2026", "Em andamento — de 13 de março a 11 de dezembro"],
  ["Próxima turma", "2027 · datas a confirmar"],
];

export default function TecendoAMulherSelvagem() {
  return (
    <>
      <Header solido />
      <main id="conteudo">
        <JornadaHero
          tema={tema}
          eyebrow="Arteterapia têxtil · Próxima turma em 2027"
          nome={mulherSelvagem.nome}
          subtitulo={mulherSelvagem.subtitulo}
          paragrafos={[
            "Um grupo de mulheres de arteterapia têxtil inspirado e conduzido pelos contos de Mulheres que Correm com os Lobos, de Clarissa Pinkola Estés.",
            "É uma travessia longa e sem pressa: um ano inteiro para atravessar o livro capítulo a capítulo, com as mãos ocupadas e a roda por perto.",
          ]}
          fatos={mulherSelvagem.fatos}
          imagem={mulherSelvagem.imagem}
          acao={{ href: listaEspera, rotulo: "Entrar na lista de espera" }}
        />

        <Secao
          tema={tema}
          id="o-livro"
          eyebrow="A obra que conduz o grupo"
          titulo={
            <>
              Um mapa para a{" "}
              <span className="font-display italic text-vinho">alma feminina</span>
            </>
          }
        >
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <div className="grid max-w-[52ch] gap-5 text-[1.05rem] leading-relaxed text-verde-2/88">
                <p>
                  Com ele percorremos um caminho de volta para casa, entrando em
                  contato com a nossa essência mais profunda e verdadeira.
                </p>
                <p>
                  Por meio dos contos de fadas, mitos e antigas histórias resgatadas
                  por Clarissa Pinkola Estés, somos conduzidas a enxergar onde e por
                  que perdemos a conexão com a força vital e com a energia feminina
                  primordial — e o livro ensina, com clareza e poesia, a resgatá-las.
                </p>
                <p className="font-display text-[1.2rem] italic leading-snug text-verde">
                  Ler o livro é um passo importante no caminho de autoconhecimento de
                  uma mulher. Vivenciá-lo em grupo é ainda mais potente e
                  transformador.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <h3
                data-reveal
                className="font-display text-[1.5rem] leading-tight text-verde"
              >
                Juntas vamos:
              </h3>
              <ul className="mt-6 grid gap-4">
                {juntasVamos.map((item, i) => (
                  <li
                    key={item}
                    data-reveal
                    style={{ ["--reveal-delay" as string]: `${i * 70}ms` }}
                    className="flex items-start gap-3.5 border-b border-dashed border-vinho/20 pb-4 text-[1rem] leading-relaxed text-verde-2/90"
                  >
                    <PontoCruz className="mt-[7px] h-3 w-3 shrink-0 text-vinho-3" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Secao>

        <Citacao
          tema={tema}
          texto="O ofício de fazer é uma parte importante do trabalho. Ocupar as mãos na criação de algo, esse algo é a alma. E sempre que alimentamos a alma, ela garante expansão."
          fonte="Clarissa Pinkola Estés"
        />

        <Secao
          tema={tema}
          claro
          eyebrow="O diferencial"
          titulo="Onde o conhecimento vira vivência"
        >
          <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <div className="grid max-w-[54ch] gap-5 text-[1.05rem] leading-relaxed text-verde-2/88">
                <p>
                  Diferentemente de outros grupos que estudam esse livro, aqui a
                  arteterapia junguiana é usada como ferramenta. O conhecimento sai do
                  papel e da teoria e se transforma em sabedoria vivenciada na
                  prática.
                </p>
                <p>
                  A expressão artística revela o que o inconsciente guarda. Cada conto
                  vira objeto, cada objeto vira conversa, e o que a mão faz o grupo
                  ajuda a entender.
                </p>
              </div>
            </div>

            <figure
              data-reveal
              className="overflow-hidden rounded-[1.75rem] shadow-[0_30px_60px_-45px_rgba(56,64,48,0.8)] lg:col-span-6"
            >
              <Image
                src="/img/linhas-vermelhas.webp"
                alt="Novelos de linha vermelha, tecidos e tesoura sobre a mesa de trabalho"
                width={1800}
                height={1200}
                sizes="(min-width: 1024px) 34rem, 92vw"
                className="aspect-[3/2] w-full object-cover"
              />
            </figure>
          </div>
        </Secao>

        <Secao
          tema={tema}
          eyebrow="Troca e pertencimento"
          titulo="Como cada encontro se organiza"
          intro="Os três movimentos se repetem em todos os encontros. O que muda é o conto da vez — e o que ele desperta em cada uma."
        >
          <Cartoes tema={tema} itens={pilares} />
        </Secao>

        <Secao
          tema={tema}
          claro
          eyebrow="Para quem é"
          titulo={
            <>
              Um círculo que se sustenta{" "}
              <span className="font-display italic text-vinho">o ano inteiro</span>
            </>
          }
        >
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-6">
              <div className="grid max-w-[52ch] gap-5 text-[1.05rem] leading-relaxed text-verde-2/88">
                <p>
                  A travessia é longa de propósito. São 38 encontros para atravessar a
                  introdução e os quinze capítulos com profundidade e qualidade, sem
                  atropelar nenhuma passagem.
                </p>
                <p>
                  É para mulheres dispostas a esse compromisso — com a leitura, com o
                  grupo e consigo mesmas. Não é preciso saber costurar: as técnicas
                  são ensinadas ao longo do caminho.
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
          titulo="Como a jornada acontece"
        >
          <Funcionamento
            tema={tema}
            fatos={funcionamento}
            observacao="A turma de 2026 já está a caminho do último capítulo e percorre o ano inteiro junta — por isso não recebe entradas no meio do percurso. Quem entra na lista de espera é avisada primeiro, com as datas e os valores da turma de 2027."
            acao={{
              href: listaEspera,
              rotulo: "Entrar na lista de espera",
              nota: "A Ananda avisa assim que as inscrições abrirem.",
            }}
          />
        </Secao>

        <Facilitadora tema={tema} />

        <Citacao
          tema={tema}
          texto="É à procura dela que saímos de casa. É à procura dela que voltamos para casa."
          fonte="Clarissa Pinkola Estés · sobre a Mulher Selvagem"
        />

        <div className="u-container py-14 lg:py-16">
          <p className="flex items-center justify-center gap-3 text-center text-[0.9rem] text-verde-3">
            <PontoCruz className="h-3 w-3 shrink-0 text-vinho-3" />
            A jornada acontece no ateliê, em Belo Horizonte · MG
          </p>
        </div>

        <OutraJornada jornada={tecerAlma} />
      </main>
      <Footer />
      <Reveal />
    </>
  );
}
