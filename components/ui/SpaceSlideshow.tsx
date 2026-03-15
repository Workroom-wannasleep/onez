'use client';

import { useState, useEffect, useCallback } from 'react';
import { useLanguage } from '@/context/LanguageContext';

const slides = [
  {
    src: '/images/spaces/onez_space_outerier_1.jpg',
    label: { ko: '야간 유리 파사드', en: 'Glass Façade at Night' },
  },
  {
    src: '/images/spaces/onez_space_interier_2.jpg',
    label: { ko: '다이닝 홀', en: 'Dining Hall' },
  },
  {
    src: '/images/spaces/onez_space_interier_3.jpg',
    label: { ko: '공연 무대 & 와인 셀러', en: 'Stage & Wine Cellar' },
  },
  {
    src: '/images/spaces/onez_space_interier_4.jpg',
    label: { ko: '스테이크 하우스 원지', en: 'Steak House Onez' },
  },
  {
    src: '/images/spaces/onez_space_interier_5.jpg',
    label: { ko: '메인 홀 — 항구 전망', en: 'Main Hall — Harbour View' },
  },
  {
    src: '/images/spaces/onez_space_interier_1.jpg',
    label: { ko: '라운지 & 바', en: 'Lounge & Bar' },
  },
  {
    src: '/images/spaces/onez_space_outerier_2.jpg',
    label: { ko: '실내 정원 통로', en: 'Indoor Garden Corridor' },
  },
  {
    src: '/images/spaces/onez_space_outerier_3.jpg',
    label: { ko: '정면 입구', en: 'Main Entrance' },
  },
  {
    src: '/images/spaces/onez_space_outerier_4.jpg',
    label: { ko: '항공 전경 — 영도 항구', en: 'Aerial View — Yeongdo Harbour' },
  },
];

const INTERVAL = 5000;

export default function SpaceSlideshow() {
  const { lang } = useLanguage();
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, INTERVAL);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <div
      className="relative w-full h-[88vh] overflow-hidden bg-black"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {/* Images — stacked, crossfade */}
      {slides.map((slide, i) => (
        <div
          key={slide.src}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            i === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.src}
            alt={slide.label[lang]}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/15 pointer-events-none" />

      {/* Label & counter */}
      <div className="absolute bottom-20 left-8 md:left-14 pointer-events-none">
        <p className="text-xs uppercase tracking-[0.25em] text-white/50 mb-1">
          {String(current + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </p>
        <p className="text-base md:text-lg font-medium text-white/90 tracking-wide">
          {slides[current].label[lang]}
        </p>
      </div>

      {/* Bar indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-1.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`h-[2px] rounded-full transition-all duration-500 ${
              i === current
                ? 'w-8 bg-accent-400'
                : 'w-4 bg-white/30 hover:bg-white/60'
            }`}
          />
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prev}
        aria-label="Previous slide"
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/40 border border-white/20 text-white/70 hover:bg-black/70 hover:text-white hover:border-white/50 backdrop-blur-sm transition-all duration-200"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </button>
      <button
        onClick={next}
        aria-label="Next slide"
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-black/40 border border-white/20 text-white/70 hover:bg-black/70 hover:text-white hover:border-white/50 backdrop-blur-sm transition-all duration-200"
      >
        <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}
