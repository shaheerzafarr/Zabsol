"use client";

import { AlertTriangle } from "lucide-react";
import { useState } from "react";
import classes from "./StripeAlertBar.module.css";

export default function StripeAlertBar({ message = "System alert notice." }) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className={classes.root}>
      <div className={classes.content}>
        <AlertTriangle size={18} className={classes.icon} />
        <span className={classes.text}>{message}</span>
        <button
          type="button"
          onClick={() => setDismissed(true)}
          className={classes.link}
        >
          Dismiss
        </button>
      </div>
    </div>
  );
}
