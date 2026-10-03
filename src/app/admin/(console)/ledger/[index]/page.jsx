"use client";

import { useParams, useRouter } from "next/navigation";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import KeyValueList from "@/components/molecules/KeyValueList/KeyValueList";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import shared from "@/styles/shared.module.css";

export default function AdminLedgerBlockPage() {
  const params = useParams();
  const router = useRouter();
  const index = params?.index ? decodeURIComponent(params.index) : "0";

  const details = [
    { label: "Block Index", value: `#${index}` },
    { label: "Block Hash", value: "—" },
    { label: "Previous Hash", value: "—" },
    { label: "Timestamp", value: "—" },
  ];

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Ledger Block"
        subtitle={`Viewing details for block #${index}`}
        action={
          <CustomButton variant="outline" onClick={() => router.push("/admin/ledger")}>
            Back to Ledger
          </CustomButton>
        }
      />

      <SectionCard title="Block Information">
        <KeyValueList items={details} columns={2} />
      </SectionCard>
    </div>
  );
}
