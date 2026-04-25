type Props = {
  text?: string;
  side?: "left" | "right";
};

/** Vertical scrolling marquee text on the side of the viewport (watanare-inspired). */
export const SideMarquee = ({ text = "LIME × NOTE × SNS  ♥  ", side = "left" }: Props) => {
  const repeated = Array.from({ length: 6 }).map(() => text).join("");
  return (
    <div
      aria-hidden
      className={`pointer-events-none fixed top-0 z-10 hidden h-screen w-10 items-stretch overflow-hidden md:flex ${
        side === "left" ? "left-0" : "right-0"
      }`}
    >
      <div className="flex w-full flex-col items-center bg-primary/90 text-primary-foreground">
        <div className="animate-marquee whitespace-nowrap py-4 writing-vertical font-display text-sm tracking-widest">
          {repeated}
          {repeated}
        </div>
      </div>
    </div>
  );
};
