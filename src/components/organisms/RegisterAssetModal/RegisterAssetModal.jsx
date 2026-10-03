"use client";

import { useEffect, useState } from "react";
import Modal from "@/components/organisms/Modal/Modal";
import FileDropzone from "@/components/organisms/FileDropzone/FileDropzone";
import CustomButton from "@/components/atoms/CustomButton/CustomButton";
import CustomInput from "@/components/atoms/CustomInput/CustomInput";
import shared from "@/styles/shared.module.css";
import classes from "./RegisterAssetModal.module.css";

export default function RegisterAssetModal({ show, setShow, onRegistered }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (show) {
      setFile(null);
      setTitle("");
      setDescription("");
      setLoading(false);
    }
  }, [show]);

  const handleSubmit = async (e) => {
    e?.preventDefault();
    setLoading(true);
    // Boilerplate submission stub
    setTimeout(() => {
      setLoading(false);
      setShow(false);
      onRegistered?.({ title, file });
    }, 600);
  };

  return (
    <Modal show={show} setShow={setShow} title="Register Asset" size="large">
      <form onSubmit={handleSubmit} className={classes.body}>
        <FileDropzone
          file={file}
          onChange={setFile}
          disabled={loading}
          hint="Upload an asset file or image."
        />

        <div className={shared.formGrid}>
          <CustomInput
            label="Title"
            value={title}
            setValue={setTitle}
            placeholder="Asset title"
            maxLength={150}
            disabled={loading}
            required
          />
          <CustomInput
            label="Description"
            value={description}
            setValue={setDescription}
            placeholder="Brief description"
            maxLength={300}
            disabled={loading}
          />
        </div>

        <div className={shared.formActions}>
          <CustomButton variant="outline" onClick={() => setShow(false)} disabled={loading}>
            Cancel
          </CustomButton>
          <CustomButton type="submit" loading={loading} disabled={!title}>
            Save Asset
          </CustomButton>
        </div>
      </form>
    </Modal>
  );
}
