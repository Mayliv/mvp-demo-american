import { Link } from "@tanstack/react-router";
import { SiteHeader } from "./SiteHeader";
import { SiteFooter } from "./SiteFooter";

interface ServicePageProps {
  eyebrow: string;
  title: string;
  lead: string;
  image: string;
  offers: { title: string; description: string }[];
  process: string[];
  ctaTitle: string;
  ctaText: string;
}

export function ServicePage({ eyebrow, title, lead, image, offers, process, ctaTitle, ctaText }: ServicePageProps) {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative">
        <div className="container-x grid lg:grid-cols-2 gap-12 lg:gap-20 py-16 lg:py-24 items-center">
          <div>
            <div className="eyebrow mb-6">{eyebrow}</div>
            <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] mb-6">{title}</h1>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8 max-w-xl">{lead}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center px-7 py-3.5 bg-ink text-background hover:bg-ink/90 transition-colors text-sm tracking-wide">
                Получить консультацию
              </Link>
              <a href="#offers" className="inline-flex items-center px-7 py-3.5 border border-ink/20 text-ink hover:border-gold hover:text-gold transition-colors text-sm tracking-wide">
                Что входит
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-3 border border-gold/40 -z-10" />
            <img src={image} alt={title} loading="eager" width={1280} height={896} className="w-full h-[480px] object-cover" />
          </div>
        </div>
      </section>

      {/* Offers */}
      <section id="offers" className="py-24 bg-secondary/50">
        <div className="container-x">
          <div className="eyebrow mb-4 hairline">Что мы делаем</div>
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-16 max-w-2xl">Полный спектр услуг под ключ</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
            {offers.map((o) => (
              <div key={o.title} className="bg-background p-8 hover:bg-card transition-colors">
                <h3 className="font-display text-2xl text-ink mb-3">{o.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{o.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-24">
        <div className="container-x max-w-4xl">
          <div className="eyebrow mb-4 hairline">Как мы работаем</div>
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-16">Прозрачный процесс</h2>
          <ol className="space-y-8">
            {process.map((step, i) => (
              <li key={i} className="flex gap-6 pb-8 border-b border-border last:border-0">
                <div className="font-display text-3xl text-gold w-12 shrink-0">0{i + 1}</div>
                <div className="text-lg text-foreground/90 leading-relaxed pt-1">{step}</div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-dark text-primary-foreground py-24">
        <div className="container-x max-w-3xl text-center">
          <h2 className="font-display text-4xl md:text-5xl mb-6">{ctaTitle}</h2>
          <p className="text-primary-foreground/70 text-lg mb-10">{ctaText}</p>
          <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-gold text-gold-foreground hover:opacity-90 transition-opacity text-sm tracking-widest uppercase">
            Оставить заявку
          </Link>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
