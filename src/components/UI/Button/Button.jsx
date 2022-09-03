import React from "react";
import { classNames } from "../../../utils/class-names";
import styles from "./Button.module.css";

export const Button = ({type="button", className, children, ...props}) => (
  <button 
    type={type} 
    className={classNames(styles.button, className)} 
    {...props}
  >
    {children}
  </button>
);
