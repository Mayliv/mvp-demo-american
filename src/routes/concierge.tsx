import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/ServicePage";
import img from "@/assets/concierge.jpg";

export const Route = createFileRoute("/concierge")({
  head: () => ({
    meta: [
      { title: "Консьерж-сервис в США | American Butler" },
      { name: "description", content: "Персональный консьерж в Майами и по США: персонал, бронирования, lifestyle 24/7." },
      { property: "og:title", content: "Консьерж в США — American Butler" },
      { property: "og:image", content: img },
    ],
  }),
  component: () => (
    <ServicePage
      eyebrow="Concierge · USA"
      title="Персональный консьерж 24/7"
      lead="Подбираем персонал, бронируем рестораны и закрытые мероприятия, решаем lifestyle-задачи любой сложности — в Майами и по всей Америке."
      image={img}
      offers={[
        { title: "Подбор персонала", description: "Няни, водители, домработницы, повара, ассистенты с проверкой и опытом." },
        { title: "Бронирования", description: "Лучшие рестораны, клубы, закрытые события и недоступные места." },
        { title: "Lifestyle-задачи", description: "Подарки, цветы, ивенты, шопинг, личные поручения по списку." },
        { title: "Эскорт и охрана", description: "Личная охрана и сопровождение для VIP-клиентов и семей." },
        { title: "Travel-консьерж", description: "Поездки, отели, частные джеты, трансферы по всей Америке." },
        { title: "Подписка на сервис", description: "Месячные пакеты с персональным менеджером для постоянной поддержки." },
      ]}
      process={[
        "Знакомство и оценка ваших задач и стиля жизни.",
        "Назначаем персонального менеджера.",
        "Решаем задачи в режиме 24/7 в одном чате.",
        "Регулярно обновляем сервис и предлагаем новые возможности.",
      ]}
      ctaTitle="Нужен личный ассистент в США?"
      ctaText="Опишите задачи — подберём формат сервиса и закроем их за вас."
    />
  ),
});
