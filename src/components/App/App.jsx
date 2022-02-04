import React from "react";
import styles from "./App.module.css";
import { AddButton, CloseButton, EditButton, SaveButton } from "../UI";

export const App = () => {
  return (
    <div className={styles.page}>
      <CloseButton onClick={() => console.log('click')}/>
      <AddButton onClick={() => console.log('add click')}/>
      <EditButton onClick={() => console.log('edit click')}/>
      <SaveButton 
        disabled={false}
        text="Сохранить"
        onClick={() => console.log('save click')}
      />
    </div>
  );
};