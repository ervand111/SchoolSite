import React from 'react';
import App from "@/components/layouts/app";
import EventItem from "@/components/events/eventItem";
import {events} from "@/utility/db";

const Index = () => {
  return (
    <div>
      <App>
        <div className="w-11/12 m-auto mb-20">
          <h2 className='text-center text-amber-900 p-10 tracking-wider animate-fade-in-up text-4xl'>Միջոցառումներ</h2>
          <div className='w-11/12 h-auto flex flex-wrap justify-evenly items-start m-auto'>
            {events.map((item) => (
              <EventItem key={item.id} text={item.text} image={item.image}/>
            ))}
          </div>
        </div>
      </App>
    </div>
  );
};

export default Index;