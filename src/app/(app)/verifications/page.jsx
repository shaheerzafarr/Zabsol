"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import AppTable from "@/components/organisms/AppTable";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import shared from "@/styles/shared.module.css";

const TABLE_HEADERS = [
  { key: "id", title: "Record ID" },
  { key: "target", title: "Target" },
  { key: "status", title: "Status" },
  { key: "timestamp", title: "Timestamp" },
];

export default function VerificationsPage() {
  const router = useRouter();
  const [items] = useState([]);
  const [loading] = useState(false);

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Verifications"
        subtitle="Review audit and verification logs."
        action={
          <CustomButton variant="primary" onClick={() => router.push("/verify")}>
            <Plus size={16} /> New Verification
          </CustomButton>
        }
      />

      <SectionCard title="Verification History">
        <AppTable
          data={items}
          tableHeader={TABLE_HEADERS}
          loading={loading}
          noDataText="No verification records found."
        />
      </SectionCard>
    </div>
  );
}
