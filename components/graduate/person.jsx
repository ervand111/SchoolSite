import React from 'react';

const Person = ({ user }) => {
  return (
    <div className='w-5/12 h-80 flex mb-10 mt-12 rounded-2xl personX'>
      <div className='w-full h-full mr-4'>
        <img className='w-full h-full object-cover rounded-2xl' src={user.image} alt={user.info} />
      </div>
      <div className="w-3/5 h-auto flex flex-col justify-center">
        <h1 className='text-xl ml-5 font-bold text-left mb-4'>{user.info}</h1>
        <p className='text-lg ml-5 text-left'>{user.proffesion}</p>
      </div>
    </div>
  );
};

export default Person;
