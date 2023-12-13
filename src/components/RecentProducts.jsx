import React, { useState } from "react";
import { Link } from "react-router-dom";

const RecentProducts = () => {
  // Create separate states for liked status for each product
  const [liked1, setLiked1] = useState(false);
  const [liked2, setLiked2] = useState(false);
  const [liked3, setLiked3] = useState(false);
  const [liked4, setLiked4] = useState(false);

  const handleButtonClick = (productNumber) => {
    // Update the liked status for the specific product
    switch (productNumber) {
      case 1:
        setLiked1(!liked1);
        break;
      case 2:
        setLiked2(!liked2);
        break;
      case 3:
        setLiked3(!liked3);
        break;
      case 4:
        setLiked4(!liked4);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className="self-center w-full max-w-[1238px] mt-12 px-5 max-md:max-w-full max-md:mt-10 font-ubuntu">
        <div className="text-center text-black text-4xl font-medium self-center whitespace-nowrap mb-12 mt-10 recent-products">
          Our Recent Products
        </div>
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0 pro-cards">
          {/* Product 1 */}
          <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col max-md:mt-10 pt-8 card">
              <button onClick={() => handleButtonClick(1)}>
                <img
                  className="absolute ml-[90px] mt-[-10px]"
                  src={liked1 ? "./src/assets/icons/liked.svg" : "./src/assets/icons/like.svg"}
                  alt={liked1 ? "liked" : "like"}
                />
              </button>
              <img
                loading="lazy"
                srcSet="./src/assets/images/product1.png"
                className="product"
              />
              <div className="text">
                <div className="text-black text-xl font-medium leading-8 self-stretch mt-4 text-left">
                  Aglaonema
                  <br />$ 250
                  <div className="text-white text-lg font-medium leading-8 whitespace-nowrap justify-center items-stretch backdrop-blur-[21px] bg-lime-600 ml-2.5 mt-4 px-10 py-3 rounded-[30px] max-md:px-5 add-pad">
                    <div className="add-pad">Add to Cart</div>
                  </div>
                </div>
              </div>
              <div className="text-black text-lg leading-8 mt-[-112px] ml-[-170px] product-name pro-name">
                Aglaonema
                <br />$ 250
              </div>
            </div>
          </div>

          {/* Product 2 */}
          <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0 pro-2">
            <div className="items-stretch flex flex-col max-md:mt-10 pt-8 card">
              <button onClick={() => handleButtonClick(2)}>
                <img
                  className="absolute ml-[90px] mt-[-10px]"
                  src={liked2 ? "./src/assets/icons/liked.svg" : "./src/assets/icons/like.svg"}
                  alt={liked2 ? "liked" : "like"}
                />
              </button>
              <img
                loading="lazy"
                srcSet="./src/assets/images/product2.png"
                className="product"
              />
              <div className="text add-cart">
                <div className="text-black text-xl font-medium leading-8 self-stretch mt-[52px] text-left">
                  Golden King Marble
                  <br />$ 340
                  <div className="text-white text-lg font-medium leading-8 whitespace-nowrap justify-center items-stretch backdrop-blur-[21px] bg-lime-600 ml-2.5 mt-4 px-11 py-3 rounded-[30px] max-md:px-5">
                    <div className="add-pad">Add to Cart</div>
                  </div>
                </div>
              </div>
              <div className="text-black text-lg leading-8 mt-[-112px] ml-[-100px] product-name pro-name">
                Golden King Marble
                <br />$ 340
              </div>
            </div>
          </div>

          {/* Product 3 */}
          <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0 pro-3">
            <div className="items-stretch flex flex-col max-md:mt-10 pt-8 card">
              <button onClick={() => handleButtonClick(3)}>
                <img
                  className="absolute ml-[90px] mt-[-10px]"
                  src={liked3 ? "./src/assets/icons/liked.svg" : "./src/assets/icons/like.svg"}
                  alt={liked3 ? "liked" : "like"}
                />
              </button>
              <img
                loading="lazy"
                srcSet="./src/assets/images/product3.png"
                className="product"
              />
              <div className="text add-cart">
                <div className="text-black text-xl font-medium leading-8 self-stretch mt-[32px] text-left ">
                  Radish Micro Green
                  <br />$ 250
                  <div className="text-white text-lg font-medium leading-8 whitespace-nowrap justify-center items-stretch backdrop-blur-[21px] bg-lime-600 ml-2.5 mt-4 px-11 py-3 rounded-[30px] max-md:px-5">
                  <div className="add-pad">Add to Cart</div>
                  </div>
                </div>
              </div>
              <div className="text-black text-lg leading-8 mt-[-112px] ml-[-100px] product-name pro-name">
                Radish Micro Green
                <br />$ 250
              </div>
            </div>
          </div>

          {/* Product 4 */}
          <div className="flex flex-col items-stretch w-[24%] max-md:w-full max-md:ml-0 pro-4">
            <div className="items-stretch flex flex-col max-md:mt-10 pt-8 card">
              <button onClick={() => handleButtonClick(4)}>
                <img
                  className="absolute ml-[90px] mt-[-10px]"
                  src={liked4 ? "./src/assets/icons/liked.svg" : "./src/assets/icons/like.svg"}
                  alt={liked4 ? "liked" : "like"}
                />
              </button>
              <img
                loading="lazy"
                srcSet="./src/assets/images/product4.png"
                className="product"
              />
              <div className="text add-cart">
                <div className="text-black text-xl font-medium leading-8 self-stretch mt-[44px] text-left">
                  Sanservia Fernwood
                  <br />$ 250
                  <div className="text-white text-lg font-medium leading-8 whitespace-nowrap justify-center items-stretch backdrop-blur-[21px] bg-lime-600 ml-2.5 mt-4 px-11 py-3 rounded-[30px] max-md:px-5">
                  <div className="add-pad">Add to Cart</div>
                  </div>
                </div>
              </div>
              <div className="text-black text-lg leading-8 mt-[-112px] ml-[-92px] product-name pro-name">
                Sanservia Fernwood
                <br />$ 250
              </div>
            </div>
          </div>
            </div>
          </div>
      <Link
        to={"#view-more"}
        className="text-black text-lg font-medium whitespace-nowrap mt-12 text-right max-md:mr-2.5 ml-auto mr-[100px] relative"
      >
        View More....
      </Link>
    </>
  );
};

export default RecentProducts;
