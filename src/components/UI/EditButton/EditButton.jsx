import React from "react";
import { classNames } from "../../../utils/class-names";
import { Button } from "..";
import { EditIcon } from "../../icons";
import styles from "./EditButton.module.css";

export const EditButton = ({ className, onClick, ...props }) => (
  <Button 
    type="button" 
    className={classNames(styles.button, className)}
    onClick={onClick}
    {...props}
  >
    <EditIcon className={styles.button__icon}/>
  </Button>
);
