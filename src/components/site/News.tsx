import { news } from "@/data/site";

export const News = () => {
  return (
    <section id="news" className="relative bg-background py-24 md:py-32">
      <div className="container">
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="sticker -rotate-2 mb-4">News</span>
            <h2 className="reveal font-jp-black text-5xl leading-tight md:text-7xl">
              お知らせ。
            </h2>
          </div>
          <a
            href="#"
            className="text-sm font-bold text-foreground underline-offset-4 hover:underline"
          >
            すべてのお知らせを見る →
          </a>
        </div>

        <ul className="divide-y divide-border border-y border-border">
          {news.map((n) => (
            <li key={n.title} className="reveal">
              <a
                href="#"
                className="group flex flex-col gap-2 py-6 transition-colors hover:bg-secondary md:flex-row md:items-center md:gap-8 md:px-2"
              >
                <time className="font-display text-sm text-muted-foreground md:w-28">
                  {n.date}
                </time>
                <span className="inline-flex w-fit items-center rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">
                  {n.category}
                </span>
                <span className="flex-1 text-base font-bold text-foreground md:text-lg">
                  {n.title}
                </span>
                <span className="hidden text-foreground transition-transform group-hover:translate-x-1 md:inline">
                  →
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
