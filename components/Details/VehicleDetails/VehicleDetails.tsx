"use client";

import { Camper } from "@/types/camper";
import { Badge } from "@/components/UI/Badge/Badge";
import { getCamperFeaturesArray, formatCarValue } from "@/lib/formatters";
import css from "./VehicleDetails.module.css";

interface VehicleDetailsProps {
  camper: Camper;
}

export default function VehicleDetails({ camper }: VehicleDetailsProps) {
  const features = getCamperFeaturesArray(camper);

  return (
    <div className={css.contentBlock}>
      <h3 className={css.title}>Vehicle details</h3>

      <ul className={css.badgeList}>
        {features.map((feature, index) => (
          <li key={index}>
            <Badge type={feature} showIcon={false} />
          </li>
        ))}
      </ul>

      <ul className={css.specsList}>
        <li className={css.specItem}>
          <span>Length</span>
          <span>{formatCarValue(camper.length, "length")}</span>
        </li>
        <li className={css.specItem}>
          <span>Width</span>
          <span>{formatCarValue(camper.width, "width")}</span>
        </li>
        <li className={css.specItem}>
          <span>Height</span>
          <span>{formatCarValue(camper.height, "height")}</span>
        </li>
        <li className={css.specItem}>
          <span>Tank</span>
          <span>{formatCarValue(camper.tank, "tank")}</span>
        </li>
        <li className={css.specItem}>
          <span>Consumption</span>
          <span>{formatCarValue(camper.consumption, "consumption")}</span>
        </li>
        <li className={css.specItem}>
          <span>Form</span>
          {formatCarValue(camper.form, "form")}
        </li>
      </ul>
    </div>
  );
}
