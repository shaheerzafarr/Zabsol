"use client";

import { Plus } from "lucide-react";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import classes from "./StripeConnectCard.module.css";

export default function StripeConnectCard() {
  return (
    <div className={classes.wrapper}>
      <h3 className={classes.title}>Payment Integration</h3>
      <div className={classes.body}>
        <h4 className={classes.heading}>Connect Payment Provider</h4>
        <p className={classes.description}>
          Connect your payment gateway account to enable transaction processing.
        </p>
        <CustomButton variant="primary">
          <Plus size={16} /> Connect Provider
        </CustomButton>
      </div>
    </div>
  );
}
