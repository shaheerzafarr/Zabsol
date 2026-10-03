"use client";

import { useState } from "react";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import AppTable from "@/components/organisms/AppTable";
import shared from "@/styles/shared.module.css";

const TABLE_HEADERS = [
  { key: "id", title: "Record ID" },
  { key: "user", title: "User / Account" },
  { key: "verdict", title: "Verdict" },
  { key: "score", title: "Score" },
  { key: "timestamp", title: "Timestamp" },
];

export default function AdminVerificationsPage() {
  const [items] = useState([]);
  const [loading] = useState(false);

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Verifications (Admin)"
        subtitle="Global platform verification logs and audits."
      />

      <SectionCard title="Verification Records">
        <AppTable
          data={items}
          tableHeader={TABLE_HEADERS}
          loading={loading}
          noDataText="No verification logs recorded."
        />
      </SectionCard>
    </div>
  );
}
