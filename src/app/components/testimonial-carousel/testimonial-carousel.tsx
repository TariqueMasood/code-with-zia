import React from "react";
import Carousel from "../carousel/carousel";

const TestimonialCarousel = () => {
  return (
    <div className="container">
      <Carousel autoplay autoplaySpeed={3000}>
        <div style={{ backgroundColor: "red", height: "200px" }}>Item 1</div>
        <div style={{ backgroundColor: "blue", height: "200px" }}>Item 2</div>
        <div style={{ backgroundColor: "green", height: "200px" }}>Item 3</div>
        <div style={{ backgroundColor: "yellow", height: "200px" }}>Item 4</div>
        <div style={{ backgroundColor: "orange", height: "200px" }}>Item 5</div>
        <div style={{ backgroundColor: "purple", height: "200px" }}>Item 6</div>
      </Carousel>
    </div>
  );
};

export default TestimonialCarousel;
