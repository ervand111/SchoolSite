import React from 'react';
import {categories} from "@/utility/db";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gray-800 text-white py-8">
        <div className="container mx-auto flex flex-col md:flex-row justify-evenly items-center">
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <p className="text-xl font-bold">GeeKlab</p>
            <p className="text-sm text-gray-400">Made in Armenia</p>
          </div>
          <div
            className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 mb-6 md:mb-0 text-center md:text-left">
            <div className="w-9/11 ml-5 h-full relative flex justify-center  items-center">
              <ul className="flex w-full h-full justify-center items-center footer-menu">

                {categories.map((category) => (
                  <li
                    className="text-sm  ml-5 p-2 flex items-end hover:text-slate-500 cursor-pointer relative"
                    key={category.id}>
                    <Link href={category.path}>
                      {category.name}
                    </Link>

                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="text-center md:text-right">
            <p className="text-sm text-gray-400">2024 Բոլոր իրավունքները պաշտպանված են</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;