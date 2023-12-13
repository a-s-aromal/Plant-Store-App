import React from 'react';
import { Link } from "react-router-dom";

const Enquire = () => {
  return (
    <div className="enquire-bg self-stretch w-full pl-20 max-md:max-w-full max-md:pl-5">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[52%] max-md:w-full max-md:ml-0">
          <div className="items-stretch flex flex-col my-auto max-md:max-w-full max-md:mt-10">
            <div className="text-white text-3xl font-medium leading-[52px] tracking-tight capitalize max-md:max-w-full font-ubuntu">
              <span>
                Discover the convenience of online shopping &amp;
                <br />
                the opportunity of
              </span>{' '}
              <span className="font-medium"> </span>
              <span className="font-bold">franchise ownership</span>
              <span className="font-medium"> </span>
            </div>{' '}
            <button className="text-2xl font-medium leading-[52px] tracking-tight capitalize whitespace-nowrap justify-center items-stretch backdrop-blur-[15px] bg-white bg-opacity-90 mt-6 px-11 py-1 rounded-[45px] self-start max-md:px-5 font-ubunt enquire">
             <Link to={'#Enquire'}>Enquire Now</Link> 
            </button>
          </div>
        </div>{' '}
        <div className="flex flex-col items-stretch w-[48%] ml-5 max-md:w-full max-md:ml-0">
          <img
            loading="lazy"
            srcSet="./public/assets/images/harvestay_office.png"
            className="aspect-[1.81] object-contain object-center w-full overflow-hidden grow  max-md:mt-10  enquire-img"
          />
        </div>
      </div>
    </div>
  );
};

export default Enquire;
