import React from "react";
import Carousel from "../carousel/carousel";
import userImg from "../../../../public/images/user.png";
import { FaRegStar } from "react-icons/fa";
import TestimonialCard from "../testimonial-card/testimonial-card";
import styles from "./testimonial-carousel.module.css";

const testimonialData = [
  {
    id: 1,
    user: userImg,
    userName: "sanjay khandelwal",
    review: "3 review",
    rating: <FaRegStar />,
    ratingDate: "2 months ago",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, rerum!Eum, explicabo nobis ex error voluptatem dolores. Vitae in sequi odio ut cum ad non dolorum quibusdam culpa nobis libero, recusandae saepe!Magnam, harum sed!",
  },
  {
    id: 2,
    user: userImg,
    userName: "sanjay khandelwal",
    review: "3 review",
    rating: <FaRegStar />,
    ratingDate: "2 months ago",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, rerum!Eum, explicabo nobis ex error voluptatem dolores. Vitae in sequi odio ut cum ad non dolorum quibusdam culpa nobis libero, recusandae saepe!Magnam, harum sed!",
  },
  {
    id: 3,
    user: userImg,
    userName: "sanjay khandelwal",
    review: "3 review",
    rating: <FaRegStar />,
    ratingDate: "2 months ago",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, rerum!Eum, explicabo nobis ex error voluptatem dolores. Vitae in sequi odio ut cum ad non dolorum quibusdam culpa nobis libero, recusandae saepe!Magnam, harum sed!",
  },
  {
    id: 4,
    user: userImg,
    userName: "sanjay khandelwal",
    review: "3 review",
    rating: <FaRegStar />,
    ratingDate: "2 months ago",
    content:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quis, rerum!Eum, explicabo nobis ex error voluptatem dolores. Vitae in sequi odio ut cum ad non dolorum quibusdam culpa nobis libero, recusandae saepe!Magnam, harum sed!",
  },
];

const TestimonialCarousel = () => {
  return (
    <div className={styles.wrapper}>
      <div className="container">
        <h1 className={styles.title}>testimonial</h1>
        <h3 className={styles.subTitle}>what our students says</h3>
        <Carousel autoplay={false} autoplaySpeed={3000}>
          {testimonialData.map((card) => (
            <TestimonialCard key={card.id} {...card} />
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialCarousel;
