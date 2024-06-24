import React from 'react';
import App from "@/components/layouts/app";
import Image from "next/image";
import { data } from "@/utility/db";
import Link from "next/link";

const Pedagogic = () => {
  return (
    <div>
      <App>
        <div className='w-full bg-gray-100 min-h-screen py-10'>
          <div className='w-auto h-auto mb-10 p-10'>
            <h2 className='text-center text-amber-900 tracking-wider animate-fade-in-up text-4xl'>
              Մանկավարժական խորհուրդ
            </h2>
          </div>

          <div className='w-11/12 h-auto flex flex-wrap justify-evenly m-auto items-center'>
            {data.map((item) => (
              <div
                key={item.id}
                className='w-2/5 h-60 bg-white rounded-lg shadow-lg flex justify-center items-center m-5 p-5 transform transition duration-500 hover:scale-105 hover:shadow-2xl'
              >
                <ul className='text-center'>

                    <Link href={'/pedagogic/' + item.id}>
                      <li className='text-2xl font-bold text-purple-900 hover:text-purple-700 transition-colors duration-300'>
                        {item.label}
                      </li>
                    </Link>

                </ul>
              </div>
            ))}
          </div>
        </div>
      </App>
    </div>
  );
};

export default Pedagogic;
