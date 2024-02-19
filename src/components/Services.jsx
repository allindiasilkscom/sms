import React from "react";
import DataFile from "./Data.jsx"; // Import the data file
import { Link } from "react-router-dom";

const ServiceCard = ({ item }) => {
  return (
    <div className="bg-gray-200 rounded-lg shadow-lg">
      <div className="p-4">
        <h5 className="text-xl font-semibold mb-2">{item.title}</h5>
        <p className="text-gray-700">{item.description}</p>
      </div>
      <div className="p-4 flex justify-center">
        <img
          src={item.imageUrl[0]} // Assuming you want to display only the first image of the item
          alt="card-image"
          className="w-full"
        />
      </div>
      <div className="p-4 flex justify-center">
        <button className="bg-cyan-900 text-gray-200 rounded-full px-5 py-2 text-center hover:bg-gray-300 hover:text-white transition ease-out">
          Read More
        </button>
      </div>
    </div>
  );
};

const Services = () => {
  return (
    <div className="section bg-cyan-600">
      <h3 className="text-center font-bold text-gray-200 pt-5 px-5 text-2xl">
        Our Service
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4">
        {DataFile().map((item, index) => (
          <ServiceCard key={index} item={item} />
        ))}
      </div>
      <div className="flex justify-center items-center pb-5">
        <button className="bg-cyan-900 w-[200px] rounded-md font-medium px-6 py-3 text-gray-200">
          <Link to="/service">More</Link>
        </button>
      </div>
    </div>
  );
};

export default Services;
