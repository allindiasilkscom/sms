import React from 'react'
import HeroImage from '../Assets/hero.jpeg'


const About = () => {
  return (
    <div className='' 
    style={{
        background: `URL(${HeroImage})`,  backgroundSize: "cover",
    }
}>
        <h3 className='text-center text-white font-bold text-2xl pb-10 pt-24'>About Us</h3>
        <div className=' md:text-xl sm:text-2xl text-xl text-white font-medium'>
            <p className='font-normal text-center px-28 pt-56  py-15  '>We Sierra Marine Services,Marine Service provider pledge to offers very cost effective,
reliable and trust worthy services to the full satisfaction of our Customers and facilitate opportunities for business development.</p>
            <p className=' font-normal text-center px-28 pt-5 pb-10'>
Our aim is to just put ourselves as a Quick & Best Service Provider for all our valuable customers.
We try to satisfy our valuable customers in every way, having a broad network of valuable & permanent customers. scope of our works Inspeaction & Calibration of pressure Gauges Transmitters, Temperature Sensors ,Pressure & Temperature Calibrators, Gas Detectors, Fixed gas Detection System ,UTI Tape ,Oily Water Separator (15 ppm Bilge Alarm monitor) System ,oil Discharge Monitoring Equipment System ,Vapour Monitoring System.

</p>
        </div>
      
    </div>
  )
}

export default About
