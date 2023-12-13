import React from "react";
import "../globals.css";

const About = () => {
  return (
    <div className="bg-stone-50 bg-opacity-70 self-stretch flex w-full flex-col justify-center items-stretch mt-10 px-16 py-9 max-md:max-w-full max-md:px-5 font-ubuntu">
      <div className="mx-4 max-md:max-w-full max-md:mr-2.5">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[34%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex grow flex-col mt-2.5 max-md:mt-10">
              <div className="text-green-950 text-4xl font-medium">
                The world's
                <br />
                1st subscription-based
                <br />
                Indoor Plant Company
              </div>
              <div className="text-neutral-700 text-justify text-xl leading-8 mt-6 mr-6">
                The world’s first subscription-based Indoor Plant Company –
                Harvestay is revolutionizing the way people buy and care for
                their plants. With this innovative model, customers can
                subscribe to a monthly delivery of a curated selection of
                healthy and vibrant plants that ...
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[66%] ml-5 max-md:w-full max-md:ml-0 thumb-nail">
            <div className="items-stretch flex grow flex-col justify-center max-md:max-w-full max-md:mt-10 relative">
              <div className="shadow-sm bg-white flex flex-col justify-center items-stretch p-2.5 rounded-md max-md:max-w-full thumbnail-container relative">
                <div className="thumbnail-image-container overflow-hidden rounded-md">
                  <img
                    loading="lazy"
                    srcSet="./src/assets/images/video_thumbnail.png"
                    className="aspect-[1.98] object-contain object-center w-full h-full"
                  />
                  <div className="hover-overlay"></div>
                </div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <img
                    loading="lazy"
                    src="./src/assets/icons/play_button.svg"
                    className="aspect-square object-contain object-center play-button"
                    alt="Play Button"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
