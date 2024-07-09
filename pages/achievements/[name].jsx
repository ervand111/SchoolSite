import React, {useEffect} from 'react';
import Image from "next/image";
import SmallItem from "@/components/events/smallItem";
import App from "@/components/layouts/app";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {getEvent} from "@/store/events/actions";
import {Skeleton} from "antd";
import {getAchievement} from "@/store/achievements/actions";

const Name = () => {
  const router = useRouter();
  const {name} = router.query;
  const dispatch = useDispatch();
  const achievement = useSelector((state) => state?.event?.selectedAchievemet);
  const isFetching = useSelector((state) => state?.achievement?.isFetching);
  useEffect(() => {
    dispatch(getAchievement.request({id: name}));
  }, [dispatch, name]);

  return (
    <div>
      <App>
        <div className='w-11/12 h-auto  justify-between flex m-auto eventName'>
          <div className='w-2/3 h-auto newsNameFirst '>
            <Skeleton loading={isFetching} active>
              <div className='w-11/12 m-auto mt-6 mb-10'>
                <p className='text-xl italic'>13/06/2024</p>
              </div>
              <div className='w-11/12 m-auto'>
                <h1 className='mb-10 text-2xl '>{achievement?.title}</h1>
              </div>
              <div className='w-11/12 m-auto h-2/6'>
                <Image src={process.env.IMAGE_URL + achievement?.avatar} className='w-full h-full object-cover' alt={"Image"}
                       width={1000}
                       height={1000}/>
              </div>
              <div className='w-11/12 m-auto h-auto mt-6'>
                <p dangerouslySetInnerHTML={{__html: achievement?.content}}></p>

              </div>
            </Skeleton>
          </div>
          <div className=' pl-10 w-2/6 h-auto smallItemParent'>
            <div className='mt-6 mb-10'>
              <h1 className='text-xl italic'>Վերջին Միջոցառումները</h1>
            </div>
            <SmallItem/>
            <SmallItem/>
            <SmallItem/>
            <SmallItem/>
            <SmallItem/>
            <SmallItem/>
            <SmallItem/>
            <SmallItem/>
          </div>
        </div>
      </App>
    </div>
  );
};

export default Name;