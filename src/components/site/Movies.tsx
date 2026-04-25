import { useState } from "react";
import { videos } from "@/data/videos";
import { LiteYouTube } from "./LiteYouTube";

export const Movies = () => {
  const [activeId, setActiveId] = useState(videos[0].id);
  const active = videos.find((v) => v.id === activeId) ?? videos[0];

  return (
    <section id="movies" className="relative overflow-hidden bg-foreground py-24 text-background md:py-32">
      <div className="pointer-events-none absolute -left-20 top-1/3 h-72 w-72 rounded-full bg-primary/40 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-1/4 h-72 w-72 rounded-full bg-primary/30 blur-3xl" />

      <div className="container relative">
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="sticker rotate-2 mb-4 bg-primary text-primary-foreground">
              Movie
            </span>
            <h2 className="reveal font-jp-black text-5xl leading-tight md:text-7xl">
              動画で見る、
              <br />
              <span className="text-primary">LimeNote。</span>
            </h2>
          </div>
          <p className="reveal max-w-sm text-background/70">
            プロモーションムービーで
            ライムノートの世界観を映像でお届けします。
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-12">
          {/* main player */}
          <div className="md:col-span-8">
            <div className="reveal relative">
              <span className="sticker absolute -left-3 -top-3 z-10 -rotate-6 bg-primary text-primary-foreground">
                NOW PLAYING
              </span>
              <div className="rounded-3xl bg-primary p-1.5 shadow-sticker">
                <LiteYouTube key={active.id} videoId={active.id} title={active.title} />
              </div>
              <h3 className="mt-6 font-jp-black text-2xl md:text-3xl">{active.title}</h3>
              <p className="mt-2 text-background/70">{active.description}</p>
            </div>
          </div>

          {/* playlist */}
          <ul className="md:col-span-4 space-y-3">
            {videos.map((v) => {
              const isActive = v.id === activeId;
              return (
                <li key={v.id} className="reveal">
                  <button
                    type="button"
                    onClick={() => setActiveId(v.id)}
                    aria-pressed={isActive}
                    className={`group flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-all ${
                      isActive
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-background/15 bg-background/5 hover:border-primary hover:bg-background/10"
                    }`}
                  >
                    <div className="relative aspect-video w-28 shrink-0 overflow-hidden rounded-xl">
                      <img
                        src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`}
                        alt=""
                        loading="lazy"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="line-clamp-2 text-sm font-bold leading-snug">
                        {v.title}
                      </div>
                      <div
                        className={`mt-1 line-clamp-1 text-xs ${
                          isActive ? "text-primary-foreground/80" : "text-background/60"
                        }`}
                      >
                        {v.description}
                      </div>
                    </div>
                  </button>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
