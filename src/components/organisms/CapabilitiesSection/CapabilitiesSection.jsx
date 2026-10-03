import React from "react";
import SectionKicker from "@/components/atoms/SectionKicker/SectionKicker";
import TechBadge from "@/components/atoms/TechBadge/TechBadge";
import { TECHNOLOGIES_LIST } from "@/data/landingData";
import classes from "./CapabilitiesSection.module.css";
import { cn } from "@/lib/utils";

export default function CapabilitiesSection({ className = "" }) {
  return (
    <section className={cn(classes.capabilities, className)} id="capabilities">
      <div className={classes.shell}>
        <div className={classes.capsTop}>
          <SectionKicker className={classes.kicker}>OUR CAPABILITIES</SectionKicker>
          <h2>A proven stack for <span>ambitious ideas.</span></h2>
        </div>

        <div className={classes.techRow}>
          {TECHNOLOGIES_LIST.map((technology) => (
            <TechBadge key={technology.name} {...technology} />
          ))}
        </div>
      </div>
    </section>
  );
}
