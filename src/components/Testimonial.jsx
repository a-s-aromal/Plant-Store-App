import React from 'react';

const Testimonial = () => {
  return (
    <div className="self-stretch z-[1] mt-0 w-full max-md:max-w-full font-ubuntu">
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="absolute flex flex-col items-stretch w-[36%] max-md:w-full max-md:ml-0 mt-[-50px]">
          <img
            loading="lazy"
            srcSet="./public/assets/images/side_plant.png"
            className="aspect-[0.94] object-contain object-center w-full overflow-hidden grow max-md:max-w-full side-plant"
          />
        </div>{" "}
        <div className="flex flex-col items-stretch w-[100%] ml-5 max-md:w-full max-md:ml-0">
          <div className="items-center flex flex-col mt-[50px] mb-[50px] px-5 max-md:max-w-full max-md:mt-10">
            <div className="text-black text-4xl font-medium self-center whitespace-nowrap max-md:max-w-full">
              Testimonials
            </div>{" "}
            <div className="text-black text-center text-lg self-stretch mt-5 max-md:max-w-full">
              A testimonial is an honest endorsement of your product or service
              that usually comes from
              <br />a customer, colleague, or peer who has benefited from or
              experienced success as a result
              <br />
              of the work you did for them.
            </div>{" "}
            <img
              loading="lazy"
              src="./public/assets/images/review_stars.png"
              className="aspect-[14.36] object-contain object-center w-[359px] fill-white overflow-hidden self-center max-w-full mt-5"
            />{" "}
            <img
              loading="lazy"
              srcSet="./public/assets/images/luis_lara.png"
              className="aspect-[2.98] object-contain object-center w-[298px] overflow-hidden self-center max-w-full mt-5"
            />{" "}
            <div className="text-black text-center text-lg self-center whitespace-nowrap mt-5">
              Luis lara
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
