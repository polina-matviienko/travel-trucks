import { fetchCamperById, fetchCamperReviews } from "@/lib/campersApi";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import CamperDetailsClient from "./CamperDetails.client";
import { Metadata } from "next";

type Props = {
  params: Promise<{ camperId: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { camperId } = await params;
  try {
    const camper = await fetchCamperById(camperId);

    if (!camper) {
      return { title: "Camper Not Found | TravelTrucks" };
    }

    return {
      title: `${camper.name} | TravelTrucks`,
      description: camper.description.slice(0, 160),
      openGraph: {
        title: `${camper.name} | TravelTrucks`,
        description: camper.description.slice(0, 160),
        images: [
          {
            url: camper.gallery?.[0]?.original || "",
            alt: camper.name,
          },
        ],
      },
    };
  } catch {
    return { title: "Camper Details | TravelTrucks" };
  }
}

export default async function CamperPage({ params }: Props) {
  const { camperId } = await params;
  const queryClient = new QueryClient();

  await Promise.all([
    queryClient.prefetchQuery({
      queryKey: ["camper", camperId],
      queryFn: () => fetchCamperById(camperId),
    }),
    queryClient.prefetchQuery({
      queryKey: ["camperReviews", camperId],
      queryFn: () => fetchCamperReviews(camperId),
    }),
  ]);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <CamperDetailsClient />
    </HydrationBoundary>
  );
}
