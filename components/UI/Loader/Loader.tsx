"use client";

import { PulseLoader } from "react-spinners";
import css from "./Loader.module.css";

interface LoaderProps {
  size?: number;
}

export const Loader = ({ size = 15 }: LoaderProps) => {
  return (
    <div className={css.loaderWrapper}>
      <PulseLoader
        color="#829B91"
        size={size}
        margin={4}
        speedMultiplier={0.8}
      />
      <p className={css.loaderText}>Loading...</p>
    </div>
  );
};
