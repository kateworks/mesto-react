import React from "react";
import { classNames } from "../../utils/class-names";
import { Logo } from "../icons";
import styles from "./Header.module.css";

export const Header = ({ className }) => (
  <header className={classNames(styles.header, className)}>
    <Logo color="white" className={styles.header__logo} />
  </header>
);
