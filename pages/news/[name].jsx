import React, {useEffect, useState} from 'react';
import Head from 'next/head';
import Image from 'next/image';
import SmallItem from '../../components/news/smallitem';
import App from '../../components/layouts/app';
import {useRouter} from 'next/router';
import {useDispatch, useSelector} from 'react-redux';
import {getNewsById, getRandNews} from '../../store/news/actions';
import {Skeleton} from 'antd';
import {
  FacebookShareButton,
  FacebookIcon,
} from 'next-share'
import Link from 'next/link';
const Name = () => {
  const router = useRouter();
  const {name} = router.query;
  const dispatch = useDispatch();
  const news = useSelector((state) => state?.news?.selectedNews);
  const randNews = useSelector((state) => state?.news?.news);
  const isFetching = useSelector((state) => state?.news?.isFetching);
  const pageUrl = `https://www.182dproc.am/news/${name}`;
  const [base64Image, setBase64Image] = useState('');

  useEffect(() => {
    if (name) {
      dispatch(getNewsById.request({id: name}));
      dispatch(getRandNews.request());
    }
  }, [dispatch, name]);

  useEffect(() => {
    const fetchBase64Image = async () => {
      if (news?.avatar) {
        try {
          // Call the API to get the base64 image
          const response = await fetch(`/api/base64?imageUrl=${encodeURIComponent(process.env.IMAGE_URL + news.avatar)}`);
          const data = await response.json();
          if (data.base64Image) {
            console.log(data.base64Image)
            setBase64Image(data.base64Image);
          } else {
            throw new Error('Failed to load base64 image');
          }
        } catch (error) {
          console.error("Failed to fetch base64 image:", error);
          setBase64Image('data:image/png;base64,DEFAULT_BASE64_STRING'); // Replace with actual default Base64 string
        }
      }
    };

    if (news?.avatar) fetchBase64Image();
  }, [news]);


  const trimmedContent = news?.content ? news.content.substring(0, 150) + '...' : '';

  if (!news?.title) {
    return <Skeleton loading={isFetching} active/>;
  }

  return (
    <>
      <Head>
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/69414757?s=280&amp;v=4"/>
        <meta property="og:image:alt"
              content="A social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps. - next-share"/>
        <meta property="og:url" content="https://github.com/next-share"/>
        <meta property="og:description"
              content="A social share buttons plugin for Next.js, Create React App, Gatsby.js as well as React apps. - next-share"/>
        <meta property="og:type" content="article"/>
        <meta name="hostname" content="github.com"/>
      </Head>
      <App>
        <div className='w-11/12 h-max justify-between flex m-auto newsName'>
          <div className='w-2/3 h-max newsNameFirst'>
          <Skeleton loading={isFetching} active>
              <div className='w-11/12 m-auto mt-6 mb-10'>
                <p className='text-xl italic'>13/06/2024</p>
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
              <div className='w-11/12 m-auto h-auto mt-6'>
                <p dangerouslySetInnerHTML={{__html: news?.content}}></p>
              </div>
              <div className="w-11/12 mt-6 ml-10 mb-10">
                {news?.title ? console.log(news.title) : null}
                {news?.title && (
                  <div className="w-11/12 mt-6 ml-10 mb-10">
                    <FacebookShareButton
                      url={'https://github.com/next-share'}
                      quote={'next-share is a social share buttons for your next React apps.'}
                      hashtag={'#nextshare'}
                    >
                      <FacebookIcon size={32} round />
                    </FacebookShareButton>
                  </div>
                )}
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

export default Name;
