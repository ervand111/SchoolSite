import React from 'react';
import App from "@/components/layouts/app";
import Link from "next/link";
import { materials } from "@/utility/db";

const Index = () => {
  return (
    <div>
      <App>
        <div className='w-11/12 mx-auto p-10 materialsParent'>
          <div className='w-full text-center'>
            <h2 className='text-amber-900 text-4xl py-5 tracking-wider animate-fade-in-up'>
              Փաստաթղթեր
            </h2>
          </div>
          <div className='w-full border-2 rounded-lg shadow-lg p-4 mt-8'>
            <ul className="w-full">
              {materials.map(material => (
                <li key={material.id} className='py-4 px-6 mb-4 bg-gray-100 rounded-md'>
                  <Link key={material.id} href={material.file}>
                      {material.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </App>
    </div>
  );
};

export default Index;
