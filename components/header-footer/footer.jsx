import React from 'react';
import {categories} from "@/utility/db";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="w-full bg-gray-800 text-white footer py-8">
        <div className="container w-8/12 mx-auto flex flex-wrap  justify-evenly items-center">
          <div className="mb-4 h-20 flex justify-end items-center flex-col text-center spanDiv ">
            <span className="text-xl font-bold footerSpan">GeeKlab</span>
            <p className="text-sm p-4 text-gray-400">Կայքը պատրաստված է GeeKlab ընկերության կողմից։ </p>
          </div>
          <div
            className="flex   text-center">
            <div className="w-10/11 ml-5 h-full relative flex justify-center  items-center">
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

          <div className="text-center spanDiv">
            <p className="text-sm p-4 text-gray-400">2024 Բոլոր իրավունքները պաշտպանված են</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;