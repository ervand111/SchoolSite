import React from 'react';
import App from "@/components/layouts/app";
import {achievements, events} from "@/utility/db";
import EventItem from "@/components/events/eventItem";

const Index = () => {
  return (
    <div>
      <App>
        <div className="w-11/12 m-auto mb-20 event">
          <h2 className='text-center text-amber-900 p-10 tracking-wider animate-fade-in-up text-4xl'>Ձեռքբերումներ</h2>
          <div className='flex flex-wrap justify-between'>
            {achievements.map((item) => (
              <EventItem key={item.id} text={item.text} image={item.image}/>
            ))}
          </div>
        </div>
      </App>
    </div>
  );
};

export default Index;