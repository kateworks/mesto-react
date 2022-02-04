import React from "react";
import { classNames } from "../../../utils/class-names";
import { Button } from "..";
import styles from "./SaveButton.module.css";

export const SaveButton = ({ className, disabled, text, onClick }) => (
  <Button 
    type="button" 
    className={classNames(styles.button, className)}
    disabled={disabled}
    onClick={onClick}
  >
    <span className={styles.button__text}>
      {text}
    </span>
  </Button>
);
