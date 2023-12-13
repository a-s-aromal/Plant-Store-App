import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="relative font-ubuntu backdrop-blur-[26.5px] bg-gray-200 flex max-w-full items-stretch justify-between gap-5 pl-4 pr-4 md:pl-16 md:pr-11 py-3 rounded-[50px] md:max-md:flex-wrap md:max-md:px-5 mt-8 mx-10 nav-size">
      <Link to="/">
        <img
          loading="lazy"
          srcSet="./public/assets/images/harvestay_logo.png"
          className="aspect-[3.18] object-contain object-center w-[129px] md:w-[229px] overflow-hidden shrink-0 max-w-full"
          alt="Logo"
        />
      </Link>
      <div className="items-stretch self-center flex justify-center gap-8 my-auto md:max-md:max-w-full md:flex-wrap md:justify-center mr-6 nav-items">
        <Link to="#Home" className="text-black text-base md:text-lg whitespace-nowrap">
          Home
        </Link>
        <Link to="#AboutUs" className="text-black text-base md:text-lg">
          About Us
        </Link>
        <Link to="#Services" className="text-black text-base md:text-lg">
          Services
        </Link>
        <Link to="#Shop" className="text-black text-base md:text-lg">
          Shop
        </Link>
        <Link to="#ContactUs" className="text-black text-base md:text-lg whitespace-nowrap">
          Contact Us
        </Link>
      </div>
      <div className="items-stretch self-center flex justify-between gap-6 my-auto md:max-md:justify-center">
      <Link to="#Menu" className="hamburger">
          <img
            loading="lazy"
            src="./public/assets/icons/menu.svg"
            className="aspect-square object-contain object-center w-4 md:w-6 overflow-hidden shrink-0 max-w-full"
            alt="Search"
          />
        </Link>
       <div className="flex gap-6 nav-icons">
        <Link to="#Search">
          <img
            loading="lazy"
            src="./public/assets/icons/search.svg"
            className="aspect-square object-contain object-center w-4 md:w-6 overflow-hidden shrink-0 max-w-full"
            alt="Search"
          />
        </Link>
        <Link to="#Profile">
          <img
            loading="lazy"
            src="./public/assets/icons/profile.svg"
            className="aspect-square object-contain object-center w-4 md:w-6 justify-center items-center overflow-hidden shrink-0 max-w-full"
            alt="Profile"
          />
        </Link>
        <Link to="#Cart">
          <img
            loading="lazy"
            src="./public/assets/icons/cart.svg"
            className="aspect-square object-contain object-center w-4 md:w-6 overflow-hidden shrink-0 max-w-full"
            alt="Cart"
          />
        </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
