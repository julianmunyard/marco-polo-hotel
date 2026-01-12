import Link from "next/link";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary";
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  className?: string;
  target?: string;
  type?: "button" | "submit" | "reset";
}

export default function Button({
  children,
  href,
  onClick,
  variant = "primary",
  icon,
  iconPosition = "left",
  className = "",
  target,
  type = "button",
}: ButtonProps) {
  const baseClasses = "btn";
  const variantClasses = variant === "primary" ? "btn-primary" : "btn-secondary";
  const iconClasses = icon && iconPosition === "left" ? "btn-icon-left" : "";
  const classes = `${baseClasses} ${variantClasses} ${iconClasses} ${className}`;

  if (href) {
    return (
      <Link href={href} target={target} className={classes}>
        {icon && iconPosition === "left" && <span>{icon}</span>}
        <span>{children}</span>
        {icon && iconPosition === "right" && <span>{icon}</span>}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes}>
      {icon && iconPosition === "left" && <span>{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === "right" && <span>{icon}</span>}
    </button>
  );
}
