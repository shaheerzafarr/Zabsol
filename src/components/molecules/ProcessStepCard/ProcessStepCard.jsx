import React from "react";
import classes from "./ProcessStepCard.module.css";
import { cn } from "@/lib/utils";

export default function ProcessStepCard({
  step,
  title,
  description,
  icon: Icon,
  className = "",
}) {
  return (
    <article className={cn(classes.card, className)}>
      <div className={classes.processIcon}>
        {Icon ? <Icon /> : <span>{step}</span>}
      </div>
      <div className={classes.cardContent}>
        <span className={classes.stepNumber}>STEP {step}</span>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.desc}>{description}</p>
      </div>
    </article>
  );
}
