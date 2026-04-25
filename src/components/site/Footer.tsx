import { Logo } from "./Logo";

const SOCIAL = [
  { label: "X (Twitter)", href: "#", icon: "𝕏" },
  { label: "Instagram", href: "#", icon: "◉" },
  { label: "YouTube", href: "#", icon: "▶" },
  { label: "TikTok", href: "#", icon: "♪" },
];

const LINKS = [
  {
    title: "Service",
    items: [
      { label: "LimeNote について", href: "#about" },
      { label: "機能紹介", href: "#services" },
      { label: "動画", href: "#movies" },
    ],
  },
  {
    title: "Company",
    items: [
      { label: "ニュース", href: "#news" },
      { label: "採用情報", href: "#careers" },
      { label: "お問い合わせ", href: "#contact" },
    ],
  },
  {
    title: "Legal",
    items: [
      { label: "利用規約", href: "#" },
      { label: "プライバシーポリシー", href: "#" },
      { label: "特定商取引法に基づく表記", href: "#" },
    ],
  },
];

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-foreground text-background">
      <div className="absolute inset-x-0 top-0 h-1.5 bg-primary" />
      <div className="container py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo variant="light" />
            <p className="mt-5 max-w-xs text-sm text-background/70">
              LimeNoteは、SNS「LimeNote」の企画・開発・運営を行う、
              福岡の小さなテクノロジー会社です。
            </p>
            <ul className="mt-6 flex gap-3">
              {SOCIAL.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full border border-background/20 text-background transition-colors hover:bg-primary hover:text-primary-foreground"
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {LINKS.map((col) => (
            <div key={col.title} className="md:col-span-2 lg:col-span-2">
              <h3 className="mb-4 font-display text-sm uppercase tracking-widest text-primary">
                {col.title}
              </h3>
              <ul className="space-y-2.5 text-sm text-background/80">
                {col.items.map((it) => (
                  <li key={it.label}>
                    <a href={it.href} className="hover:text-primary">
                      {it.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-4 border-t border-background/15 pt-6 text-xs text-background/60 md:flex-row md:items-center">
          <span>© {new Date().getFullYear()} LimeNote, Inc. All rights reserved.</span>
          <span className="font-display tracking-widest">MADE WITH 🍋 IN TOKYO</span>
        </div>
      </div>

      {/* huge background type */}
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 select-none whitespace-nowrap font-display text-[22vw] leading-none text-background/5 md:text-[14rem]"
      >
        LIMENOTE
      </div>
    </footer>
  );
};
