import Link from "next/link";
import css from "./Button.module.css";

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}

interface LinkProps extends BaseProps {
  href: string;
}

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

export const AppLink = ({
  children,
  href,
  className,
  variant = "primary",
}: LinkProps) => {
  const rootClassName =
    `${css.button} ${css[variant]} ${className || ""}`.trim();
  return (
    <Link href={href} className={rootClassName}>
      {children}
    </Link>
  );
};

export const AppButton = ({
  children,
  onClick,
  className,
  variant = "primary",
  type = "button",
  disabled = false,
}: ButtonProps) => {
  const rootClassName =
    `${css.button} ${css[variant]} ${className || ""}`.trim();

  return (
    <button
      type={type}
      onClick={onClick}
      className={rootClassName}
      disabled={disabled}
    >
      {children}
    </button>
  );
};
