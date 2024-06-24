import React from 'react';
import Image from "next/image";
import {news} from "@/utility/db";
import SmallItem from "@/components/events/smallitem";
import App from "@/components/layouts/app";
import events from "@/pages/events/index";

const Name = () => {
  return (
    <div>
      <App>
        <div className='w-11/12 h-auto  justify-between flex m-auto'>
          <div className='w-2/3 h-auto '>
            <div className='w-11/12 m-auto mt-6 mb-10'>
              <h1 className='text-xl italic'>13/06/2024</h1>
            </div>
            <div className='w-11/12 m-auto'>
              <p className='mb-10 text-2xl '>Վերջին զանգ</p>
            </div>
            <div className='w-11/12 m-auto h-auto bg-yellow-200'>
              <Image src='/1.jpg ' className='w-full h-full object-cover' alt={events} width={1000}
                     height={1000}/>
            </div>
            <div className='w-11/12 m-auto h-auto mt-6'>

              <p>
                Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
                Accusantium animi at beatae, blanditiis
                deleniti dicta
                dolorem earum eius eligendi excepturi hic
                illo ipsam iusto molestias neque saepe sed tempora? Eius?
              </p>

            </div>
            <div className='w-11/12 m-auto h-4 mt-10 '></div>
          </div>
          <div className=' pl-10 w-2/6 h-auto'>
            <div className='mt-6 mb-10'>
              <h1 className='text-xl italic'>Վերջին Միջոցառումները</h1>
            </div>
            <SmallItem/>
            <SmallItem/>
            <SmallItem/>
            <SmallItem/>
            <SmallItem/>
            <SmallItem/>
            <SmallItem/>
            <SmallItem/>
          </div>
        </div>
      </App>
    </div>
  );
};

export default Name;