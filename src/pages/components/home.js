"use client";
import React from 'react';
import Type from './type';
import Link from 'next/link';
import { useRouter } from 'next/router';
// import {FaArrowRight} from 'react-icons/fa'



const ServiceCard = ({ imgSrc, title, onclick, dest }) => {

  
  return (
    <div className="flex items-start cursor-pointer gap-3 sm:gap-10 lg:w-[90%] bg-grey[400]" onClick={onclick}>
      <img
        src={imgSrc}
        width="50px"
        height="50px"
        alt="features"
        className=""
      />
      
      <div className='flex-1'>
        
        <h1 className="text-lg text-black font-semibold">{title}</h1>
        <p className='text-sm'>{dest}</p>
        <div className='flex justify-end'>
          
        {/* <FaArrowRight className="text-blue-500 " size={20}/> */}

        </div>
      <section className="border-t border-blue-200 bg-black1 w-full">

      </section>
      </div>
    </div>
  );
};

const Services = () => {
  const router = useRouter();

function navigate(){
  router.push('/components/regdashboard/layouts/rtl');
}

    return (
      <section className="relative shadow-xl container m-4 p-4 px-5 md:px-16 mx-auto mt-40">
        <div className="flex flex-col lg:flex-row gap-10 items-center">
          {/* Left Section */}
          <div className="relative flex-1 m-4 p-4">
            <div className="bg-blue-600 w-full h-auto lg:h-auto p-8 rounded-lg text-white">
              <h1 className="text-4xl font-bold ">Adnet</h1>
              <div className="mt-8 ">
                <div className="text-white text-2xl lg:text-4xl font-bold">
                  <Type />
                </div>
              </div> <br/>
              <p className="mt-6 text-center font-bold">
                Intelligent predictive analysis to forecast business losses and gains
              </p>
              <p className="mt-4 text-center font-bold">Powered by adain</p>
            </div>
          </div>
  
          {/* Right Section */}
          <div className="flex flex-col gap-6 flex-1">
            {/* Header */}
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h2 className="text-black text-3xl md:text-4xl font-bold">
                Choose the type of Company
              </h2>
              <p className="text-gray-700">
                You are a few steps away from creating an account with ADNET business application.
              </p>
            </div>
  
            {/* Service Cards */}
            <ServiceCard imgSrc="/svg/user.svg" title="DEMO" dest="Run a quick demo with team" onclick={navigate}/>
            <ServiceCard imgSrc="/svg/build.svg" title="LLC" dest="Owned by an individual" onclick={navigate}/>
            <ServiceCard imgSrc="/svg/build.svg" title="CORPORATION" dest="Owned by stakeholders" onclick={navigate}/>
          </div>
        </div>
      </section>
    );
  };
  

export default Services;