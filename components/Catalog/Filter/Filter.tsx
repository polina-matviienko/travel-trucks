"use client";

import { IoMdClose } from "react-icons/io";
import { FilterOptions } from "@/types/camper";
import { formatString } from "@/lib/formatters";
import { AppButton } from "@/components/UI/Button/Button";
import { ReadonlyURLSearchParams } from "next/navigation";

import css from "./Filter.module.css";

interface FilterProps {
  filters: FilterOptions;
  onClear: () => void;
  searchParams: ReadonlyURLSearchParams;
}

export default function Filter({
  onClear,
  filters,
  searchParams,
}: FilterProps) {
  const createMarkup = (filter: string[], filterName: string) => {
    const normalizedFilter =
      filterName === "Camper form" ? "form" : filterName.toLowerCase();
    const currentValue = searchParams.get(normalizedFilter);

    return (
      <fieldset className={css.filterGroup}>
        <legend className={css.groupTitle}>{filterName}</legend>
        <div className={css.grid}>
          {filter.map((name) => (
            <label key={name} className={css.optionLabel}>
              <input
                type="radio"
                name={normalizedFilter}
                value={name}
                className={css.realInput}
                key={`${normalizedFilter}-${currentValue}`}
                defaultChecked={currentValue === name}
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
      <div className={css.filterList}>
        {createMarkup(filters.forms, "Camper form")}
        {createMarkup(filters.engines, "Engine")}
        {createMarkup(filters.transmissions, "Transmission")}
      </div>

      <div className={css.actions}>
        <AppButton type="submit" className={css.submitBtn}>
          Search
        </AppButton>
        <AppButton
          type="button"
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
