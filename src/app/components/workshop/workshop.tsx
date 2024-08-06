import React from "react";
import styles from "./workshop.module.css";
import { BsCheck2Circle } from "react-icons/bs";
import { RegisterButton } from "../register-button/register-button";

export const Attend = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>
          Who can attend this <span>workshop?</span>
        </h1>
        <ul className={styles.list}>
          <li>
            <BsCheck2Circle />
            Any beginner who wants to land high package job at top MNCs.
          </li>
          <li>
            {" "}
            <BsCheck2Circle />
            Any working professional who wants to switch career.
          </li>
          <li>
            <BsCheck2Circle />
            Any data analyst who wants to up skill and get highly paid.
          </li>
          <li>
            <BsCheck2Circle />
            Anyone who wants to kickstart career as Data Analyst.
          </li>
          <li>
            <BsCheck2Circle />
            Any Data analyst who wants to stand out among competition.
          </li>
          <li>
            <BsCheck2Circle />
            Anyone who is struggling to find high paid job as Data Analyst.
          </li>
        </ul>

        <div className={styles.RegisterBtn}>
          <RegisterButton
            buttonText="Yes! I want to register"
            priceRange="(₹89 to ₹749)"
            additionalText="few seats left"
            className={styles.RegisterButton}
          />
        </div>
      </div>
    </div>
  );
};
