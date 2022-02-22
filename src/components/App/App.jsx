import React, { useState } from "react";
import { Header, Footer, Card } from "..";
import styles from "./App.module.css";
import { initialCards } from "../../utils/cards-init";

export const App = () => {
  const [cards, setCards] = useState(initialCards);

  return (
    <div className={styles.page}>
      <Header className={styles.page__margin} />
      <main>
        <Card card={cards[0]}/>
      </main>
      <Footer className={styles.page__margin} />
    </div>
  );
};