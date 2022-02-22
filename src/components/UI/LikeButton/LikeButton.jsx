import React from "react";
import { classNames } from "../../../utils/class-names";
import { Button } from "..";
import { LikeIcon, LikeIconActive} from "../../icons";
import styles from "./LikeButton.module.css";

export const LikeButton = ({ isLiked, className, onClick, ...props }) => {

  const renderIcon = () => ( 
    isLiked ? <LikeIconActive className={styles.button__icon} /> : <LikeIcon className={styles.button__icon} />
  );

  return (
    <Button 
      type="button" 
      className={classNames(styles.button, className)}
      disabled={false}
      onClick={onClick}
      {...props}
    >
      { renderIcon() }
    </Button>
  );
};
