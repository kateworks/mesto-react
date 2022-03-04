import React from "react";
import { classNames } from "../../../utils/class-names";
import styles from "./Form.module.css";

export const Form = ({form, onSubmit, submitButton, className, children}) => {
  return (
    <form name={form.name} className={classNames(styles.form, className)} onSubmit={onSubmit}> 
      <h3 className={styles.form__title}>
        {form.title}
      </h3>
      <fieldset className={classNames(styles.form__group, styles.form__fields)}>
        {children}
      </fieldset>
      <fieldset className={classNames(styles.form__group, styles.form__buttons)}>
        {submitButton}
      </fieldset>
    </form>
  );
};
