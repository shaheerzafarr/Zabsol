import React from "react";
import Image from "next/image";
import { GLOBAL_REGIONS } from "@/data/landingData";
import classes from "./WorldMapGraphic.module.css";
import { cn } from "@/lib/utils";

const markers = [
  [244, 145], // North America
  [526, 118], // Europe
  [628, 187], // GCC
  [794, 214], // Asia Pacific
];

export default function WorldMapGraphic({ className = "" }) {
  return (
    <div className={cn(classes.mapWrap, className)}>
      <div className={classes.mapTop}>
        <span className={classes.mapEyebrow}><i aria-hidden="true" /> REMOTE-FIRST DELIVERY</span>
        <span className={classes.mapTopNote}>Connected across time zones</span>
      </div>

      <div className={classes.mapCanvas}>
        <Image
          src="/world-map.svg"
          alt="World map highlighting collaboration across North America, Europe, the GCC, and Asia Pacific"
          fill
          sizes="(max-width: 900px) 100vw, 90vw"
          className={classes.landMap}
        />
        <svg className={classes.routes} viewBox="0 0 1000 500" aria-hidden="true">
          <path d="M 244 145 Q 380 55 526 118 M 526 118 Q 600 110 628 187 M 628 187 Q 720 135 794 214" />
          {markers.map(([x, y], index) => (
            <g key={index}>
              <circle className={classes.markerHalo} cx={x} cy={y} r="13" />
              <circle className={classes.marker} cx={x} cy={y} r="5" />
            </g>
          ))}
        </svg>
      </div>

      <div className={classes.mapLegend} aria-label="Collaboration regions">
        {GLOBAL_REGIONS.map((region) => (
          <span key={region.id} className={classes.region}><i aria-hidden="true" />{region.label}</span>
        ))}
      </div>
    </div>
  );
}
