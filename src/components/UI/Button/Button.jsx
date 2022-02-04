import React from "react";
import { classNames } from "../../../utils/class-names";
import styles from "./Button.module.css";

export const Button = (props) => {
  const {type="button", className, disabled, onClick, children, ...other} = props;
  return (
    <button 
      type={type} 
      className={classNames(styles.button, className)}
      disabled={disabled}
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  );
};
