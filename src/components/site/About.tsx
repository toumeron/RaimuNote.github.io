import { useEffect, useRef, useState } from "react";

const STATS = [
  { label: "Monthly Active Users", value: 2, suffix: "+" },
  { label: "1日あたりの投稿数", value: 1, suffix: "件" },
  { label: "対応言語", value: 1, suffix: "ヶ国語" },
  { label: "クリエイター登録数", value: 8, suffix: "人" },
];

function useCount(target: number, start: boolean, duration = 1400) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    const t0 = performance.now();
    let raf = 0;
    const tick = (t: number) => {
      const p = Math.min(1, (t - t0) / duration);
      const ease = 1 - Math.pow(1 - p, 3);
      setN(Math.round(target * ease));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, target, duration]);
  return n;
}

const StatCard = ({
  label,
  value,
  suffix,
  start,
  tilt,
}: {
  label: string;
  value: number;
  suffix: string;
  start: boolean;
  tilt: string;
}) => {
  const n = useCount(value, start);
  return (
    <div
      className={`${tilt} rounded-3xl bg-card p-6 text-center shadow-sticker transition-transform hover:rotate-0 hover:-translate-y-1`}
    >
      <div className="font-display text-5xl text-foreground md:text-6xl">
        {n.toLocaleString()}
        <span className="ml-1 text-2xl text-primary-deep md:text-3xl">{suffix}</span>
      </div>
      <div className="mt-3 text-xs font-bold uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );
};

export const About = () => {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!sectionRef.current) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStart(true);
            io.disconnect();
          }
        });
      },
      { threshold: 0.3 },
    );
    io.observe(sectionRef.current);
    return () => io.disconnect();
  }, []);

  const tilts = ["-rotate-2", "rotate-2", "-rotate-1", "rotate-1"];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative isolate overflow-hidden bg-secondary py-24 md:py-32"
    >
      <div className="container relative">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="sticker -rotate-2 mb-6">About us</span>
            <h2 className="reveal font-jp-black text-5xl leading-tight text-foreground md:text-7xl">
              誰でも、
              <br />
              <span className="text-primary-deep">神</span>になる。
            </h2>
            <p className="reveal mt-6 max-w-md text-base leading-relaxed text-muted-foreground md:text-lg">
              私たち LimeNote 株式会社は、「やさしいインターネット」を信じています。
              <br />
              声の大きい人だけが目立つ場所ではなく、誰かの小さな一言が、誰かの一日を救う場所を。
              そんな世界を、テクノロジーとデザインで丁寧につくっています。
            </p>
            <dl className="reveal mt-8 space-y-3 text-sm">
              <div className="flex gap-4">
                <dt className="w-24 font-bold text-foreground">設立</dt>
                <dd className="text-muted-foreground">2021年4月</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 font-bold text-foreground">所在地</dt>
                <dd className="text-muted-foreground">福岡県福岡市中央区</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 font-bold text-foreground">代表</dt>
                <dd className="text-muted-foreground">ねこ</dd>
              </div>
              <div className="flex gap-4">
                <dt className="w-24 font-bold text-foreground">事業内容</dt>
                <dd className="text-muted-foreground">SNS「LimeNote」の企画・開発・運営</dd>
              </div>
            </dl>
          </div>

          <div className="md:col-span-7">
            <div className="grid grid-cols-2 gap-5">
              {STATS.map((s, i) => (
                <StatCard key={s.label} {...s} start={start} tilt={tilts[i]} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* big background number */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 -right-10 select-none font-display text-[30vw] leading-none text-primary/20 md:text-[18rem]"
      >
        2026
      </div>
    </section>
  );
};
