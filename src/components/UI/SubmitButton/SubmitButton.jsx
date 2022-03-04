import React from "react";
import { classNames } from "../../../utils/class-names";
import { Button } from "..";
import styles from "./SubmitButton.module.css";

export const SubmitButton = ({className, children, ...props}) => { 
  return (
    <Button
      type="submit" 
      className={classNames(styles.button, className)}
      {...props}
    >
      <span className={styles.button__text}>
        {children}
      </span>
    </Button>
 );
};
