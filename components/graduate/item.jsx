import React from 'react';
import Person from "@/components/graduate/person";
import {graduate} from "@/utility/db";

const Item = () => {
  return (
    <div className='w-full h-auto m-auto graduate'>
      <div className='w-auto h-auto mt-auto p-10'>
        <h2 className='text-center text-amber-900 tracking-wider animate-fade-in-up text-4xl'>Մեր շրջանավարտները</h2>
      </div>
      <div className='w-11/12 m-auto'>
        <div className='w-full flex flex-wrap justify-evenly childrenGraduate'>
        {graduate.map((item) => (
          <Person key={item.id} user={item}/>

        ))}
        </div>
      </div>
    </div>
  );
};

export default Item;