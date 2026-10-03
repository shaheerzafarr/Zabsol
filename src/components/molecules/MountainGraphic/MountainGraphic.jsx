import React from "react";
import classes from "./MountainGraphic.module.css";
import { cn } from "@/lib/utils";

export default function MountainGraphic({ className = "" }) {
  return (
    <div className={cn(classes.mountainGraphic, className)} aria-hidden="true">
      <div className={classes.sunset} />
      <div className={cn(classes.peak, classes.peak1)} />
      <div className={cn(classes.peak, classes.peak2)} />
      <div className={cn(classes.peak, classes.peak3)} />
      <div className={cn(classes.peak, classes.peak4)} />
      <div className={classes.person} />
    </div>
  );
}
