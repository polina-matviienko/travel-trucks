export type VehicleForm =
  | "alcove"
  | "panel_van"
  | "integrated"
  | "semi_integrated";
export type Transmission = "automatic" | "manual";
export type Engine = "diesel" | "petrol" | "hybrid" | "electric";

export interface GalleryItem {
  id: string;
  camperId: string;
  thumb: string;
  original: string;
  order: number;
}

export interface Review {
  id: string;
  camperId: string;
  reviewer_name: string;
  reviewer_rating: number;
  comment: string;
  createdAt: string;
}

export interface Camper {
  id: string;
  name: string;
  price: number;
  rating: number;
  location: string;
  form: VehicleForm;
  length: string;
  width: string;
  height: string;
  tank: string;
  consumption: string;
  transmission: Transmission;
  engine: Engine;
  amenities: string[] | string;
  coverImage: string;
  totalReviews: number;
  description?: string;
  gallery?: GalleryItem[];
  createdAt?: string;
  updatedAt?: string;
}

export interface CampersResponse {
  page: number;
  perPage: number;
  total: number;
  totalPages: number;
  campers: Camper[];
}

export interface FilterOptions {
  forms: VehicleForm[];
  transmissions: Transmission[];
  engines: Engine[];
}

export interface BookingPayload {
  name: string;
  email: string;
}

export interface BookingResponse {
  message: string;
}

export interface SearchParams {
  location?: string;
  form?: VehicleForm;
  transmission?: Transmission;
  engine?: Engine;
}
