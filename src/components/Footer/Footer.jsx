import React from "react";
import { classNames } from "../../utils/class-names";
import styles from "./Footer.module.css";

export const Footer = ({ className }) => (
  <footer className={classNames(styles.footer, className)}>
    <p className={styles.footer__text}>
      <a className={styles.footer__link} href="mailto:pozhidaeva.e.a.work@gmail.com" target="_blank">
        © 2022 Ekaterina Pozhidaeva
      </a>      
    </p>
  </footer>
);
