import React, { useState, useEffect } from "react";
import Logo from "../Assets/logo/Logo.png";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (nav && !event.target.closest(".navbar-container")) {
        setNav(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [nav]);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-gray-300 flex px-2 sm:px-10 navbar-container relative z-20">
      <div>
        <img src={Logo} alt="" className="w-[15%] bg-gray-200 rounded-full" />
      </div>
      <div className="flex px-2 sm:px-10 justify-between items-center text-pink-900">
        <ul className="hidden md:flex text-[18px] font-bold p-1 ">
          <li className="p-2 sm:p-5 text-blue rounded-xl">
            <Link to="/" className="hover:text-cyan-900 transition ease-in-out delay-150 hover:border-b hover:border-b-green-900">
              Home
            </Link>
          </li>
          <li className="p-2 sm:p-5 text-blue rounded-xl cursor-pointer">
            <Link to="/service" className="hover:text-cyan-900 transition ease-in-out delay-150 hover:border-b hover:border-b-green-900">
              Service
            </Link>
          </li>
          <li className="p-2 sm:p-5 text-blue rounded-xl cursor-pointer">
            <Link to='/quality' className="hover:text-cyan-900 transition ease-in-out delay-150 hover:border-b hover:border-b-green-900">Quality</Link>
          </li>
          <li className="p-2 sm:p-5 text-blue rounded-xl cursor-pointer flex items-center">
            <Link to="/about" className="hover:text-cyan-900 transition ease-in-out delay-150 hover:border-b hover:border-b-green-900">
              <span className="hidden sm:inline whitespace-nowrap">About Us</span>
            </Link>
          </li>
          <li className="p-2 sm:p-5 text-blue rounded-xl cursor-pointer">
            <Link to="/contact" className="hover:text-cyan-900 transition ease-in-out delay-150 hover:border-b hover:border-b-green-900">Contact</Link>   
          </li>
        </ul>
      </div>
      <div onClick={handleNav} className="block md:hidden pt-2 sm:pt-5 cursor-pointer">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={22} />}
      </div>
      <div
        className={
          !nav
            ? "fixed left-[100%] transition-transform duration-300 ease-in-out cursor-pointer"
            : "fixed left-0 top-0 w-[40%] sm:w-[40%] h-full text-blue-600 bg-[#efeff1] ease-in-out duration-300 justify-center align-middle cursor-pointer"
        }
      >
        <div>
          <img src={Logo} alt="" className="w-[40%] px-2 sm:px-5" />
        </div>
        <ul className="uppercase p-2 sm:p-4 ease-in-out">
          <li className="p-2 sm:p-5 hover:bg-cyan-900 hover:text-white rounded-xl scroll-m-24">
            <Link to="/" className="hover:text-gray-200 transition ease-in-out delay-150 hover:border-blue-50 hover:border-b hover:border-b-green-900">
              Home
            </Link>
          </li>
          <li className="p-2 sm:p-5 hover:bg-cyan-900 rounded hover:text-white rounded-xl">
            <Link to="/service" className="hover:text-gray-200 transition ease-in-out delay-150 hover:border-b hover:border-b-green-900">
              Service
            </Link>
          </li>
          <li className="p-2 sm:p-5 hover:bg-cyan-900 rounded hover:text-white rounded-xl">
            <Link to="/quality" className="hover:text-gray-200 transition ease-in-out delay-150 hover:border-b hover:border-b-green-900">Quality</Link>
          </li>
          <li className="p-2 sm:p-5 hover:bg-cyan-900 rounded hover:text-white rounded-xl">
            <Link to="/about" className="hover:text-gray-200 transition ease-in-out delay-150 hover:border-b hover:border-b-green-900">
              AboutUs
            </Link>
          </li>
          <li className="p-2 sm:p-5 hover:bg-cyan-900 rounded hover:text-white rounded-xl">
            <Link to="/contact" className="hover:text-gray-200 transition ease-in-out delay-150 hover:border-b hover:border-b-green-900">Contact</Link>   
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
