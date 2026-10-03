"use client";

import { useState } from "react";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import AppTable from "@/components/organisms/AppTable";
import shared from "@/styles/shared.module.css";

const TABLE_HEADERS = [
  { key: "id", title: "Asset ID" },
  { key: "owner", title: "Owner" },
  { key: "title", title: "Title" },
  { key: "status", title: "Status" },
  { key: "createdAt", title: "Created At" },
];

export default function AdminAssetsPage() {
  const [assets] = useState([]);
  const [loading] = useState(false);

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Assets (Admin)"
        subtitle="Global directory of all platform assets."
      />

      <SectionCard title="All Assets">
        <AppTable
          data={assets}
          tableHeader={TABLE_HEADERS}
          loading={loading}
          noDataText="No assets recorded."
        />
      </SectionCard>
    </div>
  );
}
