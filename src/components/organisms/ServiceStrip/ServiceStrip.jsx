import React from "react";
import { SERVICE_STRIP_ITEMS } from "@/data/landingData";
import classes from "./ServiceStrip.module.css";
import { cn } from "@/lib/utils";

export default function ServiceStrip({ className = "" }) {
  return (
    <section className={cn(classes.serviceStrip, className)} aria-label="Services Overview">
      <div className={cn(classes.shell, classes.serviceStripInner)}>
        {SERVICE_STRIP_ITEMS.map(({ icon: Icon, label }, idx) => (
          <div key={idx} className={classes.stripItem}>
            <Icon className={classes.stripIcon} />
            <span>{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
