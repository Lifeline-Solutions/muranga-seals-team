import React from "react";
import logo from "../images/logo.png";
import { Link, NavLink } from "react-router-dom";
import SportPesaLogo from "../images/sportpesalogo.png";
import FinixCasino from "../images/finix-casino.png";

const NavBar = () => {
  return (
    <>
      <div className="bg-[#F4E721]">
        <h1 className="text-3xl text-center font-bold">Sportpesa</h1>
        <h1 className="text-5xl  text-center font-bold">Sponsor advert</h1>


      </div>
      <div className="flex justify-around font-bold items-center p-2 bg-[#F4E721] ">
        <div className="mb-2">
          <Link to="/">
            <img src={logo} alt="logo" className="w-[150px] " />
          </Link>
        </div>
        <div className="mr-8 text-xl border-t-2 w-[90%] mx-auto border-black">
          <ul className="flex ml-80  gap-8 py-4">
            <NavLink exact="true" to="/">
              <li className="hover:scale-105 cursor-pointer transition-all duration-300 hover:border-b-2 border-black">
                News
              </li>
            </NavLink>
            <NavLink exact="true" to="/teams">
              <li className="hover:scale-105 cursor-pointer  transition-all duration-300 hover:border-b-2 border-black">
                Teams
              </li>
            </NavLink>
            <NavLink exact="true" to="/ticket">
              <li className="hover:scale-105  cursor-pointer transition-all duration-300 hover:border-b-2 border-black">
                Ticket
              </li>
            </NavLink>
            <NavLink exact="true" to="/membership">
              <li className="hover:scale-105 cursor-pointer  transition-all duration-300 hover:border-b-2 border-black">
                Membership
              </li>
            </NavLink>
            <NavLink exact="true" to="/theclub">
              <li className="hover:scale-105  cursor-pointer transition-all duration-300 hover:border-b-2 border-black">
                The club
              </li>
            </NavLink>
            <a target="_blank" rel="noreferrer" href="https://www.ke.sportpesa.com/en/sports-betting/football-1/">
              <img src={SportPesaLogo} className="w-[120px]"/>
            </a>
            <NavLink exact="true" to="/">
              <img src={FinixCasino} className="w-[120px]"/>
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default NavBar;
