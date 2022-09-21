import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";
import CoverPic from "../assets/item.jpg";
import {
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiFillLinkedin,
} from "react-icons/ai";

const Welcome = () => {
  return (
    <div className="w-full h-[34rem] relative overflow-x-hidden">
      <div className="h-full w-full absolute z-20 background">
        <div data-aos="fade-up" className="pl-12 max-w-4xl pt-28">
          <h1 className="uppercase text-sm text-orange-400 font-semibold">
            Demand more from your marketing?
          </h1>
          <h1 className="flex text-4xl font-bold my-3 text-white">
            Grow your business presence, leads, calls, sells and revenue online.
          </h1>
          <h1 className="text-sm my-4 text-white">
            We merge the Imagination, Creativity and Technology to help Brand’s
            grow in an age of Digital Transformation. Whenever you start you’ll
            never take the road back. Choose us and propel your business.
          </h1>
          <div className="my-3">
            <button className=" flex gap-x-2 items-center duration-200 hover:bg-sky-800 px-4 py-2 rounded-full bg-sky-600 text-white">
              Learn more
              <BsArrowRight />
            </button>
          </div>
          <div className="my-4 flex items-center gap-x-3 text-2xl text-white">
            <AiOutlineInstagram className="duration-200 delay-75 hover:-scale-50" />
            <AiOutlineTwitter className="duration-200 delay-75 hover:-scale-50" />
            <AiFillLinkedin className="duration-200 delay-75 hover:-scale-50" />
          </div>
        </div>
      </div>
      <div className="absolute h-full w-full">
        <Image src={CoverPic} alt="cover-Pic" layout="fill" objectFit="cover" />
      </div>
    </div>
  );
};

export default Welcome;
