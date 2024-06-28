import React from 'react';
import Image from "next/image";

const Student = () => {
  return (
    <div className='w-full h-auto bg-gradient-to-b from-gray-100 to-gray-200'>
      <div className='py-10 student'>
        <h2 className='text-center text-amber-900 tracking-wider animate-fade-in-up text-4xl'>
          Աշակերտական խորհուրդ
        </h2>
      </div>
      <div className=" mt-12 min-h-96 flex  justify-center items-center">
        <div className="max-w-6xl bg-white studentImg rounded-3xl parentalAdviceImg overflow-hidden shadow-2xl w-full lg:flex transition-transform transform hover:scale-105">
          <div className="w-full lg:w-1/2 relative overflow-hidden">
            <Image
              src="/1.jpg"
              alt="students"
              layout="responsive"
              width={1000}
              height={1000}
              className="object-cover w-full h-96 lg:h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 py-10 px-8 flex flex-col justify-center items-start space-y-4">
            <p className="text-3xl font-bold text-purple-900">
              Աշակերտական Խորհրդի նախագահ
            </p>
            <p className="text-2xl font-semibold text-gray-800">
              Արամ Գրիգորյան
            </p>
            <p className="text-xl text-gray-700">
              Աշակերտ
            </p>
            <p className="text-lg text-purple-700">
              aramgrigoryan@mail.ru
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
