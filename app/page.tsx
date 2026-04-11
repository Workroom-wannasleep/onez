"use client";

import Link from "next/link";
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";
import { useLanguage } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function Home() {
  const currentYear = new Date().getFullYear();
  const { lang } = useLanguage();
  const tr = translations.home;

  return (
    <>
      {/* Hero Section */}
      <Hero
        logoSrc="/images/logo/logo2.png"
        logoAlt="one z"
        logoClassName="w-56 md:w-80 lg:w-96 mx-auto mb-4"
        subtitle={t(tr.heroSubtitle, lang)}
        imageSrc="/images/onez-main.jpg"
        imageAlt="Onez interior"
        height="full"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/events" variant="primary" size="large">
            {t(tr.programBtn, lang)}
          </Button>
          <Button href="/venue" variant="outline" size="large">
            {t(tr.spaceBtn, lang)}
          </Button>
        </div>
      </Hero>

      {/* Combined Intro + Footer Section */}
      <section className="relative min-h-screen w-full overflow-hidden">
        {/* 배경 이미지 */}
        <div className="absolute inset-0">
          <img
            src="/images/onez-outdoor-apt.jpg"
            alt="ONEZ outdoor view"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55" />
        </div>

        {/* 본문 텍스트 */}
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-start justify-center px-12 md:px-20 pt-28 pb-72">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-10">
              <span className="block w-10 h-px bg-white/40" />
              <p className="text-xs uppercase tracking-[0.5em] text-white/50">
                ONEZ · YEONGDO
              </p>
            </div>

            <h2 className="text-5xl md:text-7xl font-extralight leading-[1.15] tracking-tight text-white whitespace-pre-line">
              {t(tr.introHeading, lang)}
            </h2>

            <div className="mt-8 w-12 h-px bg-white/30" />

            <p className="mt-8 text-base md:text-lg leading-loose text-white/70 whitespace-pre-line">
              {t(tr.introBody, lang)}
            </p>
          </div>
        </div>

        {/* 이미지 안에 내장된 Footer */}
        <div className="absolute bottom-0 left-0 z-10 w-full border-t border-white/10 bg-black/35 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-8 py-4">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* Brand */}
              <div>
                <h3 className="text-3xl font-bold text-white mb-6">one z</h3>
                <p className="text-sm leading-relaxed text-white/80">
                  {t(tr.footerTagline, lang)}
                </p>
              </div>

              {/* Links */}
              <div className="flex flex-col items-center">
                <h4 className="mb-4 text-base font-bold uppercase tracking-wider text-white">
                  {t(tr.footerNavTitle, lang)}
                </h4>
                <ul className="space-y-2 text-sm text-white/80 text-center">
                  <li>
                    <Link
                      href="/about"
                      className="hover:text-white transition-colors"
                    >
                      {t(tr.footerAbout, lang)}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/venue"
                      className="hover:text-white transition-colors"
                    >
                      {t(tr.footerVenue, lang)}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/events"
                      className="hover:text-white transition-colors"
                    >
                      {t(tr.footerEvents, lang)}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/contact"
                      className="hover:text-white transition-colors"
                    >
                      {t(tr.footerContact, lang)}
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div className="flex flex-col items-start ml-auto">
                <h4 className="mb-4 text-base font-bold uppercase tracking-wider text-white">
                  Contact
                </h4>
                <div className="space-y-2 text-sm text-white/80">
                  <p>{t(tr.footerAddress, lang)}</p>
                  <p>one z</p>
                  <p className="pt-2">
                    <a
                      href="mailto:info@onez.com"
                      className="hover:text-white transition-colors"
                    >
                      info@onez.com
                    </a>
                  </p>
                  <p>
                    <a
                      href="tel:+820000000000"
                      className="hover:text-white transition-colors"
                    >
                      000-0000-0000
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/60">
              © {currentYear} one z. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
