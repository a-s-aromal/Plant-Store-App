import React from "react";
import { Link } from "react-router-dom";

const SubCategories = () => {
  return (
    <>
      <div className="self-center w-full max-w-[1238px] mt-[80px] px-5 max-md:max-w-full max-md:mt-10 desktop-view">
      <div className="text-black text-4xl font-medium self-center whitespace-nowrap mb-[150px] text-left font-ubuntu">
        Sub Categories
      </div>
      <div className="flex gap-[40px]">
        <div className="sub-card">
          <div className="category">
            <img
              loading="lazy"
              srcSet="/assets/images/sub-category1.png"
              className="sub-category-img"
            />
          </div>
          <p className="sub-name-client text-black font-ubuntu">Flowering Plants</p>
        </div>
        <div className="sub-card">
          <div className="category">
            <img
              loading="lazy"
              srcSet="/assets/images/sub-category2.png"
              className="sub-category-img2"
            />
          </div>
          <p className="sub-name-client2 text-black font-ubuntu">Low-Light Plants</p>
        </div>
        <div className="sub-card">
          <div className="category">
            <img
              loading="lazy"
              srcSet="/assets/images/sub-category3.png"
              className="sub-category-img3"
            />
          </div>
          <p className="sub-name-client3 text-black font-ubuntu">Flowering Plants</p>
        </div>
      </div>
    </div>

      {/* Mobile View */}

      <div className="self-center w-full max-w-[1238px] mt-[80px] px-5 max-md:max-w-full max-md:mt-10 mobile-view">
        <div className="text-black text-4xl font-medium self-center whitespace-nowrap text-left mb-[80px] font-ubuntu">
          Sub Categories
        </div>
        <div className="flex-col items-center gap-[40px]">
          <div className="sub-card">
            <div className="category">
              <img
                loading="lazy"
                srcSet="/assets/images/sub-category1.png"
                className="sub-category-img"
              />
            </div>
            <p className="sub-name-client text-black font-ubuntu">
              Flowering Plants
            </p>
          </div>
          <div className="sub-card">
            <div className="category">
              <img
                loading="lazy"
                srcSet="/assets/images/sub-category2.png"
                className="sub-category-img2"
              />
            </div>
            <p className="sub-name-client2 text-black font-ubuntu">
              Low-Light Plants
            </p>
          </div>
          <div className="sub-card">
            <div className="category">
              <img
                loading="lazy"
                srcSet="/assets/images/sub-category3.png"
                className="sub-category-img3"
              />
            </div>
            <p className="sub-name-client3 text-black font-ubuntu">
              Flowering Plants
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default SubCategories;
