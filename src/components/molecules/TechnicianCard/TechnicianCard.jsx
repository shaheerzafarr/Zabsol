"use client";

import { User } from "lucide-react";
import classes from "./TechnicianCard.module.css";

export function TechnicianCard({ title = "Item", subtitle = "Details" }) {
  return (
    <div className={classes.root}>
      <div className={classes.avatarWrapper}>
        <div className={classes.avatar}>
          <User size={16} />
        </div>
      </div>
      <div className={classes.info}>
        <p className={classes.name}>{title}</p>
        <p className={classes.jobs}>{subtitle}</p>
      </div>
    </div>
  );
}

export default TechnicianCard;
