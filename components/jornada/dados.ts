import type { Tema } from "./tema";

/** Resumo de cada jornada — alimenta os cartões da home e o link cruzado
 *  no rodapé de cada página. O texto longo mora na própria página. */
export type ResumoJornada = {
  slug: string;
  nome: string;
  subtitulo: string;
  tema: Tema;
  resumo: string;
  fatos: [string, string][];
  imagem: { src: string; alt: string; w: number; h: number };
};

export const tecerAlma: ResumoJornada = {
  slug: "/jornada-tecer-alma/",
  nome: "Jornada Tecer Alma",
  subtitulo: "O caminho de volta para casa",
  tema: "verde",
  resumo:
    "Um espaço seguro para percorrer o caminho de volta para si mesma. Ao longo do tempo, em diferentes culturas, mulheres sempre se reuniram para bordar, tecer e costurar juntas.",
  fatos: [
    ["Encontros", "16 encontros semanais"],
    ["Duração", "3 horas · sextas, 9h às 12h"],
    ["Turma 2026", "3 de abril a 24 de julho"],
  ],
  imagem: {
    src: "/img/roda-mesa.webp",
    alt: "Roda de mulheres bordando em volta de uma mesa cheia de linhas e bastidores",
    w: 738,
    h: 738,
  },
};

export const mulherSelvagem: ResumoJornada = {
  slug: "/tecendo-a-mulher-selvagem/",
  nome: "Tecendo a Mulher Selvagem",
  subtitulo: "Uma travessia pelos contos de Clarissa Pinkola Estés",
  tema: "vinho",
  resumo:
    "Um ano inteiro percorrendo os contos resgatados em Mulheres que Correm com os Lobos. Ler o livro é um passo importante no autoconhecimento de uma mulher; vivenciá-lo em grupo é ainda mais potente.",
  fatos: [
    ["Encontros", "38 encontros · introdução + 15 capítulos"],
    ["Duração", "3 horas · sextas, 14h30 às 17h30"],
    ["Turma 2026", "13 de março a 11 de dezembro"],
  ],
  imagem: {
    src: "/img/livro-lobos.webp",
    alt: "Livro ilustrado aberto sobre uma mesa de costura, ao lado de uma lareira acesa",
    w: 922,
    h: 922,
  },
};

export const jornadas: ResumoJornada[] = [tecerAlma, mulherSelvagem];
