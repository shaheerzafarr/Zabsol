import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { HERO_HIGHLIGHTS } from "@/data/landingData";
import classes from "./HeroSection.module.css";
import { cn } from "@/lib/utils";

export default function HeroSection({ className = "" }) {
  return (
    <section className={cn(classes.hero, className)}>
      <div className={classes.heroGrid} aria-hidden="true" />
      <div className={cn(classes.heroSwoosh, classes.swooshA)} aria-hidden="true" />
      <div className={cn(classes.heroSwoosh, classes.swooshB)} aria-hidden="true" />

      <div className={cn(classes.shell, classes.heroLayout)}>
        <div className={classes.heroCopy}>
          <div className={classes.heroKicker}>IDEAS • TECHNOLOGY • REAL IMPACT</div>
          <h1>
            Technology that
            <br />
            moves your
            <br />
            business <span>forward.</span>
          </h1>
          <p>
            We build software, deliver AI solutions, enable cloud transformation,
            and provide expert consulting to help you scale with confidence.
          </p>

          <div className={classes.heroButtons}>
            <a href="#contact" className={cn(classes.btn, classes.btnPrimary)}>
              Start a Project <ArrowRight size={18} />
            </a>
            <a href="#services" className={cn(classes.btn, classes.btnGhost)}>
              See Our Services <span className={classes.play}>▶</span>
            </a>
          </div>

          <div className={classes.heroPoints}>
            {HERO_HIGHLIGHTS.map(({ icon: Icon, title, subtitle }, idx) => (
              <div key={idx} className={classes.heroPointItem}>
                <Icon className={classes.pointIcon} />
                <span className={classes.pointText}>
                  <strong>{title}</strong>
                  {subtitle}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className={classes.heroArt}>
          <div className={cn(classes.heroHalo, classes.h1)} aria-hidden="true" />
          <div className={cn(classes.heroHalo, classes.h2)} aria-hidden="true" />
          <div className={classes.heroRings} aria-hidden="true" />
          <Image
            src="/zabsol-mark.png"
            alt="Zabsol Technologies mark"
            width={680}
            height={680}
            priority
            className={classes.heroLogo}
          />
        </div>
      </div>
    </section>
  );
}
