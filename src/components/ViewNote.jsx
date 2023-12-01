import React from "react";
import PropTypes from "prop-types";
import styles from "./ViewNote.module.css";

export default function ViewNote({ data, onDelete, status, setStatus }) {
  const handleCheckboxChange = (id) => {
    setStatus((prevStatus) => {
      const updatedStatus = { ...prevStatus, [id]: !prevStatus[id] };

      // Toggle between "completed" and "pending" states
      data.forEach((item) => {
        if (item.id === id) {
          item.status = updatedStatus[id] ? "completed" : "pending";
        }
      });

      return updatedStatus;
    });
  };

  return (
    <div className={styles.task}>
      <ul className={styles.lists}>
        {data.map((item) => (
          <li key={item.id} className={styles.list}>
            <div className={styles.flex}>
              <input
                type="checkbox"
                checked={status[item.id] || false}
                onChange={() => handleCheckboxChange(item.id)}
              />
              <span>
                <h2>{item.title}</h2>
              </span>
            </div>

            <div className={styles.flex}>
              <span>status: {item.status}</span>
              <button
                className={styles.btnDel}
                onClick={() => onDelete(item.id)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

ViewNote.propTypes = {
  data: PropTypes.array.isRequired,
  onDelete: PropTypes.func.isRequired,
  status: PropTypes.object,
  setStatus: PropTypes.func.isRequired,
};
