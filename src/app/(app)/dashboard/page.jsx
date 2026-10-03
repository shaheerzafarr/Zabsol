"use client";

import { useState } from "react";
import { Activity, BarChart3, Layers, Users } from "lucide-react";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import { StatsCard } from "@/components/molecules/StatsCard/StatsCard";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import AppTable from "@/components/organisms/AppTable";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import shared from "@/styles/shared.module.css";
import classes from "./page.module.css";

const TABLE_HEADERS = [
  { key: "id", title: "ID" },
  { key: "name", title: "Name" },
  { key: "status", title: "Status" },
  { key: "createdAt", title: "Created At" },
];

export default function DashboardPage() {
  const [items] = useState([]);
  const [loading] = useState(false);

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Dashboard"
        subtitle="Welcome to your application dashboard."
        action={
          <CustomButton variant="primary">
            Quick Action
          </CustomButton>
        }
      />

      <div className={classes.statsGrid}>
        <StatsCard
          title="Total Users"
          value="0"
          subtitle="Registered accounts"
          icon={<Users size={20} />}
        />
        <StatsCard
          title="Activity"
          value="0"
          subtitle="Events this month"
          icon={<Activity size={20} />}
        />
        <StatsCard
          title="Resources"
          value="0"
          subtitle="Active items"
          icon={<Layers size={20} />}
        />
        <StatsCard
          title="Performance"
          value="100%"
          subtitle="System health"
          icon={<BarChart3 size={20} />}
        />
      </div>

      <SectionCard title="Recent Activity">
        <AppTable
          data={items}
          tableHeader={TABLE_HEADERS}
          loading={loading}
          noDataText="No recent activity to display."
        />
      </SectionCard>
    </div>
  );
}
