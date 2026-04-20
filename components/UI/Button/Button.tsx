import Link from "next/link";
import css from "./Button.module.css";

interface BaseProps {
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "outline";
}

interface LinkProps extends BaseProps {
  href: string;
  target?: string;
  rel?: string;
}

interface ButtonProps extends BaseProps {
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const AppLink = ({
  children,
  href,
  className,
  variant = "primary",
  target,
  rel,
}: LinkProps) => {
  const rootClassName =
    `${css.button} ${css[variant]} ${className || ""}`.trim();
  return (
    <Link href={href} className={rootClassName} target={target} rel={rel}>
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
