import { careers } from "@/data/site";

export const Careers = () => {
  return (
    <section id="careers" className="relative overflow-hidden bg-secondary py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-dot-lime opacity-50" />
      <div className="container relative">
        <div className="mb-14 max-w-3xl">
          <span className="sticker rotate-2 mb-4">Careers</span>
          <h2 className="reveal font-jp-black text-5xl leading-tight md:text-7xl">
            一緒にライムを、
            <br />
            <span className="text-primary-deep">育てよう。</span>
          </h2>
          <p className="reveal mt-6 text-muted-foreground md:text-lg">
          </p>
        </div>

        <ul className="grid gap-6 md:grid-cols-3">
          {careers.map((c, i) => (
            <li
              key={c.role}
              className={`reveal ${i % 2 === 0 ? "-rotate-1" : "rotate-1"} group rounded-3xl bg-card p-7 shadow-sticker transition-all hover:rotate-0 hover:-translate-y-2`}
            >
              <div className="mb-4 text-4xl">{c.emoji}</div>
              <div className="mb-1 text-xs font-bold uppercase tracking-widest text-primary-deep">
                {c.team}
              </div>
              <h3 className="font-jp-black text-xl text-foreground">{c.role}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {c.description}
              </p>
              <div className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-foreground">
                応募する
                <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
                  →
                </span>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
