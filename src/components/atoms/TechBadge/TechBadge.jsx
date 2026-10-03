import React from "react";
import Image from "next/image";
import classes from "./TechBadge.module.css";
import { cn } from "@/lib/utils";

export default function TechBadge({ name, category, description, icon, className = "" }) {
  return (
    <article className={cn(classes.badge, className)}>
      <div className={classes.cardTop}>
        <span className={classes.iconFrame}>
          <Image src={icon} alt="" width={48} height={48} className={classes.icon} />
        </span>
        <span className={classes.category}>{category}</span>
      </div>
      <div className={classes.cardCopy}>
        <h3>{name}</h3>
        <p>{description}</p>
      </div>
    </article>
  );
}
