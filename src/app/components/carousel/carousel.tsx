"use client";

import React from "react";
import Slider from "react-slick";

interface CarouselProps {
  children: React.ReactNode[];
  autoplay?: boolean;
  autoplaySpeed?: number;
}

const Carousel: React.FC<CarouselProps> = ({
  children,
  autoplay = true,
  autoplaySpeed = 3000,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: autoplay,
    autoplaySpeed: autoplaySpeed,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <Slider {...settings}>
        {children.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
