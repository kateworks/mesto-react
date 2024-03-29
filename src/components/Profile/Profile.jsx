import React from "react";
import { Avatar } from "..";
import { AddButton, EditButton, EditAvatarButton } from "../UI";
import { classNames } from "../../utils/class-names";
import styles from "./Profile.module.css";
import avatarImage from "../../assets/images/user-avatar.svg";

export const Profile = React.memo(({ onEditProfileClick, onAddPlaceClick, onEditAvatarClick, className }) => {
  console.log('PROFILE');

  return (
    <section className={classNames(styles.profile, className)}>

      <div className={styles["profile__avatar-group"]}>
        <Avatar avatarUrl={avatarImage} className={styles.profile__avatar}/>
        <EditAvatarButton 
          className={styles["profile__avatar-button"]}
          onClick={onEditAvatarClick}
        />        
      </div>

      <div className={styles.profile__info}>
        <div className={styles["profile__name-container"]}>
          <h1 className={classNames(styles.profile__text, styles.profile__name)}>
            Имя пользователя
          </h1>

          <EditButton 
            className={classNames(styles.profile__button, styles.profile__button_action_edit)}
            onClick={onEditProfileClick}
          />
        </div>

        <p className={classNames(styles.profile__text, styles.profile__about)}>
          Информация о пользователе
        </p>
      </div>

      <AddButton 
        className={classNames(styles.profile__button, styles.profile__button_action_add)} 
        onClick={onAddPlaceClick}
      />
    </section>
  );
});
