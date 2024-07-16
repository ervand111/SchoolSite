import React, {useEffect} from 'react';
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {getAdvice} from "@/store/advices/actions";

const Student = () => {
  const dispatch = useDispatch();
  const student = useSelector(state => state?.advice?.advice[1]);

  useEffect(() => {
    dispatch(getAdvice.request());
  }, [dispatch]);
  return (
    <div className='w-full h-screen bg-gradient-to-b from-gray-100 to-gray-200'>
      <div className='py-10 student'>
        <h2 className='text-center text-amber-900 tracking-wider animate-fade-in-up text-4xl'>
          Աշակերտական խորհուրդ
        </h2>
      </div>
      <div className="mt-6 flex  justify-center items-center">
        <div className=" w-4/6  bg-white studentImg rounded-3xl parentalAdviceImg overflow-hidden shadow-2xl  lg:flex transition-transform transform hover:scale-105">
          <div className="w-full lg:w-1/2 relative overflow-hidden">
            <Image
              src={process.env.IMAGE_URL + student?.avatar}
              alt="students"
              layout="responsive"
              width={1000}
              height={1000}
              className="object-cover w-full h-96 lg:h-full"
            />
          </div>
          <div className="w-full lg:w-1/2 py-10 px-8 flex flex-col justify-center items-start space-y-4">
            <p className="text-2xl font-bold text-purple-900">
              {student?.title}
            </p>
            <p className="text-2xl font-semibold text-gray-800">
              {student?.fullname}
            </p>
            <p className="text-xl text-gray-700">
              {student?.proffesion}
            </p>
            <p className="text-lg text-purple-700">
              {student?.email}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Student;
