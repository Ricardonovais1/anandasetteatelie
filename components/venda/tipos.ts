import type { Tema } from "../jornada/tema";

/* ------------------------------------------------------------------
   O conteúdo de `dados.ts` foi RECUPERADO das páginas de vendas
   originais de anandasette.com.br (blog_id 6 do multisite), a partir
   de duas fontes dentro de A:\Evanise Colombini\backup_amigo_violao:

   · o dump do banco  japnupzvpx-20260828-1853.sql
       - post 28042 → página "Costura Afetiva para Crianças"
       - post 29778 → página "Modelagem Descomplicada Afetiva Curso Online"
   · o cache do Breeze  wp-content/cache/breeze/6/
       - HTML renderizado da página de Modelagem (com FAQ e preço)

   Textos, depoimentos, módulos, bônus, preços e links de checkout são
   os originais. O que continua pendente está marcado com "⚠ CONFERIR".
------------------------------------------------------------------- */

/** A oferta: é daqui que saem todos os botões de compra da página. */
export type Oferta = {
  /** URL do checkout na Hotmart. */
  checkout: string;
  /** Preço de ancoragem, riscado. Deixe vazio para não mostrar. */
  precoDe?: string;
  precoAVista: string;
  parcelas: string;
  acesso: string;
  garantiaDias: number;
  /** Texto do botão principal. */
  botao: string;
  /** Linhas do "tudo que está incluso". */
  inclui: string[];
};

export type Modulo = {
  titulo: string;
  texto?: string;
  /** Tópicos do módulo — aparecem quando o módulo é aberto. */
  aulas?: string[];
};

export type Bonus = {
  titulo: string;
  texto: string;
  imagem?: { src: string; alt: string; w: number; h: number };
};

export type Depoimento = {
  nome: string;
  detalhe: string;
  texto: string;
  /** Sem avatar, o cartão cai num ornamento — nunca numa foto de outra pessoa. */
  avatar?: string;
};

/** Depoimento gravado — o vídeo mora no Vimeo. */
export type DepoimentoVideo = { nome: string; vimeo: string; titulo: string };

export type Pergunta = { pergunta: string; resposta: string };

/** Bloco de texto corrido da página (o "sobre o que é este curso"). */
export type Prosa = { titulo: string; paragrafos: string[]; destaque?: string };

export type Curso = {
  slug: string;
  nome: string;
  promessa: string;
  tema: Tema;
  /** Frase curta do cartão cruzado e da home. */
  resumo: string;
  eyebrow: string;
  chamadaHero: string[];
  destaquesHero: string[];
  /** ID do vídeo de vendas no Vimeo. */
  vimeo?: string;
  imagem: { src: string; alt: string; w: number; h: number };
  numeros: [string, string][];
  paraQuem: { texto: string; prerequisito: string };
  sobre?: Prosa;
  comoFunciona?: Prosa;
  /** "O que tem nesse curso" / a grade de módulos. */
  modulos: Modulo[];
  tituloModulos: string;
  introModulos?: string;
  /** O que o aluno leva: vídeo-aulas, moldes, suporte, certificado… */
  oQueTem: string[];
  beneficios: { titulo: string; itens: string[] };
  esperar: string[];
  atuacao: { titulo: string; itens: string[] };
  bonus: Bonus[];
  paraQuemSim: string[];
  paraQuemNao: string[];
  depoimentos: Depoimento[];
  depoimentosVideo?: DepoimentoVideo[];
  bio: string[];
  bioChamada: string;
  faq: Pergunta[];
  oferta: Oferta;
  ctaFinal: string;
};
