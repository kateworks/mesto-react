import React from "react";
import { classNames } from "../../../utils/class-names";
import { Button } from "..";
import { CloseIcon } from "../../icons";
import styles from "./CloseButton.module.css";

export const CloseButton = ({ className, onClick, ...props }) => (
  <Button 
    type="button" 
    className={classNames(styles.button, className)}
    disabled={false}
    onClick={onClick}
    {...props}
  >
    <CloseIcon className={styles.button__icon} />
  </Button>
);
