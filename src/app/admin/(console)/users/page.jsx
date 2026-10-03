"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import AppTable from "@/components/organisms/AppTable";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import shared from "@/styles/shared.module.css";

const TABLE_HEADERS = [
  { key: "id", title: "User ID" },
  { key: "name", title: "Name" },
  { key: "email", title: "Email" },
  { key: "role", title: "Role" },
  { key: "status", title: "Status" },
  { key: "createdAt", title: "Created At" },
];

export default function AdminUsersPage() {
  const [users] = useState([]);
  const [loading] = useState(false);

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="User Management"
        subtitle="Manage platform users, roles, and account access."
        action={
          <CustomButton variant="primary">
            <Plus size={16} /> Add User
          </CustomButton>
        }
      />

      <SectionCard title="All Users">
        <AppTable
          data={users}
          tableHeader={TABLE_HEADERS}
          loading={loading}
          noDataText="No users found in the system."
        />
      </SectionCard>
    </div>
  );
}
