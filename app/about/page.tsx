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
        imageSrc="/images/onez-signboard.jpg"
        imageAlt="About us"
        height="full"
        imagePosition="center 35%"
        textPosition="bottom-left"
        titleClassName="heading-xl text-brand-50 mb-4"
      />

      {/* Mission + History Combined Section */}
      <Section spacing="large" background="white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-md text-brand-900 mb-8">
            {t(tr.historyTitle, lang)}
          </h2>
          <p className="body-lg text-brand-700 mb-6">
            {t(tr.missionBody1, lang)}
          </p>
          <p className="body-md text-brand-600 mb-6">
            {t(tr.missionBody2, lang)}
          </p>
          <p className="body-md text-brand-600 mb-6">
            {t(tr.historyBody1, lang)}
          </p>
          <p className="body-md text-brand-600">
            {t(tr.historyBody2, lang)}
          </p>
        </div>
      </Section>

      {/* Team Section */}
      <Section spacing="large" background="white">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="heading-md text-brand-900 mb-6">
            {t(tr.teamTitle, lang)}
          </h2>
          <p className="body-md text-brand-700">
            {t(tr.teamBody, lang)}
          </p>
        </div>
      </Section>
    </>
  );
}
