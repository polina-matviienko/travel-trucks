"use client";
import { HiOutlineMap } from "react-icons/hi2";
import css from "./LocationInput.module.css";

interface Props {
  defaultValue: string;
}

export default function LocationInput({ defaultValue }: Props) {
  return (
    <div className={css.locationGroup}>
      <h3 className={css.locationLabel}>Location</h3>
      <div className={css.inputWrapper}>
        <input
          type="text"
          placeholder="City"
          className={css.input}
          name="location"
          defaultValue={defaultValue}
        />
        <HiOutlineMap className={css.icon} />
      </div>
    </div>
  );
}
