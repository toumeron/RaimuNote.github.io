import { useMemo } from "react";

type Piece = {
  left: number;
  delay: number;
  duration: number;
  size: number;
  hue: number;
  rotate: number;
};

/** Lightweight CSS-only confetti rain (lime-themed). */
export const Confetti = ({ count = 28 }: { count?: number }) => {
  const pieces = useMemo<Piece[]>(() => {
    return Array.from({ length: count }).map((_, i) => ({
      left: (i * 97) % 100,
      delay: (i * 0.7) % 8,
      duration: 8 + ((i * 1.3) % 7),
      size: 8 + ((i * 5) % 10),
      hue: i % 3 === 0 ? 72 : i % 3 === 1 ? 80 : 60,
      rotate: (i * 37) % 360,
    }));
  }, [count]);

  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 block animate-confetti rounded-sm"
          style={{
            left: `${p.left}%`,
            width: `${p.size}px`,
            height: `${p.size * 0.5}px`,
            background: `hsl(${p.hue} 90% 60%)`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
            transform: `rotate(${p.rotate}deg)`,
            opacity: 0.85,
            borderRadius: i % 2 === 0 ? "2px" : "9999px",
          }}
        />
      ))}
    </div>
  );
};
