import { BsLaptop } from "react-icons/bs";
import { AiOutlinePercentage, AiFillSetting } from "react-icons/ai";
import { IoBarChart } from "react-icons/io5";

export const ServiceData = [
  {
    id: 1,
    title: "BRANDING",
    slug: "branding",
    explanation:
      "Logo, Flyers, Brochures, 3D Designs, Package Design, Stickers, Company Profile, Labels, Roll-up Banners Design, Brand Identitys and Other Brand Collateral",
    icon: <BsLaptop />,
  },
  {
    id: 2,
    title: "CONSULTING",
    slug: "consulting",
    explanation:
      "Digital Marketing Strategies, Social Media Marketing Calender, Marketing Campaign's, Copywriting, Marketing Campaign's & Project Management",
    icon: <AiOutlinePercentage />,
  },
  {
    id: 3,
    title: "DIGITAL MARKETING",
    slug: "digital-marketing",
    explanation:
      "Social Media Marketing, Content Marketing, Email Marketing, Local SEO, Search Engine Marketing, Marketing Strategies, Pay Per Click, Paid Media Campaigns, Search engine optimization",
    icon: <AiFillSetting />,
  },
  {
    id: 4,
    title: "WEB DESIGN & DEVELOPMENT",
    slug: "web-design",
    explanation:
      "Landing Page Design, UX/UI Design, Websites Development, Software Development, e-Commerce, Mobile App Development, Email newsletter Design, Management Systeams",
    icon: <IoBarChart />,
  },
];
