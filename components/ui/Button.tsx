import Link from "next/link";

interface ButtonProps {
  variant?: "primary" | "secondary" | "ghost" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const variants = {
  primary:
    "gradient-bg text-white font-bold shadow-lg hover:shadow-[0_0_30px_rgba(233,30,140,0.6)] hover:scale-105 active:scale-95",
  secondary:
    "bg-purple text-white font-bold hover:shadow-[0_0_30px_rgba(123,47,190,0.5)] hover:scale-105 active:scale-95",
  ghost:
    "border border-pink/50 text-pink hover:bg-pink/10 hover:border-pink active:scale-95",
  outline:
    "border border-text-2/40 text-text-1 hover:border-pink hover:text-pink bg-bg-card active:scale-95",
};

const sizes = {
  sm: "px-5 py-2 text-sm rounded-full",
  md: "px-7 py-3 text-base rounded-full",
  lg: "px-9 py-4 text-lg rounded-full",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  href,
  onClick,
  className = "",
  type = "button",
  disabled = false,
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-200 cursor-pointer select-none font-sans ${variants[variant]} ${sizes[size]} ${disabled ? "opacity-50 pointer-events-none" : ""} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
