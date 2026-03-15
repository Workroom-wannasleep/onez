'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function Footer() {
  const pathname = usePathname();
  const { lang } = useLanguage();
  const tr = translations.home;
  const currentYear = new Date().getFullYear();

  // 홈 페이지는 이미 이미지 안에 Footer가 있으므로 숨김
  if (pathname === "/") return null;

  return (
    <footer className="w-full border-t border-white/10 bg-black/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-8 py-4">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-3xl font-bold text-white mb-6">Onez</h3>
            <p className="text-sm leading-relaxed text-white/80">
              {t(tr.footerTagline, lang)}
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col items-center">
            <h4 className="mb-4 text-base font-semibold uppercase tracking-wider text-white/90">
              {t(tr.footerNavTitle, lang)}
            </h4>
            <ul className="space-y-2 text-sm text-white/80 text-center">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  {t(tr.footerAbout, lang)}
                </Link>
              </li>
              <li>
                <Link href="/venue" className="hover:text-white transition-colors">
                  {t(tr.footerVenue, lang)}
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-white transition-colors">
                  {t(tr.footerEvents, lang)}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  {t(tr.footerContact, lang)}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-start ml-auto">
            <h4 className="mb-4 text-base font-semibold uppercase tracking-wider text-white/90">
              Contact
            </h4>
            <div className="space-y-2 text-sm text-white/80">
              <p>{t(tr.footerAddress, lang)}</p>
              <p>ONEZ</p>
              <p className="pt-2">
                <a href="mailto:info@onez.com" className="hover:text-white transition-colors">
                  info@onez.com
                </a>
              </p>
              <p>
                <a href="tel:+820000000000" className="hover:text-white transition-colors">
                  000-0000-0000
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center text-sm text-white/60">
          © {currentYear} ONEZ. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
