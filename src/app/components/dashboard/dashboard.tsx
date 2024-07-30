import React from "react";
import styles from "./dashboard.module.css";
import { DashboardSlider } from "../dashboard-slider/dashboard-slider";

export const Dashboard = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>
          Create visuals and dashboards of all kinds of <span>data</span>
        </h1>
        <div className={styles.sliderContainer}>
          <DashboardSlider />
        </div>
        <h3 className={styles.subTitile}>
          + Many more visuals and interactive <span>dashboards</span>
        </h3>
      </div>
    </div>
  );
};
