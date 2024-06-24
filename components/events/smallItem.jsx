import React from 'react';

const SmallItem = () => {
  return (
    <div className='w-full h-32  flex flex-wrap pb-4 justify-between'>
      <div className='w-3/12 h-full'>
        <img className='w-full h-full  object-cover' src="/1.jpg" width={100} height={100} alt=""/>
      </div>
      <div className='w-9/12 pl-4 h-full'>
        <p className='font-bold text-start'>
          Վերջին զանգ
        </p>
      </div>
    </div>
  );
};

export default SmallItem;