import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import { fetchCampers, fetchFilters } from "@/lib/campersApi";
import CatalogClient from "./Catalog.client";

export const metadata: Metadata = {
  title: "Catalog | TravelTrucks",
  description:
    "Find your ideal camper in our selection. Filter by type, location, and amenities to plan your next road trip.",
};

type Props = {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
};

export default async function CatalogPage({ searchParams }: Props) {
  const queryClient = new QueryClient();

  const resolvedParams = await searchParams;

  const cleanParams = Object.fromEntries(
    Object.entries(resolvedParams).map(([key, value]) => [
      key,
      Array.isArray(value) ? value[0] : (value ?? ""),
    ]),
  );

  const filtersString = new URLSearchParams(cleanParams).toString();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["campers", filtersString],
    initialPageParam: 1,
    queryFn: ({ pageParam = 1 }) =>
      fetchCampers({
        ...cleanParams,
        page: pageParam as number,
      }),
  });

  await queryClient.prefetchQuery({
    queryKey: ["filters"],
    queryFn: fetchFilters,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
}
