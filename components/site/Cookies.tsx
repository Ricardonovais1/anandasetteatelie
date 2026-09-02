"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * Aviso de cookies (LGPD).
 *
 * Hoje o site não instala nada de rastreamento — o aviso existe para
 * registrar a escolha antes de qualquer ferramenta de medição entrar.
 * A decisão fica em `localStorage` e é publicada em dois lugares para
 * quem for plugar analytics depois:
 *
 *   window.__consentimento           → "aceito" | "essenciais"
 *   evento "consentimento" no window → { detail: { medicao: boolean } }
 *
 * Só carregue Google Analytics, Pixel ou similar depois de ver
 * `medicao === true`. Recusar é o padrão: quem fecha sem escolher
 * continua sem medição.
 */

const CHAVE = "anandasette:cookies";

type Escolha = "aceito" | "essenciais";

function anunciar(escolha: Escolha) {
  (window as { __consentimento?: Escolha }).__consentimento = escolha;
  window.dispatchEvent(
    new CustomEvent("consentimento", { detail: { medicao: escolha === "aceito" } })
  );
}

export default function Cookies() {
  const [visivel, setVisivel] = useState(false);

  useEffect(() => {
    let guardado: string | null = null;
    try {
      guardado = window.localStorage.getItem(CHAVE);
    } catch {
      // navegação privada ou cookies bloqueados: seguimos sem registrar
    }

    if (guardado === "aceito" || guardado === "essenciais") {
      anunciar(guardado);
      return;
    }
    setVisivel(true);
  }, []);

  const escolher = (escolha: Escolha) => {
    try {
      window.localStorage.setItem(CHAVE, escolha);
    } catch {
      // sem localStorage a escolha vale só para esta visita
    }
    anunciar(escolha);
    setVisivel(false);
  };

  if (!visivel) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      /* Acima da barra de compra fixa do celular, que tem 4.75rem. */
      className="fixed inset-x-3 bottom-[5.25rem] z-[60] sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-sm"
    >
      <div className="card-paper rounded-[1.25rem] p-5 shadow-[0_24px_50px_-24px_rgba(56,64,48,0.55)]">
        <p className="text-[0.9rem] leading-relaxed text-verde-2/90">
          Este site não usa cookies de propaganda. Guardamos só o essencial para ele
          funcionar — e, se você deixar, dados de audiência para saber quais páginas
          são mais lidas.
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={() => escolher("aceito")}
            className="btn btn-primary !px-5 !py-2.5 text-[0.85rem]"
          >
            Aceitar
          </button>
          <button
            type="button"
            onClick={() => escolher("essenciais")}
            className="btn btn-ghost !px-5 !py-2.5 text-[0.85rem]"
          >
            Só os essenciais
          </button>
          <Link
            href="/politica-de-privacidade/"
            className="link-stitch ml-auto text-[0.82rem] text-verde-3 hover:text-verde"
          >
            Saiba mais
          </Link>
        </div>
      </div>
    </div>
  );
}
