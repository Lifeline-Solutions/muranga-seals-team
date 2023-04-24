import React from "react";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <div className="bg-yellow-300">
        <h1 className="text-3xl text-center font-bold">Sportpesa</h1>
        <h1 className="text-5xl  text-center font-bold">Sponsor advert</h1>
      </div>
      <div className="flex justify-around items-center p-2 bg-yellow-300" >
        <div className="mb-2">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[110px] h-[110px]" />
          </Link>
        </div>
        <div className="mr-8 text-xl">
          <ul className="flex  gap-12 py-4">
            <NavLink exact="true" to="/">
              <li className="hover:scale-105 cursor-pointer transition-all duration-300 hover:text-[#F6F6F6]">
                News
              </li>
            </NavLink>
            <NavLink exact="true" to="/teams">
              <li className="hover:scale-105 cursor-pointer  transition-all duration-300 hover:text-[#F6F6F6]">
                Teams
              </li>
            </NavLink>
            <NavLink exact="true" to="/ticket">
              <li className="hover:scale-105  cursor-pointer transition-all duration-300 hover:text-[#F6F6F6]">
                Ticket
              </li>
            </NavLink>
            <NavLink exact="true" to="/membership">
              <li className="hover:scale-105 cursor-pointer  transition-all duration-300 hover:text-[#F6F6F6]">
                Membership
              </li>
            </NavLink>
            <NavLink exact="true" to="/theclub">
              <li className="hover:scale-105  cursor-pointer transition-all duration-300 hover:text-[#F6F6F6]">
                The club
              </li>
            </NavLink>
            <NavLink exact="true" to="/">
              <li className="hover:scale-105  cursor-pointer transition-all duration-300 hover:text-[#F6F6F6]">
                SportPesa
              </li>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
