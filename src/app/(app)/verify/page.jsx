"use client";

import { useState } from "react";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import FileDropzone from "@/components/organisms/FileDropzone/FileDropzone";
import TrustReport from "@/components/organisms/TrustReport/TrustReport";
import shared from "@/styles/shared.module.css";

export default function VerifyPage() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [report, setReport] = useState(null);

  const handleVerify = () => {
    if (!file) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setReport({
        id: "rep-" + Date.now(),
        status: "Verified",
        summary: `Verification successful for file: ${file.name}`,
      });
    }, 800);
  };

  const handleReset = () => {
    setFile(null);
    setReport(null);
  };

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Verify"
        subtitle="Upload and verify files against the system."
      />

      <SectionCard title="File Verification">
        <FileDropzone
          file={file}
          onChange={setFile}
          disabled={loading}
          hint="Upload a file to run verification checks."
        />

        <div style={{ marginTop: "1rem", display: "flex", gap: "0.75rem" }}>
          <CustomButton
            variant="primary"
            onClick={handleVerify}
            disabled={!file || loading}
            loading={loading}
          >
            Start Verification
          </CustomButton>
          {(file || report) && (
            <CustomButton variant="outline" onClick={handleReset} disabled={loading}>
              Reset
            </CustomButton>
          )}
        </div>
      </SectionCard>

      {report && (
        <div style={{ marginTop: "1.5rem" }}>
          <TrustReport report={report} />
        </div>
      )}
    </div>
  );
}
