import { PontoCruz } from "./Ornaments";

/** As duas frases se alternam; o par é repetido para a rolagem ficar contínua. */
const frases = ["Tempestade de boas ideias costuradas", "Costura cura"];

export default function Faixa() {
  const itens = Array.from({ length: 8 });

  return (
    <div className="relative overflow-hidden bg-verde py-4 text-linho">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(246,242,234,.9) 0 10px, transparent 10px 20px)",
          backgroundSize: "20px 1px",
        }}
      />
      <div className="flex w-max animate-[deslizar_32s_linear_infinite] items-center motion-reduce:animate-none">
        {itens.map((_, i) => (
          <span key={i} className="flex items-center gap-6 pr-6" aria-hidden={i > 1}>
            <span className="font-display text-lg tracking-[0.02em] whitespace-nowrap sm:text-xl">
              {frases[i % frases.length]}
            </span>
            <PontoCruz className="h-3 w-3 shrink-0 text-sage-cl" />
          </span>
        ))}
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-40"
        style={{
          backgroundImage:
            "linear-gradient(90deg, rgba(246,242,234,.9) 0 10px, transparent 10px 20px)",
          backgroundSize: "20px 1px",
        }}
      />
    </div>
  );
}
