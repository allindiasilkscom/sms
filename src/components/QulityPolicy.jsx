import React from "react";
import HeroImage from "../Assets/hero.jpeg";

const QulityPolicy = () => {
  return (
    <div
      className=""
      style={{
        background: `URL(${HeroImage})`,
        backgroundSize: "cover",
      }}
    >
      <h3 className="text-center text-white font-bold text-2xl pb-10 pt-24">
        Quality Services
      </h3>
      <div className=" md:text-xl sm:text-2xl text-xl text-white font-medium">
        <p className="font-normal text-center px-28 pt-56 ">
          Seirra Marine Services Aims to Delver High Quality Services and to
          Maintain Excellence in our Services .We are Determined to Carry out
          Continual Improvement at Each and Every Stage of process.
        </p>
        <p className="font-normal text-center px-28 pt-10 borer-b   ">
          We deliver excellence by:
        </p>
        <p className=" font-normal text-center px-28 pt-5">
          Maintaining good relationship with our clients, hence improving
          business performance and a win-win relationship.
        </p>
        <p className=" font-normal text-center px-28 pt-5 ">
          Aiming to build a network ensuring to deliver our excellence.
          Inspiring trust by taking responsibility, acting ethically and
          encouraging honest and open debate.
        </p>

        <p className=" font-normal text-center px-28 pt-5 pb-10">
          Valuing employees’ diversity and ensuring interactive environment with
          employees and work force.
        </p>
      </div>
    </div>
  );
};

export default QulityPolicy;
