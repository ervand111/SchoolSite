import React, {useEffect} from 'react';
import App from "../../components/layouts/app";
import EventItem from "../../components/events/eventItem";
import {useDispatch, useSelector} from "react-redux";
import {getAchievements} from "../../store/achievements/actions";
import {Skeleton} from "antd";

const Index = () => {

  const dispatch = useDispatch();
  const achievements = useSelector(state => state.achievement.achievements)
  const isFetching = useSelector(state => state.achievement.isFetching)
  useEffect(() => {
    dispatch(getAchievements.request());
  }, [dispatch]);
  return (
    <div>
      <App>
        <div className="w-11/12 m-auto mb-20 event">
          <h2 className='text-center text-amber-900 p-10 tracking-wider animate-fade-in-up text-4xl'>Ձեռքբերումներ</h2>
          <div className='flex flex-wrap justify-between'>
            <Skeleton loading={isFetching} active>
              {achievements?.map((item) => (
                <EventItem id={item.id} key={item.id} type={'achievements'} text={item.title} image={item.avatar}/>
              ))}
            </Skeleton>
          </div>
        </div>
      </App>
    </div>
  );
};

export default Index;