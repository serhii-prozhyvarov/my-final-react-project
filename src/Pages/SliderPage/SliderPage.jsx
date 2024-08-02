import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Slide, SlideImage, SliderWrapper } from './SliderPage.styled';

import slide1 from '../../Pictures/slide-1.jpg';
import slide2 from '../../Pictures/slide-2.jpg';
import slide3 from '../../Pictures/slide-3.jpg';
import slide4 from '../../Pictures/slide-4.jpg';

const SliderPage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        <Slide>
          <SlideImage src={slide1} alt="Slide 1" />
        </Slide>
        <Slide>
          <SlideImage src={slide2} alt="Slide 2" />
        </Slide>
        <Slide>
          <SlideImage src={slide3} alt="Slide 3" />
        </Slide>
        <Slide>
          <SlideImage src={slide4} alt="Slide 4" />
        </Slide>
      </Slider>
    </SliderWrapper>
  );
};

export default SliderPage;
