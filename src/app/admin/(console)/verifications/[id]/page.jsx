"use client";

import { useParams, useRouter } from "next/navigation";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import KeyValueList from "@/components/molecules/KeyValueList/KeyValueList";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import shared from "@/styles/shared.module.css";

export default function AdminVerificationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id ? decodeURIComponent(params.id) : "N/A";

  const details = [
    { label: "Record ID", value: id },
    { label: "Account", value: "N/A" },
    { label: "Status", value: "Verified" },
    { label: "Score", value: "100" },
    { label: "Timestamp", value: "N/A" },
  ];

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Verification Detail (Admin)"
        subtitle={`Admin inspection for verification #${id}`}
        action={
          <CustomButton variant="outline" onClick={() => router.push("/admin/verifications")}>
            Back to List
          </CustomButton>
        }
      />

      <SectionCard title="Record Details">
        <KeyValueList items={details} columns={2} />
      </SectionCard>
    </div>
  );
}
