import React from "react";
import styles from "./testimnial-card.module.css";
import Image from "next/image";
import cardImg from "../../../../public/images/user.png";
import { FaRegStar } from "react-icons/fa";

export const TestimonialCard = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.imageContainer}>
        <Image src={cardImg} alt="pic" width={25} height={25} />
        <div className={styles.userName}>
          <p>sanjay khandelwal</p>
          <span>1 review</span>
        </div>
      </div>
      <div className={styles.rating}>
        <span>
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
          <FaRegStar />
        </span>
        <span>2 months ago</span>
      </div>
      <p className={styles.content}>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, rerum!
        Eum, explicabo nobis ex error voluptatem dolores. Vitae in sequi odio ut
        cum ad non dolorum quibusdam culpa nobis libero, recusandae saepe!
        Magnam, harum sed!
      </p>
    </div>
  );
};
