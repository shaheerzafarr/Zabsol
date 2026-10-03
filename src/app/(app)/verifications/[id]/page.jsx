"use client";

import { useParams, useRouter } from "next/navigation";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import KeyValueList from "@/components/molecules/KeyValueList/KeyValueList";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import shared from "@/styles/shared.module.css";

export default function VerificationDetailPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id ? decodeURIComponent(params.id) : "N/A";

  const details = [
    { label: "Verification ID", value: id },
    { label: "Status", value: "Verified" },
    { label: "Timestamp", value: "N/A" },
  ];

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Verification Details"
        subtitle={`Viewing record #${id}`}
        action={
          <CustomButton variant="outline" onClick={() => router.push("/verifications")}>
            Back to List
          </CustomButton>
        }
      />

      <SectionCard title="Record Overview">
        <KeyValueList items={details} columns={2} />
      </SectionCard>
    </div>
  );
}
