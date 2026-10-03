"use client";

import { StatusBadge } from "@/components/molecules/ToneBadge/ToneBadge";
import classes from "./InvoiceCard.module.css";

export function InvoiceCard({ clientName = "Client Name", dueDate = "N/A", total = 0, status = "pending" }) {
  return (
    <div className={classes.root}>
      <div className={classes.info}>
        <p className={classes.clientName}>{clientName}</p>
        <p className={classes.dueDate}>Due {dueDate}</p>
      </div>
      <div className={classes.meta}>
        <span className={classes.total}>${Number(total || 0).toFixed(2)}</span>
        <StatusBadge status={status} />
      </div>
    </div>
  );
}

export default InvoiceCard;
