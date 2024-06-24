import Header from "@/components/header-footer/header";
import Footer from "@/components/header-footer/footer";
import CarouselComponent from "@/components/carousel/CarouselComponent";
import React from "react";
import Event from "@/components/events/event";
import {news, events, carouselComponents, brands} from "@/utility/db";
import Discover from "@/components/discover/discover";
import Contact from "@/components/contact/contact";
import Running from "@/components/runningline/runningline";
import News from "@/components/news/news";

export default function Home() {
  return (
    <>
      <div>
        <Header/>
      </div>
      <div>
        <CarouselComponent data={carouselComponents}/>
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
        <Footer/><
       /div>
    </>
  );
}
