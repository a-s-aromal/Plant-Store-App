import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const CountUpNumber = ({ end, duration }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  return (
    <div ref={ref}>
      {inView && <CountUp end={end} duration={duration} />}
      <span>+</span>
    </div>
  );
};

const Overview = () => {
  return (
    <div className="items-center self-center flex w-full max-w-[1271px] flex-col justify-center mt-10 px-16 py-px max-md:max-w-full max-md:px-5">
      <div className="w-[942px] max-w-full">
        <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
          <div className="flex flex-col items-stretch w-[21%] max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:mt-10">
              <div className="text-black text-4xl font-medium">
                <span className="font-medium text-green-900">
                  <CountUpNumber end={400} duration={3} />
                </span>
                <span className="text-medium font-ubuntu">PRODUCTS</span>
              </div>
              <div className="bg-lime-600 bg-opacity-50 shrink-0 h-px mt-7" />
              <div className="text-black text-4xl font-medium mt-8">
                <span className="text-green-900">
                  <CountUpNumber end={1100} duration={3} />
                </span>
                <span className="text-medium font-ubuntu">ORDERS</span>
              </div>
              <div className="bg-lime-600 bg-opacity-50 shrink-0 h-px mt-7" />
              <div className="text-black text-4xl font-medium mt-8">
                <span className="text-green-900">
                  <CountUpNumber end={1250} duration={3} />
                </span>
                <span className="text-medium font-ubuntu">PLANT TYPES</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-stretch w-[58%] ml-5 max-md:w-full max-md:ml-0">
            <img
              loading="lazy"
              src="/assets/images/girl_holding_plant.png"
              className="aspect-[0.83] object-contain object-center w-full overflow-hidden grow max-md:max-w-full max-md:mt-10"
              alt="Girl holding plant"
            />
          </div>
          <div className="flex flex-col items-stretch w-[21%] ml-5 max-md:w-full max-md:ml-0">
            <div className="items-stretch flex flex-col my-auto max-md:mt-10">
              <div className="text-black text-4xl font-medium">
                <span className="font-medium text-green-900">
                  <CountUpNumber end={350} duration={3} />
                </span>
                <span className=" text-medium font-ubuntu">PROJECTS DONE</span>
              </div>
              <div className="bg-lime-600 bg-opacity-50 shrink-0 h-px mt-7" />
              <div className="text-black text-4xl font-medium mt-8">
                <span className="text-green-900">
                  <CountUpNumber end={400} duration={3} />
                </span>
                <span className="text-medium font-ubuntu">HAPPY CLIENTS</span>
              </div>
              <div className="bg-lime-600 bg-opacity-50 shrink-0 h-px mt-7" />
              <div className="text-black text-4xl font-medium mt-8">
                <span className="text-green-900">
                  <CountUpNumber end={1250} duration={3} />
                </span>
                <span className="text-medium font-ubuntu">PLANT TYPES</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center bg-lime-600 bg-opacity-50 shrink-0 h-px w-[147%] mx-auto mt-[-1px] ml-[-220px]" />
      </div>
    </div>
  );
};

export default Overview;
