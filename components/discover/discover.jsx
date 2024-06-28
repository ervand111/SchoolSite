import React from 'react';
import Link from "next/link";

const Discover = () => {
  return (
    <div className="w-full h-auto flex justify-around flex-wrap ">
      <div className="w-full">
        <h1 className="text-center text-3xl animate-fadeIn">Խորհուրդներ</h1>
      </div>

        <div className='w-full h-auto flex justify-around items-center discover'>

      <Link className='flex justify-center items-center' href='/pedagogic'>
        <div
          className="mt-8 w-96  h-40  bg-amber-500 flex justify-center items-center transform transition duration-500 hover:scale-110 hover:bg-amber-400">
          <p className="text-2xl text-white">Մանկավարժական խորհուրդ</p>
        </div>
      </Link>
      <Link  className='flex justify-center items-center'  href={'/parentalAdvice'}>
        <div
          className="mt-8 w-96 h-40 bg-green-700 flex transform transition duration-500 hover:scale-110 hover:bg-green-600 justify-center items-center">
          <p className="text-2xl text-white">Ծնողական խորհուրդ</p>
        </div>
      </Link>
      <Link  className='flex justify-center items-center'  href='/students'>
        <div
          className="mt-8 w-96 h-40 bg- bg-yellow-400 flex justify-center items-center transform transition duration-500 hover:scale-110 hover:bg-yellow-300">
          <p className="text-2xl text-white">Աշակերտական խորհուրդ</p>
        </div>
      </Link>
        </div>

    </div>
  );
};

export default Discover;