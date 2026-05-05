import { Link } from "@tanstack/react-router";
import { useState } from "react";
import logoHeader from "@/assets/logo-header.png";

const nav = [
  { to: "/real-estate", label: "Недвижимость" },
  { to: "/cars", label: "Авто" },
  { to: "/yachts", label: "Яхты" },
  { to: "/travel", label: "Путешествия" },
  { to: "/relocation", label: "Переезд" },
  { to: "/childbirth", label: "Роды" },
  { to: "/concierge", label: "Консьерж" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 backdrop-blur-md bg-background/85 border-b border-border/60">
      <div className="container-x flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group">
          <img src={logoHeader} alt="American Butler" className="h-12 w-auto" />
          <div className="leading-tight border-l border-border/70 pl-3">
            <div className="font-display text-base text-ink">American Butler</div>
            <div className="text-[10px] tracking-[0.2em] uppercase text-muted-foreground">Агентство путешествий и отдыха</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-7">
          {nav.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className="text-sm text-foreground/80 hover:text-gold transition-colors"
              activeProps={{ className: "text-gold" }}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <Link
          to="/contact"
          className="hidden lg:inline-flex items-center px-5 py-2.5 text-sm border border-ink text-ink hover:bg-ink hover:text-background transition-colors"
        >
          Консультация
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden flex flex-col gap-1.5 p-2"
          aria-label="Меню"
        >
          <span className="w-6 h-px bg-ink" />
          <span className="w-6 h-px bg-ink" />
          <span className="w-6 h-px bg-ink" />
        </button>
      </div>
      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="container-x py-6 flex flex-col gap-4">
            {nav.map((n) => (
              <Link
                key={n.to}
                to={n.to}
                onClick={() => setOpen(false)}
                className="text-base text-foreground/90"
              >
                {n.label}
              </Link>
            ))}
            <Link
              to="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center px-5 py-3 border border-ink text-ink"
            >
              Консультация
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
