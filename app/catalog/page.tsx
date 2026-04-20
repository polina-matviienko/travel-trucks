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

export default async function CatalogPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryFn: ({ pageParam = 1 }) => fetchCampers({ page: pageParam as number }),
    queryKey: ["campers"],
    initialPageParam: 1,
  });

  await queryClient.prefetchQuery({
    queryFn: () => fetchFilters(),
    queryKey: ["filters"],
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CatalogClient />
    </HydrationBoundary>
  );
}
