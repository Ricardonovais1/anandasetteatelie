import Image from "next/image";
import Link from "next/link";
import { contato, navegacao } from "./dados";
import {
  IconeEmail,
  IconeInstagram,
  IconeWhatsApp,
  IconeYouTube,
  LinhaAgulha,
} from "./Ornaments";

export default function Footer() {
  const ano = new Date().getFullYear();

  return (
    <footer className="relative border-t border-verde/12 bg-linho pb-10 pt-16">
      <LinhaAgulha
        aria-hidden="true"
        className="u-container mx-auto -mt-6 mb-10 hidden h-12 w-full max-w-2xl text-verde/35 sm:block"
      />

      <div className="u-container">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Image
              src="/img/logo-completo.png"
              alt="Ateliê Ananda Sette"
              width={1200}
              height={656}
              className="h-auto w-[15rem]"
            />
            <p className="mt-5 max-w-[34ch] text-[0.92rem] text-verde-2/80">
              Costura afetiva, bordado, tecelagem e arteterapia têxtil.
              Tempestade de boas ideias costuradas, em {contato.cidade}.
            </p>
          </div>

          <nav aria-label="Rodapé" className="lg:col-span-4">
            <h2 className="eyebrow text-verde-3">Navegar</h2>
            <ul className="mt-5 grid gap-2.5 sm:grid-cols-2">
              {navegacao.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="link-stitch text-[0.92rem] text-verde-2 hover:text-verde"
                  >
                    {item.rotulo}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-verde-3">Falar com a Ananda</h2>
            <ul className="mt-5 grid gap-2.5 text-[0.92rem]">
              <li>
                <a
                  href={contato.whatsappTexto}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-stitch inline-flex items-center gap-2 text-verde-2 hover:text-verde"
                >
                  <IconeWhatsApp className="h-4 w-4 text-sage-2" />
                  {contato.telefone}
                </a>
              </li>
              <li>
                <a
                  href={"mailto:" + contato.email}
                  className="link-stitch inline-flex items-center gap-2 text-verde-2 hover:text-verde"
                >
                  <IconeEmail className="h-4 w-4 text-sage-2" />
                  {contato.email}
                </a>
              </li>
              <li>
                <a
                  href={contato.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-stitch inline-flex items-center gap-2 text-verde-2 hover:text-verde"
                >
                  <IconeInstagram className="h-4 w-4 text-sage-2" />
                  @anandasette
                </a>
              </li>
              <li>
                <a
                  href={contato.instagramTecerAlma}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-stitch inline-flex items-center gap-2 text-verde-2 hover:text-verde"
                >
                  <IconeInstagram className="h-4 w-4 text-sage-2" />
                  @teceralma
                </a>
              </li>
              <li>
                <a
                  href={contato.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-stitch inline-flex items-center gap-2 text-verde-2 hover:text-verde"
                >
                  <IconeYouTube className="h-4 w-4 text-sage-2" />
                  Ananda Sette Ateliê
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-5 border-t border-dashed border-verde/20 pt-7 text-[0.78rem] text-verde-3 sm:flex-row sm:items-center">
          <p>© {ano} Ateliê Ananda Sette. Todos os direitos reservados.</p>

          <nav aria-label="Documentos do site" className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <Link href="/politica-de-privacidade/" className="link-stitch hover:text-verde">
              Política de Privacidade
            </Link>
            <Link href="/termos-de-servico/" className="link-stitch hover:text-verde">
              Termos de Serviço
            </Link>
            <span className="hidden sm:inline">Feito à mão, ponto por ponto.</span>
          </nav>
        </div>
      </div>
    </footer>
  );
}
