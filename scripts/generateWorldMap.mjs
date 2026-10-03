import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(scriptDir, "..");
const source = path.join(scriptDir, "data", "ne_110m_land.geojson");
const destination = path.join(root, "public", "world-map.svg");
const land = JSON.parse(fs.readFileSync(source, "utf8"));

// Equirectangular projection. The margins keep the coastlines clear of the panel edge.
const project = ([longitude, latitude]) => [
  40 + ((longitude + 180) / 360) * 920,
  35 + ((80 - latitude) / 145) * 400,
];

const point = (coordinate) => project(coordinate).map((value) => value.toFixed(1)).join(" ");
const polygons = land.features
  .filter((feature) => feature.bbox?.[3] >= -58)
  .map((feature) => feature.geometry.coordinates
    .map((ring) => `M ${ring.map(point).join(" L ")} Z`)
    .join(" "))
  .join(" ");

const meridians = [-150, -120, -90, -60, -30, 0, 30, 60, 90, 120, 150]
  .map((longitude) => {
    const [x] = project([longitude, 0]);
    return `<path d="M ${x.toFixed(1)} 35 V 435" />`;
  }).join("");
const parallels = [-60, -30, 0, 30, 60]
  .map((latitude) => {
    const [, y] = project([0, latitude]);
    return `<path d="M 40 ${y.toFixed(1)} H 960" />`;
  }).join("");

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 500" role="img" aria-label="World map">
<!-- Coastline data: Natural Earth 1:110m land, public domain. https://www.naturalearthdata.com/ -->
<g fill="none" stroke="#6ca6ce" stroke-width=".7" opacity=".21">${meridians}${parallels}</g>
<path d="${polygons}" fill="#286ba7" fill-rule="evenodd" stroke="#70b4e4" stroke-width=".7" stroke-linejoin="round" />
</svg>`;

fs.writeFileSync(destination, svg);
console.log(`Wrote ${destination}`);
