import type { SVGProps } from "react";

/** Nuvem do logotipo, com chuva de pontos de alinhavo. */
export function Nuvem({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 120 92"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        fill="currentColor"
        d="M33.6 15.2c6.6-9.5 20-12.3 29.4-5.6 4.6-5.4 12-7.3 18.6-4.4 6.7 3 10.5 9.9 9.7 16.8 8.9.5 16.2 7.1 17.4 15.7 1.3 9.6-5.2 18.5-14.7 20.2-2.3.4-4.5.3-6.6-.2-2.6 6.7-9.1 11.2-16.5 10.9-5.9-.2-11-3.5-13.8-8.3-5 4.6-12.4 5.8-18.8 2.6-5.5-2.7-8.9-8-9.4-13.7-8.1.9-15.7-4-17.9-11.9C8.6 28.8 13.1 20.1 21 17.2c4.2-1.6 8.7-1.3 12.6.5Z"
      />
      <g stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" opacity=".55">
        <path d="M30 70v7" />
        <path d="M45 74v9" />
        <path d="M60 71v7" />
        <path d="M75 75v9" />
        <path d="M90 70v7" />
        <path d="M37 84v5" />
        <path d="M67 85v5" />
      </g>
    </svg>
  );
}

/** Marca de ponto-cruz usada como pontuação gráfica. */
export function PontoCruz({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...props}>
      <g stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
        <path d="M5 5l14 14M19 5L5 19M12 2v20M2 12h20" />
      </g>
    </svg>
  );
}

/** Linha de linha costurada, terminada em agulha. */
export function LinhaAgulha({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 420 60"
      fill="none"
      aria-hidden="true"
      className={className}
      {...props}
    >
      <path
        d="M2 44c46-26 92 14 138 8s58-34 104-30 76 30 120 12"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeDasharray="7 8"
        opacity=".6"
      />
      <path
        d="M366 34c8-10 20-12 28-4"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
      />
      <path d="M394 30 372 52" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="394" cy="30" r="3.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/** Divisor: alinhavo — ponto-cruz — alinhavo. */
export function DivisorCosturado({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-4 ${className}`} aria-hidden="true">
      <span className="stitch-line flex-1" />
      <PontoCruz className="h-3 w-3 shrink-0 text-sage" />
      <span className="stitch-line flex-1" />
    </div>
  );
}

/** Aspas decorativas. */
export function Aspas({ className = "" }: { className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={`font-display text-[5rem] leading-[0.5] ${className}`}
    >
      &ldquo;
    </span>
  );
}

export function IconeWhatsApp({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className} {...props}>
      <path d="M12.04 2c-5.5 0-9.96 4.46-9.96 9.96 0 1.76.46 3.48 1.34 5L2 22l5.19-1.36a9.9 9.9 0 0 0 4.85 1.24h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.16-2.92-7.04A9.88 9.88 0 0 0 12.04 2Zm0 18.15h-.01a8.26 8.26 0 0 1-4.21-1.15l-.3-.18-3.13.82.84-3.05-.2-.31a8.24 8.24 0 0 1-1.26-4.4c0-4.56 3.71-8.27 8.28-8.27 2.21 0 4.29.86 5.85 2.43a8.22 8.22 0 0 1 2.42 5.85c0 4.57-3.71 8.26-8.28 8.26Zm4.54-6.19c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.13-.16.24-.64.8-.78.97-.15.16-.29.18-.53.06-.25-.13-1.05-.39-2-1.23-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.44.13-.15.17-.25.25-.42.09-.16.04-.31-.02-.43-.06-.13-.56-1.35-.77-1.84-.2-.49-.4-.42-.56-.43h-.47c-.16 0-.43.06-.65.31-.22.24-.85.83-.85 2.03s.87 2.35.99 2.51c.12.16 1.71 2.61 4.14 3.66.58.25 1.03.4 1.38.51.58.19 1.11.16 1.53.1.47-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29Z" />
    </svg>
  );
}

export function IconeInstagram({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...props}>
      <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
      <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
    </svg>
  );
}

export function IconeYouTube({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="4" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10.5 9.2 15 12l-4.5 2.8V9.2Z" fill="currentColor" />
    </svg>
  );
}

export function IconeEmail({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...props}>
      <rect x="2.5" y="5" width="19" height="14" rx="3" stroke="currentColor" strokeWidth="1.6" />
      <path d="m3.5 7.5 7.4 5.2a2 2 0 0 0 2.2 0l7.4-5.2" stroke="currentColor" strokeWidth="1.6" />
    </svg>
  );
}

/** Visto costurado — usado nas listas de "o que está incluso". */
export function Visto({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        d="m4 12.5 5 5L20 6.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Xis — o par do visto, nas listas de "não é para você". */
export function Xis({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        d="M6 6l12 12M18 6 6 18"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Escudo da garantia. */
export function Escudo({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        d="M12 2.5 4.5 5.5v6c0 4.6 3.1 8.6 7.5 10 4.4-1.4 7.5-5.4 7.5-10v-6L12 2.5Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="m8.6 11.8 2.4 2.4 4.4-4.6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** Cadeado da compra segura. */
export function Cadeado({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...props}>
      <rect x="4.5" y="10" width="15" height="10.5" rx="2.5" stroke="currentColor" strokeWidth="1.6" />
      <path d="M8 10V7.5a4 4 0 0 1 8 0V10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="12" cy="15.2" r="1.4" fill="currentColor" />
    </svg>
  );
}

/** Play — sinaliza aula em vídeo. */
export function Play({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...props}>
      <circle cx="12" cy="12" r="9.2" stroke="currentColor" strokeWidth="1.6" />
      <path d="M10 8.4 16 12l-6 3.6V8.4Z" fill="currentColor" />
    </svg>
  );
}

/** Seta de acordeão. */
export function Chevron({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        d="m6 9.5 6 6 6-6"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export function Seta({ className = "", ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 20 20" fill="none" aria-hidden="true" className={className} {...props}>
      <path
        d="M3 10h13m0 0-4.6-4.6M16 10l-4.6 4.6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
