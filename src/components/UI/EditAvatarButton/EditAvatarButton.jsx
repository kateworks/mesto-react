import React from "react";
import { classNames } from "../../../utils/class-names";
import { Button } from "..";
import { EditAvatarIcon } from "../../icons";
import styles from "./EditAvatarButton.module.css";

export const EditAvatarButton = ({ className, onClick, ...props }) => (
  <Button 
    type="button" 
    className={classNames(styles.button, className)}
    onClick={onClick}
    {...props}
  >
    <EditAvatarIcon className={styles.button__icon}/>
  </Button>
);