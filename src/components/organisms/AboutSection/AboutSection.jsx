import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SectionKicker from "@/components/atoms/SectionKicker/SectionKicker";
import AboutCard from "@/components/molecules/AboutCard/AboutCard";
import { ABOUT_PILLARS } from "@/data/landingData";
import classes from "./AboutSection.module.css";
import { cn } from "@/lib/utils";

export default function AboutSection({ className = "" }) {
  return (
    <section className={cn(classes.about, className)} id="about">
      <div className={cn(classes.shell, classes.aboutGrid)}>
        <div className={classes.aboutCopy}>
          <SectionKicker>ABOUT ZABSOL</SectionKicker>
          <h2>A modern IT services and consulting company.</h2>
          <p>
            Zabsol Technologies is a next-generation technology partner, built
            to help businesses solve real problems with modern tools and pragmatic
            thinking. We combine deep technical expertise with a consulting mindset
            to deliver solutions that create lasting value.
          </p>
          <a href="#contact" className={classes.btn}>
            Learn More About Us <ArrowRight size={16} />
          </a>
        </div>

        <div className={classes.aboutVisual}>
          <Image
            src="/about-team.webp"
            alt="Technology team collaborating around a software architecture display"
            fill
            sizes="(max-width: 900px) 100vw, 55vw"
            className={classes.aboutImage}
          />
          <div className={classes.imageCaption}>
            <span className={classes.captionLine} />
            Thoughtful engineering. Tangible results.
          </div>
        </div>
        <div className={classes.aboutCards}>
          {ABOUT_PILLARS.map(({ title, description, icon }, idx) => (
            <AboutCard key={idx} title={title} description={description} icon={icon} />
          ))}
        </div>
      </div>
    </section>
  );
}
