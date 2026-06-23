"use client";

import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchFilters } from "@/lib/campersApi";
import LocationInput from "@/components/Catalog/LocationInput/LocationInput";
import Filter from "@/components/Catalog/Filter/Filter";
import css from "./Sidebar.module.css";

export default function SidebarDefault() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);

  const { data: filters } = useQuery({
    queryKey: ["filters"],
    queryFn: () => fetchFilters(),
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const params = new URLSearchParams();

    formData.forEach((value, key) => {
      if (value) params.append(key, value.toString());
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    router.push(pathname);
    formRef.current?.reset();
  };

  return (
    <form
      key={searchParams.toString()}
      ref={formRef}
      onSubmit={handleSubmit}
      className={css.form}
    >
      <LocationInput defaultValue={searchParams.get("location") || ""} />
      <div className={css.filtersWrapper}>
        {filters && (
          <Filter
            onClear={handleClear}
            filters={filters}
            searchParams={searchParams}
          />
        )}
      </div>
    </form>
  );
}
