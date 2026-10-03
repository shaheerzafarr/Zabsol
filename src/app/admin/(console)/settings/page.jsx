"use client";

import { useState } from "react";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import CustomInput from "@/components/atoms/CustomInput/CustomInput";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import shared from "@/styles/shared.module.css";

export default function AdminSettingsPage() {
  const [platformName, setPlatformName] = useState("Enterprise Platform");
  const [supportEmail, setSupportEmail] = useState("support@example.com");

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Platform Settings"
        subtitle="Global application settings and administrative configurations."
      />

      <SectionCard title="General Settings">
        <div style={{ maxWidth: "600px", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <CustomInput
            label="Platform Name"
            value={platformName}
            setValue={setPlatformName}
          />
          <CustomInput
            label="Support Email"
            type="email"
            value={supportEmail}
            setValue={setSupportEmail}
          />
          <div>
            <CustomButton variant="primary">
              Save Settings
            </CustomButton>
          </div>
        </div>
      </SectionCard>
    </div>
  );
}
