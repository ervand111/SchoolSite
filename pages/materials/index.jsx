import React, {useEffect} from 'react';
import App from "@/components/layouts/app";
import Link from "next/link";
import {useDispatch, useSelector} from "react-redux";
import {getDocuments} from "@/store/documents/actions";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {Skeleton} from "antd";

const Index = () => {
  const dispatch = useDispatch();
  const documents = useSelector(state => state.document.documents)
  const isFetching = useSelector(state => state.document.isFetching)
  useEffect(() => {
    dispatch(getDocuments.request());
  }, [dispatch]);
  return (
    <div>
      <App>
        <div className='w-11/12 mx-auto p-10 materialsParent'>
          <div className='w-full text-center'>
            <h2 className='text-amber-900 text-4xl py-5 tracking-wider animate-fade-in-up'>
              Փաստաթղթեր
            </h2>
          </div>
          <Skeleton loading={isFetching} active>

            <div className='w-full border-2 rounded-lg shadow-lg p-4 mt-8'>
              <ul className="w-full">
                {documents.map(document => (
                  <li key={documents?.id} className='py-4 px-6 mb-4 bg-gray-100 rounded-md'>
                    <Link key={document?.id} href={process.env.IMAGE_URL + JSON.parse(document?.pdf)[0].download_link}>
                      {document?.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </Skeleton>

        </div>
      </App>
    </div>
  );
};

export default Index;
