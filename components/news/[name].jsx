import React from 'react';
import Image from "next/image";
import {news} from "@/utility/db";
import SmallItem from "@/components/news/smallitem";
import App from "@/components/layouts/app";

const Name = () => {
  return (
    <div>
      <App>
        <div className='w-11/12 h-auto  justify-between flex m-auto'>
          <div className='w-2/3 h-auto '>
            <div className='w-11/12 m-auto mt-6 mb-10'>
              <h1 className='text-xl italic'>13/06/2024</h1>
            </div>
            <div className='w-11/12 m-auto'>
              <p className='mb-10 text-2xl '>Մրցույթ՝ Ամբիոնի վարիչի թափուր հաստիքի համար</p>
            </div>
            <div className='w-11/12 m-auto h-2/6 bg-yellow-200'>
              <Image src='/compitetion.jpeg' className='w-full h-full object-cover' alt={news} width={1000}
                     height={1000}/>
            </div>
            <div className='w-11/12 m-auto h-auto mt-6'>
              <p className='leading-7  text-start'>
                Հայաստանի եվրոպական համալսարանը հայտարևարում է #մրցույթ Տեղեկատվական տեխնոլոգիաների և կիրառական
                մաթեմատիկայի ամբիոնի թափուր հաստիքի համար:
                Հիմնական պահանջներն են՝</p>
              <p className='leading-7  text-start'>
                - Մասնագիտական և գիտակրթական փորձ (առնվազն 3 տարի)
              </p>
              <p className='leading-7  text-start'>
                - Մասնագիտական ուղղվածության գիտական աստճան (թեկնածու կամ դոկտոր)
              </p>
              <p className='leading-7  text-start'>
                - Անգլերենի իմացություն (առնվազն B1 մակարդակ):
              </p>
              <p className='leading-7  text-start'>
                Մրցույթի նախնական փուլին մասնակցելու համար խնդրում ենք ուղարկել Ձեր ինքնակենսագրականը (CV)
              </p>

            </div>
            <div className='w-11/12 m-auto h-4 mt-10 '></div>
          </div>
          <div className=' pl-10 w-2/6 h-auto'>
            <div className='mt-6 mb-10'>
              <h1 className='text-xl italic'>Վերջին նորությունները</h1>
            </div>
            <SmallItem/>
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