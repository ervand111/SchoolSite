import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {data} from "@/utility/db";
import App from "@/components/layouts/app";
import Banner from "@/components/banner/banner";
import Image from "next/image";
import pedagogic from "@/components/pedagogic/pedagogic";

const Id = () => {
  const [info, setInfo] = useState({})
  const router = useRouter();
  const {id} = router.query; // Get the id from the URL
  useEffect(() => {
    setInfo(data.find(x => x.id === Number(id)))
  }, [id]);
  return (
    <div>
      <App>
        <div className='w-11/12 h-auto flex justify-center items-center mt-12 m-auto'>
          <Banner>
            {info?.label}
          </Banner>
        </div>
        <div className='w-11/12 h-32 border-b border-t mt-4 border-black m-auto flex justify-center items-center'>
          <p className='text-3xl'>{info?.director?.profession}</p>
        </div>

        <div className='w-11/12 h-auto m-auto mt-12 flex justify-center  items-center'>

          <div className='w-1/3 h-80 flex justify-center items-center '>
            <Image
              className='w-11/12 h-5/6 object-contain filter  drop-shadow-lg transition-transform transform hover:scale-105'
              src={info?.director?.image}
              width={1000}
              height={1000}
              alt={pedagogic}
            />
          </div>
          <div className='w-1/3 h-44 flex justify-center items-center flex-col rounded-lg shadow-2xl p-4'>
            <p className='text-3xl font-bold mb-2'>{info?.director?.name} {info?.director?.surname}</p>
          </div>
        </div>
        <div className='w-11/12 h-32 border-b border-t border-black m-auto flex justify-center items-center'>
          <p className='text-3xl'>Անդամներ</p>
        </div>

        <div
          className='w-11/12 h-auto m-auto flex items-center justify-center overflow-hidden rounded-lg shadow-lg'>
          {info?.members?.map((item) => (
            <div key={item.id} className='w-full  h-auto  flex-wrap flex  items-center justify-center p-4'>
              <div className='w-11/12 h-full flex   justify-center items-center'>
                <Image
                  className='w-full h-full object-cover rounded-lg shadow-lg'
                  src={item?.image}
                  alt={pedagogic}
                  width={400}
                  height={400}
                />
              </div>
              <div className='w-2/3 h-full flex justify-center items-center flex-col p-4'>
                <p className='text-2xl  text-center font-bold mb-2'>{item?.name} {item?.surname}</p>
                <p className='text-xl text-gray-700'>{item?.profession}</p>
              </div>
            </div>
          ))}
        </div>


      </App>
    </div>
  );
};

export default Id;