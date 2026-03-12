"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { translations, t } from "@/lib/translations";

export default function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { lang, toggleLang } = useLanguage();
  const nav = translations.nav;

  const navigation = [
    { name: t(nav.home, lang), href: "/" },
    { name: t(nav.about, lang), href: "/about" },
    { name: t(nav.space, lang), href: "/venue" },
    { name: t(nav.events, lang), href: "/events" },
    { name: t(nav.contact, lang), href: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full text-white transition-all duration-300 ${
        scrolled ? "bg-black/40 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <nav className="container-width px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-display font-bold text-brand-50 hover:text-accent-400 transition-colors"
        >
          onez
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  isActive
                    ? "text-accent-400"
                    : "text-brand-200 hover:text-brand-50"
                }`}
              >
                {item.name}
              </Link>
            );
          })}

          {/* Language Toggle */}
          <button
            onClick={toggleLang}
            className="text-sm font-medium text-brand-200 hover:text-brand-50 transition-colors border border-brand-600 hover:border-brand-400 px-3 py-1 rounded-sm"
            aria-label="Toggle language"
          >
            {lang === "ko" ? "EN" : "한"}
          </button>
        </div>

        {/* Mobile: Language Toggle + Menu Button */}
        <div className="md:hidden flex items-center gap-3">
          <button
            onClick={toggleLang}
            className="text-sm font-medium text-brand-200 hover:text-brand-50 transition-colors border border-brand-600 hover:border-brand-400 px-3 py-1 rounded-sm"
            aria-label="Toggle language"
          >
            {lang === "ko" ? "EN" : "한"}
          </button>
          <button
            className="text-brand-50 hover:text-accent-400 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-brand-800/95 backdrop-blur-md border-t border-brand-700">
          <div className="px-6 py-4 space-y-3">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-2 text-base font-medium transition-colors ${
                    isActive
                      ? "text-accent-400"
                      : "text-brand-200 hover:text-brand-50"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </header>
  );
}
