"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import AppTable from "@/components/organisms/AppTable";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import shared from "@/styles/shared.module.css";

const TABLE_HEADERS = [
  { key: "id", title: "Key ID" },
  { key: "user", title: "User" },
  { key: "name", title: "Name" },
  { key: "status", title: "Status" },
  { key: "createdAt", title: "Created At" },
];

export default function AdminApiKeysPage() {
  const [keys] = useState([]);
  const [loading] = useState(false);

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="API Keys (Admin)"
        subtitle="Manage and inspect API keys across all accounts."
        action={
          <CustomButton variant="primary">
            <Plus size={16} /> Issue Admin Key
          </CustomButton>
        }
      />

      <SectionCard title="System API Keys">
        <AppTable
          data={keys}
          tableHeader={TABLE_HEADERS}
          loading={loading}
          noDataText="No API keys recorded in the system."
        />
      </SectionCard>
    </div>
  );
}
