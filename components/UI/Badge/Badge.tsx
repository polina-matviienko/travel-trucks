import { IconType } from "react-icons";
import { LuFuel } from "react-icons/lu";
import { BsDiagram3 } from "react-icons/bs";
import { FaCar } from "react-icons/fa6";
import css from "./Badge.module.css";
import { VehicleForm, Transmission, Engine } from "@/types/camper";

interface BadgeConfigItem {
  icon?: IconType;
  label: string;
}

const badgeConfig: Record<string, BadgeConfigItem> = {
  petrol: { icon: LuFuel, label: "Petrol" },
  diesel: { icon: LuFuel, label: "Diesel" },
  hybrid: { icon: LuFuel, label: "Hybrid" },
  electric: { icon: LuFuel, label: "Electric" },
  automatic: { icon: BsDiagram3, label: "Automatic" },
  manual: { icon: BsDiagram3, label: "Manual" },
  alcove: { icon: FaCar, label: "Alcove" },
  panel_van: { icon: FaCar, label: "Panel van" },
  integrated: { icon: FaCar, label: "Integrated" },
  semi_integrated: { icon: FaCar, label: "Semi integrated" },
  ac: { label: "AC" },
  bathroom: { label: "Bathroom" },
  kitchen: { label: "Kitchen" },
  tv: { label: "TV" },
  radio: { label: "Radio" },
  refrigerator: { label: "Refrigerator" },
  microwave: { label: "Microwave" },
  gas: { label: "Gas" },
  water: { label: "Water" },
};

interface BadgeProps {
  type: VehicleForm | Transmission | Engine | string;
  showIcon?: boolean;
}

export const Badge = ({ type, showIcon = false }: BadgeProps) => {
  const key = type.toLowerCase().replace(/\s+/g, "_");
  const config = badgeConfig[key];

  if (!config) return null;

  const { icon: Icon, label } = config;

  return (
    <div className={css.badge}>
      {showIcon && Icon && <Icon size={20} className={css.icon} />}
      <span className={css.label}>{label}</span>
    </div>
  );
};
