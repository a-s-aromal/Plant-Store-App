import * as React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import RecentProducts from "./components/RecentProducts";
import About from "./components/About";
import Services from "./components/Services";
import Overview from "./components/Overview";
import Testimonial from "./components/Testimonial";
import Enquire from "./components/Enquire";
import Categories from "./components/Categories";
import SubCategories from "./components/SubCategories";
import HeroSlider, { Overlay, Slide } from "hero-slider";
import './globals.css'
//
const image1 = "/assets/images/banner_bg.png";
const image2 = "/assets/images/banner_bg2.png";
const image3 = "/assets/images/banner_bg3.png";

function App(props) {
  return (
    <>
      <div className="items-center bg-white flex flex-col">
        <div className="flex-col shadow-sm overflow-hidden self-stretch relative flex min-h-[770px] w-full items-stretch pt-6 pb-12 max-md:max-w-full">
          <HeroSlider
            className="w-full absolute mt-[-24px] banner-align"
            height={"100vh"}
            autoplay
            controller={{
              initialSlide: 1,
              slidingDuration: 500,
              slidingDelay: 50,
              onSliding: (nextSlide) =>
                console.debug("onSliding(nextSlide): ", nextSlide),
              onBeforeSliding: (previousSlide, nextSlide) =>
                console.debug(
                  "onBeforeSliding(previousSlide, nextSlide): ",
                  previousSlide,
                  nextSlide
                ),
              onAfterSliding: (nextSlide) =>
                console.debug("onAfterSliding(nextSlide): ", nextSlide),
            }}
          >
            <Slide
              background={{
                backgroundImage: `url(${image1})`,
                backgroundSize: "cover",
              }}
            />
            <Slide
              background={{
                backgroundImage: `url(${image2})`,
                backgroundSize: "cover",
              }}
            />
            <Slide
              background={{
                backgroundImage: `url(${image3})`,
                backgroundSize: "cover",
              }}
            />

            <Overlay>
              <Navbar />
              <Banner />
            </Overlay>
          </HeroSlider>
        </div>
        <RecentProducts />
        <About />
        <Services />
        <Overview />
        <Testimonial />
        <Enquire />
        <Categories />
        <SubCategories />
        <Footer />
      </div>
    </>
  );
}

export default App;
