import { Camper } from "@/types/camper";

export const formatString = (str: string): string => {
  if (!str) return "";
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const getCamperFeaturesArray = (car: Camper): string[] => {
  const features: string[] = [car.transmission, car.engine, car.form];

  if (car.amenities && car.amenities.length > 0) {
    features.push(...car.amenities);
  }
  return features;
};

export const formatCarValue = (value: string, key: string): string => {
  const formLabels: Record<string, string> = {
    alcove: "Alcove",
    panel_van: "Panel truck",
    integrated: "Full truck",
    semi_integrated: "Semi-integrated",
  };

  if (key === "form" && formLabels[value]) {
    return formLabels[value];
  }

  return value.replace(/(\d+(?:\.\d+)?)([a-zA-Z]+)/, "$1 $2");
};

export const getInitial = (name: string): string => {
  if (!name) return "?";
  return name.trim().charAt(0).toUpperCase();
};
