import React, {useEffect} from 'react';
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getEvent, getRandEvents} from "../../store/events/actions";
import Link from "next/link";
import SmallItem from "../../components/events/smallItem";
import {Skeleton} from "antd";
import App from "../../components/layouts/app";
import Image from "next/image";

const Details = () => {
  const router = useRouter();
  const {name} = router.query;
  const dispatch = useDispatch();
  const event = useSelector((state) => state?.event?.selectedEvent);
  const randEvent = useSelector((state) => state?.event?.events);
  const isFetching = useSelector((state) => state?.event?.isFetching);
  useEffect(() => {
    dispatch(getEvent.request({id: name}));
    dispatch(getRandEvents.request());
  }, [dispatch, name]);

  useEffect(()=>{
    console.log(event)
  },[event])

  return (
      <>
        <App>
          <div className='w-11/12 h-auto  justify-between flex m-auto  newsName '>
            <div className='w-2/3 h-auto newsNameFirst '>
              <Skeleton loading={isFetching} active>
                <div className='w-11/12 m-auto mt-6 mb-10'>
                  <p className='text-xl italic'>
                    {new Date(event?.created_at).toLocaleDateString("en-GB")}
                  </p>

                </div>
                <div className='w-11/12 m-auto'>
                  <h1 className='mb-10 text-2xl '>{event?.title}</h1>
                </div>
                <div className='w-11/12 m-auto h-3/6'>
                  <Image src={process.env.IMAGE_URL + event?.avatar} className='w-full h-full object-cover'
                         alt={"Image"}
                         width={1000}
                         height={1000}/>
                </div>
                <div className='w-11/12 m-auto h-auto mt-6'>
                  <p dangerouslySetInnerHTML={{__html: event?.content}}></p>

                </div>
              </Skeleton>
            </div>
            <div className=' pl-10 w-2/6 h-auto smallItem'>

              <div className='mt-6 mb-10'>
                <h1 className='text-xl italic'>Վերջին Միջոցառումները</h1>
              </div>
              <Skeleton loading={isFetching} active>
                <>
                  {randEvent?.map((item) => (
                    <Link key={item.id} href={`/events/${item.id}`}>
                      <SmallItem item={item}/>
                    </Link>
                  ))}
                </>
              </Skeleton>
            </div>
          </div>
        </App>
      </>
  );
};

export default Details;