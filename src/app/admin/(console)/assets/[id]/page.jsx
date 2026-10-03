"use client";

import { useParams, useRouter } from "next/navigation";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import KeyValueList from "@/components/molecules/KeyValueList/KeyValueList";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import shared from "@/styles/shared.module.css";

export default function AdminAssetDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id ? decodeURIComponent(params.id) : "N/A";

  const details = [
    { label: "Asset ID", value: id },
    { label: "Owner", value: "N/A" },
    { label: "Status", value: "Active" },
    { label: "Created At", value: "N/A" },
  ];

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Asset Detail (Admin)"
        subtitle={`Admin inspection for asset #${id}`}
        action={
          <CustomButton variant="outline" onClick={() => router.push("/admin/assets")}>
            Back to Assets
          </CustomButton>
        }
      />

      <SectionCard title="Asset Metadata">
        <KeyValueList items={details} columns={2} />
      </SectionCard>
    </div>
  );
}
