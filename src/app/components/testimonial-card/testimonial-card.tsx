import React from "react";
import styles from "./testimnial-card.module.css";
import Image from "next/image";

type TestimonialProps = {
  id: number;
  user: any;
  userName: string;
  review: string;
  rating: JSX.Element;
  ratingDate: string;
  content: string;
};

const TestimonialCard = (props: TestimonialProps) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image src={props.user} alt="pic" width={25} height={25} />
        <div className={styles.userName}>
          <p>{props.userName}</p>
          <span>{props.review}</span>
        </div>
      </div>
      <div className={styles.rating}>
        <span>{props.rating}</span>
        <span>{props.ratingDate}</span>
      </div>
      <p className={styles.content}>{props.content}</p>
    </div>
  );
};
export default TestimonialCard;
