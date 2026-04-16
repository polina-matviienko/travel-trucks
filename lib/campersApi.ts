import { api } from "./api";
import {
  Camper,
  CampersResponse,
  Review,
  BookingPayload,
  BookingResponse,
  SearchParams,
  FilterOptions,
} from "@/types/camper";

export const fetchCampers = async (
  pageParam: number = 1,
  filters: SearchParams = {},
): Promise<CampersResponse> => {
  const { data } = await api.get<CampersResponse>("/campers", {
    params: {
      page: pageParam,
      perPage: 4,
      ...filters,
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
  camperId: string,
  payload: BookingPayload,
): Promise<BookingResponse> => {
  const { data } = await api.post<BookingResponse>(
    `/campers/${camperId}/booking-requests`,
    payload,
  );
  return data;
};
