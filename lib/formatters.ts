import { Camper } from "@/types/camper";

export const formatString = (str: string): string => {
  if (!str) return "";
  return str
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

export const getCamperFeaturesArray = (car: Camper): string[] => {
  const features: string[] = [
    formatString(car.transmission),
    formatString(car.engine),
    formatString(car.form),
  ];

  if (car.amenities && car.amenities.length > 0) {
    features.push(formatString(car.amenities[0]));
  }
  if (car.amenities && car.amenities.length > 1) {
    features.push(formatString(car.amenities[1]));
  }

  return features;
};

export const formatCarValue = (value: string, key: string): string => {
  const formLabels: Record<string, string> = {
    fullyIntegrated: "Full Truck",
    alcove: "Alcove",
    panel_van: "Panel Truck",
  };

  if (key === "form" && formLabels[value]) {
    return formLabels[value];
  }

  return value.replace(/(\d+(?:\.\d+)?)([a-zA-Z]+)/, "$1 $2");
};
