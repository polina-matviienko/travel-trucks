"use client";

import { useEffect, useRef } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useQuery } from "@tanstack/react-query";
import { fetchFilters } from "@/lib/campersApi";

import LocationInput from "@/components/Catalog/LocationInput/LocationInput";
import Filter from "@/components/Catalog/Filter/Filter";

import css from "./Sidebar.module.css";

export default function SidebarDefault() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const formRef = useRef<HTMLFormElement>(null);

  const { data: filters } = useQuery({
    queryKey: ["filters"],
    queryFn: () => fetchFilters(),
    refetchOnMount: false,
  });

  useEffect(() => {
    if (searchParams.toString() === "") {
      formRef.current?.reset();
    }
  }, [searchParams]);

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
    formRef.current?.reset();
    router.push(pathname);
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit} className={css.form}>
      <LocationInput defaultValue={searchParams.get("location") || ""} />

      <div className={css.filtersWrapper}>
        <div className={css.filtersLabel}>Filters</div>
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
