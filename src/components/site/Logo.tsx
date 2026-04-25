type Props = {
  className?: string;
  variant?: "dark" | "light";
};

/** LimeNote inline SVG logo. */
export const Logo = ({ className = "", variant = "dark" }: Props) => {
  const text = variant === "dark" ? "hsl(160 12% 14%)" : "hsl(60 33% 98%)";
  return (
    <span className={`inline-flex items-center gap-2 ${className}`}>
      <svg viewBox="0 0 40 40" className="h-8 w-8" aria-hidden>
        <circle cx="20" cy="20" r="18" fill="hsl(72 95% 55%)" />
        <path
          d="M20 6 C 26 12, 30 16, 30 22 C 30 28, 26 32, 20 32 C 14 32, 10 28, 10 22 C 10 16, 14 12, 20 6 Z"
          fill="hsl(80 70% 35%)"
          opacity="0.85"
        />
        <path d="M16 18 L24 18 M16 22 L24 22 M16 26 L21 26" stroke="hsl(60 33% 98%)" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
      <span
        className="font-display text-xl tracking-tight"
        style={{ color: text }}
      >
        LimeNote
      </span>
    </span>
  );
};
