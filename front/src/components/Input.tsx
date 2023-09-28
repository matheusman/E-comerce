import React from "react";
import styles from "./styles/Input.module.css";
import { User } from "lucide-react";
import PasswordTerms from "./PasswordTerms";

type inputComponents = React.ComponentProps<"input"> & {
  icon?: string;
  login?: boolean;
  type: string;
  name: string;
  label: string;
  value: string;
  error: string | null;
  active: boolean;
  maxLength?: number;
  id?: string;
  verify?: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  onBlur: React.FocusEventHandler<HTMLInputElement>;
  onClick: React.MouseEventHandler<HTMLInputElement>;
};

function Input({
  icon,
  login,
  id,
  type,
  label,
  name,
  onChange,
  onBlur,
  onClick,
  error,
  value,
  active,
  maxLength,
}: inputComponents) {
  function animation() {
    if (active) return styles.activeLogin;
    else if (!active && value.length > 0) return styles.active;
    else return styles.activeFalseLogin;
  }

  function animationLogin() {
    if (active) return styles.activeLogin;
    else if (!active && value.length > 0) return styles.active;
    else return styles.activeFalseLogin;
  }

  return (
    <div className={styles.loginInput}>
      <div className={styles.inputFormText}>
        <input
          placeholder={value.length === 0 && active ? label : ""}
          type={type}
          id={id ? id : name}
          className={login ? icon : `${styles.input}`}
          name={name}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          onClick={onClick}
        />
        {login ? (
          <label
            htmlFor={name}
            className={`${styles.loginLabel} ${animationLogin()}`}
          >
            {label}
          </label>
        ) : (
          <label
            htmlFor={name}
            className={`${styles.placeholderInput} ${animation()}`}
          >
            {label}
          </label>
        )}
      </div>
      <div>
        {error ? (
          <p className={styles.error}>{error}</p>
        ) : (
          <p className={styles.error}></p>
        )}
      </div>
    </div>
  );
}

export default Input;
