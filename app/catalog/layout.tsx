"use client";

import { usePathname } from "next/navigation";
import css from "./Catalog.module.css";

export default function CatalogLayout({
  children,
  sidebar,
}: {
  children: React.ReactNode;
  sidebar: React.ReactNode;
}) {
  const pathname = usePathname();
  const isDetailsPage = pathname.split("/").filter(Boolean).length > 1;

  return (
    <main
      className={`container ${css.page} ${isDetailsPage ? css.detailsPage : ""}`}
    >
      {!isDetailsPage && <aside className={css.sidebar}>{sidebar}</aside>}
      <div className={css.content}>{children}</div>
    </main>
  );
}
