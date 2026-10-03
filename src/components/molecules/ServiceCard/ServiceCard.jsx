import React from "react";
import classes from "./ServiceCard.module.css";
import { cn } from "@/lib/utils";

export default function ServiceCard({
  title,
  description,
  icon: Icon,
  number,
  className = "",
}) {
  return (
    <article className={cn(classes.serviceCard, className)}>
      <div className={classes.cardTop}>
        {Icon && <span className={classes.iconWrap}><Icon className={classes.icon} /></span>}
        <span className={classes.number}>{number}</span>
      </div>
      <div className={classes.content}>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
