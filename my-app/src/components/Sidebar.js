// src/components/Sidebar.js

import React from "react";
import css from "./Sidebar.module.css";

const Sidebar = () => {
  return (
    <div className={css.sidebar}>
      <a href="https://example.com/link1" className={css.link}>
        Link 1
      </a>
      <a href="https://example.com/link2" className={css.link}>
        Link 2
      </a>
      <a href="https://example.com/link3" className={css.link}>
        Link 3
      </a>
    </div>
  );
};

export default Sidebar;
