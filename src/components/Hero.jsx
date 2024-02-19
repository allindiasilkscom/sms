import React, { useState, useEffect } from "react";
import HeroImage from "../Assets/hero.jpeg";
import { ReactTyped } from "react-typed";
import DataFile from "./Data.jsx";
import Uc from "../Assets/images/uc.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const [showPromotion, setShowPromotion] = useState(false);

  useEffect(() => {
    const showTimer = setTimeout(() => {
      setShowPromotion(true);
    }, 5000);

    const hideTimer = setTimeout(() => {
      setShowPromotion(false);
    }, 20000);

    return () => {
      clearTimeout(showTimer);
      clearTimeout(hideTimer);
    };
  }, []);

  return (
    <>
      <div
        className="text-gray-100 pt-24"
        style={{
          background: `URL(${HeroImage})`, // Replace 'path_to_your_image' with the actual path to your image
          backgroundSize: "cover",
        }}
      >
        <div className="mx-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center">
          <ReactTyped
            className="text-xl md:text-[7xl] pt-36"
            strings={["SIERRA ", "MARINE ", "SERVICES"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <p className="ml-20 p-2 md:text-xl sm:text-6xl text-xl md:py-6">
            Sierra Marine Services is an ISO 9001: 2015 compliant company with a
            full line of Calibration of Marine equipment.
          </p>
          <div>
            <p className="ml-20 md:text-xl sm:text-2xl text-xl md:py-6">
              In 2014, Sierra Marine Services diversified into Marine Safety and
              Calibration Services.
            </p>
            <button className="bg-cyan-900 w-[200px] rounded-md font-medium mx-auto px-6 py-3 hover:bg-gray-500 hover:text-white">
              Get Started
            </button>
          </div>
        </div>
      </div>
      
      <div className="section bg-cyan-600">
        <h3 className="text-center font-bold text-gray-200 pt-5 px-5 text-2xl">
          Our Service
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
          {DataFile().slice(0, 3).map((item, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg">
              <div className="p-4">
                <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
                <p className="text-gray-700">{item.description}</p>
              </div>
              <div className="p-4 flex justify-center">
                <img
                  src={item.imageUrl[0]} // Assuming you want to display only the first image of the item
                  alt="card-image"
                  className="w-[50%]"
                />
              </div>
              <div className="p-4 flex justify-center items-end  w-full">
                <button className="bg-cyan-900 text-white rounded-full px-5 py-2 text-center hover:bg-white hover:text-cyan-900 transition ease-out">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center pb-5">
          <button className="bg-cyan-900 w-[200px] rounded-md font-medium px-6 py-3 text-white">
            <Link to="service">More</Link>
          </button>
        </div>
      </div>
      <div className="section bg-cyan-800">
        <div className="text-center px-10 py-10">
          <div className="text-gray-200 font-semibold text-xl sm:font-medium">Certificates</div>
          <div className="text-gray-200 text-xl font-bold sm:font-normal text-center pt-10">
            Sierra Marine Services is Approved by IRQS
          </div>
          <div className= "text-gray-200 text-xl font-bold sm:font-normal text-center pt-10">
            Certificate of Approval
          </div>
          <div className="justify-center align-center flex pt-5 pb-5">
            <img src={Uc} alt="" />
          </div>
          <button className="bg-cyan-900 text-gray-200 rounded-full px-5 py-5 text-center hover:bg-white hover:text-cyan-900 transition ease-out">
            <Link to="Certificates">View Certificates</Link>
          </button>
        </div>
      </div>
      <div className="h-screen">
        <div className="text-white text-center font-medium text-xl pt-5 pb-5">Locate Us</div>
        <iframe
          title="Google Maps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d734.8552134957353!2d73.23863526947576!3d19.16285826567249!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ed2d0c4de9d7%3A0x748b002b6485625f!2sGandhi%20Chowk!5e1!3m2!1sen!2sin!4v1708244853089!5m2!1sen!2sin"
          width="100%"
          height="90%"
          frameBorder="0"
          allowFullScreen=""
          aria-hidden="false"
          tabIndex="0"
          className="pb-10"
        ></iframe>
      </div>
    </>
  );
};

export default Hero;
