import React, {useEffect} from 'react';
import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Image from "next/image";
import {useRouter} from "next/router";

const Item = ({item}) => {

  return (
    <div className=" w-11/12  rounded-2xl images-event mb-2 ">
      <Link href={`news/${item?.id}`}>
        <Image className="w-11/12 object-cover rounded-2xl" width={500} height={500} src={process.env.IMAGE_URL+item?.avatar} alt="Image 1"/>
        <h2 className='text-2xl text-center'>{item?.title}</h2>
      </Link>
    </div>
  );
};

export default Item;