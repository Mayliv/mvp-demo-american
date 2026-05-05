import { Link } from "@tanstack/react-router";
import logoFooter from "@/assets/logo-footer.png";

export function SiteFooter() {
  return (
    <footer className="bg-gradient-dark text-primary-foreground mt-32">
      <div className="container-x py-20 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-4 mb-6">
            <img src={logoFooter} alt="American Butler" className="h-20 w-auto" />
            <div className="leading-tight border-l border-primary-foreground/20 pl-4">
              <div className="font-display text-2xl">American Butler</div>
              <div className="text-[11px] tracking-[0.2em] uppercase text-primary-foreground/60 mt-1">Агентство путешествий и отдыха</div>
            </div>
          </div>
          <p className="text-primary-foreground/70 max-w-md leading-relaxed">
            Премиальный консьерж и сопровождение русскоязычных клиентов в США.
            Майами, Нью-Йорк, Лос-Анджелес и по всей Америке.
          </p>
        </div>
        <div>
          <div className="eyebrow mb-5">Направления</div>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li><Link to="/real-estate">Недвижимость</Link></li>
            <li><Link to="/cars">Аренда авто</Link></li>
            <li><Link to="/yachts">Яхты</Link></li>
            <li><Link to="/travel">Путешествия</Link></li>
            <li><Link to="/relocation">Переезд в США</Link></li>
            <li><Link to="/childbirth">Роды в Майами</Link></li>
            <li><Link to="/concierge">Консьерж</Link></li>
          </ul>
        </div>
        <div>
          <div className="eyebrow mb-5">Контакты</div>
          <ul className="space-y-3 text-sm text-primary-foreground/80">
            <li>Miami, Florida, USA</li>
            <li><a href="tel:+17863030333" className="hover:text-gold">+1 (786) 303-0333</a></li>
            <li><a href="tel:+19545917817" className="hover:text-gold">+1 (954) 591-7817</a></li>
            <li><a href="mailto:link@americanbutler.ru" className="hover:text-gold">link@americanbutler.ru</a></li>
            <li><a href="mailto:admin@americanbutler.ru" className="hover:text-gold">admin@americanbutler.ru</a></li>
            <li>Telegram · WhatsApp</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-3 text-xs text-primary-foreground/50">
          <div>© {new Date().getFullYear()} American Butler. Все права защищены.</div>
          <div>Премиальный сервис в США</div>
        </div>
      </div>
    </footer>
  );
}
