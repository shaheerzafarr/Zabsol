import React from "react";
import classes from "./WorldMapGraphic.module.css";
import { cn } from "@/lib/utils";

const regions = [
  { id: "ml1", label: "North America", className: classes.ml1 },
  { id: "ml2", label: "Europe", className: classes.ml2 },
  { id: "ml3", label: "GCC", className: classes.ml3 },
  { id: "ml4", label: "Asia Pacific", className: classes.ml4 },
];

export default function WorldMapGraphic({ className = "" }) {
  return (
    <div className={cn(classes.mapWrap, className)}>
      <svg className={classes.worldMap} viewBox="0 0 640 230" aria-hidden="true">
        <defs>
          <linearGradient id="worldGlow" x1="0" x2="1">
            <stop offset="0" stopColor="#0a5cff" stopOpacity=".25" />
            <stop offset=".5" stopColor="#2cd9ff" stopOpacity=".95" />
            <stop offset="1" stopColor="#0a5cff" stopOpacity=".3" />
          </linearGradient>
          <filter id="mapGlow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g fill="none" stroke="#0b64b7" strokeWidth="1">
          <path d="M75 90 C120 58 145 62 185 75 C212 84 235 73 258 84 C281 96 296 127 330 122 C370 116 392 94 433 100 C468 105 479 126 520 118" />
          <path d="M122 128 C161 115 207 120 239 139 C268 156 311 167 355 151 C394 137 422 145 471 153" />
          <path d="M168 58 C205 29 260 36 291 59 C319 80 360 77 391 57" />
          <path d="M316 47 C330 80 330 111 319 149" />
        </g>

        <g fill="#0a89ff" opacity=".35">
          <path d="M92 60l55-20 52 13 31 25-17 33-52 7-35 25-46-31z" />
          <path d="M238 66l57-25 58 17 19 31-17 28-46 15-25 31-47-14-15-37z" />
          <path d="M379 69l47-24 66 11 49 32-12 35-53 10-32 29-35-14-17-33z" />
        </g>

        <g stroke="url(#worldGlow)" strokeWidth="1.4" fill="none" opacity=".9">
          <path d="M126 92 Q300 5 502 105" />
          <path d="M126 92 Q332 199 502 105" />
          <path d="M275 112 Q394 34 502 105" />
        </g>

        <g fill="#41ddff" filter="url(#mapGlow)">
          <circle cx="126" cy="92" r="5" />
          <circle cx="275" cy="112" r="5" />
          <circle cx="389" cy="89" r="5" />
          <circle cx="502" cy="105" r="5" />
        </g>
      </svg>

      {regions.map((region) => (
        <span key={region.id} className={cn(classes.mapLabel, region.className)}>
          {region.label}
        </span>
      ))}
    </div>
  );
}
