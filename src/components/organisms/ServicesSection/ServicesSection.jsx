import React from "react";
import SectionKicker from "@/components/atoms/SectionKicker/SectionKicker";
import ServiceCard from "@/components/molecules/ServiceCard/ServiceCard";
import { SERVICES_LIST } from "@/data/landingData";
import classes from "./ServicesSection.module.css";
import { cn } from "@/lib/utils";

export default function ServicesSection({ className = "" }) {
  return (
    <section className={cn(classes.services, className)} id="services">
      <div className={classes.shell}>
        <div className={classes.sectionRow}>
          <SectionKicker>OUR SERVICES</SectionKicker>
          <h2>End-to-end technology services for a smarter, faster tomorrow.</h2>
        </div>

        <div className={classes.servicesGrid}>
          {SERVICES_LIST.map(({ title, description, icon }, idx) => (
            <ServiceCard
              key={idx}
              title={title}
              description={description}
              icon={icon}
              number={String(idx + 1).padStart(2, "0")}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
