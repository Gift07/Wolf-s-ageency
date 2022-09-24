import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Sidebar = ({ sidebar, setSidebar }) => {
  return (
    <div className="w-screen h-screen bg-black text-white z-[2000] fixed top-0">
      <div className="flex items-center justify-end px-5 pt-5 text-xl">
        <AiOutlineClose onClick={() => setSidebar(!sidebar)} />
      </div>
      <div className="flex justify-center pt-8">
        <ul className="flex flex-col gap-y-5  items-center justif-between gap-x-5 text-xl">
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
      </div>
    </div>
  );
};

export default Sidebar;
