import { services } from "@/data/services";

export const Services = () => {
  return (
    <section id="services" className="relative overflow-hidden bg-background py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-grid-soft opacity-40" />
      <div className="container relative">
        <div className="mb-14 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="sticker -rotate-2 mb-4">Service</span>
            <h2 className="reveal font-jp-black text-5xl leading-tight md:text-7xl">
              LimeNoteが
              <br />
              <span className="relative inline-block">
                できること。
                <span className="absolute -bottom-1 left-0 -z-10 h-3 w-full bg-primary md:h-5" />
              </span>
            </h2>
          </div>
          <p className="reveal max-w-sm text-muted-foreground">
            ノート投稿から有料メンバーシップ、AIモデレーションまで。
            やさしさの設計が、すべての機能の根っこにあります。
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <li
              key={s.title}
              className={`reveal group ${s.tilt} rounded-3xl bg-card p-7 shadow-sticker transition-all duration-300 hover:rotate-0 hover:-translate-y-2`}
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-primary text-3xl shadow-soft transition-transform group-hover:animate-wiggle">
                {s.emoji}
              </div>
              <h3 className="font-jp-black text-xl leading-snug text-foreground">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.description}</p>
              <div className="mt-5 flex items-center gap-1 text-xs font-bold text-primary-deep">
                <span>0{i + 1}</span>
                <span className="ml-2 h-px flex-1 bg-foreground/20" />
                <span>FEATURE</span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
