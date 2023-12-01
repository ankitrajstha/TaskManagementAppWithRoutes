import React from "react";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header>
      <div className={styles.navBar}>
        <h1>Task Management Application</h1>
      </div>
    </header>
  );
}
