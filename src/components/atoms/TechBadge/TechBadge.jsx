import React from "react";
import classes from "./TechBadge.module.css";
import { cn } from "@/lib/utils";

export default function TechBadge({ name, accent = false, className = "" }) {
  const initial = name ? name.charAt(0) : "";

  return (
    <span className={cn(classes.badge, accent && classes.accent, className)}>
      <i className={classes.avatar}>{initial}</i>
      <span>{name}</span>
    </span>
  );
}
