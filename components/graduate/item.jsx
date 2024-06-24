import React from 'react';
import Person from "@/components/graduate/person";
import {graduate} from "@/utility/db";

const Item = () => {
  return (
    <div className='w-full h-auto m-auto'>
      <div className='w-auto h-auto mt-auto p-10'>
        <h2 className='text-center text-amber-900 tracking-wider animate-fade-in-up text-4xl'>Մեր շրջանավարտները</h2>
      </div>
      <div className='w-11/12 m-auto  h-auto flex flex-wrap justify-evenly '>
        {graduate.map((item) => (
          <Person key={item.id} user={item}/>
        ))}
      </div>
    </div>
  );
};

export default Item;