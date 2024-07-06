import React from 'react';
import Image from "next/image";

const EventItem = (props) => {

  return (
    <div className='w-1/4  p-2 cursor-pointer event'>
      <Image className="mb-2 w-11/12 h-40" width={500} height={500} src={process.env.IMAGE_URL + props.image} alt="Event"/>
      <h4 className="mb-2  text-xl">{props.text}</h4>
    </div>
  );
};

export default EventItem