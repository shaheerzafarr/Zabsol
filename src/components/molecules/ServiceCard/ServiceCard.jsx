import React from "react";
import { ArrowRight } from "lucide-react";
import classes from "./ServiceCard.module.css";
import { cn } from "@/lib/utils";

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  className = "",
}) {
  return (
    <article className={cn(classes.serviceCard, className)}>
      {Icon && <Icon className={classes.icon} />}
      <div className={classes.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
      <span className={classes.circleArrow} aria-hidden="true">
        <ArrowRight size={15} />
      </span>
    </article>
  );
}
