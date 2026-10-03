import React from "react";
import SectionKicker from "@/components/atoms/SectionKicker/SectionKicker";
import ProcessStepCard from "@/components/molecules/ProcessStepCard/ProcessStepCard";
import { PROCESS_STEPS } from "@/data/landingData";
import classes from "./ProcessSection.module.css";
import { cn } from "@/lib/utils";

export default function ProcessSection({ className = "" }) {
  return (
    <section className={cn(classes.process, className)} id="process">
      <div className={classes.shell}>
        <div className={classes.processTop}>
          <SectionKicker>OUR PROCESS</SectionKicker>
          <h2>A clear and collaborative path to success.</h2>
        </div>

        <div className={classes.processFlow}>
          {PROCESS_STEPS.map((stepItem, idx) => (
            <ProcessStepCard
              key={idx}
              step={stepItem.step}
              title={stepItem.title}
              description={stepItem.description}
              icon={stepItem.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
