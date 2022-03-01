import React from "react";
import { Avatar } from "..";
import { AddButton, EditButton } from "../UI";
import { classNames } from "../../utils/class-names";
import styles from "./Profile.module.css";
import avatarImage from "../../assets/images/avatar-image.svg";

export const Profile = ({ className }) => {

  const handleAddClick = () => {
    console.log('add card');
  };

  const handleEditClick = () => {
    console.log('edit profile');
  };

  return (
    <section className={classNames(styles.profile, className)}>
      <Avatar avatarUrl={avatarImage} className={styles.profile__avatar}/>

      <div className={styles.profile__info}>
        <div className={styles["profile__name-container"]}>
          <h1 className={classNames(styles.profile__text, styles.profile__name)}>User</h1>
          <EditButton 
            className={classNames(styles.profile__button, styles.profile__button_action_edit)}
            onClick={handleEditClick}
          />
        </div>
        <p className={classNames(styles.profile__text, styles.profile__about)}>User Info</p>
      </div>

      <AddButton 
        className={classNames(styles.profile__button, styles.profile__button_action_add)} 
        onClick={handleAddClick}
      />
    </section>
  );
};
