import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  height?: "small" | "medium" | "large" | "full";
  overlay?: boolean;
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  height = "large",
  overlay = true,
  children,
}: HeroProps) {
  const heightClasses = {
    small: "h-[50vh]",
    medium: "h-[60vh]",
    large: "h-[80vh]",
    full: "h-screen",
  };

  return (
    <section className={`relative ${heightClasses[height]} flex items-center justify-center overflow-hidden`}>
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className="object-cover"
          priority
        />
        {overlay && (
          <div className="absolute inset-0 bg-gradient-to-b from-brand-900/70 via-brand-900/50 to-brand-900/70" />
        )}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <h1 className="heading-xl text-brand-50 mb-6">
          {title}
        </h1>
        {subtitle && (
          <p className="body-lg text-brand-100 max-w-3xl mx-auto">
            {subtitle}
          </p>
        )}
        {children && (
          <div className="mt-8">
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
