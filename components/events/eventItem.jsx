import React from 'react';

const EventItem = (props) => {
  return (
    <div className='w-1/4  p-2 cursor-pointer event'>
      <img className="mb-2" src={props.image} alt="Event"/>
      <h4 className="mb-2  text-xl">{props.text}</h4>
    </div>
  );
};

export default EventItem