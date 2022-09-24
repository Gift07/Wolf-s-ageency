import React from "react";
import Image from "next/image";
import Image1 from "../assets/clement.jpg";
import Image2 from "../assets/nubel.jpg";
import WorkCard from "./components/workCard";

const data = [
  {
    id: 1,
    imageUrl: Image1,
    about: "Occaecat occaecat occaecat reprehenderit sunt",
  },
  {
    id: 2,
    imageUrl: Image2,
    about:
      "Officia qui quis culpa pariatur eiusmod dolore nulla irure ad irure magna ipsum.",
  },
  {
    id: 3,
    imageUrl: Image1,
    about:
      "Ut officia tempor amet culpa non irure sit anim sunt do eiusmod quis cillum.",
  },
];

const Work = () => {
  return (
    <div className="w-full lg:h-[32rem] bg-gray-100">
      <div className="w-full px-5 lg:px-12 justify-between">
        <div className="mt-5 my-3">
          <h1 className="uppercase text-md font-semibold text-sky-400">
            Case study
          </h1>
          <h1 className="text-4xl font-semibold my-3">
            Here Is Some Awesome Works
          </h1>
          <hr className="w-44 border border-orange-400 mt-3 bg-orange-400" />
        </div>
        <div className="w-full flex items-center justify-center">
          <div className="w-full flex lg:grid lg:grid-cols-3 items-center justify-center lg:items-center lg:justify-center">
            {data.map((item) => (
              <WorkCard Item={item} key={item.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
