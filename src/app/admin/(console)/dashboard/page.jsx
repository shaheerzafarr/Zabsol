"use client";

import { useState } from "react";
import { Activity, ShieldCheck, Users, Database } from "lucide-react";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import { StatsCard } from "@/components/molecules/StatsCard/StatsCard";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import AppTable from "@/components/organisms/AppTable";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import shared from "@/styles/shared.module.css";
import classes from "./page.module.css";

const TABLE_HEADERS = [
  { key: "id", title: "Log ID" },
  { key: "action", title: "Action" },
  { key: "user", title: "Admin User" },
  { key: "timestamp", title: "Timestamp" },
];

export default function AdminDashboardPage() {
  const [logs] = useState([]);
  const [loading] = useState(false);

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Admin Console"
        subtitle="Platform administration, system metrics, and audit overview."
        action={
          <CustomButton variant="primary">
            Export Logs
          </CustomButton>
        }
      />

      <div className={classes.statsGrid}>
        <StatsCard
          title="Total Accounts"
          value="0"
          subtitle="Platform users"
          icon={<Users size={20} />}
        />
        <StatsCard
          title="System Health"
          value="100%"
          subtitle="All services nominal"
          icon={<ShieldCheck size={20} />}
        />
        <StatsCard
          title="API Requests"
          value="0"
          subtitle="Requests today"
          icon={<Activity size={20} />}
        />
        <StatsCard
          title="Ledger Records"
          value="0"
          subtitle="Immutable blocks"
          icon={<Database size={20} />}
        />
      </div>

      <SectionCard title="System Audit Logs">
        <AppTable
          data={logs}
          tableHeader={TABLE_HEADERS}
          loading={loading}
          noDataText="No recent audit logs available."
        />
      </SectionCard>
    </div>
  );
}
