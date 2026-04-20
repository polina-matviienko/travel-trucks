"use client";

import { useField } from "formik";
import { InputHTMLAttributes } from "react";
import css from "./Input.module.css";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

export const Input = ({ className = "", ...props }: InputProps) => {
  const [field] = useField(props.name);

  return (
    <div className={css.wrapper}>
      <input className={`${css.input} ${className}`} {...field} {...props} />
    </div>
  );
};
