import React from 'react';
import Slider from "react-slick";
import Image from "next/image";

const Running = (props) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    arrows:false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        }
      }
    ]
  };

  return (
    <div className="w-full m-autocarousel-images mb-10">
      <Slider  {...settings}>
        {props.data.map((item) => (
          <div key={item.id}>
            <img width={100} height={100} src={item.image} alt={"brands"}/>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Running;