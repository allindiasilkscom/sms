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
    <div className="bg-gray-300 flex px-2 sm:px-10 navbar-container">
      <div>
        <img src={Logo} alt="" className="w-[15%] bg-gray-200 rounded-full" />
      </div>
      <div className="flex px-2 sm:px-10 justify-between items-center">
        <ul className="hidden md:flex uppercase text-[16px] font-medium">
          <li className="p-2 sm:p-5   text-blue rounded-xl">
            <Link to="/" className="hover:text-cyan-900  transition ease-in-out delay-150">
              Home
            </Link>
          </li>
          <li className="p-2 sm:p-5  text-blue rounded-xl cursor-pointer">
            <Link to="/service" className="hover:text-cyan-900 transition ease-in-out delay-150">
              Service
            </Link>
          </li>
          <li className="p-2 sm:p-5  text-blue rounded-xl cursor-pointer">
            <Link to='/qulity' className="hover:text-cyan-900 transition ease-in-out delay-150">Policy</Link>
          </li>
          <li className="p-2 sm:p-5   text-blue rounded-xl cursor-pointer">
            <Link to="/about" className="hover:text-cyan-900 transition ease-in-out delay-150">
              AboutUS
            </Link>
          </li>
          <li className="p-2 sm:p-5   text-blue rounded-xl cursor-pointer">
            <Link to="/contact" className="hover:text-cyan-900 transition ease-in-out delay-150">Contact</Link>   
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
        <ul className="uppercase p-2 sm:p-4  ease-in-out">
          <li className="p-2 sm:p-5 hover:bg-cyan-900  hover:text-white rounded-xl scroll-m-24">
            <Link to="/" className="hover:text-gray-200 transition ease-in-out delay-150">
              Home
            </Link>
          </li>
          <li className="p-2 sm:p-5 hover:bg-cyan-900 rounded hover:text-white rounded-xl">
            <Link to="/service" className="hover:text-gray-200 transition ease-in-out delay-150">
              Service
            </Link>
          </li>
          <li className="p-2 sm:p-5 hover:bg-cyan-900 rounded hover:text-white rounded-xl">
            QUALITY POLICY
          </li>
          <li className="p-2 sm:p-5 hover:bg-cyan-900 rounded hover:text-white rounded-xl">
            <Link to="/about" className="hover:text-gray-200 transition ease-in-out delay-150">
              AboutUS
            </Link>
          </li>
          <li className="p-2 sm:p-5 hover:bg-cyan-900 rounded hover:text-white rounded-xl">
            <Link to="/contact" className="hover:text-gray-200 transition ease-in-out delay-150">Contact</Link>   
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
