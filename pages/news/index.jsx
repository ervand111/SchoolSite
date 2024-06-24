import React, { useState } from 'react';
import App from "@/components/layouts/app";
import Details from "@/components/detalis/detalis.index";
import Pagination from "@/components/pagination/Pagination";

const Index = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 19; // Adjust based on your data

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <App>
        <div className='w-full h-auto flex flex-col'>
          <div className='w-11/12 m-auto flex justify-center'>
            <h2 className='text-center text-amber-900 p-10 tracking-wider animate-fade-in-up text-4xl font-extrabold'>
              Նորություններ
            </h2>
          </div>
          <div className='w-11/12 h-auto flex flex-wrap justify-evenly items-start m-auto'>
            {Array.from({length: 9}, (_, index) => (
              <div className='w-full sm:w-1/2 lg:w-1/3 p-4' key={index}>
                <Details/>
              </div>
            ))}
          </div>
          <div className='w-full m-auto p-10 flex justify-center'>
            <Pagination
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={handlePageChange}
            />
          </div>
        </div>
      </App>
    </div>
  );
};

export default Index;
