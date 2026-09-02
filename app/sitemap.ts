import type { MetadataRoute } from "next";

/** Com `output: export` o Next exige que estas rotas sejam estáticas. */
export const dynamic = "force-static";


const site = "https://anandasette.com.br";

/** Uma entrada por página publicada. Ao criar uma rota nova, some aqui. */
const paginas: { caminho: string; prioridade: number; frequencia: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
  { caminho: "/", prioridade: 1, frequencia: "monthly" },
  { caminho: "/costura-afetiva-para-criancas/", prioridade: 0.9, frequencia: "monthly" },
  { caminho: "/modelagem-descomplicada-afetiva/", prioridade: 0.9, frequencia: "monthly" },
  { caminho: "/jornada-tecer-alma/", prioridade: 0.8, frequencia: "monthly" },
  { caminho: "/tecendo-a-mulher-selvagem/", prioridade: 0.8, frequencia: "monthly" },
  { caminho: "/politica-de-privacidade/", prioridade: 0.2, frequencia: "yearly" },
  { caminho: "/termos-de-servico/", prioridade: 0.2, frequencia: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const agora = new Date();
  return paginas.map(({ caminho, prioridade, frequencia }) => ({
    url: site + caminho,
    lastModified: agora,
    changeFrequency: frequencia,
    priority: prioridade,
  }));
}
