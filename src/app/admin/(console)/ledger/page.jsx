"use client";

import { useState } from "react";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import AppTable from "@/components/organisms/AppTable";
import shared from "@/styles/shared.module.css";

const TABLE_HEADERS = [
  { key: "index", title: "Block #" },
  { key: "hash", title: "Block Hash" },
  { key: "entries", title: "Entries" },
  { key: "timestamp", title: "Timestamp" },
];

export default function AdminLedgerPage() {
  const [blocks] = useState([]);
  const [loading] = useState(false);

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Ledger Explorer"
        subtitle="Inspect immutable cryptographic ledger blocks and entries."
      />

      <SectionCard title="Ledger Blocks">
        <AppTable
          data={blocks}
          tableHeader={TABLE_HEADERS}
          loading={loading}
          noDataText="No blocks committed to ledger yet."
        />
      </SectionCard>
    </div>
  );
}
