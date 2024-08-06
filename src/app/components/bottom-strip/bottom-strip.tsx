import React from "react";
import styles from "./bottom-strip.module.css";
import { RegisterButton } from "../register-button/register-button";

export const BottomStrip = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.title}>
            4 Hour Live Workshop on Sunday, 11th August Timing : 10:00 A.M
          </span>
          <RegisterButton
            className={styles.bottomStripRegitration}
            buttonText="Register Now"
          />
        </div>
      </div>
    </div>
  );
};
