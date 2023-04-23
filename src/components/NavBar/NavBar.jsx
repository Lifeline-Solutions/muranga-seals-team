import React from "react";
import logo from "../images/logo.png";
import {Link, NavLink} from "react-router-dom";

const NavBar = () => {
  return (
    <div className="flex justify-between">
      <div className="w-20 h-20">
          <Link to="/">
            <img src={logo} alt="logo" />
          </Link>
      </div>
      <div className="mr-8">
        <ul className="flex  gap-4 py-4">
            <NavLink exact="true" to="/news">
                <li className="hover:scale-105 cursor-pointer transition-all duration-300 hover:text-[#E06F24]">News</li>
            </NavLink>
            <NavLink exact="true" to="/teams">
                <li className="hover:scale-105 cursor-pointer  transition-all duration-300 hover:text-[#E06F24]">Teams</li>
            </NavLink>
            <NavLink exact="true" to="/ticket">
                <li className="hover:scale-105  cursor-pointer transition-all duration-300 hover:text-[#E06F24]">Ticket</li>
            </NavLink>
            <NavLink exact="true" to="/membership">
                <li className="hover:scale-105 cursor-pointer  transition-all duration-300 hover:text-[#E06F24]">Membership</li>
            </NavLink>
            <NavLink exact="true" to="/theclub">
                <li className="hover:scale-105  cursor-pointer transition-all duration-300 hover:text-[#E06F24]">The club</li>
            </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
