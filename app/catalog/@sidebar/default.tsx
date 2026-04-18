"use client";

import { useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchFilters } from "@/lib/campersApi";

import css from "./Sidebar.module.css";

export default function SidebarDefault() {
  const router = useRouter();
  const pathname = usePathname();
  const formRef = useRef<HTMLFormElement>(null);
  const queryClient = useQueryClient();

  const { data: filters } = useQuery({
    queryKey: ["filters"],
    queryFn: () => fetchFilters(),
    refetchOnMount: false,
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;

    const formData = new FormData(formRef.current);
    const params = new URLSearchParams();

    formData.forEach((value, key) => {
      if (value && value.toString().trim() !== "") {
        params.append(key, value.toString());
      }
    });

    router.push(`${pathname}?${params.toString()}`);
  };

  const handleClear = () => {
    formRef.current?.reset();
    queryClient.resetQueries({ queryKey: ["campers"] });
    router.push(pathname);
  };

  return (
    <aside className={css.sidebarWrapper}>
      <form ref={formRef} onSubmit={handleSubmit} className={css.form}>
        <p
          style={{ color: "white", fontSize: "14px", backgroundColor: "green" }}
        >
          Sidebar Placeholder
        </p>

        {/* Сюди потім треба додати компонент з фільтрацією */}
      </form>
    </aside>
  );
}
