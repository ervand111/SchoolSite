import React from 'react';
import Link from "next/link";

const Item = (props) => {
  return (
    <div className="rounded-2xl images-event mb-2 ">
      <Link href={`news/${props.id}`}>
        <img className="w-11/12 m-auto object-cover rounded-2xl" src={props.image} alt="Image 1"/>
        <h2 className='mt-2 text-center'>{props.text}</h2>
      </Link>
    </div>
  );
};

export default Item;