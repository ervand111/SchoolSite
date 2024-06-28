import React from 'react';
import Image from "next/image";

const SmallItem = () => {
  return (
    <div className='w-full h-32  flex flex-wrap pb-4 justify-between smallItem'>
      <div className='w-3/12 h-full'>
        <Image className='w-full h-full  object-cover' src="/1.jpg" width={100} height={100} alt=""/>
      </div>
      <div className='w-9/12 pl-4 h-full smallItemPtext'>
        <p className='font-bold text-start'>
          Վերջին զանգ
        </p>
      </div>
    </div>
  );
};

export default SmallItem;