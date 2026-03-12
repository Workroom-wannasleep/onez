'use client';

import Hero from "@/components/ui/Hero";
import Section from "@/components/ui/Section";
import { useLanguage } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function About() {
  const { lang } = useLanguage();
  const tr = translations.about;

  return (
    <>
      {/* Hero Section */}
      <Hero
        title={t(tr.heroTitle, lang)}
        subtitle={t(tr.heroSubtitle, lang)}
        imageSrc="/images/about-hero.jpg"
        imageAlt="About us"
        height="medium"
      />

      {/* Mission Section */}
      <Section spacing="large" background="dark">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-md text-brand-50 mb-8">
            {t(tr.missionTitle, lang)}
          </h2>
          <p className="body-lg text-brand-200 mb-6">
            {t(tr.missionBody1, lang)}
          </p>
          <p className="body-md text-brand-300">
            {t(tr.missionBody2, lang)}
          </p>
        </div>
      </Section>

      {/* History Section */}
      <Section spacing="large" background="darker">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="heading-md text-brand-50 mb-6">
              {t(tr.historyTitle, lang)}
            </h2>
            <p className="body-md text-brand-200 mb-6">
              {t(tr.historyBody1, lang)}
            </p>
            <p className="body-md text-brand-200">
              {t(tr.historyBody2, lang)}
            </p>
          </div>
          <div className="relative aspect-[4/3] bg-brand-700 rounded-sm overflow-hidden">
            <img
              src="/images/history.jpg"
              alt="Venue history"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </Section>

      {/* Values Section */}
      <Section spacing="large" background="dark">
        <div className="text-center mb-16">
          <h2 className="heading-md text-brand-50 mb-6">
            {t(tr.valuesTitle, lang)}
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          {/* Value 1 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-500/10 border border-accent-500/30 rounded-sm mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </div>
            <h3 className="heading-sm text-brand-50 mb-4">{t(tr.value1Title, lang)}</h3>
            <p className="text-brand-300">{t(tr.value1Body, lang)}</p>
          </div>

          {/* Value 2 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-500/10 border border-accent-500/30 rounded-sm mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
              </svg>
            </div>
            <h3 className="heading-sm text-brand-50 mb-4">{t(tr.value2Title, lang)}</h3>
            <p className="text-brand-300">{t(tr.value2Body, lang)}</p>
          </div>

          {/* Value 3 */}
          <div className="text-center">
            <div className="w-16 h-16 bg-accent-500/10 border border-accent-500/30 rounded-sm mx-auto mb-6 flex items-center justify-center">
              <svg className="w-8 h-8 text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="heading-sm text-brand-50 mb-4">{t(tr.value3Title, lang)}</h3>
            <p className="text-brand-300">{t(tr.value3Body, lang)}</p>
          </div>
        </div>
      </Section>

      {/* Team Section */}
      <Section spacing="large" background="darker">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-md text-brand-50 mb-6">
            {t(tr.teamTitle, lang)}
          </h2>
          <p className="body-md text-brand-200">
            {t(tr.teamBody, lang)}
          </p>
        </div>
      </Section>
    </>
  );
}
