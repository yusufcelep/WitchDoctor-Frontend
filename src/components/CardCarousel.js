import { CarouselProvider, Slider } from "pure-react-carousel";
import React from "react";

import CustomCardSlide from "../components/CustomCardSlide";
import CustomDotGroup from "../components/CustomDotGroup";

const CardCarousel = () => (
  <CarouselProvider
    naturalSlideWidth={1.5}
    naturalSlideHeight={.5}
    totalSlides={3}
    style={{ width: "535px" }}
  >
    <Slider>
      <CustomCardSlide
        index={0}
        header='"During this Pandemic of COVID-19, not everyone is in the best financial 
                capability to afford shelf medicine. This is a very productive alternative 
                for financially struggling individuals."'
        meta ="- A Famous Health Professional"
      />
      <CustomCardSlide
        index={1}
        header='"Throughout history and cultures, Witch Doctors were generally a last resort. 
                Their methods and teaching are only verbal exchanges now, it’s hard to find 
                documents however with the help of communities, we can create a database."'
        meta="- A Trendy Celebrity"
      />
      <CustomCardSlide
        index={2}
        header='"As time passes, generations grow and die, people gradually start 
                centralizing and conforming to their environments which leads to loss of 
                self identity and culture. This app will remind people of their origins and 
                help conserve tradition."'
        meta="- Renowned Wise Individual"
      />
    </Slider>

    <CustomDotGroup slides={3} />
  </CarouselProvider>
);

export default CardCarousel;
