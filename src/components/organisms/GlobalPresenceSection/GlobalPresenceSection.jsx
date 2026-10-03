import React from "react";
import { CheckCircle2 } from "lucide-react";
import SectionKicker from "@/components/atoms/SectionKicker/SectionKicker";
import WorldMapGraphic from "@/components/molecules/WorldMapGraphic/WorldMapGraphic";
import { GLOBAL_ADVANTAGES } from "@/data/landingData";
import classes from "./GlobalPresenceSection.module.css";
import { cn } from "@/lib/utils";

export default function GlobalPresenceSection({ className = "" }) {
  return (
    <section className={cn(classes.global, className)}>
      <div className={cn(classes.shell, classes.globalGrid)}>
        <div>
          <SectionKicker>GLOBAL PRESENCE</SectionKicker>
          <h2>Work with us from anywhere.</h2>
        </div>

        <p className={classes.copy}>
          We collaborate with clients across the globe, delivering high-quality
          solutions through a flexible and reliable remote-first model.
        </p>

        <WorldMapGraphic />

        <ul className={classes.advantagesList}>
          {GLOBAL_ADVANTAGES.map((text, idx) => (
            <li key={idx} className={classes.advantageItem}>
              <CheckCircle2 className={classes.checkIcon} />
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
