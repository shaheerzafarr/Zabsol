import React from "react";
import Image from "next/image";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HERO_HIGHLIGHTS } from "@/data/landingData";
import classes from "./HeroSection.module.css";
import { cn } from "@/lib/utils";

export default function HeroSection({ className = "" }) {
  return (
    <section className={cn(classes.hero, className)}>
      <div className={classes.heroGrid} aria-hidden="true" />

      <div className={cn(classes.shell, classes.heroLayout)}>
        <div className={classes.heroCopy}>
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
              Explore our services <ArrowUpRight size={17} />
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

        <div className={classes.heroArt} aria-label="Zabsol Technologies brand mark">
          <div className={classes.visualGlow} aria-hidden="true" />
          <div className={cn(classes.orbit, classes.orbitOne)} aria-hidden="true" />
          <div className={cn(classes.orbit, classes.orbitTwo)} aria-hidden="true" />
          <div className={cn(classes.orbit, classes.orbitThree)} aria-hidden="true" />
          <div className={cn(classes.orbit, classes.orbitFour)} aria-hidden="true" />
          <div className={cn(classes.orbit, classes.orbitFive)} aria-hidden="true" />
          <div className={cn(classes.waveRibbon, classes.waveOne)} aria-hidden="true" />
          <div className={cn(classes.waveRibbon, classes.waveTwo)} aria-hidden="true" />
          <div className={cn(classes.waveRibbon, classes.waveThree)} aria-hidden="true" />
          <div className={classes.lightFan} aria-hidden="true" />
          <Image
            src="/hero-ribbon-emblem.png"
            alt="Glossy blue Zabsol ribbon emblem"
            width={760}
            height={760}
            priority
            sizes="(max-width: 900px) 92vw, 52vw"
            className={classes.heroLogo}
          />
        </div>
      </div>
    </section>
  );
}
