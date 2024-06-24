import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Item from "@/components/carousel/item";
import {Typewriter} from "react-simple-typewriter";

const CarouselComponent = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 6000,
    arrows:false
  };


  return (
    <div className="w-full m-auto mb-20 carousel-images relative">
      <Slider  {...settings}>
        {props.data.map((item) => (
          <Item key={item.id} image={item.image}/>

        ))}
      </Slider>
      <div className='text-group absolute bottom-0 left-0 wrapper '>
        <Typewriter
          words={['Կրթությունը մեր պատասխանատվությունն է մեր ապագայի հանդեպ:']}
          loop={true}
          typeSpeed={70}
          deleteSpeed={5}
          delaySpeed={1000}
        />
      </div>
    </div>
  );
};

export default CarouselComponent;