import React, {useEffect} from 'react';
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {getAdvice} from "../../store/advices/actions";

const Student = () => {
  const dispatch = useDispatch();
  const student = useSelector(state => state?.advice?.advice[1]);

  useEffect(() => {
    dispatch(getAdvice.request());
  }, [dispatch]);
  return (
    <div className='w-full h-screen  bg-gradient-to-b from-gray-100 to-gray-200'>
      <div className='py-10'>
        <h2 className='text-center text-amber-900 tracking-wider animate-fade-in-up text-4xl'>
          Աշակերտական խորհուրդ
        </h2>
      </div>
      <div className=" w-11/12 m-auto h-auto mb-10  mt-20 flex  justify-center items-center">
        <div className="w-11/12 h-96 bg-white rounded-3xl flex justify-center items-center overflow-hidden shadow-2xl  lg:flex transition-transform transform hover:scale-105">
          <div className=" w-1/4 h-full flex items-center studentImg ">
            <Image
              src={process.env.IMAGE_URL + student?.avatar}
              alt="students"
              layout="responsive"
              width={1000}
              height={1000}
              className="w-full h-full object-cover image"
            />
          </div>
          <div className="w-1/2  studentText  p-8 flex flex-col justify-center  items-start space-y-4">
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
