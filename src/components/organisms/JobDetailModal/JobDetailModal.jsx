"use client";

import Modal from "@/components/organisms/Modal/Modal";
import classes from "./JobDetailModal.module.css";

export default function JobDetailModal({ show, setShow, item }) {
  if (!item) return null;

  return (
    <Modal show={show} setShow={setShow} title="Item Details" size="medium">
      <div className={classes.wrapper}>
        <div className={classes.grid}>
          <div>
            <p className={classes.label}>Name</p>
            <p className={classes.value}>{item.name || item.title || "—"}</p>
          </div>
          <div>
            <p className={classes.label}>Status</p>
            <p className={classes.value}>{item.status || "—"}</p>
          </div>
        </div>
      </div>
    </Modal>
  );
}
