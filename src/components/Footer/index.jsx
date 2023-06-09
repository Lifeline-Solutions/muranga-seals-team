import React from "react";
import teamphoto from "../images/team-photo.jpeg";
import { BsTwitter, BsFacebook, BsInstagram, BsYoutube } from "react-icons/bs";
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer-bg bg-cover    p-8  gap-2 bg-center  ">
      <div className="flex flex-col gap-8 mt-12">
        <div className="flex  gap-8">
          <BsTwitter className="text-7xl text-white" />
          <BsFacebook className="text-7xl text-white" />
          <BsInstagram className="text-7xl text-white" />
          <BsYoutube className="text-7xl text-white" />
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-[#F4E721] font-bold text-2xl">News</h1>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-[#F4E721] font-bold text-2xl">News</h1>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-[#F4E721] font-bold text-2xl">News</h1>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-[#F4E721] font-bold text-2xl">News</h1>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
          <div className="flex flex-col gap-2 text-white">
            <h1 className="text-[#F4E721] font-bold text-2xl">News</h1>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
            <p>Lorem</p>
          </div>
          <div className="flex flex-col gap-2 text-white w-[250px]">
            <h1 className="font-bold text-2xl">Latest News</h1>
            <img
              src={teamphoto}
              alt="teamphoto"
              className="w-[250px] h-[250px]"
            />
            <p>Lorem ipsum dolor sit</p>
            <p>amet consectetur adipisicing elit. Quisquam</p>
          </div>

          <div className="flex flex-col gap-2 text-white w-[200px]">
            <h1 className=" font-bold text-2xl">Contact Us</h1>
            <p>Lorem ipsum dolor sit</p>
            <p>amet consectetur adipisicing elit. Quisquam</p>
            <p>amet consectetur adipisicing elit. Quisquam</p>
          </div>
        </div>

        <div className="flex justify-between items-center w-[80%] mx-auto text-[#F4E721]">
          <h1 className="text-7xl font-bold">Sportpesa</h1>
          <div className="flex gap-8 text-2xl">
            <Link to="/news">
              <h1>News</h1>
            </Link>
            <Link to="/teams">
              <h1>Team</h1>
            </Link>
            <Link to="/ticket">
              <h1>Tickets</h1>
            </Link>
            <Link to="/membership">
              <h1>Membership</h1>
            </Link>
            <Link to="/theclub" className="flex gap-1">
              <h1>The </h1>
              <h1>Club</h1>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
