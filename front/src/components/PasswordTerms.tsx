import React from "react";
import styles from "./styles/PasswordTerms.module.css";
import { Check } from "lucide-react";
import { X } from "lucide-react";

function PasswordTerms({ value }: { value: string }) {
  return (
    <ul className={styles.listPassword}>
      <li
        className={`${styles.confirmPassword} ${
          value.length >= 6 ? styles.check : styles.error
        }`}
      >
        {value.length >= 6 ? <Check color="green" /> : <X color="red" />}
        Mínimo 6 digitos
      </li>
      <li
        className={`${styles.confirmPassword} ${
          /[a-z]/.test(value) ? styles.check : styles.error
        }`}
      >
        {/[a-z]/.test(value) ? <Check color="green" /> : <X color="red" />}
        1 letra maiúscula.
      </li>
      <li
        className={`${styles.confirmPassword} ${
          /[A-Z]/.test(value) ? styles.check : styles.error
        }`}
      >
        {/[A-Z]/.test(value) ? <Check color="green" /> : <X color="red" />}1 letra minúscula.
      </li>
      <li
        className={`${styles.confirmPassword} ${
          /[\d]/.test(value) ? styles.check : styles.error
        }`}
      >
        {/[\d]/.test(value) ? <Check color="green" /> : <X color="red" />}1 número.
      </li>
    </ul>
  );
}

export default PasswordTerms;
