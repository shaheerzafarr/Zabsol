import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionKicker from "@/components/atoms/SectionKicker/SectionKicker";
import { FUTURE_VALUES } from "@/data/landingData";
import classes from "./FutureBanner.module.css";
import { cn } from "@/lib/utils";

export default function FutureBanner({ className = "" }) {
  return (
    <section className={cn(classes.futureBanner, className)}>
      <div className={cn(classes.shell, classes.futureInner)}>
        <div className={classes.futureTitle}>
          <SectionKicker>A NEW COMPANY BY DESIGN</SectionKicker>
          <h2>Built for a brighter tomorrow.</h2>
        </div>

        <div className={classes.futureCopy}>
          <p>
            Zabsol Technologies is built from the ground up with today&apos;s best
            practices: modern technologies, agile delivery, and a strong focus on
            client success.
          </p>
          <a href="#about" className={classes.outlineBtn}>
            Our Story <ArrowRight size={14} />
          </a>
        </div>

        <ul className={classes.valuesList}>
          {FUTURE_VALUES.map(({ icon: Icon, text }, idx) => (
            <li key={idx} className={classes.valueItem}>
              <Icon className={classes.valueIcon} />
              <span>{text}</span>
            </li>
          ))}
        </ul>
        <div className={classes.futureVisual}>
          <Image
            src="/future-city.webp"
            alt="Modern city skyline illuminated at dusk"
            fill
            sizes="(max-width: 900px) 100vw, 48vw"
            className={classes.futureImage}
          />
        </div>
      </div>
    </section>
  );
}
