import React from "react";
import Cover from "../assets/simon.jpg";
import Image from "next/image";
import TeamCard from "./components/TeamCard";

const Team = () => {
  return (
    <div className="w-full bg-gray-100">
      <div className="px-5 lg:px-12">
        <div className="my-4 pt-7">
          <h1 className="font-semibold text-sky-400 uppercase">Our Team</h1>
        </div>
        <div className="my-3">
          <h1 className="text-4xl font-semibold">The best Technical Team</h1>
          <hr className="w-44 border border-orange-400 mt-3 bg-orange-400" />
        </div>
        <div className="w-full flex flex-col px-5 lg:px-12 items-center justify-center">
          <p className="text-sm">
            We have professional experienced experts with deep skills that make
            our ability to perform a lot of services that can satisfies your
            business in digital marketing fields like Email Marketing, Contents
            Marketing, Web Apps and Software Development, Search Engine
            Marketing and Optimization PPC,SEO, Social Media Marketing and
            Management on Facebook, Twitter, LinkedIn and Instagram, also Local
            SEO on Google My Business...
          </p>
        </div>
        <div className="flex items-center justify-center my-3">
          <div className="lg:grid lg:grid-cols-3 items-center justify-center gap-6 lg:gap-x-6 my-3">
            <TeamCard />
            <TeamCard />
            <TeamCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
