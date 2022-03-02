import React from "react";
import { classNames } from "../../../utils/class-names";
import styles from "./Overlay.module.css";

export const Overlay = ({onClick, children, className}) => {
  return (
    <div className={classNames(styles.overlay, className)} onClick={onClick}>
      {children}
    </div>
  );
};
