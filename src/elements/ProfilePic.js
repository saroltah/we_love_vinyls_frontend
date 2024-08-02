import React from "react";
import styles from "../styles/ProfilePic.module.css";

function ProfilePic({ src, height = 45, text }) {
  return (
    <>
      <img
        className={styles.ProfilePic}
        src={src}
        height={height}
        width={height}
        alt="profilepic"
      />
      {text}
      </>
  );
}

export default ProfilePic;
