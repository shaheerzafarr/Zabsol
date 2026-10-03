import React from "react";
import { ArrowRight } from "lucide-react";
import SectionKicker from "@/components/atoms/SectionKicker/SectionKicker";
import { BRAND_CONFIG } from "@/data/landingData";
import classes from "./CtaSection.module.css";
import { cn } from "@/lib/utils";

export default function CtaSection({ className = "" }) {
  return (
    <section className={cn(classes.cta, className)} id="contact">
      <div className={classes.shell}>
        <div className={classes.ctaBox}>
          <div>
            <SectionKicker>LET&apos;S BUILD TOGETHER</SectionKicker>
            <h2>Have a project in mind?</h2>
          </div>
          <p>
            Let&apos;s discuss how we can help you turn your ideas into real business impact.
          </p>
          <a
            href={`mailto:${BRAND_CONFIG.contactEmail}?subject=Project inquiry`}
            className={classes.btnPrimary}
          >
            Start a Project <ArrowRight size={17} />
          </a>
        </div>
      </div>
    </section>
  );
}
