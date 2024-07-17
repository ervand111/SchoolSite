import React, {useEffect, useState} from 'react';
import {useRouter} from "next/router";
import {data} from "@/utility/db";
import App from "@/components/layouts/app";
import Banner from "@/components/banner/banner";
import Image from "next/image";
import pedagogic from "@/components/pedagogic/pedagogic";
import {getNewsById} from "@/store/news/actions";
import {getUserWithPedagogic} from "@/store/user/actions";
import {useDispatch, useSelector} from "react-redux";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {getPedagogic} from "@/store/pedagogic/actions";

const Id = () => {
  const [info, setInfo] = useState({})
  const router = useRouter();
  const dispatch = useDispatch();
  const {id} = router.query;
  const users = useSelector((state) => state?.userWithPedagogic?.users);
  const [director, setDirector] = useState({});
  const [title, setTitle] = useState(null)
  useEffect(() => {
    dispatch(getUserWithPedagogic.request({id: id}));
  }, [dispatch, id]);

  useEffect(() => {
    setDirector(users?.find(x => x.director_status === 1));
  }, [users])
  const pedagogic = useSelector(state => state?.pedagogic?.pedagogic)
  useEffect(() => {
    dispatch(getPedagogic.request());
  }, [dispatch]);

  useEffect(() => {
    setTitle(pedagogic.filter(x => x.id == id)[0])
  }, [id, pedagogic])
  return (
    <div>
      <App>
        <div className='w-11/12 h-auto flex justify-center   items-center mt-12 m-auto pedagogicPage'>
          <Banner>
            <div>
              {title?.title}
            </div>
          </Banner>
        </div>
        <div
          className='w-11/12 h-32 border-b border-t mt-4 border-black m-auto flex justify-center items-center textPedagonic'>
          <p className='text-3xl'>{director?.profession}</p>
        </div>

        <div className='w-11/12 h-auto m-auto mt-12 flex justify-center  items-center'>
          <div className='w-1/3 h-80 flex  justify-center items-center '>
            <Image
              className='w-11/12 h-5/6 object-contain filter  drop-shadow-lg transition-transform transform hover:scale-105'
              src={process.env.IMAGE_URL + director?.avatar}
              width={1000}
              height={1000}
              alt={pedagogic}
            />
          </div>
          <div className='w-1/3 h-44 flex justify-center items-center flex-col rounded-lg shadow-2xl p-4'>
            <p className='text-2xl font-bold mb-2'>{director?.fullname}</p>
          </div>
        </div>
        <div
          className='w-11/12 h-32 border-b textPedagonic border-t border-black m-auto flex justify-center items-center'>
          <p className='text-3xl'>Անդամներ</p>
        </div>

        <div
          className='w-11/12 h-auto m-auto flex items-center justify-center overflow-hidden rounded-lg shadow-lg'>
          {users?.filter(x => x.director_status !== 1).map((item) => (
            <div key={item.id} className='w-full  h-auto  itemPedagonic flex-col flex  items-center justify-center p-4'>
              <div className='w-1/3 h-full flex pedagogicChildrens  justify-center items-center'>
                <Image
                  className='w-full h-full object-cover rounded-lg shadow-lg'
                  src={process.env.IMAGE_URL + item?.avatar}
                  alt={pedagogic}
                  width={400}
                  height={400}
                />
              </div>
              <div className='w-auto h-full  flex justify-center items-center flex-col p-4'>
                <p className='text-xl  text-center font-bold mb-2'>{item?.fullname}</p>
                <p className='text-xl text-gray-700'>{item?.profession}</p>
              </div>
            </div>
          ))}
        </div>
      </App>
    </div>
  );
};

export default Id;