import React from "react";
import styles from "./dashboard-slider.module.css";
import Image from "next/image";
import dashboardImg1 from "../../../../public/images/dashboard-img1.jpg";
import dashboardImg2 from "../../../../public/images/dashboard-img2.jpg";
import dashboardImg3 from "../../../../public/images/dashboard-img3.jpg";
import dashboardImg4 from "../../../../public/images/dashboard-img4.jpg";
import dashboardImg5 from "../../../../public/images/dashboard-img5.jpg";
import dashboardImg6 from "../../../../public/images/dashboard-img6.jpg";
import dashboardImg7 from "../../../../public/images/dashboard-img7.jpg";
import dashboardImg8 from "../../../../public/images/dashboard-img8.jpg";
import dashboardImg9 from "../../../../public/images/dashboard-img9.jpg";
import dashboardImg10 from "../../../../public/images/dashboard-img10.jpg";

export const DashboardSlider = () => {
  return (
    <div className={styles.wrapper}>
      <Image src={dashboardImg1} alt="pic1" width={500} height={300} />
      <Image src={dashboardImg2} alt="pic2" width={500} height={300} />
      <Image src={dashboardImg3} alt="pic3" width={500} height={300} />
      <Image src={dashboardImg4} alt="pic3" width={500} height={300} />
      <Image src={dashboardImg5} alt="pic3" width={500} height={300} />
      <Image src={dashboardImg6} alt="pic3" width={500} height={300} />
      <Image src={dashboardImg7} alt="pic3" width={500} height={300} />
      <Image src={dashboardImg8} alt="pic3" width={500} height={300} />
      <Image src={dashboardImg9} alt="pic3" width={500} height={300} />
      <Image src={dashboardImg10} alt="pic3" width={500} height={300} />
    </div>
  );
};
