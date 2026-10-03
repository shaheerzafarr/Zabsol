"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { NAVIGATION_LINKS, BRAND_CONFIG } from "@/data/landingData";
import classes from "./LandingHeader.module.css";
import { cn } from "@/lib/utils";

export default function LandingHeader({ className = "" }) {
  const [open, setOpen] = useState(false);

  return (
    <header className={cn(classes.header, className)}>
      <div className={cn(classes.shell, classes.nav)}>
        <Link className={classes.brand} href="#top" aria-label={`${BRAND_CONFIG.name} home`}>
          <Image
            src="/zabsol-mark.png"
            alt={BRAND_CONFIG.name}
            width={56}
            height={56}
            priority
            className={classes.brandLogo}
          />
          <span className={classes.brandText}>
            <strong>{BRAND_CONFIG.shortName}</strong>
            <small>{BRAND_CONFIG.tagline}</small>
          </span>
        </Link>

        <nav className={cn(classes.navLinks, open && classes.open)}>
          {NAVIGATION_LINKS.map(({ label, href }) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>
              {label}
            </a>
          ))}
        </nav>

        <a href="#contact" className={classes.navCta}>
          Start a Project <ArrowUpRight size={15} />
        </a>

        <button
          className={classes.menu}
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>
    </header>
  );
}
