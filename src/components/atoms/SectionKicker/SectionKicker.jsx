import React from "react";
import classes from "./SectionKicker.module.css";
import { cn } from "@/lib/utils";

export default function SectionKicker({ children, className = "" }) {
  return (
    <div className={cn(classes.kicker, className)}>
      <span className={classes.line} aria-hidden="true" />
      <span>{children}</span>
    </div>
  );
}
