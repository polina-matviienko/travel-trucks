"use client";

import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCampers } from "@/lib/campersApi";
import { CamperCard } from "../../components/Catalog/CamperCard/CamperCard";
import { AppButton } from "../../components/UI/Button/Button";
import css from "./Сatalog.module.css";

export default function CatalogClient() {
  const { data, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useInfiniteQuery({
      queryKey: ["campers", {}],
      queryFn: ({ pageParam = 1 }) => fetchCampers(pageParam as number, {}),
      initialPageParam: 1,
      getNextPageParam: (lastPage) =>
        lastPage.page < lastPage.totalPages ? lastPage.page + 1 : undefined,
    });

  const campers = data?.pages.flatMap((page) => page.campers) || [];

  return (
    <section className={css.catalogSection}>
      <div className={css.list}>
        {campers.map((camper) => (
          <CamperCard key={camper.id} camper={camper} />
        ))}
      </div>

      {hasNextPage && (
        <div className={css.loadMoreWrapper}>
          <AppButton
            onClick={() => fetchNextPage()}
            variant="outline"
            className={css.loadMoreBtn}
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </AppButton>
        </div>
      )}
    </section>
  );
}
