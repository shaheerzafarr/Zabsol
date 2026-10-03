import React from "react";
import { ArrowRight } from "lucide-react";
import classes from "./ProcessStepCard.module.css";
import { cn } from "@/lib/utils";

export default function ProcessStepCard({
  step,
  title,
  description,
  icon: Icon,
  isLast = false,
  className = "",
}) {
  return (
    <article className={cn(classes.card, className)}>
      <div className={classes.processIcon}>
        {Icon ? <Icon /> : <span>{step}</span>}
      </div>
      <div>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.desc}>{description}</p>
      </div>
      {!isLast && <ArrowRight className={classes.processArrow} aria-hidden="true" />}
    </article>
  );
}
