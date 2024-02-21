import React, { useState } from "react";
import HeroImage from "../Assets/hero.jpeg";
import { ReactTyped } from "react-typed";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <div
      className=""
      style={{
        background: `URL(${HeroImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="text-black font-bold pb-10 pt-12 text-center text-xl">
        CONTACT US
      </div>

      <div className="lg:grid-cols-2 grid pb-10">
        <div className="font-medium  pt-24 text-center text-black text-xl bg-gray-200 bg-opacity-50 mx-auto mt-12 max-w-xl sm:mt-20">
          <ReactTyped
            className="text-xl md-text-[7xl] pt-36 justify-center"
            strings={["Address ", "OFFICE "]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
          <br></br>
          <br></br>
          <table className="mx-auto">
            <tbody >
              <tr className="flex flex-col text-gray-800">
                <td>Corporate Office:</td>
                <td>
                  Empire Industrial Centrum, Rashtrakuta, Unit No 287, 3rd Floor
                  Chikhloli, Kalyan-Badlapur Road, Ambernath West, Thane 421505
                </td>
              </tr>
            </tbody>
          </table>
          <div className="p-7">
            <ul>
              <li className="flex gap-2 p-5">
                <FaPhone className="text-cyan-900 hover:bg-cyan-200 hover:text-cyan-900 rounded-full text-2xl rotate-90" />
                <a href="tel:+918788745767"> +918788745767</a>
                <a href="https://wa.me/918788745767">
                  <FaWhatsapp className="text-cyan-900 hover:bg-cyan-200 hover:text-cyan-900 rounded-full m-1" />
                </a>
                <a href="tel:+918452010594" className="ml-1">
                  +918452010594
                </a>
                <a href="https://wa.me/8452010594">
                
                  <FaWhatsapp className="text-cyan-900 hover:bg-cyan-200 hover:text-cyan-900 rounded-full m-1 ml-2" />
                </a>
              </li>

              <li className="flex gap-3 items-center p-3">
                <FaEnvelope className="text-cyan-900 hover:bg-cyan-200 hover:text-cyan-900 rounded-full m-1" />
                <a href="mailto:sierramarineservices@outlook.com">
                  sierramarineservices@outlook.com
                </a>
              </li>
              <li className="flex gap-3 items-center p-3 ">
                <FaEnvelope className="text-cyan-900 hover:bg-cyan-200 hover:text-cyan-900 rounded-full m-1" />

                <a href="mailto:info@sierramarineservices.com">
                  info@sierramarineservices.com
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="pb-12">
          <form
            action="#"
            method="POST"
            className="mx-auto mt-12 max-w-xl sm:mt-20 bg-gray-200 bg-opacity-50 rounded-md p-8 pb-12"
          >
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-black"
              >
                Name
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Email Id
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Number
              </label>
              <div className="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="first-name"
                className="block text-sm font-semibold leading-6 text-gray-900"
              >
                Description
              </label>
              <div className="mt-2.5">
                <input
                  type="textarea"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
            <div></div>
            <div className="mt-10 pb-10">
              <button
                type="submit"
                className="block w-full rounded-md bg-cyan-900 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Submit
              </button>
              <br></br>
              <h2>
                By submitting this form, you agree to the processing of personal
                data according to our Privacy Policy.
              </h2>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
