import React, {useEffect} from 'react';
import App from "@/components/layouts/app";
import Image from "next/image";
import {useDispatch, useSelector} from "react-redux";
import {getAdvice} from "@/store/advices/actions";

const ParentalAdvice = () => {
  const dispatch = useDispatch();
  const advice = useSelector(state => state?.advice?.advice[0]);

  useEffect(() => {
    dispatch(getAdvice.request());
  }, [dispatch]);
  return (
    <div>
      <App>
        <div className="min-h-screen flex flex-col  justify-center items-center bg-gradient-to-b from-white to-gray-100">
          <div className="w-full py-10 parentalAdvice">
            <h2 className="text-center text-amber-900 tracking-wider animate-fade-in-up text-4xl">
              Ծնողական խորհուրդ
            </h2>
          </div>

          <div className="w-1/2  bg-white parentalAdviceImg rounded-lg overflow-hidden shadow-2xl lg:flex transition-transform transform hover:scale-105">
            <div className="w-full h-auto lg:w-1/2 relative overflow-hidden">
              <Image
                src={process.env.IMAGE_URL + advice?.avatar}
                alt="students"
                layout="responsive"
                width={500}
                height={500}
                className="object-cover w-full  h-96 lg:h-full"
              />
            </div>

            <div className="w-full lg:w-1/2 py-10 px-8 flex flex-col justify-center items-start space-y-4">
              <p className="text-3xl font-bold text-purple-900">
                {advice?.title}
              </p>
              <p className="text-2xl font-semibold text-gray-800">
                {advice?.fullname}
              </p>
              <p className="text-xl text-purple-700">
                {advice?.profession}
              </p>
            </div>
          </div>

          <div className="w-full mt-10 flex justify-center items-center mb-10">
            <div className="w-11/12 lg:w-9/12 h-auto parentalAdviceImg border-t border-black py-10 flex flex-col justify-center items-center bg-white rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-900 leading-8">
                <p dangerouslySetInnerHTML={{__html: advice?.content}}></p>
              </p>
            </div>
          </div>
        </div>
      </App>
    </div>
  );
};

export default ParentalAdvice;
