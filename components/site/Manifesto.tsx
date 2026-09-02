import Image from "next/image";
import { Aspas, PontoCruz } from "./Ornaments";

export default function Manifesto() {
  return (
    <section className="relative overflow-hidden bg-sage py-16 text-linho sm:py-24 lg:py-32">
      <div aria-hidden="true" className="absolute inset-0 opacity-[0.16]">
        <Image
          src="/img/linho.webp"
          alt=""
          fill
          sizes="100vw"
          className="object-cover mix-blend-overlay"
        />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(80% 60% at 50% 0%, rgba(255,255,255,0.16) 0%, rgba(255,255,255,0) 70%)",
        }}
      />

      <div className="u-container relative">
        <figure className="mx-auto max-w-4xl text-center">
          <Aspas className="text-linho/45" />
          <blockquote
            data-reveal
            className="display-m mt-2 font-display leading-[1.18] !text-linho"
          >
            O ofício de fazer é uma parte importante do trabalho. Ocupar as mãos na
            criação de algo, esse algo é a alma. E sempre que alimentamos a alma,
            ela garante expansão.
          </blockquote>
          <figcaption
            data-reveal
            style={{ ["--reveal-delay" as string]: "120ms" }}
            className="mt-9 flex items-center justify-center gap-3 text-linho/85"
          >
            <PontoCruz className="h-3 w-3" />
            <span className="eyebrow">Clarissa Pinkola Estés</span>
            <PontoCruz className="h-3 w-3" />
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
