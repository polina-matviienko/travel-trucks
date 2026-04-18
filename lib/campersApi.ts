import { api } from "./api";
import {
  Camper,
  CampersResponse,
  Review,
  BookingPayload,
  BookingResponse,
  FilterOptions,
  GetCampersParams,
} from "@/types/camper";

export const fetchCampers = async (
  params: GetCampersParams,
): Promise<CampersResponse> => {
  const filteredEntries = Object.entries(params).filter(
    (entry) => entry[1] !== undefined && entry[1] !== "",
  );

  const searchParams = Object.fromEntries(filteredEntries);

  const { data } = await api.get<CampersResponse>("/campers", {
    params: {
      ...searchParams,
      perPage: 4,
    },
  });

  return data;
};

export const fetchFilters = async (): Promise<FilterOptions> => {
  const { data } = await api.get<FilterOptions>("/campers/filters");
  return data;
};

export const fetchCamperById = async (id: string): Promise<Camper> => {
  const { data } = await api.get<Camper>(`/campers/${id}`);
  return data;
};

export const fetchCamperReviews = async (id: string): Promise<Review[]> => {
  const { data } = await api.get<Review[]>(`/campers/${id}/reviews`);
  return data;
};

export const postBooking = async (
  payload: BookingPayload,
): Promise<BookingResponse> => {
  const { data } = await api.post<BookingResponse>(
    `/campers/${payload.camperId}/booking-requests`,
    {
      name: payload.name,
      email: payload.email,
    },
  );
  return data;
};
