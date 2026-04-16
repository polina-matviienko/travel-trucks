import { InputHTMLAttributes, ReactNode } from "react";
import css from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
}

export const Input = ({
  label,
  icon,
  className = "",
  ...props
}: InputProps) => {
  return (
    <div className={css.wrapper}>
      {label && <label className={css.label}>{label}</label>}
      <div className={css.container}>
        {icon && <span className={css.icon}>{icon}</span>}
        <input
          className={`${css.input} ${icon ? css.hasIcon : ""} ${className}`}
          {...props}
        />
      </div>
    </div>
  );
};
