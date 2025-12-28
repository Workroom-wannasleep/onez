import Link from "next/link";

interface ButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline";
  size?: "small" | "medium" | "large";
  className?: string;
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  size = "medium",
  className = "",
}: ButtonProps) {
  const baseClasses = "inline-flex items-center justify-center font-medium transition-all duration-200 rounded-sm";

  const variantClasses = {
    primary: "bg-accent-500 text-brand-900 hover:bg-accent-400 active:bg-accent-600",
    secondary: "bg-brand-700 text-brand-50 hover:bg-brand-600 active:bg-brand-800",
    outline: "border-2 border-brand-400 text-brand-50 hover:bg-brand-800 hover:border-brand-300 active:bg-brand-700",
  };

  const sizeClasses = {
    small: "px-4 py-2 text-sm",
    medium: "px-6 py-3 text-base",
    large: "px-8 py-4 text-lg",
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
