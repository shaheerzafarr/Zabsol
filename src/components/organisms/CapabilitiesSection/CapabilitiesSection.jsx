import React from "react";
import { ArrowRight } from "lucide-react";
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
          <div>
            <SectionKicker>OUR CAPABILITIES</SectionKicker>
            <h2>Modern technologies for modern problems.</h2>
          </div>
          <a href="#contact" className={classes.outlineBtn}>
            See All Technologies <ArrowRight size={15} />
          </a>
        </div>

        <div className={classes.techRow}>
          {TECHNOLOGIES_LIST.map(({ name, accent }, idx) => (
            <TechBadge key={idx} name={name} accent={accent} />
          ))}
        </div>
      </div>
    </section>
  );
}
