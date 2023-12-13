import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-stone-300 self-stretch flex w-full flex-col justify-center items-center mt-10 px-10 py-12 max-md:max-w-full max-md:px-5 font-ubuntu">
      <div className="items-stretch flex w-full max-w-[1201px] justify-between gap-[250px] mt-8 mb-8 max-md:max-w-full max-md:flex-wrap max-md:justify-center footer">
        <Link to={''}>
        <img
          loading="lazy"
          src="/assets/images/harvestay_logo_footer.png"
          className="aspect-[5.46] object-contain object-center w-[273px] overflow-hidden shrink-0 max-w-full footer-logo"
          alt="Harvestay Logo"
        />
        </Link>
        <div className="items-stretch self-center flex justify-between gap-12 my-auto max-md:justify-center ml-[-30px] footer-links">
          <Link to={'#Help'} className="text-black text-base tracking-tight whitespace-nowrap">
            Help
          </Link>
          <Link to={'#Contact-Us'} className="text-black text-base tracking-tight  whitespace-nowrap">Contact Us</Link>
          <Link to={'#Privacy-Terms'} className="text-black text-base tracking-tight whitespace-nowrap">
            Privacy & Terms
          </Link>
        </div>
        <div className="items-stretch self-center flex justify-between gap-12 my-auto max-md:justify-center footer-socials">
          <Link to={'#facebook'}>
          <img
            loading="lazy"
            src="/assets/icons/facebook.svg"
            className="aspect-[0.5] object-contain object-center w-3 overflow-hidden shrink-0 max-w-full"
            alt="Facebook Icon"
          />
          </Link>
          <Link to={'#x'}>
          <img
            loading="lazy"
            src="/assets/icons/x.svg"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            alt="Close Icon"
          />
          </Link>
          <Link to={'#Instagram'}>
          <img
            loading="lazy"
            src="/assets/icons/instagram.svg"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full"
            alt="Instagram Icon"
          />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
