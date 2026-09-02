/**
 * Cada página tem a sua temperatura: Tecer Alma no verde do ateliê,
 * Tecendo a Mulher Selvagem no vinho dos materiais dela, a Costura Afetiva
 * no tijolo quente das crianças e a Modelagem no petróleo da mesa de corte.
 *
 * As classes ficam escritas por extenso de propósito — o Tailwind lê o
 * código-fonte, então classe montada por concatenação não seria gerada.
 */
export type Tema = "verde" | "vinho" | "tijolo" | "petroleo";

type Paleta = {
  /* superfícies escuras */
  fundoEscuro: string;
  fundoEscuroSuave: string;
  brilhoHero: string;
  /* superfícies claras */
  fundoClaro: string;
  /* texto e traços */
  acento: string;
  acentoClaro: string;
  eyebrow: string;
  ornamento: string;
  bordaClara: string;
  bordaEscura: string;
  cartaoClaro: string;
  /* botões */
  botaoSolido: string;
};

export const temas: Record<Tema, Paleta> = {
  verde: {
    fundoEscuro: "bg-verde",
    fundoEscuroSuave: "bg-verde/95",
    brilhoHero:
      "radial-gradient(70% 55% at 82% 0%, rgba(104,144,120,0.34) 0%, rgba(104,144,120,0) 68%), radial-gradient(55% 45% at 0% 100%, rgba(176,96,60,0.20) 0%, rgba(176,96,60,0) 65%)",
    fundoClaro: "bg-linho-2",
    acento: "text-sage-2",
    acentoClaro: "text-sage-cl",
    eyebrow: "text-sage-2",
    ornamento: "text-sage",
    bordaClara: "border-linho/15",
    bordaEscura: "border-verde/18",
    cartaoClaro: "bg-linho",
    botaoSolido: "btn btn-primary",
  },
  vinho: {
    fundoEscuro: "bg-vinho",
    fundoEscuroSuave: "bg-vinho/95",
    brilhoHero:
      "radial-gradient(70% 55% at 82% 0%, rgba(231,179,189,0.26) 0%, rgba(231,179,189,0) 68%), radial-gradient(55% 45% at 0% 100%, rgba(0,0,0,0.30) 0%, rgba(0,0,0,0) 65%)",
    fundoClaro: "bg-vinho-pale",
    acento: "text-vinho",
    acentoClaro: "text-vinho-cl",
    eyebrow: "text-vinho",
    ornamento: "text-vinho-3",
    bordaClara: "border-linho/18",
    bordaEscura: "border-vinho/20",
    cartaoClaro: "bg-linho",
    botaoSolido: "btn btn-vinho",
  },
  tijolo: {
    fundoEscuro: "bg-tijolo",
    fundoEscuroSuave: "bg-tijolo/95",
    brilhoHero:
      "radial-gradient(70% 55% at 82% 0%, rgba(238,185,150,0.28) 0%, rgba(238,185,150,0) 68%), radial-gradient(55% 45% at 0% 100%, rgba(200,162,78,0.22) 0%, rgba(200,162,78,0) 65%)",
    fundoClaro: "bg-tijolo-pale",
    acento: "text-terra-2",
    acentoClaro: "text-tijolo-cl",
    eyebrow: "text-terra-2",
    ornamento: "text-terra",
    bordaClara: "border-linho/18",
    bordaEscura: "border-tijolo/20",
    cartaoClaro: "bg-linho",
    botaoSolido: "btn btn-tijolo",
  },
  petroleo: {
    fundoEscuro: "bg-petroleo",
    fundoEscuroSuave: "bg-petroleo/95",
    brilhoHero:
      "radial-gradient(70% 55% at 82% 0%, rgba(168,207,200,0.26) 0%, rgba(168,207,200,0) 68%), radial-gradient(55% 45% at 0% 100%, rgba(176,96,60,0.18) 0%, rgba(176,96,60,0) 65%)",
    fundoClaro: "bg-petroleo-pale",
    acento: "text-petroleo-2",
    acentoClaro: "text-petroleo-cl",
    eyebrow: "text-petroleo-2",
    ornamento: "text-teal",
    bordaClara: "border-linho/18",
    bordaEscura: "border-petroleo/20",
    cartaoClaro: "bg-linho",
    botaoSolido: "btn btn-petroleo",
  },
};
