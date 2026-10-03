"use client";

import { useParams, useRouter } from "next/navigation";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import KeyValueList from "@/components/molecules/KeyValueList/KeyValueList";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import shared from "@/styles/shared.module.css";

export default function ManifestDetailPage() {
  const params = useParams();
  const router = useRouter();
  const manifestId = params?.manifestId ? decodeURIComponent(params.manifestId) : "N/A";

  const details = [
    { label: "Manifest ID", value: manifestId },
    { label: "Version", value: "v1.0" },
    { label: "Registered At", value: "N/A" },
  ];

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Manifest Detail"
        subtitle={`Viewing manifest #${manifestId}`}
        action={
          <CustomButton variant="outline" onClick={() => router.push("/assets")}>
            Back to Assets
          </CustomButton>
        }
      />

      <SectionCard title="Manifest Overview">
        <KeyValueList items={details} columns={2} />
      </SectionCard>
    </div>
  );
}
