import type { MetadataRoute } from "next";

/** Com `output: export` o Next exige que estas rotas sejam estáticas. */
export const dynamic = "force-static";


const site = "https://anandasette.com.br";

export default function robots(): MetadataRoute.Robots {
  return {
    /* Nada é bloqueado de propósito: o site é público e estático, e o
       Google precisa buscar o CSS e o JS de /_next/ para renderizar as
       páginas como um visitante veria. */
    rules: { userAgent: "*", allow: "/" },
    sitemap: `${site}/sitemap.xml`,
    host: site,
  };
}
