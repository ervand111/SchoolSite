import React, { useEffect } from 'react';
import Image from 'next/image';
import SmallItem from '../../components/news/smallitem';
import App from '../../components/layouts/app';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getNewsById, getRandNews } from '../../store/news/actions';
import { Skeleton } from 'antd';
import Link from 'next/link';


const Name = () => {
  const router = useRouter();
  const { name } = router.query;
  const dispatch = useDispatch();
  const news = useSelector((state) => state?.news?.selectedNews);
  const randNews = useSelector((state) => state?.news?.news);
  const isFetching = useSelector((state) => state?.news?.isFetching);

  useEffect(() => {
    if (name) {
      dispatch(getNewsById.request({ id: name }));
      dispatch(getRandNews.request());
    }
  }, [dispatch, name]);

  if (!news?.title) {
    return <Skeleton loading={isFetching} active />;
  }

  return (
    <>
      <App>
        <div className='w-11/12 h-max justify-between flex m-auto newsName'>
          <div className='w-2/3 h-max newsNameFirst'>
            <Skeleton loading={isFetching} active>
              <div className='w-11/12 m-auto mt-6 mb-10'>
                <p className='text-xl italic'>
                  {new Date(event?.created_at).toLocaleDateString("en-GB")}
                </p>
              </div>
              <div className='w-11/12 m-auto'>
                <h1 className='mb-10 text-2xl'>{news?.title}</h1>
              </div>
              <div className='w-11/12 m-auto h-3/6'>
                <Image
                  src={process.env.IMAGE_URL + news?.avatar}
                  className='w-full h-full object-cover'
                  alt={news?.title}
                  width={1000}
                  height={1000}
                />
              </div>
              <div className='w-11/12 m-auto h-auto mt-6 mb-20'>
                <p dangerouslySetInnerHTML={{ __html: news?.content }}></p>
              </div>

            </Skeleton>
          </div>

          <div className='pl-10 w-2/6 h-auto smallItem'>
            <div className='mt-6 mb-10'>
              <h1 className='text-xl italic'>Վերջին նորությունները</h1>
            </div>
            <Skeleton loading={isFetching} active>
              <>
                {randNews?.map((item) => (
                  <Link key={item.id} href={`/news/${item?.id}`}>
                    <SmallItem item={item} />
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

export default Name;
