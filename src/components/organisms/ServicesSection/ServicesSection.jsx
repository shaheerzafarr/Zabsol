import React from "react";
import { ArrowRight } from "lucide-react";
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
          <div>
            <SectionKicker>OUR SERVICES</SectionKicker>
            <h2>End-to-end technology services for a smarter, faster tomorrow.</h2>
          </div>
          <div className={classes.sectionSide}>
            <p>
              We offer a full suite of technology and consulting services to help
              you build, scale, and modernize your business.
            </p>
            <a href="#services" className={classes.btn}>
              View All Services <ArrowRight size={16} />
            </a>
          </div>
        </div>

        <div className={classes.servicesGrid}>
          {SERVICES_LIST.map(({ title, description, icon }, idx) => (
            <ServiceCard
              key={idx}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
