import React, {useEffect} from 'react';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Image from "next/image";

const Person = ({ user }) => {
  return (
    <div className='w-5/12  h-80 flex mb-10 mt-12 rounded-2xl personX'>
      <div className='w-full h-full mr-4 personImg' >
        <Image width={1000} height={1000} className='w-full h-full object-cover rounded-2xl' src={process.env.IMAGE_URL+user?.avatar} alt={'graduates'}/>
      </div>
      <div className="w-3/5 h-auto flex flex-col justify-center personY">
        <p className='text-lg ml-5 font-bold text-left mb-4'>{user?.fullname}</p>
        <p className='text-lg ml-5 text-left'>{user?.profession}</p>
      </div>
    </div>
  );
};

export default Person;
