import React from "react";
import classes from "./ArchitectureGraphic.module.css";
import { cn } from "@/lib/utils";

export default function ArchitectureGraphic({ className = "" }) {
  return (
    <div className={cn(classes.architectureGraphic, className)} aria-hidden="true">
      <div className={cn(classes.building, classes.b1)} />
      <div className={cn(classes.building, classes.b2)} />
      <div className={cn(classes.building, classes.b3)} />
      <div className={cn(classes.building, classes.b4)} />
      <div className={classes.archGlow} />
    </div>
  );
}
