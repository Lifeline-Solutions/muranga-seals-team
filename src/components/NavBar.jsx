import React from "react";
import logo from "./images/logo.png";

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <div className="w-20 h-20">
        <img src={logo} alt="logo" />
      </div>

      <div className="mr-8">
        <ul className="flex  gap-4 py-4">
          <li className="hover:scale-105 cursor-pointer transition-all duration-300 hover:text-[#E06F24]">News</li>
          <li className="hover:scale-105  cursor-pointer transition-all duration-300 hover:text-[#E06F24]">Matches</li>
          <li className="hover:scale-105 cursor-pointer  transition-all duration-300 hover:text-[#E06F24]">Teams</li>
          <li className="hover:scale-105  cursor-pointer transition-all duration-300 hover:text-[#E06F24]">Ticket</li>
          <li className="hover:scale-105 cursor-pointer  transition-all duration-300 hover:text-[#E06F24]">Membership</li>
          <li className="hover:scale-105  cursor-pointer transition-all duration-300 hover:text-[#E06F24]">The club</li>
          <li className="hover:scale-105  cursor-pointer transition-all duration-300 hover:text-[#E06F24]">History</li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
