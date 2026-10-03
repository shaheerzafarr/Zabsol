import React from "react";
import classes from "./WhyCard.module.css";
import { cn } from "@/lib/utils";

export default function WhyCard({
  title,
  description,
  icon: Icon,
  className = "",
}) {
  return (
    <article className={cn(classes.whyCard, className)}>
      {Icon && <Icon className={classes.icon} />}
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.desc}>{description}</p>
    </article>
  );
}
