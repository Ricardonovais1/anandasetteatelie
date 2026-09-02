"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { contato, navegacao } from "./dados";
import { IconeWhatsApp, PontoCruz } from "./Ornaments";

/** `solido` mantém a barra opaca desde o topo — necessário nas páginas
 *  cujo herói é escuro, onde a barra transparente ficaria ilegível. */
export default function Header({ solido = false }: { solido?: boolean }) {
  const [rolou, setRolou] = useState(false);
  const [aberto, setAberto] = useState(false);

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 24);
    aoRolar();
    window.addEventListener("scroll", aoRolar, { passive: true });
    return () => window.removeEventListener("scroll", aoRolar);
  }, []);

  useEffect(() => {
    document.body.style.overflow = aberto ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [aberto]);

  useEffect(() => {
    const aoTeclar = (e: KeyboardEvent) => e.key === "Escape" && setAberto(false);
    window.addEventListener("keydown", aoTeclar);
    return () => window.removeEventListener("keydown", aoTeclar);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow,backdrop-filter] duration-500 ${
        solido || rolou || aberto
          ? "bg-linho/92 shadow-[0_1px_0_0_rgba(56,64,48,0.10)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="u-container flex h-[80px] items-center justify-between gap-6 lg:h-[96px]">
        <a
          href="/"
          className="relative block shrink-0 py-1.5"
          aria-label="Ateliê Ananda Sette — início"
        >
          <Image
            src="/img/logo-selo.webp"
            alt="Ateliê Ananda Sette"
            width={512}
            height={512}
            priority
            className="h-[56px] w-auto sm:h-[62px] lg:h-[72px]"
          />
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-8 lg:flex">
          {navegacao.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="link-stitch text-[0.9rem] text-verde-2 transition-colors hover:text-verde"
            >
              {item.rotulo}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={contato.whatsappTexto}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary hidden !px-5 !py-3 text-[0.85rem] sm:inline-flex"
          >
            <IconeWhatsApp className="h-[17px] w-[17px]" />
            Falar com a Ananda
          </a>

          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-movel"
            aria-label={aberto ? "Fechar menu" : "Abrir menu"}
            className="relative grid h-11 w-11 place-items-center rounded-full border border-verde/20 text-verde transition-colors hover:border-verde/45 lg:hidden"
          >
            <span className="sr-only">Menu</span>
            <span aria-hidden="true" className="grid gap-[5px]">
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${
                  aberto ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-current transition-opacity duration-200 ${
                  aberto ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-px w-5 bg-current transition-transform duration-300 ${
                  aberto ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </div>

      {/* Menu móvel */}
      <div
        id="menu-movel"
        hidden={!aberto}
        className="border-t border-verde/10 bg-linho lg:hidden"
      >
        <nav aria-label="Principal (móvel)" className="u-container grid gap-1 py-6">
          {navegacao.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setAberto(false)}
              className="flex items-center justify-between border-b border-dashed border-verde/15 py-4 font-display text-2xl text-verde"
            >
              {item.rotulo}
              <PontoCruz className="h-3 w-3 text-sage" />
              <span className="sr-only">{i + 1}</span>
            </a>
          ))}
          <a
            href={contato.whatsappTexto}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setAberto(false)}
            className="btn btn-terra mt-5 w-full"
          >
            <IconeWhatsApp className="h-[18px] w-[18px]" />
            Falar com a Ananda
          </a>
        </nav>
      </div>
    </header>
  );
}
