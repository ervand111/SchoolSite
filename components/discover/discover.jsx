import React from 'react';
import Link from "next/link";

const Discover = () => {
  return (
    <div className="w-full h-auto flex justify-around flex-wrap ">
      <div className="w-full">
        <h1 className="text-center text-3xl animate-fadeIn">Խորհուրդներ</h1>
      </div>

        <div className='w-full h-auto flex justify-around items-center discover'>

      <Link className=' h-72 flex justify-center items-center' href='/pedagogic'>
        <div
          className="w-96 h-2/4 bg-amber-500 ml-4 flex justify-center items-center transform transition duration-500 hover:scale-110 hover:bg-amber-400">
          <p className="text-2xl text-white">Մանկավարժական խորհուրդ</p>
        </div>
      </Link>
      <Link  className='h-72  flex justify-center items-center'  href={'/parentalAdvice'}>
        <div
          className="w-96 h-2/4 bg-green-700 ml-4 mr-4 flex transform transition duration-500 hover:scale-110 hover:bg-green-600 justify-center items-center">
          <p className="text-2xl text-white">Ծնողական խորհուրդ</p>
        </div>
      </Link>

      <Link  className='h-72  flex justify-center items-center'  href='/students'>
        <div
          className="w-96 h-2/4 bg- bg-yellow-400 mr-4 flex justify-center items-center transform transition duration-500 hover:scale-110 hover:bg-yellow-300">
          <p className="text-2xl text-white">Աշակերտական խորհուրդ</p>
        </div>
      </Link>
        </div>

    </div>
  );
};

export default Discover;