import React, {useEffect, useState} from 'react';
import App from "@/components/layouts/app";
import Item from "@/components/news/item";
import {useDispatch, useSelector} from "react-redux";
import {getLastNews, getNews} from "@/store/news/actions";
import {Skeleton} from "antd";

const Index = () => {

  const dispatch = useDispatch();
  const news = useSelector(state => state.news.news)
  const isFetching = useSelector(state => state.news.isFetching)
  useEffect(() => {
    dispatch(getNews.request());
  }, [dispatch]);


  return (
    <div>
      <App>
        <div className='w-full h-auto flex flex-col news'>
          <div className='w-11/12 m-auto flex justify-center'>
            <h2 className='text-center text-amber-900 p-10 tracking-wider animate-fade-in-up text-4xl font-extrabold'>
              Նորություններ
            </h2>
          </div>

          <div className='w-11/12 h-auto flex flex-wrap justify-evenly items-start m-auto '>
            <Skeleton loading={isFetching} active>
            {news.map((item) => (
              <div className='w-full sm:w-1/2 lg:w-1/3 p-4 news' key={item.id}>
                <Item item={item}/>
              </div>
            ))}
            </Skeleton>
          </div>

        </div>
      </App>
    </div>
  );
};

export default Index;
