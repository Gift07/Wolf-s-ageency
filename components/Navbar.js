import React from "react";

const Navbar = () => {
  return (
    <div className="w-screen h-20 flex text-white bg-[#028090] overflow-x-hidden items-center justify-between px-12">
      <div>
        <h1 className="uppercase text-xl">The wolfs agency</h1>
      </div>
      <div className="flex items-center justify-center gap-x-9">
        <ul className="flex items-center justif-between gap-x-5 text-sm">
          <li className="hover:text-orange-400 cursor-pointer duration-200 delay-75">
            Home
          </li>
          <li className="hover:text-orange-400 cursor-pointer duration-200 delay-75">
            Services
          </li>
          <li className="hover:text-orange-400 cursor-pointer duration-200 delay-75">
            About
          </li>
          <li className="hover:text-orange-400 cursor-pointer duration-200 delay-75">
            Portifolio
          </li>
          <li className="hover:text-orange-400 cursor-pointer duration-200 delay-75">
            Our work
          </li>
          <li className="hover:text-orange-400 cursor-pointer duration-200 delay-75">
            Our Team
          </li>
        </ul>
        <div>
          <button className="px-3 py-1 bg-orange-400 rounded-md outline-none">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
