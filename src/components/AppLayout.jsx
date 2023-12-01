import React, { useEffect, useState } from "react";
import styles from "./AppLayout.module.css";

import PropTypes from "prop-types";
import Sidebar from "./SideBar";
import { Outlet } from "react-router-dom";

// const BASE_URL = "http://localhost:9000/datas";

export default function AppLayout({
  data,
  isLoading,
  title,
  setTitle,
  onSubmit,
  onDelete,
  onUpdate,
  status,
  setStatus,
}) {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Outlet
        data={data}
        isLoading={isLoading}
        title={title}
        setTitle={setTitle}
        onSubmit={onSubmit}
        onUpdate={onUpdate}
        status={status}
        setStatus={setStatus}
      />
    </div>
  );
}
AppLayout.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.bool,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  onSubmit: PropTypes.func,
  onUpdate: PropTypes.func,
  status: PropTypes.object,
  setStatus: PropTypes.func,
  onDelete: PropTypes.func,
};
