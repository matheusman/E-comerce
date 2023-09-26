import React from "react";
import styles from "./styles/Input.module.css";
import PasswordTerms from "./PasswordTerms";

type inputComponents = React.ComponentProps<"input"> & {
  type: string;
  name: string;
  label: string;
  value : string;
  error : string | null;
  active : boolean;
  maxLength? : number;
  id? : string;
  verify? : string;
  setValue : React.Dispatch<React.SetStateAction<string>>;
  onChange : React.ChangeEventHandler<HTMLInputElement>;
  onBlur : React.FocusEventHandler<HTMLInputElement>;
  onClick : React.MouseEventHandler<HTMLInputElement>;
};

function Input({
  id,
  type,
  label,
  name,
  setValue,
  onChange,
  onBlur,
  onClick,
  error,
  value,
  active,
  maxLength
}: inputComponents) {

  function animation () {
    if (active) return styles.active 
    else if (!active && value.length > 0) return styles.active
    else return styles.activeFalse
  }

  return (
    <div className={styles.loginInput}>
      <div className={styles.inputFormText}>
        <input
          placeholder={value.length === 0 && active ? label : ''}
          type={type}
          id={id ? id : name}
          className={styles.input}
          name={name}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
          onClick={onClick}
        />
        <label htmlFor={name} className={`${styles.placeholderInput} ${animation()}`}>{label}</label>
      </div>
      <div>
        {error ? <p className={styles.error}>{error}</p> : <p className={styles.error}></p>}
        
      </div>
    </div>
  );
}

export default Input;
