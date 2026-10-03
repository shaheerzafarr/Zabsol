"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import AppTable from "@/components/organisms/AppTable";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import RegisterAssetModal from "@/components/organisms/RegisterAssetModal/RegisterAssetModal";
import shared from "@/styles/shared.module.css";

const TABLE_HEADERS = [
  { key: "id", title: "Asset ID" },
  { key: "title", title: "Title" },
  { key: "type", title: "Type" },
  { key: "status", title: "Status" },
  { key: "createdAt", title: "Created At" },
];

export default function AssetsPage() {
  const [items] = useState([]);
  const [loading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="Assets"
        subtitle="Manage and view your registered assets."
        action={
          <CustomButton variant="primary" onClick={() => setShowModal(true)}>
            <Plus size={16} /> Register Asset
          </CustomButton>
        }
      />

      <SectionCard title="Asset Catalog">
        <AppTable
          data={items}
          tableHeader={TABLE_HEADERS}
          loading={loading}
          noDataText="No assets found. Click 'Register Asset' to get started."
        />
      </SectionCard>

      <RegisterAssetModal
        show={showModal}
        setShow={setShowModal}
        onRegistered={() => setShowModal(false)}
      />
    </div>
  );
}
