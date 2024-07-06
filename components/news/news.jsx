import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Slider from "react-slick";
import Item from "/components/news/item";

const News = (props) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    prevArrow: <img src='left-arrow.webp'/>,
    nextArrow: <img src='right-arrow.webp'/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          arrows:false

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          arrows:false

        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          arrows:false

        }
      }
    ]
  };
  return (
    <div className='w-full h-auto  flex flex-wrap justify-center items-center'>
      <div className='w-full flex justify-center items-center '>
        <h2 className='text-black text-3xl mt-10'>{props.heading}</h2>
      </div>
      <div className='w-11/12 mt-6'>
        <Slider   {...settings}>
          {props.data.map((item) => {
            return (
              <Item  key={item.id} item={item}/>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default News;
