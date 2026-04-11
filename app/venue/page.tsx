"use client";

import Image from "next/image";
import SpaceSlideshow from "@/components/ui/SpaceSlideshow";
import Button from "@/components/ui/Button";
import Section from "@/components/ui/Section";
import { useLanguage } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

const features = [
  {
    title: { ko: "다이닝 & 카페", en: "Dining & Café" },
    body: {
      ko: "레스토랑형 카페로 식사와 커피, 음료가 함께합니다. 스테이크 하우스 원지의 시그니처 메뉴와 엄선된 와인을 경험하세요.",
      en: "A restaurant-style café offering meals, coffee, and drinks. Experience Steak House Onez's signature menu and curated wine selection.",
    },
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
  {
    title: { ko: "전시 & 문화", en: "Exhibition & Culture" },
    body: {
      ko: "팝아트부터 현대 미술까지, 공간 전체가 살아있는 갤러리입니다. 정기적인 전시와 문화 행사가 이곳에서 열립니다.",
      en: "From pop art to contemporary works, the entire space is a living gallery. Regular exhibitions and cultural events are held here.",
    },
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: { ko: "공연 & 라이브", en: "Performance & Live" },
    body: {
      ko: "전용 무대와 음향 시스템을 갖춘 공연 공간. 라이브 음악과 퍼포먼스가 일상의 한 부분이 되는 곳입니다.",
      en: "A dedicated stage and sound system for live performance. A place where live music and performance become part of everyday life.",
    },
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3"
        />
      </svg>
    ),
  },
  {
    title: { ko: "대관 & 모임", en: "Rental & Gatherings" },
    body: {
      ko: "기업 행사, 프라이빗 파티, 팝업 스토어까지. 넓은 공간과 유연한 구성으로 다양한 목적에 맞게 대관 가능합니다.",
      en: "Corporate events, private parties, pop-up stores and more. Flexible layout available for any occasion.",
    },
    icon: (
      <svg
        className="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
        />
      </svg>
    ),
  },
];

export default function Venue() {
  const { lang } = useLanguage();
  const tr = translations.venue;

  return (
    <>
      {/* Slideshow */}
      <SpaceSlideshow />

      {/* Space intro */}
      <Section spacing="large" background="dark">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xs uppercase tracking-[0.25em] text-accent-400 mb-4">
            Space one z
          </p>
          <h2 className="heading-md text-brand-50 mb-6">
            {lang === "ko"
              ? "영도 조선소 창고에서\n복합문화공간으로"
              : "From Yeongdo Shipyard Warehouse\nto Cultural Complex"}
          </h2>
          <p className="body-md text-brand-300 leading-relaxed">
            {lang === "ko"
              ? "스페이스 원지는 부산 영도의 오래된 조선소 창고를 리노베이션한 복합문화공간입니다. 높은 철골 천장과 거친 콘크리트 벽이 그대로 살아있는 이 공간에서, 식사와 커피, 전시와 공연, 모임이 자연스럽게 공존합니다."
              : "Space one z is a multi-cultural complex renovated from an old shipyard warehouse in Yeongdo, Busan. Within this space where high steel ceilings and raw concrete walls remain intact, dining, coffee, exhibitions, performances, and gatherings naturally coexist."}
          </p>
        </div>
      </Section>
      {/* Features grid */}
      <Section spacing="large" background="darker">
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <div
              key={i}
              className="flex gap-5 p-6 bg-brand-800/40 border border-brand-700 rounded-sm hover:border-brand-600 transition-colors"
            >
              <div className="flex-shrink-0 w-11 h-11 flex items-center justify-center bg-accent-500/10 border border-accent-500/25 rounded-sm text-accent-400">
                {f.icon}
              </div>
              <div>
                <h3 className="text-base font-semibold text-brand-50 mb-2">
                  {t(f.title, lang)}
                </h3>
                <p className="text-sm text-brand-300 leading-relaxed">
                  {t(f.body, lang)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>
      {/* Floor Plan */}
      <Section spacing="large" background="dark">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-[0.25em] text-accent-400 mb-3">
              Space Info
            </p>
            <h2 className="heading-md text-brand-50">
              {lang === "ko" ? "공간 구성" : "Floor Plan"}
            </h2>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
            {[
              {
                label: { ko: "총 면적", en: "Total Area" },
                value: "3,620㎡",
                sub: "1,097평",
              },
              {
                label: { ko: "ONE Z", en: "ONE Z" },
                value: "303평",
                sub: "~1,001㎡",
              },
              {
                label: { ko: "창고 1", en: "Warehouse 1" },
                value: "539평",
                sub: "~1,782㎡",
              },
              {
                label: { ko: "창고 2·3", en: "Warehouse 2·3" },
                value: "255평",
                sub: "~843㎡",
              },
            ].map((stat, i) => (
              <div
                key={i}
                className="text-center p-4 bg-brand-800/40 border border-brand-700 rounded-sm"
              >
                <p className="text-xs text-brand-400 uppercase tracking-wider mb-1">
                  {stat.label[lang]}
                </p>
                <p className="text-xl font-bold text-accent-400">
                  {stat.value}
                </p>
                <p className="text-xs text-brand-500 mt-0.5">{stat.sub}</p>
              </div>
            ))}
          </div>

          {/* Floor plan image */}
          <div className="rounded-sm overflow-hidden border border-brand-700">
            <Image
              src="/images/spaces/floor_plan.jpg"
              alt={lang === "ko" ? "공간 전개도" : "Floor plan"}
              width={1200}
              height={800}
              className="w-full h-auto object-contain"
            />
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section spacing="medium" background="accent">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="heading-md text-brand-50 mb-4">
            {t(tr.ctaTitle, lang)}
          </h2>
          <p className="body-md text-brand-100 mb-8">{t(tr.ctaBody, lang)}</p>
          <Button href="/contact" variant="primary" size="large">
            {t(tr.ctaBtn, lang)}
          </Button>
        </div>
      </Section>
    </>
  );
}
