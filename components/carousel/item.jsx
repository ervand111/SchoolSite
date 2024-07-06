import React from 'react';

const Item = (props) => {
  return (
    <div className="w-full h-full  rounded-2xl ">
      <img className="w-full h-full object-cover carousel-images" src={process.env.IMAGE_URL+props.image} alt="Image 1"/>
    </div>
  );
};

export default Item;