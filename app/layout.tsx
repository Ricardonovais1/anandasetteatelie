import type { Metadata, Viewport } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import Cookies from "@/components/site/Cookies";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-playfair",
});

const dmSans = DM_Sans({
  subsets: ["latin", "latin-ext"],
  weight: ["400", "500", "700"],
  display: "swap",
  variable: "--font-dmsans",
});

const site = "https://anandasette.com.br";
const descricao =
  "Ateliê de costura afetiva e arteterapia têxtil em Belo Horizonte. Ananda Sette ensina costura, bordado e tecelagem e conduz grupos de mulheres desde 2013.";

export const metadata: Metadata = {
  metadataBase: new URL(site),
  title: {
    default: "Ateliê Ananda Sette — Costura afetiva e arteterapia têxtil",
    template: "%s · Ateliê Ananda Sette",
  },
  description: descricao,
  keywords: [
    "aulas de costura",
    "arteterapia têxtil",
    "bordado",
    "costura afetiva",
    "grupo de mulheres",
    "Belo Horizonte",
    "Ananda Sette",
    "Jornada Tecer Alma",
  ],
  authors: [{ name: "Ananda Sette" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: site,
    siteName: "Ateliê Ananda Sette",
    title: "Ateliê Ananda Sette — Costura afetiva e arteterapia têxtil",
    description: descricao,
    images: [{ url: "/og/home.jpg", width: 1200, height: 630, alt: "Ateliê Ananda Sette" }],
  },
  alternates: { canonical: site },
};

export const viewport: Viewport = {
  themeColor: "#f6f2ea",
  width: "device-width",
  initialScale: 1,
};

const dadosEstruturados = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ateliê Ananda Sette",
  description: descricao,
  url: site,
  email: "setteananda@gmail.com",
  telephone: "+55-31-98571-8801",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Belo Horizonte",
    addressRegion: "MG",
    addressCountry: "BR",
  },
  founder: {
    "@type": "Person",
    name: "Ananda Sette",
    jobTitle: "Arteterapeuta junguiana, estilista e figurinista",
  },
  sameAs: [
    "https://www.instagram.com/anandasette/",
    "https://www.instagram.com/teceralma/",
  ],
};

/**
 * Liga a animação de revelação antes da primeira pintura — e desliga
 * sozinha em 4s se o <Reveal /> não tiver assumido. Sem isso, qualquer
 * falha de JS deixaria a página inteira invisível.
 */
const ligarRevelacao = `(function(){var r=document.documentElement;try{
if(!('IntersectionObserver' in window))return;
if(window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
r.dataset.revelar='';
window.__guardaRevelar=setTimeout(function(){delete r.dataset.revelar;},4000);
}catch(e){}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    /* `suppressHydrationWarning`: o script abaixo marca o <html> e as
       extensões do navegador escrevem classes no <body> — nos dois casos
       o DOM muda antes de o React hidratar, o que não é um problema. */
    <html
      lang="pt-BR"
      className={`${playfair.variable} ${dmSans.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* No <head>, roda antes de qualquer pintura: a animação liga sem
            piscar o conteúdo. */}
        <script dangerouslySetInnerHTML={{ __html: ligarRevelacao }} />
      </head>
      <body className="relative" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dadosEstruturados) }}
        />
        <a
          href="#conteudo"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-verde focus:px-5 focus:py-3 focus:text-sm focus:text-linho"
        >
          Ir para o conteúdo
        </a>
        <div className="relative z-[1]">{children}</div>
        <Cookies />
      </body>
    </html>
  );
}
