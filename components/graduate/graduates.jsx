import React, {useEffect} from 'react';
import Person from "@/components/graduate/person";
import {useDispatch, useSelector} from "react-redux";
import {getGraduates} from "@/store/graduates/actions";
import {Skeleton} from "antd";

const Graduates = () => {

  const dispatch = useDispatch();
  const graduates = useSelector(state => state.graduate.graduates)
  const isFetching = useSelector(state => state.graduate.isFetching)
  useEffect(() => {
    dispatch(getGraduates.request());
  }, [dispatch]);
  return (
    <div className='w-full h-auto m-auto graduate'>
      <div className='w-auto h-auto mt-auto p-10'>
        <h2 className='text-center text-amber-900 tracking-wider animate-fade-in-up text-4xl'>Մեր շրջանավարտները</h2>
      </div>
      <div className='w-11/12 m-auto parentGraduate '>
        <div className='w-full flex flex-wrap justify-evenly childrenGraduate'>
          <Skeleton loading={isFetching} active>
            {graduates?.map((item) => (
              <Person key={item.id} isFetching={isFetching} user={item}/>
            ))}
          </Skeleton>

        </div>
      </div>
    </div>
  );
};

export default Graduates;