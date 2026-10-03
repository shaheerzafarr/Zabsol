"use client";

import { useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import Tabs from "@/components/molecules/Tabs/Tabs";
import CodeBlock from "@/components/molecules/CodeBlock/CodeBlock";
import classes from "./TrustReport.module.css";

export default function TrustReport({ report, className }) {
  const [tab, setTab] = useState("summary");

  const tabs = [
    { value: "summary", label: "Summary" },
    { value: "raw", label: "Raw Data" },
  ];

  return (
    <div className={cn(classes.root, className)}>
      <SectionCard title="Report Overview" className={classes.hero}>
        <div className={classes.heroInner}>
          <div className={classes.heroText}>
            <div className={classes.badges}>
              <span className={classes.badge}>
                <CheckCircle2 size={16} /> Completed
              </span>
            </div>
            <p className={classes.verdictText}>
              {report?.summary || "Report generated successfully."}
            </p>
          </div>
        </div>
      </SectionCard>

      <SectionCard padded={false}>
        <div className={classes.tabsBar}>
          <Tabs tabs={tabs} activeTab={tab} onTabChange={setTab} variant="underline" />
        </div>
        <div className={classes.tabBody}>
          {tab === "summary" && (
            <div className={classes.breakdown}>
              <p>Status: {report?.status || "Success"}</p>
              <p>ID: {report?.id || "N/A"}</p>
            </div>
          )}
          {tab === "raw" && (
            <CodeBlock
              code={report || { status: "ok" }}
              language="json"
              title="Report JSON"
            />
          )}
        </div>
      </SectionCard>
    </div>
  );
}
