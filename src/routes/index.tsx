import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImage from "@/assets/hero-miami.jpg";
import realEstateImg from "@/assets/real-estate.jpg";
import carsImg from "@/assets/cars.jpg";
import yachtsImg from "@/assets/yachts.jpg";
import travelImg from "@/assets/travel.jpg";
import relocationImg from "@/assets/relocation.jpg";
import childbirthImg from "@/assets/childbirth.jpg";
import conciergeImg from "@/assets/concierge.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "American Butler — премиум сервис в США для русскоязычных" },
      { name: "description", content: "Недвижимость, переезд, роды, аренда авто и яхт, консьерж в Майами и по всей Америке. Сопровождение под ключ." },
      { property: "og:title", content: "American Butler — премиум сервис в США" },
      { property: "og:description", content: "От недвижимости и переезда до VIP-отдыха в Майами. Полный сервис для русскоязычных клиентов." },
    ],
  }),
  component: HomePage,
});

const directions = [
  { to: "/real-estate", title: "Недвижимость в Майами", desc: "Покупка, аренда и инвестиции в кондо, виллы и новостройки.", img: realEstateImg },
  { to: "/cars", title: "Аренда авто", desc: "Внедорожники, спорткары и премиум-бренды: Mercedes, BMW, Bentley, Rolls Royce.", img: carsImg },
  { to: "/yachts", title: "Яхты", desc: "Чартер премиум-яхт для отдыха, частных мероприятий и торжеств.", img: yachtsImg },
  { to: "/travel", title: "Путешествия и экскурсии", desc: "Индивидуальные маршруты по США с VIP-сопровождением.", img: travelImg },
  { to: "/relocation", title: "Переезд в США", desc: "Документы, жильё, школы, банки и кредитная история — под ключ.", img: relocationImg },
  { to: "/childbirth", title: "Роды в Майами", desc: "Клиники, врачи, оформление документов и полное сопровождение семьи.", img: childbirthImg },
  { to: "/concierge", title: "Консьерж услуги", desc: "Персонал, бронирования, lifestyle-задачи 24/7.", img: conciergeImg },
] as const;

