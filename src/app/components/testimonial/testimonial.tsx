import React from "react";
import styles from "./testimonial.module.css";
import { TestimonialCard } from "../testimonial-card/testimonial-card";

export const Testimonial = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>testimonial</h1>
        <h3 className={styles.subTitle}>what our students says</h3>
        <div className={styles.cardContainer}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </div>
      </div>
    </div>
  );
};
