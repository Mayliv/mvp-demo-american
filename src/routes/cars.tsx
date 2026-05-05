import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/cars.jpg";

export const Route = createFileRoute("/cars")({
  head: () => ({
    meta: [
      { title: "Аренда премиум-авто в Майами | American Butler" },
      { name: "description", content: "Прокат внедорожников, спорткаров и люкс-авто Mercedes, BMW, Bentley, Rolls Royce в Майами." },
      { property: "og:title", content: "Аренда авто в Майами — American Butler" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Аренда авто · Майами"
      title="Премиум-авто на каждый день и особый случай"
      lead="Mercedes, BMW, Bentley, Rolls Royce, спорткары и внедорожники с доставкой в любую точку Майами. Без скрытых комиссий и сложных депозитов."
      image={img}
      offers={[
        { title: "Люкс-седаны", description: "Mercedes S-Class, BMW 7, Bentley Continental — для деловых поездок и трансферов." },
        { title: "Внедорожники", description: "Range Rover, Cadillac Escalade, Mercedes G-Class — комфорт для семьи и багажа." },
        { title: "Спорткары", description: "Lamborghini, Ferrari, Porsche, McLaren — эмоции для отпуска и фотосъёмок." },
        { title: "Доставка авто", description: "Подача в аэропорт, отель, резиденцию или порт. Возврат в удобном месте." },
        { title: "С водителем", description: "Профессиональный водитель, говорящий по-русски и по-английски." },
        { title: "Длительная аренда", description: "Специальные тарифы на месяц и более для жителей и приезжающих." },
      ]}
      process={[
        "Выбираете модель и сроки — пришлём актуальные цены и фото.",
        "Бронируем авто и согласуем точку подачи.",
        "Подаём машину в указанное время с полным баком.",
        "Поддержка 24/7 на весь срок аренды.",
      ]}
      ctaTitle="Какую машину подать?"
      ctaText="Пришлём подборку доступных авто с ценами в течение часа."
    />
  ),
});
