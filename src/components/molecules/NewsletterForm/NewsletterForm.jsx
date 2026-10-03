"use client";

import React, { useState } from "react";
import { ArrowRight, Check } from "lucide-react";
import classes from "./NewsletterForm.module.css";
import { cn } from "@/lib/utils";

export default function NewsletterForm({ className = "" }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <form className={cn(classes.form, className)} onSubmit={handleSubmit}>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder={submitted ? "Thank you for subscribing!" : "Your email address"}
        aria-label="Your email address"
        disabled={submitted}
        required
        className={classes.input}
      />
      <button type="submit" aria-label="Submit email" className={classes.button} disabled={submitted}>
        {submitted ? <Check size={16} /> : <ArrowRight size={16} />}
      </button>
    </form>
  );
}
