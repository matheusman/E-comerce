import React from "react";
import styles from "../styles/Header.module.css";

import { focusSearch } from "../Header";

function Search({ focus, setFocus }: focusSearch) {
  return (
    <input
      type="text"
      onFocus={() => setFocus(true)}
      onBlur={() => setFocus(false)}
      placeholder="Pesquise aqui"
      className={`${styles.search} ${focus ? styles.focusHeader : ""}`}
    />
  );
}

export default Search;
