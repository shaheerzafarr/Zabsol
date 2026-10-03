"use client";

import { useState } from "react";
import { CreditCard, Plus } from "lucide-react";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import classes from "./PaymentMethodsCard.module.css";

export default function PaymentMethodsCard() {
  const [cards] = useState([]);

  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <h3 className={classes.title}>Payment Methods</h3>
        <CustomButton variant="primary">
          <Plus size={16} /> Add Payment Method
        </CustomButton>
      </div>
      {cards.length === 0 ? (
        <div className={classes.empty}>
          <CreditCard className={classes.emptyIcon} />
          <p className={classes.emptyText}>No payment methods configured.</p>
        </div>
      ) : (
        <div className={classes.list}>
          {cards.map((c, i) => (
            <div key={i} className={classes.row}>
              <p>{c.name}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
