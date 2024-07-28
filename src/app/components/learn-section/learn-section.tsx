import React from "react";
import styles from "../../components/learn-section/learn-section.module.css";
import { FaArrowCircleRight } from "react-icons/fa";

export const LearnSection = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>
          What you’ll Learn In <span>this</span>
        </h1>
        <p className={styles.subTitle}>4 Hours Live Workshop</p>
        <div className={styles.list}>
          <ul>
            <li>
              Learn about Data Analytics, Business Analytics and Business
              Intelligence
            </li>
            <li>
              Learn about the world&rsquo;s top Data Analytics tool by Microsoft
              POWER BI
            </li>
            <li>
              Learn about industry needs and expectations from 21st-century data
              analyst
            </li>
            <li>5 steps ROADMAP to complete any data analytics project</li>
            <li>Power BI installation and importing Dataset</li>
            <li>Creating 10+ Visuals in Power BI</li>
          </ul>
          <ul>
            <li>Data Modelling and Transformation using Power BI</li>
            <li>End-to-End Interactive reports using Power BI</li>
            <li>Guidelines on how to show your projects on Linkedin</li>
            <li>How to make a strong portfolio and How to start freelancing</li>
            <li>How to prepare an Industry ready resume</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
