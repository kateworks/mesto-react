import React from "react";
import { classNames } from "../../utils/class-names";
import styles from "./Avatar.module.css";

export const Avatar = ({ avatarUrl, className = "" }) => {
  return (
    <img src={avatarUrl} className={classNames(styles.avatar, className)}/>
  );
};