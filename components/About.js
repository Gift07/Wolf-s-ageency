import React from "react";
import Cover from "../assets/simon.jpg";
import Image from "next/image";

const About = () => {
  return (
    <div className="w-full lg:h-[30rem] text-white bg-black flex items-center justify-center">
      <div className="w-full h-full lg:grid lg:grid-cols-2 items-center justify-center">
        <div className="w-full h-full">
          <div className="w-full my-2 pl-5 lg:pl-12 pr-2">
            <div className="my-4 pt-7">
              <h1 className="font-semibold text-sky-400 uppercase">About Us</h1>
            </div>
            <div className="my-3">
              <h1 className="text-4xl font-semibold">Get to know us more</h1>
              <hr className="w-44 border border-orange-400 mt-3 bg-orange-400" />
            </div>
            <p className="my-3">
              Our mission as THE WOLF'S AGENCY is to help businesses to
              transform from traditional ways of doing things to Digital ways,
              like handling their customers, Management, Branding and Marketing.
              And our plans is to deliver this through creating & developing
              systems that will help to manage customers(CRM), Financial
              activities, Inventory management or Point of sales softwares and
              also Branding businesses through online platforms and make them
              standout through the competition in a business specific niche or
              industry by creative designing marketing campaigns and managing
              them to bring more leads and increase business revenue overtime
              through the online medias. .
            </p>
            <button className="px-4 py-2 bg-orange-500 text-white">
              Learn More
            </button>
          </div>
        </div>
        <div className="w-full h-full">
          <span className="w-full h-[30rem] flex items-center">
            <Image
              src={Cover}
              alt="cover"
              layout="intrinsic"
              objectFit="cover"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default About;
