"use client";
import React from "react";
import { ShieldCheck, CheckCircle2, Lock } from "lucide-react";
import { APP_CONFIG } from "@/config";
import { cn } from "@/lib/utils";
import classes from "./AuthLayout.module.css";

export default function AuthLayout({ children, badge }) {
  return (
    <div className={cn("auth-wave-texture", classes.wrapper)}>
      <div className={classes.inner}>
        <aside className={classes.contextPanel}>
          <div className={classes.brand}>
            <span className={classes.brandMark} aria-hidden="true">
              <ShieldCheck size={23} />
            </span>
            <span>
              <span className={classes.brandName}>{APP_CONFIG.APP_NAME}</span>
              <span className={classes.brandTag}>Secure Application Platform</span>
            </span>
          </div>

          <div className={classes.message}>
            <p className={classes.eyebrow}>Enterprise Solution</p>
            <h2>Streamlined access and management.</h2>
            <p>
              Access your dashboard, manage system resources, and collaborate seamlessly.
            </p>
          </div>

          <div>
            <div className={classes.signalList}>
              <div className={classes.signal}>
                <Lock size={18} />
                <span><strong>Secure Access</strong>End-to-end encrypted session controls</span>
              </div>
              <div className={classes.signal}>
                <CheckCircle2 size={18} />
                <span><strong>High Availability</strong>Reliable, scalable infrastructure</span>
              </div>
            </div>
            <div className={classes.systemState}>
              <span className={classes.pulse} />
              System operational
            </div>
          </div>
        </aside>

        <main className={classes.formPanel}>
          <div className={classes.mobileBrand}>
            <span className={classes.brandMark}><ShieldCheck size={21} /></span>
            <span className={classes.brandName}>{APP_CONFIG.APP_NAME}</span>
          </div>
          {badge && <span className={classes.badge}>{badge}</span>}
          <div className={classes.card}>{children}</div>
          <p className={classes.securityNote}>Protected by encrypted authentication sessions.</p>
        </main>
      </div>
    </div>
  );
}
