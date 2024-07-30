import React from "react";
import styles from "./dashboard-slider.module.css";
import Image from "next/image";
import dashboardImg1 from "../../../../public/images/dashboard1.jpeg";
import dashboardImg2 from "../../../../public/images/dashboard2.jpeg";
import dashboardImg3 from "../../../../public/images/dashboard3.jpeg";

export const DashboardSlider = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={dashboardImg1} alt="pic1" width={400} height={250} />
      <Image src={dashboardImg2} alt="pic2" width={400} height={250} />
      <Image src={dashboardImg3} alt="pic3" width={400} height={250} />
    </div>
  );
};
