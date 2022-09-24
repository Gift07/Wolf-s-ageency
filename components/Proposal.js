import React from "react";
import { AiOutlineClose } from "react-icons/ai";

const Proposal = ({ proposal, setProposal }) => {
  return (
    <div className="fixed bg-transparent z-[2000] backdrop-blur-lg w-screen h-screen">
      <div className="flex items-center justify-end px-5 pt-5 text-xl">
        <AiOutlineClose onClick={() => setProposal(!proposal)} />
      </div>
      <div className="w-full h-full flex items-center justify-center">
        <div className="bg-white rounded-2xl p-2 w-96 px-4">
          <div className="flex flex-col">
            <label className="text-xs my-2">Phone number</label>
            <input
              placeholder="Phone number"
              className="bg-gray-200 rounded-xl w-72 p-2 text-xs outline-none border-2 border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs my-2">Phone number</label>
            <input
              placeholder="Phone number"
              className="bg-gray-200 rounded-xl w-72 p-2 text-xs outline-none border-2 border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs my-2">Phone number</label>
            <input
              placeholder="Phone number"
              className="bg-gray-200 rounded-xl w-72 p-2 text-xs outline-none border-2 border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-xs my-2">Phone number</label>
            <input
              placeholder="Phone number"
              className="bg-gray-200 rounded-xl w-72 p-2 text-xs outline-none border-2 border-gray-300 focus:border-blue-500"
            />
          </div>
          <div className="w-full flex items-center justify-center py-3">
            <button className="px-12 py-2 uppercase text-sm bg-blue-500 rounded-xl text-white hover:bg-blue-600 active:bg-blue-700">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Proposal;
