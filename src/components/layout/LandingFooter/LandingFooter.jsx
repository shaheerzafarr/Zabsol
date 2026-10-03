import React from "react";
import Image from "next/image";
import Link from "next/link";
import NewsletterForm from "@/components/molecules/NewsletterForm/NewsletterForm";
import { FOOTER_SECTIONS, BRAND_CONFIG } from "@/data/landingData";
import classes from "./LandingFooter.module.css";
import { cn } from "@/lib/utils";

export default function LandingFooter({ className = "" }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn(classes.footer, className)}>
      <div className={cn(classes.shell, classes.footerGrid)}>
        <div className={classes.footerBrand}>
          <Link href="#top" className={classes.brand} aria-label={`${BRAND_CONFIG.name} home`}>
            <Image
              src="/zabsol-mark.png"
              alt={BRAND_CONFIG.name}
              width={50}
              height={50}
              className={classes.brandLogo}
            />
            <span className={classes.brandText}>
              <strong>{BRAND_CONFIG.shortName}</strong>
              <small>{BRAND_CONFIG.tagline}</small>
            </span>
          </Link>
          <p>
            A modern IT services and consulting company helping businesses build,
            scale, and innovate with confidence.
          </p>
        </div>

        {FOOTER_SECTIONS.map((section, idx) => (
          <div key={idx} className={classes.footerCol}>
            <strong>{section.title}</strong>
            {section.links.map((link, lIdx) => (
              <a key={lIdx} href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        ))}

        <div className={classes.footerContact}>
          <strong>Stay in Touch</strong>
          <small>Get the latest insights and updates.</small>
          <NewsletterForm />
        </div>
      </div>

      <div className={cn(classes.shell, classes.footerBottom)}>
        <span>© {currentYear} {BRAND_CONFIG.name}. All rights reserved.</span>
        <span>
          <a href="#top">Privacy Policy</a> &nbsp; | &nbsp; <a href="#top">Terms of Service</a>
        </span>
      </div>
    </footer>
  );
}
