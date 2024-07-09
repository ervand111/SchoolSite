import React, {useEffect} from 'react';
import App from "@/components/layouts/app";
import EventItem from "@/components/events/eventItem";
import {useDispatch, useSelector} from "react-redux";
import {getEvents} from "@/store/events/actions";

const Index = () => {
  const dispatch = useDispatch();
  const events = useSelector(state => state.event.events)
  useEffect(() => {
    dispatch(getEvents.request());
  }, [dispatch]);
  return (
    <div>
      <App>
        <div className="w-11/12 m-auto mb-20 event">
          <h2 className='text-center text-amber-900 p-10 tracking-wider animate-fade-in-up text-4xl'>Միջոցառումներ</h2>
          <div className='w-11/12 h-auto flex flex-wrap justify-evenly items-start m-auto '>
            {events.map((item) => (
              <EventItem id={item.id} key={item.id} type='event' text={item.title} image={item.avatar}/>
            ))}
          </div>
        </div>
      </App>
    </div>
  );
};

export default Index;