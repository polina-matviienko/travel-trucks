"use client";

import { IoMdClose } from "react-icons/io";
import { FilterOptions } from "@/types/camper";
import { formatString } from "@/lib/formatters";
import { AppButton } from "@/components/UI/Button/Button";

import css from "./Filter.module.css";

interface FilterProps {
  filters: FilterOptions;
  onClear: () => void;
}

export default function Filter({ onClear, filters }: FilterProps) {
  const createMarkup = (filter: string[], filterName: string) => {
    const normalizedFilter =
      filterName === "Camper form"
        ? filterName.split(" ")[1].toLowerCase()
        : filterName.toLowerCase();

    return (
      <fieldset className={css.filterGroup}>
        <legend className={css.groupTitle}>{filterName}</legend>

        <div className={css.grid}>
          {filter.map((name, index) => (
            <label key={index} className={css.optionLabel}>
              <input
                type="radio"
                name={normalizedFilter}
                value={name}
                className={css.realInput}
              />
              <div className={css.optionCard}>
                <span className={css.labelContent}>{formatString(name)}</span>
              </div>
            </label>
          ))}
        </div>
      </fieldset>
    );
  };

  return (
    <div className={css.filterContainer}>
      {createMarkup(filters.forms, "Camper form")}
      {createMarkup(filters.engines, "Engine")}
      {createMarkup(filters.transmissions, "Transmission")}

      <div className={css.actions}>
        <AppButton type="submit" className={css.submitBtn}>
          Search
        </AppButton>
        <AppButton
          type="reset"
          variant="outline"
          className={css.resetBtn}
          onClick={onClear}
        >
          <IoMdClose className={css.closeIcon} />
          Clear Filters
        </AppButton>
      </div>
    </div>
  );
}
