import React from "react";
import { classNames } from "../../../utils/class-names";
import { Button } from "..";
import { EditIcon } from "../../icons";
import styles from "./EditButton.module.css";

export const EditButton = ({ className, onClick }) => (
  <Button 
    type="button" 
    className={classNames(styles.button, className)}
    disabled={false}
    onClick={onClick}
  >
    <EditIcon className={styles.button__icon}/>
  </Button>
);