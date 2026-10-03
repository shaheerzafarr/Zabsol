import React from "react";
import SectionKicker from "@/components/atoms/SectionKicker/SectionKicker";
import WhyCard from "@/components/molecules/WhyCard/WhyCard";
import { WHY_ZABSOL_ITEMS } from "@/data/landingData";
import classes from "./WhySection.module.css";
import { cn } from "@/lib/utils";

export default function WhySection({ className = "" }) {
  return (
    <section className={cn(classes.why, className)}>
      <div className={cn(classes.shell, classes.whyGrid)}>
        <div className={classes.whyTitle}>
          <SectionKicker>WHY ZABSOL</SectionKicker>
          <h2>A partner built for what&apos;s next.</h2>
        </div>

        {WHY_ZABSOL_ITEMS.map(({ title, description, icon }, idx) => (
          <WhyCard
            key={idx}
            title={title}
            description={description}
            icon={icon}
          />
        ))}
      </div>
    </section>
  );
}
