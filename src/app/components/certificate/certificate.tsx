import React from "react";
import styles from "./certificate.module.css";
import Image from "next/image";
import certificateImage from "../../../../public/images/zia-certificate.png";

export const Certificate = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>participation certificate</h1>
        <h3 className={styles.subTitle}>
          Yes! You will receive a certificate for this workshop upon successful
          submission of your assignment.
        </h3>
        <Image
          className={styles.certificateImg}
          src={certificateImage}
          alt="pic"
        />
      </div>
    </div>
  );
};
