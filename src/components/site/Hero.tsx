import { Confetti } from "./Confetti";

export const Hero = () => {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden bg-background pt-32 md:pt-40"
    >
      {/* background decorations */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-lime opacity-60" />
      <div className="pointer-events-none absolute -left-24 top-24 -z-10 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-40 -z-10 h-96 w-96 rounded-full bg-primary-glow/40 blur-3xl" />

      <Confetti count={32} />

      <div className="container relative grid gap-10 pb-24 md:grid-cols-12 md:gap-12 md:pb-32">
        {/* Left text */}
        <div className="md:col-span-7">
          <div className="mb-6 flex flex-wrap items-center gap-3">
            <span className="sticker -rotate-3">Lime for browser</span>
            <span className="sticker rotate-2 bg-primary text-primary-foreground">
              全機能、ずっと無料!
            </span>
          </div>

          <h1 className="font-jp-black text-[12vw] leading-[0.95] text-foreground md:text-[8.5rem]">
            つながるを、
            <br />
            <span className="relative inline-block">
              もっと
              <span className="absolute -bottom-2 left-0 -z-10 h-4 w-full -rotate-1 rounded-full bg-primary md:h-6" />
            </span>
            自由に。
          </h1>

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            LimeNoteは近日登場するSNS。
            <br className="hidden md:inline" />
            現在は開発中です。
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#movies"
              className="group relative inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-4 font-bold text-background shadow-soft transition-transform hover:scale-105"
            >
              アプリを見る
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current transition-transform group-hover:translate-x-1" aria-hidden>
                <path d="M13 5l7 7-7 7-1.4-1.4L16.2 13H4v-2h12.2l-4.6-4.6z" />
              </svg>
            </a>
            <a
              href="#services"
              className="inline-flex items-center gap-2 rounded-full border-2 border-foreground bg-transparent px-7 py-4 font-bold text-foreground transition-colors hover:bg-foreground hover:text-background"
            >
              サービス紹介
            </a>
          </div>
        </div>

        {/* Right phone mock */}
        <div className="md:col-span-5">
          <div className="relative mx-auto w-[280px] md:w-[320px]">
            {/* sticker badges */}
            <span className="sticker absolute -left-6 top-10 z-20 -rotate-12 bg-primary text-primary-foreground">
              NEW!LimeNote
            </span>
            <span className="sticker absolute -right-4 bottom-20 z-20 rotate-6">
              ❤ 10+ users
            </span>

            {/* phone */}
            <div className="relative z-10 animate-float-slow">
              <div className="relative mx-auto rounded-[3rem] border-[10px] border-foreground bg-foreground p-1 shadow-sticker">
                <div className="relative overflow-hidden rounded-[2.4rem] bg-background">
                  {/* notch */}
                  <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-foreground" />
                  {/* screen */}
                  <div className="aspect-[9/19] w-full bg-gradient-to-b from-secondary to-background p-4 pt-10">
                    <div className="mb-3 flex items-center justify-between">
                      <span className="font-display text-sm">LimeNote</span>
                      <span className="grid h-7 w-7 place-items-center rounded-full bg-primary text-primary-foreground">
                        🍋
                      </span>
                    </div>
                    <div className="space-y-3">
                      {[
                        { name: "haru.@無料で10億", text: "にゃ〜ん", lime: 128 },
                        { name: "midori_@年収100億の猫", text: "は？", lime: 56 },
                        { name: "yui*@年収10億の猫", text: "にゃ〜ん", lime: 312 },
                      ].map((post, i) => (
                        <div
                          key={i}
                          className="rounded-2xl bg-card p-3 text-left shadow-sm"
                        >
                          <div className="mb-1 flex items-center gap-2">
                            <span className="grid h-6 w-6 place-items-center rounded-full bg-primary text-[10px] font-bold text-primary-foreground">
                              {post.name[0].toUpperCase()}
                            </span>
                            <span className="text-xs font-bold">@{post.name}</span>
                          </div>
                          <p className="text-[11px] leading-relaxed text-foreground/80">
                            {post.text}
                          </p>
                          <div className="mt-2 flex items-center gap-1 text-[10px] text-primary-deep">
                            🍋 {post.lime}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* floating leaves */}
            <span className="absolute -left-10 top-32 animate-float text-3xl" aria-hidden>🌿</span>
            <span className="absolute -right-8 top-4 animate-float text-3xl" style={{ animationDelay: "1.2s" }} aria-hidden>✨</span>
            <span className="absolute -bottom-6 left-12 animate-float text-3xl" style={{ animationDelay: "0.6s" }} aria-hidden>🍋</span>
          </div>
        </div>
      </div>

      {/* angled bottom divider */}
      <div className="relative">
        <svg className="block h-16 w-full text-secondary md:h-24" viewBox="0 0 1440 100" preserveAspectRatio="none" aria-hidden>
          <path d="M0 60 Q 360 0 720 50 T 1440 40 L 1440 100 L 0 100 Z" fill="currentColor" />
        </svg>
      </div>
    </section>
  );
};
