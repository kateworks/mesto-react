import React from "react";
import { classNames } from "../../../utils/class-names";
import { Button } from "..";
import { PlusSignIcon } from "../../icons";
import styles from "./AddButton.module.css";

export const AddButton = ({ className, onClick }) => (
  <Button 
    type="button" 
    className={classNames(styles.button, className)}
    disabled={false}
    onClick={onClick}
  >
    <PlusSignIcon className={styles.button__icon}/>
  </Button>
);