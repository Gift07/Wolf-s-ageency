import React from "react";
import { AiOutlineMenu } from "react-icons/ai";
import Sidebar from "./sidebar";
import Logo from "../assets/logo.jpg";
import Image from "next/image";
import Proposal from "./Proposal";

const Navbar = () => {
  const [sidebar, setSidebar] = React.useState(false);
  const [proposal, setProposal] = React.useState(false);

  return (
    <div className="reative">
      <div
        className="w-screen h-16 lg:h-20 flex text-white bg-transparent backdrop-blur-lg overflow-x-hidden 
      items-center justify-between px-5 lg:px-12 fixed top-0 z-[1000]"
      >
        <div className="flex items-center">
          <span className="flex items-center">
            <Image src={Logo} width={40} height={40} objectFit="cover" />
          </span>
          <h1 className="uppercase text-lg flex items-center lg:text-xl">
            The wolfs agency
          </h1>
        </div>
        <div className="hidden lg:flex items-center justify-center gap-x-9">
          <ul className="flex items-center justif-between gap-x-5 text-sm text-blue-600 uppercase">
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
            <button
              onClick={() => setProposal(!proposal)}
              className="px-3 py-1 uppercase bg-orange-400 rounded-md outline-none"
            >
              new proposal
            </button>
          </div>
        </div>
        <div className="flex lg:hidden text-xl">
          <AiOutlineMenu onClick={() => setSidebar(!sidebar)} />
        </div>
      </div>
      {sidebar && <Sidebar sidebar={sidebar} setSidebar={setSidebar} />}
      {proposal && <Proposal proposal={proposal} setProposal={setProposal} />}
    </div>
  );
};

export default Navbar;
