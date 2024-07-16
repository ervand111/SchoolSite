import React from 'react';
import Image from "next/image";
import Link from "next/link";

const EventItem = (props) => {

  return (
    <div className='w-1/3 h-80 p-10 cursor-pointer event'>
      <Link href={props.type === "event" ? "/events/"+props.id : "/achievements/"+props.id}>
        <Image className=" w-full h-full object-cover rounded-2xl" width={500} height={500} src={process.env.IMAGE_URL + props.image} alt="Event"/>
        <h4 className="mb-2 text-xl">{props.text}</h4>
      </Link>
    </div>
  );
};

export default EventItem