import React from "react";
import Carousel from "../../../Components/SliderCarousel";
import Film from "../../../Components/Film"
import Cinema from "../../../Components/Cinema"

export default function HomePage() {
  return (
    <div>
      <Carousel />
      <Film/>
      <Cinema/>
    </div>
  );
}
