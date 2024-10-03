import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getSlides} from "../../store/slides/actions";
import {getEvents} from "../../store/events/actions";
import {getLastNews} from "../../store/news/actions";
import {getBrands} from "../../store/brands/actions";
import Header from "../../components/header-footer/header";
import CarouselComponent from "../../components/carousel/CarouselComponent";
import Discover from "../../components/discover/discover";
import Event from "../../components/events/event";
import News from "../../components/news/news";
import Contact from "../../components/contact/contact";
import Running from "../../components/runningline/runningline";
import Footer from "../../components/header-footer/footer";

const Index = () => {

  const dispatch = useDispatch();
  const slides = useSelector(state => state.slide.slides)
  const events = useSelector(state => state.event.events)
  const news = useSelector(state => state.news.news)
  const brands = useSelector(state => state.brands.brands)

  useEffect(() => {
    dispatch(getSlides.request());
    dispatch(getEvents.request());
    dispatch(getLastNews.request());
    dispatch(getBrands.request());

  }, [dispatch]);
  return (
    <>
      <div>
        <Header/>
      </div>
      <div>
        <CarouselComponent data={slides}/>
      </div>
      <div>
        <Discover/>
      </div>
      <div>
        <Event heading={"Միջոցառումներ"} data={events}/>
      </div>
      <div className='mb-20'>
        <News heading={"Նորություններ"} data={news}/>
      </div>
      <div>
        <Contact/>
      </div>
      <div>
        <Running data={brands}/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
};

export default Index;