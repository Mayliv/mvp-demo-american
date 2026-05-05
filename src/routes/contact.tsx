import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Консультация — American Butler" },
      { name: "description", content: "Оставьте заявку — менеджер American Butler свяжется с вами в течение часа." },
      { property: "og:title", content: "Консультация — American Butler" },
    ],
  }),
  component: ContactPage,
});

const services = [
  "Недвижимость в Майами",
  "Аренда авто",
  "Яхты",
  "Путешествия",
  "Переезд в США",
  "Роды в Майами",
  "Консьерж",
  "Другое",
];

function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="container-x py-20 grid lg:grid-cols-2 gap-16">
        <div>
          <div className="eyebrow mb-4 hairline">Консультация</div>
          <h1 className="font-display text-5xl md:text-6xl text-ink leading-[1.05] mb-6">
            Расскажите вашу задачу
          </h1>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
            Менеджер свяжется с вами в течение часа в удобное время и удобном мессенджере. Консультация бесплатна.
          </p>
          <div className="space-y-5 text-sm">
            <div>
              <div className="eyebrow mb-2">Телефоны</div>
              <div className="text-lg text-ink"><a href="tel:+17863030333" className="hover:text-gold">+1 (786) 303-0333</a></div>
              <div className="text-lg text-ink"><a href="tel:+19545917817" className="hover:text-gold">+1 (954) 591-7817</a></div>
            </div>
            <div>
              <div className="eyebrow mb-2">Email</div>
              <div className="text-lg text-ink"><a href="mailto:link@americanbutler.ru" className="hover:text-gold">link@americanbutler.ru</a></div>
              <div className="text-lg text-ink"><a href="mailto:admin@americanbutler.ru" className="hover:text-gold">admin@americanbutler.ru</a></div>
            </div>
            <div>
              <div className="eyebrow mb-2">Офис</div>
              <div className="text-lg text-ink">Miami, Florida, USA</div>
            </div>
          </div>
        </div>

        <div className="bg-card p-10 shadow-elegant">
          {sent ? (
            <div className="py-20 text-center">
              <div className="font-display text-3xl text-ink mb-3">Спасибо!</div>
              <p className="text-muted-foreground">Мы свяжемся с вами в течение часа.</p>
            </div>
          ) : (
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setSent(true);
              }}
              className="space-y-6"
            >
              <div>
                <label className="eyebrow block mb-2">Имя</label>
                <input required className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground" />
              </div>
              <div>
                <label className="eyebrow block mb-2">Телефон или email</label>
                <input required className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground" />
              </div>
              <div>
                <label className="eyebrow block mb-3">Направление</label>
                <select className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground">
                  {services.map((s) => <option key={s}>{s}</option>)}
                </select>
              </div>
              <div>
                <label className="eyebrow block mb-2">Задача</label>
                <textarea rows={4} className="w-full bg-transparent border-b border-border focus:border-gold outline-none py-3 text-foreground resize-none" />
              </div>
              <button type="submit" className="w-full px-7 py-4 bg-ink text-background hover:bg-ink/90 transition-colors text-sm tracking-widest uppercase">
                Отправить заявку
              </button>
            </form>
          )}
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
