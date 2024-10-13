import React from "react";
import styles from "./learn-section.module.css";

export const LearnSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>
          What you&apos;ll Learn In <span>this</span>
        </h1>
        <p className={styles.subTitle}>4 Hours Live Workshop</p>
        <div className={styles.list}>
          <ul className={styles.listItem}>
            <li>
              An overview of Data Analytics, Business Analytics, and Business
              Intelligence.
            </li>
            <li>
              Insight into Microsoft Power BI, the leading data analytics tool.
            </li>
            <li>
              Understanding industry expectations for 21st-century data
              analysts.
            </li>
            <li>A 5-step roadmap for completing any data analytics project.</li>
            <li>Installation of Power BI and importing datasets.</li>
          </ul>
          <ul className={styles.listItem}>
            <li>Creating over 10 visuals in Power BI.</li>
            <li>Data modeling and transformation techniques using Power BI.</li>
            <li>Building end-to-end interactive reports with Power BI.</li>
            <li>Tips on showcasing your projects on LinkedIn.</li>
            <li>
              Guidance on creating a strong portfolio and starting your
              freelancing journey.
            </li>
            <li>How to prepare an industry-ready resume.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
