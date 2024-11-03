import React from "react";
import styles from "./bottom-strip.module.css";
import { RegisterButton } from "../register-button/register-button";
import Link from "next/link";

export const BottomStrip = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <div className={styles.content}>
          <span className={styles.title}>
            4 Hour Live Workshop on Sunday, 11th August Timing : 10:00 A.M
          </span>
          <Link href="/contact">
            <RegisterButton
              className={styles.bottomStripRegitration}
              buttonText="Register Now"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
