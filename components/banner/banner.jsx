import React from 'react';

const Banner = ({children}) => {
  return (
    <div className="w-9/12 h-52 flex justify-center pedagogicText items-center bg-gradient-to-r from-blue-500 to-green-500 border-2 border-white rounded-lg m-auto animate-fade-in"
      style={{backgroundImage: `url('/banner.jpeg')`, backgroundSize: '100% 100%',}}>
      <p className="text-4xl bannerText text-white font-light">{children}</p>
    </div>
  );
};

export default Banner;