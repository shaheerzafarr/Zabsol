import React from "react";
import SectionKicker from "@/components/atoms/SectionKicker/SectionKicker";
import WorldMapGraphic from "@/components/molecules/WorldMapGraphic/WorldMapGraphic";
import classes from "./GlobalPresenceSection.module.css";
import { cn } from "@/lib/utils";

export default function GlobalPresenceSection({ className = "" }) {
  return (
    <section className={cn(classes.global, className)}>
      <div className={cn(classes.shell, classes.globalGrid)}>
        <div>
          <SectionKicker>GLOBAL COLLABORATION</SectionKicker>
          <h2>One team. Wherever you build.</h2>
        </div>

        <WorldMapGraphic className={classes.map} />
      </div>
    </section>
  );
}
