import React from "react";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <>
      <div className="text-center text-black text-4xl font-medium self-center whitespace-nowrap mb-12 mt-12 font-ubuntu">
        Our Services
      </div>
      <div className="self-stretch flex w-full items-stretch  pl-20 max-md:max-w-full max-md:mt-10 max-md:pl-5 overflow-hidden font-ubuntu align-service">
        <div className="items-stretch flex justify-between gap-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center ml-[-60px] service-margin">
          <div className="service-container overflow-hidden">
            <div className="service">
              <div className="img-content">
                <h2 className="absolute ml-[-100px]">Easy Plant Kits</h2>
                <img
                  src="/assets/images/service1.png"
                  alt="Service Image"
                />
              </div>
              <div className="content">
                <p className="heading">Easy Plant Kits</p>
                <p>
                  Transforming your space into a lush oasis has never been
                  simpler with our Easy Plant Kits, curated to bring the joy of
                  gardening effortlessly to your doorstep.
                </p>
                <Link href="#" className="text-right mt-5 view-more">
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="service-container">
            <div className="service">
              <div className="img-content">
                <h2 className="absolute ml-[-120px]">Landscaping</h2>
                <img
                  src="/assets/images/service2.png"
                  alt="Service Image"
                />
              </div>
              <div className="content">
                <p className="heading">Landscaping</p>
                <p>
                  Elevate your outdoor paradise with our expert Landscaping
                  services, where creativity meets expertise to turn your vision
                  into a stunning reality.
                </p>
                <Link to="#" className="text-right mt-5 view-more">
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="service-container">
            <div className="service">
              <div className="img-content">
                <h2 className="absolute ml-[-160px]">Plant Gift</h2>
                <img
                  src="/assets/images/service3.png"
                  alt="Service Image"
                />
              </div>
              <div className="content">
                <p className="heading mt-6">Plant Gift</p>
                <p>
                  A small plant in the room or at the work desk can help
                  considerably in maintaining fresh air around you. So with a
                  plant gift, you are actually gifting them good health along
                  with years of beauty, companionship, and care.
                </p>
                <Link to="#" className="text-right mt-5 view-more">
                  View More
                </Link>
              </div>
            </div>
          </div>
          <div className="service-container">
            <div className="service">
              <div className="img-content">
                <h2 className="absolute ml-[-40px]">
                  {" "}
                  Balcony & Terrace <br />
                  Gardens
                </h2>
                <img
                  src="/assets/images/service4.png"
                  alt="Service Image"
                />
              </div>
              <div className="content">
                <p className="heading">
                  <br />
                  Balcony & Terrace <br />
                  Gardens
                </p>
                <p>
                  Bring the beauty of nature to new heights with our specialized
                  expertise in creating enchanting Balcony & Terrace Gardens,
                  turning your outdoor spaces into captivating green
                  sanctuaries.
                </p>
                <Link to="#" className="text-right mt-5 view-more">
                  View More
                </Link>
              </div>
            </div>
          </div>
        </div>{" "}
      </div>
    </>
  );
};

export default Services;
