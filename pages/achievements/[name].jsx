import React, {useEffect} from 'react';
import Image from "next/image";
import App from "../../components/layouts/app";
import {useDispatch, useSelector} from "react-redux";
import {useRouter} from "next/router";
import {Skeleton} from "antd";
import {getAchievement, getRandAchievements} from "../../store/achievements/actions";
import SmallItem from "../../components/achievements/smallItem";

const Name = () => {
  const router = useRouter();
  const {name} = router.query;
  const dispatch = useDispatch();
  const achievement = useSelector((state) => state?.achievement?.selectedAchievemet);
  const rands = useSelector((state) => state?.achievement?.achievements);
  const isFetching = useSelector((state) => state?.achievement?.isFetching);
  useEffect(() => {
    dispatch(getAchievement.request({id: name}));
  }, [dispatch, name]);

  useEffect(() => {
    dispatch(getRandAchievements.request())
  }, [dispatch]);

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
              <div className='w-11/12 m-auto h-2/5'>
                <Image src={process.env.IMAGE_URL + achievement?.avatar} className='w-full h-full object-cover'
                       alt={"Image"}
                       width={1000}
                       height={1000}/>
              </div>
              <div className='w-11/12 m-auto h-auto mt-6'>
                <p dangerouslySetInnerHTML={{__html: achievement?.content}}></p>

              </div>
            </Skeleton>
          </div>
          <Skeleton loading={isFetching} active>
          <div className=' pl-10 w-2/6 h-auto smallItemParent'>
            <div className='mt-6 mb-10'>
              <h1 className='text-xl italic'>Վերջին Ձեռքբերումներ</h1>
            </div>
            {rands.map((item) => (
              <SmallItem key={item.id} item={item}/>
            ))}
          </div>
          </Skeleton>
        </div>

      </App>
    </div>
  );
};

export default Name;