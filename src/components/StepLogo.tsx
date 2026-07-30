interface StepLogoProps {
  className?: string;
}

/**
 * Marca provisória no estilo STEP (letras coloridas + selo circular).
 * Substitua por um <img> com o logo oficial quando o arquivo estiver disponível.
 */
export function StepLogo({ className = "" }: StepLogoProps) {
  const letters = [
    { char: "S", color: "var(--step-yellow)" },
    { char: "T", color: "var(--step-green)" },
    { char: "E", color: "var(--step-cyan)" },
    { char: "P", color: "var(--step-navy)" },
  ];

  return (
    <span className={`inline-flex items-center gap-1 ${className}`}>
      <span className="font-display text-2xl font-extrabold tracking-tight leading-none">
        {letters.map((l) => (
          <span key={l.char} style={{ color: l.color }}>
            {l.char}
          </span>
        ))}
      </span>
      <span
        className="inline-flex h-6 w-6 items-center justify-center rounded-full"
        style={{ backgroundColor: "var(--step-red)" }}
        aria-hidden="true"
      >
        <span className="flex gap-[2px]">
          <span className="block h-2.5 w-[3px] rounded-full bg-white" />
          <span className="block h-2.5 w-[3px] rounded-full bg-white" />
        </span>
      </span>
    </span>
  );
}