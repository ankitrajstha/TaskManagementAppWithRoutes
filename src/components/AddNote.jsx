import React from "react";
import styles from "./AddNote.module.css";
import PropTypes from "prop-types";

export default function AddNote({ data, title, setTitle, onSubmit }) {
  return (
    <form onSubmit={onSubmit}>
      <div className={styles.container}>
        <h2>Add note</h2>
        <input
          className={styles.textbox}
          type="text"
          placeholder="Please add a title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className={styles.btn}>Add</button>
      </div>
    </form>
  );
}
AddNote.propTypes = {
  data: PropTypes.array,
  title: PropTypes.string,
  setTitle: PropTypes.func,
  onSubmit: PropTypes.func,
};
