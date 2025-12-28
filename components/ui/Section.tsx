interface SectionProps {
  children: React.ReactNode;
  background?: "dark" | "darker" | "accent";
  spacing?: "small" | "medium" | "large";
  className?: string;
}

export default function Section({
  children,
  background = "dark",
  spacing = "large",
  className = "",
}: SectionProps) {
  const backgroundClasses = {
    dark: "bg-brand-900",
    darker: "bg-brand-800",
    accent: "bg-gradient-to-br from-brand-800 to-brand-900",
  };

  const spacingClasses = {
    small: "py-12 px-6",
    medium: "py-16 px-6 md:py-20",
    large: "py-16 px-6 md:py-24 lg:py-32",
  };

  return (
    <section className={`${backgroundClasses[background]} ${spacingClasses[spacing]} ${className}`}>
      <div className="container-width">
        {children}
      </div>
    </section>
  );
}
