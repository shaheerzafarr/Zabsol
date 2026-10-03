"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { PageHeader } from "@/components/molecules/PageHeader/PageHeader";
import SectionCard from "@/components/molecules/SectionCard/SectionCard";
import AppTable from "@/components/organisms/AppTable";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import Modal from "@/components/organisms/Modal/Modal";
import CustomInput from "@/components/atoms/CustomInput/CustomInput";
import shared from "@/styles/shared.module.css";

const TABLE_HEADERS = [
  { key: "name", title: "Key Name" },
  { key: "prefix", title: "Prefix" },
  { key: "status", title: "Status" },
  { key: "createdAt", title: "Created At" },
];

export default function ApiKeysPage() {
  const [items] = useState([]);
  const [loading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [keyName, setKeyName] = useState("");

  return (
    <div className={shared.pageContainer}>
      <PageHeader
        title="API Keys"
        subtitle="Manage your API access tokens and secret keys."
        action={
          <CustomButton variant="primary" onClick={() => setShowModal(true)}>
            <Plus size={16} /> Create API Key
          </CustomButton>
        }
      />

      <SectionCard title="Active Keys">
        <AppTable
          data={items}
          tableHeader={TABLE_HEADERS}
          loading={loading}
          noDataText="No API keys created yet."
        />
      </SectionCard>

      <Modal
        show={showModal}
        setShow={setShowModal}
        title="Create API Key"
        size="medium"
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <CustomInput
            label="Key Name"
            placeholder="e.g. Production Backend"
            value={keyName}
            setValue={setKeyName}
          />
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "0.5rem" }}>
            <CustomButton variant="outline" onClick={() => setShowModal(false)}>
              Cancel
            </CustomButton>
            <CustomButton
              variant="primary"
              onClick={() => {
                setShowModal(false);
                setKeyName("");
              }}
            >
              Generate
            </CustomButton>
          </div>
        </div>
      </Modal>
    </div>
  );
}
