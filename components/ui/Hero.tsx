import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle?: string;
  imageSrc: string;
  imageAlt: string;
  height?: "small" | "medium" | "large" | "full";
  overlay?: boolean;
  imagePosition?: string;
  imageScale?: number;
  imageFit?: "cover" | "contain";
  textPosition?: "center" | "bottom-left";
  titleClassName?: string;
  children?: React.ReactNode;
}

export default function Hero({
  title,
  subtitle,
  imageSrc,
  imageAlt,
  height = "large",
  overlay = true,
  imagePosition = "center",
  imageScale = 1,
  imageFit = "cover",
  textPosition = "center",
  titleClassName,
  children,
}: HeroProps) {
  const heightClasses = {
    small: "h-[50vh]",
    medium: "h-[60vh]",
    large: "h-[80vh]",
    full: "h-screen",
  };

  return (
    <section className={`relative ${heightClasses[height]} flex overflow-hidden bg-black ${textPosition === "bottom-left" ? "items-end justify-start" : "items-center justify-center"}`}>
      {/* Background Image */}
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          className={imageFit === "contain" ? "object-contain" : "object-cover"}
          style={{ objectPosition: imagePosition, transform: `scale(${imageScale})`, transformOrigin: "center center" }}
          priority
        />
        {overlay && (
          <div className={`absolute inset-0 ${textPosition === "bottom-left" ? "bg-gradient-to-t from-black/80 via-black/20 to-transparent" : "bg-gradient-to-b from-brand-900/70 via-brand-900/50 to-brand-900/70"}`} />
        )}
      </div>

      {/* Content */}
      <div className={`relative z-10 px-12 ${textPosition === "bottom-left" ? "pb-20 text-left max-w-2xl" : "text-center px-6 max-w-5xl mx-auto"}`}>
        <h1 className={titleClassName ?? "font-sans text-5xl md:text-7xl lg:text-8xl font-light tracking-wide text-brand-50 mb-4"}>
          {title}
        </h1>
        {subtitle && (
          <p className={`body-lg text-brand-100 ${textPosition === "bottom-left" ? "" : "max-w-3xl mx-auto"}`}>
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
