import React from 'react';
import { Link } from 'react-router-dom';
import '../globals.css'
const Banner = () => {
  return (
    <div className="text-center mt-[160px] font-ubuntu">
      <div className="relative text-black text-4xl font-normal max-w-[541px] mx-auto mt-8 max-md:max-w-full max-md:mt-10 banner-text">
        <div className="">
          Now, anyone can farm
          <br />
        </div>
        <div className="font-bold mt-4">Easy Plant Kits for everyone</div>
      </div>
      <Link to="#Shop">
        <button className="zoom-button relative mx-auto flex w-[185px] max-w-full flex-col justify-center items-stretch mt-10 mb-8 px-px rounded-[50px] max-md:mb-10 hover:shadow-lg transition duration-300 ease-in-out">
          <div className="flex flex-row">
            <div className=" flex w-full flex-col justify-center items-stretch pl-8 pr-6 py-2 rounded-[50px] max-md:px-5">
              <div className="items-center flex justify-between gap-5">
                <div className="text-white text-base grow whitespace-nowrap my-auto">
                  Shop Now
                </div>
                <img
                  loading="lazy"
                  srcSet="./public/assets/icons/shop_now_arrow.svg"
                  className="aspect-square object-contain object-center w-[34px] backdrop-blur-[44px] overflow-hidden self-stretch shrink-0 max-w-full rounded-[50%]"
                />
              </div>
            </div>
          </div>
        </button>
      </Link>
    </div>
  );
};

export default Banner;
