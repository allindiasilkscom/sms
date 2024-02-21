import React from "react";
import HeroImage from "../Assets/hero.jpeg";

const QualityPolicy = () => {
  return (
    <section
      className="relative"
      style={{
        background: `URL(${HeroImage})`,
        backgroundSize: "cover",
      }}
    >
      <div className="py-24 text-center">
        <h3 className="text-pink-900 font-bold text-3xl md:text-4xl pb-5 pt-24">
          Quality Services
        </h3>
        <div className=" mx-auto text-pink-900">
          <p className="font-bold text-xl px-10 sm:px-28 pt-8 bg-white bg-opacity-50 pb-5">
            Sierra Marine Services is committed to delivering exceptional
            quality services and maintaining excellence in all aspects of our
            operations. We are dedicated to continuous improvement at every
            stage of our processes.
          </p>
          <p className="text-2xl px-10 sm:px-28 pt-8 pb-5 font-semibold bg-white bg-opacity-50">
            We achieve excellence by:
          </p>
          <ul className="list-disc px-10 sm:px-28 text-lg bg-white bg-opacity-50">
            <li className="mb-5">
              <p>
                Cultivating strong relationships with our clients to enhance
                business performance and foster mutually beneficial outcomes.
              </p>
            </li>
            <li className="mb-5">
              <p>
                Establishing a robust network to ensure the seamless delivery
                of our services, consistently meeting and exceeding
                expectations.
              </p>
            </li>
            <li className="mb-5">
              <p>
                Inspiring trust through accountability, ethical conduct, and
                fostering open and honest communication within our
                organization.
              </p>
            </li>
            <li>
              <p className="pb-5">
                Embracing diversity among our employees and fostering an
                inclusive environment that encourages collaboration and
                innovation.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default QualityPolicy;