function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative h-[92vh] min-h-[640px] overflow-hidden">
        <img src={heroImage} alt="Майами" width={1920} height={1280} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/40 via-ink/30 to-ink/80" />
        <div className="relative container-x h-full flex flex-col justify-end pb-24">
          <div className="max-w-3xl">
            <div className="eyebrow text-gold mb-6">Premium concierge · Miami · USA</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-[5.5rem] text-background leading-[1.02] mb-8">
              Помогаем жить, инвестировать <br className="hidden md:block" /> и отдыхать в США <span className="italic text-gold">без стресса</span>
            </h1>
            <p className="text-lg md:text-xl text-background/85 max-w-2xl mb-10 leading-relaxed">
              От аренды и покупки недвижимости до переезда и консьерж-сервиса — в Майами и по всей Америке для русскоязычных клиентов.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-gold text-gold-foreground text-sm tracking-widest uppercase hover:opacity-90 transition-opacity">
                Получить консультацию
              </Link>
              <a href="#directions" className="inline-flex items-center px-8 py-4 border border-background/40 text-background hover:bg-background hover:text-ink transition-colors text-sm tracking-widest uppercase">
                Наши направления
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* DIRECTIONS */}
      <section id="directions" className="py-28">
        <div className="container-x">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div>
              <div className="eyebrow mb-4 hairline">Направления</div>
              <h2 className="font-display text-4xl md:text-6xl text-ink max-w-2xl leading-[1.05]">
                Семь направлений — один сервис под ключ
              </h2>
            </div>
            <p className="text-muted-foreground max-w-sm">
              Каждое направление ведёт отдельная команда экспертов с многолетним опытом работы в США.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {directions.map((d, i) => (
              <Link
                key={d.to}
                to={d.to}
                className={`group relative overflow-hidden bg-card shadow-soft hover:shadow-elegant transition-all duration-500 ${i === 0 ? "lg:row-span-2 lg:col-span-1" : ""}`}
              >
                <div className={`relative overflow-hidden ${i === 0 ? "h-[420px] lg:h-[640px]" : "h-64"}`}>
                  <img src={d.img} alt={d.title} loading="lazy" width={1280} height={896} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-7 text-background">
                    <h3 className="font-display text-2xl md:text-3xl mb-2">{d.title}</h3>
                    <p className="text-sm text-background/80 mb-4 max-w-md">{d.desc}</p>
                    <span className="inline-flex items-center text-xs tracking-[0.25em] uppercase text-gold border-b border-gold/60 pb-1 group-hover:border-gold transition-colors">
                      Подробнее →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-28 bg-secondary/60">
        <div className="container-x grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="eyebrow mb-4 hairline">Почему American Butler</div>
            <h2 className="font-display text-4xl md:text-5xl text-ink leading-[1.05] mb-8">
              Десять лет рядом с русскоязычными клиентами в&nbsp;США
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Мы говорим на одном с вами языке — и при этом отлично знаем, как устроены банки, рынок недвижимости, иммиграционные правила и здравоохранение Америки. Закрываем задачу полностью: от первой консультации до последней детали.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-px bg-border">
            {[
              { n: "10+", t: "лет в США" },
              { n: "1500+", t: "семей под сопровождением" },
              { n: "7", t: "направлений сервиса" },
              { n: "24/7", t: "персональный менеджер" },
            ].map((s) => (
              <div key={s.t} className="bg-background p-10">
                <div className="font-display text-5xl text-gold mb-2">{s.n}</div>
                <div className="text-sm text-muted-foreground tracking-wide">{s.t}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28">
        <div className="container-x">
          <div className="eyebrow mb-4 hairline">Как мы работаем</div>
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-16 max-w-2xl leading-[1.05]">
            Четыре шага до решения вашей задачи
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-border">
            {[
              { t: "Заявка", d: "Вы оставляете запрос — в форме, по телефону или в мессенджере." },
              { t: "Брифинг", d: "Уточняем задачу, бюджет, сроки и нюансы вашей ситуации." },
              { t: "Решение", d: "Готовим персональное предложение и согласовываем шаги." },
              { t: "Сопровождение", d: "Ведём проект от старта до результата, на связи 24/7." },
            ].map((s, i) => (
              <div key={s.t} className="bg-background p-10">
                <div className="font-display text-2xl text-gold mb-4">0{i + 1}</div>
                <h3 className="font-display text-2xl text-ink mb-3">{s.t}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SCENARIOS */}
      <section className="py-28 bg-secondary/60">
        <div className="container-x">
          <div className="eyebrow mb-4 hairline">Типичные сценарии</div>
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-16 max-w-2xl leading-[1.05]">
            С чем к нам приходят чаще всего
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { t: "Переезд семьи в США", d: "От подбора школ и аренды дома до открытия счетов и адаптации детей.", to: "/relocation" },
              { t: "Инвестиции в недвижимость", d: "Подбор объектов в Майами с расчётом доходности и управлением.", to: "/real-estate" },
              { t: "VIP-отдых в Майами", d: "Резиденция, авто, яхта, рестораны и закрытые мероприятия.", to: "/concierge" },
              { t: "Роды в США", d: "Выбор клиники, контракт с врачом, документы и сопровождение семьи.", to: "/childbirth" },
            ].map((s) => (
              <Link key={s.t} to={s.to} className="group bg-background p-10 hover:shadow-elegant transition-shadow border-l-2 border-transparent hover:border-gold">
                <h3 className="font-display text-3xl text-ink mb-3">{s.t}</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">{s.d}</p>
                <span className="text-xs tracking-[0.25em] uppercase text-gold">Подробнее →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-dark text-primary-foreground py-28">
        <div className="container-x grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="eyebrow text-gold mb-4">Свяжитесь с нами</div>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
              Расскажите вашу задачу — <span className="italic text-gold">подберём решение под вас</span>
            </h2>
          </div>
          <div className="lg:pl-12">
            <p className="text-primary-foreground/75 text-lg leading-relaxed mb-8">
              Бесплатная консультация. Менеджер свяжется с вами в течение часа в удобное время и языке.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="inline-flex items-center px-8 py-4 bg-gradient-gold text-gold-foreground text-sm tracking-widest uppercase">
                Оставить заявку
              </Link>
              <a href="https://wa.me/17863030333" className="inline-flex items-center px-8 py-4 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground hover:text-ink transition-colors text-sm tracking-widest uppercase">
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
