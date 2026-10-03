"use client";

import { Activity } from "lucide-react";
import { cn } from "@/lib/utils";
import classes from "./ProvenanceTimeline.module.css";

export default function ProvenanceTimeline({ events = [], className }) {
  if (!events.length) {
    return <p className={classes.empty}>No timeline events to display.</p>;
  }

  return (
    <ol className={cn(classes.list, className)}>
      {events.map((event, index) => {
        const isLast = index === events.length - 1;
        return (
          <li key={event.id || index} className={classes.item}>
            <div className={classes.rail}>
              <span className={classes.node}>
                <Activity size={15} />
              </span>
              {!isLast && <span className={classes.line} />}
            </div>
            <div className={classes.body}>
              <div className={classes.head}>
                <span className={classes.title}>{event.title || `Event #${index + 1}`}</span>
                <span className={classes.date}>{event.date || "Just now"}</span>
              </div>
              {event.description && <p className={classes.claim}>{event.description}</p>}
            </div>
          </li>
        );
      })}
    </ol>
  );
}
