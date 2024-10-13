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
            Beginners looking to secure high-paying jobs at top MNCs.
          </li>
          <li>
            {" "}
            <BsCheck2Circle />
            Working professionals considering a career switch.
          </li>
          <li>
            <BsCheck2Circle />
            Data analysts aiming to upskill and increase their earning
            potential.
          </li>
          <li>
            <BsCheck2Circle />
            Individuals wanting to kickstart their careers as data analysts.
          </li>
          <li>
            <BsCheck2Circle />
            Data analysts seeking to differentiate themselves in a competitive
            market.
          </li>
          <li>
            <BsCheck2Circle />
            Anyone facing challenges in finding well-paying data analyst
            positions.
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
