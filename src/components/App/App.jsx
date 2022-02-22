import React from "react";
import { Header, Footer } from "..";
import styles from "./App.module.css";

export const App = () => {
  return (
    <div className={styles.page}>
      <Header className={styles.page__margin} />
      <Footer className={styles.page__margin} />
    </div>
  );
};