"use client";

import React from "react";
import { useSearchParams } from "next/navigation";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchCampers } from "@/lib/campersApi";

import CamperCard from "@/components/Catalog/CamperCard/CamperCard";
import { AppButton } from "@/components/UI/Button/Button";
import Loader from "@/components/UI/Loader/Loader";

import css from "./Catalog.module.css";

export default function CatalogClient() {
  const searchParams = useSearchParams();

  const filters = {
    location: searchParams.get("location") || undefined,
    form: searchParams.get("form") || undefined,
    engine: searchParams.get("engine") || undefined,
    transmission: searchParams.get("transmission") || undefined,
  };

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, status } =
    useInfiniteQuery({
      queryKey: ["campers", filters],
      queryFn: ({ pageParam = 1 }) =>
        fetchCampers({ ...filters, page: pageParam as number }),
      initialPageParam: 1,
      getNextPageParam: (lastPage) => {
        return lastPage.page < lastPage.totalPages
          ? lastPage.page + 1
          : undefined;
      },
      refetchOnMount: false,
    });

  const isEmpty = data?.pages[0]?.campers?.length === 0;

  return (
    <section className={css.catalog}>
      {status === "pending" && <Loader />}

      <div className={css.list}>
        {data?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.campers.map((camper) => (
              <CamperCard key={camper.id} camper={camper} />
            ))}
          </React.Fragment>
        ))}
      </div>

      {isEmpty && status !== "pending" && (
        <p className={css.emptyMessage}>
          Oops! No campers found for these filters.
        </p>
      )}

      {hasNextPage && (
        <div className={css.loadMoreWrapper}>
          <AppButton
            onClick={() => fetchNextPage()}
            variant="outline"
            className={css.loadMoreBtn}
            disabled={isFetchingNextPage}
          >
            {isFetchingNextPage ? "Loading..." : "Load more"}
          </AppButton>
        </div>
      )}
    </section>
  );
}
