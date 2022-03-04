import React from "react";
import styles from "./Input.module.css";

export const Input = ({ name, type, ...props}) => (
  <label className={styles.input}>
    <input 
      name={name} 
      type={type || "text"}
      className={styles.input__input}
      {...props}
    />
  </label>
);
