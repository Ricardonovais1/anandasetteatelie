"use client";

import { useEffect } from "react";

/**
 * Observa todos os elementos [data-reveal] e os revela ao entrarem na tela.
 * Um único observador para a página inteira — sem dependências.
 *
 * A animação só existe se o script de `layout.tsx` tiver marcado o <html>
 * com `data-revelar`. Enquanto esse atributo não existe (JS desligado,
 * bloqueado, ou o guarda-chuva do script já tendo desistido), o CSS deixa
 * tudo visível — a página nunca depende deste componente para ter conteúdo.
 */
export default function Reveal() {
  useEffect(() => {
    const raiz = document.documentElement;

    // Chegamos: o guarda do script não precisa mais mostrar tudo à força.
    const guarda = (window as { __guardaRevelar?: number }).__guardaRevelar;
    if (guarda) window.clearTimeout(guarda);

    if (!("revelar" in raiz.dataset)) return;

    const alvos = document.querySelectorAll<HTMLElement>("[data-reveal]");
    if (!alvos.length) return;

    const mostrarTudo = () =>
      alvos.forEach((el) => el.setAttribute("data-reveal", "in"));

    if (
      typeof IntersectionObserver === "undefined" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      mostrarTudo();
      return;
    }

    const observador = new IntersectionObserver(
      (entradas) => {
        entradas.forEach((entrada) => {
          if (entrada.isIntersecting) {
            entrada.target.setAttribute("data-reveal", "in");
            observador.unobserve(entrada.target);
          }
        });
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.08 }
    );

    alvos.forEach((el) => observador.observe(el));
    return () => observador.disconnect();
  }, []);

  return null;
}
