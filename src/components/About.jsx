import React from 'react';
import HeroImage from '../Assets/hero.jpeg';

const About = () => {
  return (
    <section className="relative">
      <div className="bg-cover bg-center " style={{ backgroundImage: `url(${HeroImage})` }}>
        <div className="py-24 text-center">
          <h3 className="bg-opacity-10 font-bold text-2xl md:text-4xl pb-10 pt-24 text-pink-900">
            About Us
          </h3>
          <div className="mx-auto md-w-1/2 m-4 mt-16  text-white ">
            <p className="text-lg md:text-xl mb-8">
              Sierra Marine Services is a premier marine instrument firm based in Mumbai, renowned for our expertise and extensive clientele across key ports and regions in India. We take pride in delivering exceptional quality services and maintaining excellence at every step of our operations.
            </p>
            <p className="text-lg md:text-xl mb-8">
              At Sierra Marine Services, we are committed to fostering strong partnerships. Recognizing your company's reputation for delivering outstanding services, we aim to complement your efforts by providing top-notch Calibration, Automation, and LSA FFA services tailored to our regional expertise.
            </p>
            <p className="text-lg md:text-xl mb-8">
              Our state-of-the-art service stations in Mumbai and Gujarat ensure seamless Calibration and LSA/FFA services. With strategically positioned engineers, we prioritize efficiency and customer satisfaction by promptly serving customers at major and minor ports across India.
            </p>
            <p className="text-lg md:text-xl">
              Inaugurating our own Manufacturing Unit for Gas Detectors and Panels in the Mumbai region underscores our commitment to innovation and quality. As direct dealers for reputable brands like Safe Gas and Honeywell, and with a comprehensive inventory of leading makes, we ensure prompt availability of essential equipment and accessories.
            </p>
          </div>
        </div>
      </div>
      <div className="bg-pink-900 bg-opacity-50 py-12 md:py-20 text-white">
        <div className="md:w-3/4 lg:w-1/2 mx-auto px-8">
          <h4 className="text-xl md:text-2xl font-bold mb-8">Why Choose Sierra Marine Services</h4>
          <ul className="list-disc text-white">
            <li className="text-lg md:text-xl mb-6">
              Our recently launched Manufacturing Unit ensures the highest quality Gas Detectors and Panels.
            </li>
            <li className="text-lg md:text-xl mb-6">
              As direct dealers for Safe Gas and Honeywell, we provide authentic and reliable gas detectors, sensors, and accessories.
            </li>
            <li className="text-lg md:text-xl mb-6">
              Our comprehensive inventory includes leading brands like Oldham, Draeger, Senko, RKI, and related accessories.
            </li>
            <li className="text-lg md:text-xl mb-6">
              We maintain a ready stock of MMC, Hermetic – MK3, and GTEX Reconditioned spares and units for UTI.
            </li>
            <li className="text-lg md:text-xl mb-6">
              Our expertise extends to onboard Calibration and repair services for UTI, Fixed Gas detection systems, and Gas detectors.
            </li>
            <li className="text-lg md:text-xl">
              With over a decade of experience, we continue to deliver quality services and solutions to our valued customers.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default About;
