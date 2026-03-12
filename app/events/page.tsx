"use client";

import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

const upcomingEvents = [
  {
    id: 1,
    title: { ko: "재즈 나이트: 퀸텟", en: "Jazz Night: The Quintet" },
    date: "March 15, 2024",
    time: { ko: "오후 8:00", en: "8:00 PM" },
    category: { ko: "음악", en: "Music" },
    image: "/images/event-1.jpg",
    description: {
      ko: "저명한 재즈 뮤지션들이 클래식 및 컨템포러리 곡을 연주하는 아늑한 저녁.",
      en: "An intimate evening with renowned jazz musicians performing classic and contemporary pieces.",
    },
    price: "$35",
  },
  {
    id: 2,
    title: { ko: "현대 미술 전시", en: "Contemporary Art Exhibition" },
    date: "March 20 - April 15, 2024",
    time: { ko: "오프닝 리셉션: 오후 6:00", en: "Opening Reception: 6:00 PM" },
    category: { ko: "미술", en: "Art" },
    image: "/images/event-2.jpg",
    description: {
      ko: "정체성과 장소라는 주제를 탐구하는 신진 지역 예술가들의 작품 전시.",
      en: "Featuring works from emerging local artists exploring themes of identity and place.",
    },
    price: { ko: "무료", en: "Free" },
  },
];

export default function Events() {
  const { lang } = useLanguage();
  const tr = translations.events;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={t(tr.heroTitle, lang)}
        subtitle={t(tr.heroSubtitle, lang)}
        imageSrc="/images/events-hero.jpg"
        imageAlt="Events at our venue"
        height="medium"
      />

      {/* Events Listing */}
      <Section spacing="large" background="dark">
        <div className="space-y-8">
          {upcomingEvents.map((event, index) => (
            <div
              key={event.id}
              className={`grid md:grid-cols-3 gap-8 p-6 rounded-sm ${
                index % 2 === 0 ? "bg-brand-800/50" : "bg-brand-800/30"
              } border border-brand-700 hover:border-brand-600 transition-colors`}
            >
              {/* Event Image */}
              <div className="relative aspect-[4/3] bg-brand-700 rounded-sm overflow-hidden">
                <img
                  src={event.image}
                  alt={t(event.title, lang)}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Event Details */}
              <div className="md:col-span-2 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-accent-400 uppercase tracking-wider">
                      {t(event.category, lang)}
                    </span>
                    <span className="text-sm text-brand-300">{event.date}</span>
                  </div>

                  <h3 className="heading-sm text-brand-50 mb-3">
                    {t(event.title, lang)}
                  </h3>

                  <p className="text-sm text-brand-400 mb-4">
                    {t(event.time, lang)}
                  </p>

                  <p className="text-brand-200 mb-6">
                    {t(event.description, lang)}
                  </p>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-accent-400">
                    {typeof event.price === "string"
                      ? event.price
                      : t(event.price, lang)}
                  </span>
                  <Button href="#" variant="primary" size="small">
                    {t(tr.getTickets, lang)}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Past Events Section */}
      <Section spacing="large" background="darker">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-md text-brand-50 mb-6">
            {t(tr.pastEventsTitle, lang)}
          </h2>
          <p className="body-md text-brand-200 mb-8">
            {t(tr.pastEventsBody, lang)}
          </p>
          <Button href="#" variant="secondary">
            {t(tr.viewArchive, lang)}
          </Button>
        </div>
      </Section>

      {/* Newsletter CTA */}
      <Section spacing="medium" background="accent">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-md text-brand-50 mb-6">
            {t(tr.newsletterTitle, lang)}
          </h2>
          <p className="body-md text-brand-100 mb-8">
            {t(tr.newsletterBody, lang)}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <input
              type="email"
              placeholder={t(tr.emailPlaceholder, lang)}
              className="flex-1 px-6 py-3 bg-brand-800 border border-brand-600 text-brand-50 placeholder:text-brand-400 rounded-sm focus:outline-none focus:border-accent-400 transition-colors"
            />
            <Button variant="primary" size="medium">
              {t(tr.subscribe, lang)}
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
