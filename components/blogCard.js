import React from "react";
import Image from "next/image";
import Cover from "../assets/nubel.jpg";

const BlogCard = () => {
  return (
    <div className="w-full lg:w-80 pb-3 shadow bg-white hover:shadow-lg rounded-lg my-5">
      <Image
        src={Cover}
        height={2500}
        objectFit="cover"
        className="rounded-t-lg hover:shadow-lg"
      />
      <div className="p-2 w-full">
        <span className="flex gap-x-5 mb-3">
          <span className="px-4 py-3 bg-sky-500 text-white text-center">
            <h1 className="text-xl font-bold">25</h1>
            <h1 className="text-sm">Mar</h1>
          </span>
          <span>
            <h1 className="text-sky-500 text-sm font-bold">Martin Mwaimu</h1>
            <h1 className="text-md font-semibold uppercase">
              Age of digital transformation
            </h1>
          </span>
        </span>
        <p className="text-sm text-gray-700">
          Ipsum aute cillum eiusmod minim ipsum non labore sunt dolore ex. Esse
          aliqua ea nisi veniam voluptate do eiusmod consequat aliqua culpa.
          Amet aute ex exercitation id qui reprehenderit eu sint cupidatat
          fugiat quis aliquip.
        </p>
      </div>
    </div>
  );
};

export default BlogCard;
