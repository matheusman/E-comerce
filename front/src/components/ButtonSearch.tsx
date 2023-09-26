import styles from "../styles/Header.module.css";
import { Search } from "lucide-react";
import { focusSearch } from "../Header";

function ButtonSearch( { focus, setFocus } : focusSearch) {
  return (
    <>
      <button
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        className={`${styles.button} ${focus ? styles.focusHeader : ""}`}
      >
        <Search width="20px" />
      </button>
    </>
  );
}

export default ButtonSearch;
