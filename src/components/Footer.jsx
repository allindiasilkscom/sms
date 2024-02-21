import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const CurrentYear = new Date().getFullYear();

  return (
    <div className="footer-wrapper">
    <div className="max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-8 text-gray-300">
   
      <div className="lg:col-span-2 justify-evenly grid lg:grid-cols-3 md:items-start">
       
        <div>
          <h6 className="font-medium text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 text-sm">ISO-Certified</li>
            <li className="py-2 text-sm"><Link to="privacy_policy">Policy</Link></li>
            <li className="py-2 text-sm"><Link to="terms">Terms</Link></li>
          </ul>
        </div>
        <div>
      <h6 className="font-medium text-gray-400">Social Connect</h6>
      <div className="flex md:w-[75%] my-6 flex-cols ">
        <a href="https://www.dribbble.com">
          <FaDribbbleSquare size={30}  className="hover:bg-white hover:text-cyan-900 text-2xl"/>
        </a>
        <a href="https://www.facebook.com/sierramarineservices/">
          <FaFacebookSquare size={30}  className="hover:bg-white hover:text-cyan-900 text-2xl"/>
        </a>
        <a href="https://www.instagram.com/p/B--VsyPlBc1/?igshid=ut5uta701doo">
          <FaInstagram size={30} className="hover:bg-white hover:text-cyan-900 text-2xl" />
        </a>
        <a href="https://www.twitter.com">
          <FaTwitterSquare size={30} className="hover:bg-white hover:text-cyan-900 text-2xl" />
        </a>
      </div>
    </div>
   
      </div>
      <div className="text-center">
        <h3 className="">Copyright©{CurrentYear}- SierraMarineServices | All Right Reserved</h3>
      </div>
    </div>
    </div>
  );
};

export default Footer;
