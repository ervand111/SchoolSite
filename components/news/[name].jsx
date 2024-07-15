import React, {useEffect} from 'react';
import Image from "next/image";
import SmallItem from "@/components/news/smallitem";
import App from "@/components/layouts/app";
import {useRouter} from "next/router";
import {useDispatch, useSelector} from "react-redux";
import {getNewsById, getRandNews} from "@/store/news/actions";
import {Skeleton} from "antd";
import Link from "next/link";
import item from "@/components/news/item";

const Name = () => {
  const router = useRouter();
  const {name} = router.query;
  const dispatch = useDispatch();
  const news = useSelector((state) => state?.news?.selectedNews);
  const randNews = useSelector((state) => state?.news?.news);
  const isFetching = useSelector((state) => state?.news?.isFetching);
  useEffect(() => {
    dispatch(getNewsById.request({id: name}));
    dispatch(getRandNews.request());
  }, [dispatch, name]);

  return (
    <div>
      <App>
        <div className='w-11/12 h-auto  justify-between flex m-auto  newsName '>
          <div className='w-2/3 h-auto newsNameFirst '>
            <Skeleton loading={isFetching} active>
              <div className='w-11/12 m-auto mt-6 mb-10'>
                <p className='text-xl italic'>13/06/2024</p>
              </div>
              <div className='w-11/12 m-auto'>
                <h1 className='mb-10 text-2xl '>{news?.title}</h1>
              </div>
              <div className='w-11/12 m-auto h-2/6'>
                <Image src={process.env.IMAGE_URL + news?.avatar} className='w-full h-full object-cover' alt={"Image"}
                       width={1000}
                       height={1000}/>
              </div>
              <div className='w-11/12 m-auto h-auto mt-6'>
                <p dangerouslySetInnerHTML={{__html: news?.content}}></p>

              </div>
            </Skeleton>
          </div>
          <div className=' pl-10 w-2/6 h-auto smallItem'>

            <div className='mt-6 mb-10'>
              <h1 className='text-xl italic'>Վերջին նորությունները</h1>
            </div>
            <Skeleton loading={isFetching} active>
              <>
                {randNews?.map((item) => (
                  <Link key={item.id} href={`/news/${item.id}`}>
                    <SmallItem item={item} />
                  </Link>
                ))}
              </>
            </Skeleton>
          </div>
        </div>
      </App>
    </div>
  );
};

export default Name;