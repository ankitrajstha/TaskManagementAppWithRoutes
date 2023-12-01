import React from "react";
import styles from "./SideBar.module.css";
import { Link, NavLink, Route } from "react-router-dom";
import AddNote from "./AddNote.jsx";
import ViewNote from "./ViewNote.jsx";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <nav>
        <ul>
          <li>
            <NavLink to="/addnotes">Add Note</NavLink>
          </li>
          <li>
            <NavLink to="/viewnotes">View Note</NavLink>
          </li>
        </ul>
      </nav>
      {/* <Route path="/addnotes" exact component={<AddNote />} />
      <Route path="/viewnotes" component={<ViewNote />} /> */}
    </aside>
  );
}
