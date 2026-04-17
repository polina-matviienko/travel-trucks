import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Metadata } from "next";
import { fetchCampers, fetchFilters } from "@/lib/campersApi";
import CatalogClient from "./Catalog.client";

export const metadata: Metadata = {
  title: "Catalog",
  description:
    "Find your ideal camper in our selection. Filter by type, location, and amenities to plan your next road trip.",
};

export default async function CatalogPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["campers", {}],
    queryFn: ({ pageParam = 1 }) => fetchCampers(pageParam as number, {}),
    initialPageParam: 1,
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
