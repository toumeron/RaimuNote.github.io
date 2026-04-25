import { useEffect, useState } from "react";
import { Logo } from "./Logo";

const NAV = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Service" },
  { href: "#movies", label: "Movie" },
  { href: "#news", label: "News" },
  { href: "#careers", label: "Careers" },
  { href: "#contact", label: "Contact" },
];

export const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-40 transition-all duration-300 ${
        scrolled ? "py-2" : "py-4"
      }`}
    >
      <div className="container">
        <div
          className={`flex items-center justify-between rounded-full border border-border/60 bg-background/80 px-4 py-2 backdrop-blur-md transition-all md:px-6 ${
            scrolled ? "shadow-soft" : ""
          }`}
        >
          <a href="#top" className="flex items-center" aria-label="LimeNote ホームへ">
            <Logo />
          </a>

          <nav className="hidden items-center gap-7 md:flex" aria-label="グローバルナビ">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm font-bold text-foreground/80 transition-colors hover:text-foreground after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-right after:scale-x-0 after:bg-primary after:transition-transform hover:after:origin-left hover:after:scale-x-100"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#contact"
              className="rounded-full bg-primary px-4 py-2 text-sm font-bold text-primary-foreground shadow-soft transition-transform hover:scale-105"
            >
              お問い合わせ
            </a>
          </nav>

          <button
            type="button"
            aria-label="メニューを開く"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="relative grid h-11 w-11 place-items-center rounded-full bg-primary text-primary-foreground shadow-soft transition-transform hover:scale-105 md:hidden"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current" aria-hidden>
              {open ? (
                <path d="M6.4 4.98 12 10.6l5.6-5.62 1.42 1.42L13.42 12l5.6 5.6-1.42 1.42L12 13.42l-5.6 5.6-1.42-1.42L10.6 12 4.98 6.4z" />
              ) : (
                <path d="M3 6h18v2H3zM3 11h18v2H3zM3 16h18v2H3z" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="mt-3 animate-fade-in rounded-3xl border border-border/60 bg-background/95 p-4 shadow-soft backdrop-blur-md md:hidden">
            <ul className="flex flex-col">
              {NAV.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block rounded-2xl px-4 py-3 text-base font-bold hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
              <li className="mt-2">
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block rounded-full bg-primary px-4 py-3 text-center text-base font-bold text-primary-foreground"
                >
                  お問い合わせ
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </header>
  );
};
