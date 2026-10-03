import React from "react";
import classes from "./AboutCard.module.css";
import { cn } from "@/lib/utils";

export default function AboutCard({
  title,
  description,
  icon: Icon,
  className = "",
}) {
  return (
    <article className={cn(classes.aboutCard, className)}>
      {Icon && <Icon className={classes.icon} />}
      <h3 className={classes.title}>{title}</h3>
      <p className={classes.desc}>{description}</p>
      <i className={classes.bar} aria-hidden="true" />
    </article>
  );
}
