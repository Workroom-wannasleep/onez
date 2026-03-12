import Link from "next/link";
import Hero from "@/components/ui/Hero";
import Button from "@/components/ui/Button";

export default function Home() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* Hero Section */}
      <Hero
        title="Space Onez"
        subtitle="영도의 살아있는 역사를 품은 레스토랑형 카페, 스페이스 원지"
        imageSrc="/images/onez-main.jpg"
        imageAlt="Onez interior"
        height="full"
      >
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button href="/events" variant="primary" size="large">
            프로그램 안내
          </Button>
          <Button href="/venue" variant="outline" size="large">
            공간 둘러보기
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
        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-start px-8 pt-28 pb-72 text-center">
          <div className="max-w-4xl">
            <p className="mb-4 text-sm uppercase tracking-[0.25em] text-white/70">
              ONEZ
            </p>

            <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
              영도의 시간과 공간을 담은 곳,
              <br />
              스페이스 원지
            </h2>

            <p className="mt-8 max-w-3xl mx-auto text-lg md:text-2xl leading-relaxed text-white/90">
              스페이스 원지는 레스토랑형 카페이자 복합 문화 공간으로,
              <br />
              식사와 휴식, 전시와 모임이 자연스럽게 공존하는 장소입니다.
            </p>
          </div>
        </div>

        {/* 이미지 안에 내장된 Footer */}
        <div className="absolute bottom-0 left-0 z-10 w-full border-t border-white/10 bg-black/35 backdrop-blur-md">
          <div className="mx-auto max-w-7xl px-8 py-10">
            <div className="grid grid-cols-1 gap-10 md:grid-cols-3">
              {/* Brand */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">Onez</h3>
                <p className="text-sm leading-relaxed text-white/80">
                  하나의 공간, 다양한 가치
                </p>
              </div>

              {/* Links */}
              <div>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                  Menu
                </h4>
                <ul className="space-y-2 text-sm text-white/80">
                  <li>
                    <Link href="/about" className="hover:text-white transition-colors">
                      ONEZ 소개
                    </Link>
                  </li>
                  <li>
                    <Link href="/venue" className="hover:text-white transition-colors">
                      공간 안내
                    </Link>
                  </li>
                  <li>
                    <Link href="/events" className="hover:text-white transition-colors">
                      프로그램
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-white transition-colors">
                      문의
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact */}
              <div>
                <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white/90">
                  Contact
                </h4>
                <div className="space-y-2 text-sm text-white/80">
                  <p>부산광역시 영도구</p>
                  <p>ONEZ</p>
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
              © {currentYear} ONEZ. All rights reserved.
            </div>
          </div>
        </div>
      </section>
    </>
  );
}