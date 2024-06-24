import React from 'react';
import Image from "next/image";

const Details = () => {
  return (
    <div className='w-10/12 h-80  flex flex-col justify-center '>
      <Image className='w-full h-2/3 object-cover' src="/1233.jpg" width={1000} height={1000} alt=""/>
        <p className='font-bold mt-2'>Մրցույթ՝ Ամբիոնի վարիչի թափուր հաստիքի համար</p>
    </div>
  );
};

export default Details;