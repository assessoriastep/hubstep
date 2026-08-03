import stepLogo from "@/assets/Logotipo-STEP.png";

interface StepLogoProps {
  className?: string;
}

/**
 * Logo oficial da STEP em PNG.
 */
export function StepLogo({ className = "" }: StepLogoProps) {
  return (
    <img
      src={stepLogo}
      alt="Logo STEP"
      className={`h-10 w-auto ${className}`}
      loading="eager"
    />
  );
}