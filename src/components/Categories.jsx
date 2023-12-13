import React from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <>
      <div className="self-center w-full max-w-[1238px] mt-12 px-5 max-md:max-w-full max-md:mt-10 desktop-view">
      <div className="text-black text-4xl font-medium self-center whitespace-nowrap mb-[200px] text-left font-ubuntu">
        Categories
      </div>
      <div className="flex gap-[108px]">
        <Link to={"#Plants"}>
          <div className="card-client">
            <div className="category">
              <img
                loading="lazy"
                srcSet="/assets/images/category1.png"
                className="category-img"
              />
            </div>
            <p className="name-client text-black font-ubuntu">Plants</p>
          </div>
        </Link>
        <Link to={"#Pots"}>
          <div className="card-client">
            <div className="category">
              <img
                loading="lazy"
                srcSet="/assets/images/category2.png"
                className="category-img2"
              />
            </div>
            <p className="name-client2 text-black font-ubuntu">Pots</p>
          </div>
        </Link>
        <Link to={"#Combos"}>
          <div className="card-client">
            <div className="category">
              <img
                loading="lazy"
                srcSet="/assets/images/category3.png"
                className="category-img3"
              />
            </div>
            <p className="name-client3 text-black font-ubuntu">Combos</p>
          </div>
        </Link>
        <div>
          <button className="rounded-full bg-black text-white h-10 mt-[58px] see-all">
            <Link to={"#See-All"}>See All</Link>
          </button>
        </div>
      </div>
    </div>

      {/* Mobile View */}


      <div className="self-center w-full max-w-[1238px] mt-12 px-5 max-md:max-w-full max-md:mt-10 mobile-view">
        <div className="text-black text-4xl font-medium self-center whitespace-nowrap mb-[140px] text-left font-ubuntu">
          Categories
        </div>
        <div className="flex gap-[22px]">
          <Link to={"#Plants"}>
            <div className="card-client">
              <div className="category">
                <img
                  loading="lazy"
                  srcSet="/assets/images/category1.png"
                  className="category-img"
                />
              </div>
              <p className="name-client text-black font-ubuntu">Plants</p>
            </div>
          </Link>
          <Link to={"#Pots"}>
            <div className="card-client">
              <div className="category">
                <img
                  loading="lazy"
                  srcSet="/assets/images/category2.png"
                  className="category-img2"
                />
              </div>
              <p className="name-client2 text-black font-ubuntu">Pots</p>
            </div>
          </Link>
        </div>
        <div className="flex mt-[150px] combo-card">
        <Link to={"#Combos"}>
            <div className="card-client">
              <div className="category">
                <img
                  loading="lazy"
                  srcSet="/assets/images/category3.png"
                  className="category-img3"
                />
              </div>
              <p className="name-client3 text-black font-ubuntu">Combos</p>
            </div>
          </Link>
          <button className="rounded-full bg-black text-white h-10 see-all">
            <Link to={"#See-All"}>See All</Link>
          </button>
        </div>
      </div>

    </>
  );
};

export default Categories;
