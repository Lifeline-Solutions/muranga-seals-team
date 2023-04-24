import React from "react";
import logo from "../images/logo.png";
import teamphoto from "../images/team-photo.jpeg";
const Ticket = () => {
  return (
    <>
    
      <div className="h-[200px] bg-black text-white text-7xl p-8 font-bold">
        Ticket
      </div>
      <div className="p-8 flex flex-col">
        <h1>Ticket availability</h1>
        <select className="w-[350px] h-[80px] p-4 text-5xl  border-2 bg-yellow-300 rounded-md">
          <option value="">All</option>
          <option value="Home game">Home game</option>
          <option value="Away game">Away game</option>
        </select>
      </div>

      <div className="w-[90%] p-4 mx-auto bg-gray-100 text-5xl font-bold flex justify-between">
        <h1>Fixtures</h1>
        <h1>On Sale</h1>
        <h1>Now Selling</h1>
      </div>

      <div className="w-[90%] my-4 p-4 mx-auto border-t-8 border-yellow-200 bg-gray-100 text-3xl font-bold flex justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className="w-[200px] h-[200px]" />
          <div className="flex flex-col justify-between ">
            <h1>Muranga Seals Junior Team</h1>
            <div className="flex flex-col">
              <h1>Sun April 29- 6:00 pm</h1>
              <h1 className="text-gray-500">Division 2</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 justify-between">
          <p className="bg-gray-200 w-[80%] flex items-center  h-[100px] p-8 shadow-2xl  text-start">
            General Membership
          </p>
          <p className="bg-yellow-400 h-[100px] p-8 shadow-2xl  text-center">
            Buy Now
          </p>
        </div>
      </div>
      <div className="w-[90%] my-4 p-4 mx-auto border-t-8 border-yellow-200 bg-gray-100 text-3xl font-bold flex justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className="w-[200px] h-[200px]" />
          <div className="flex flex-col justify-between ">
            <h1>Muranga Seals Junior Team</h1>
            <div className="flex flex-col">
              <h1>Sun April 29- 6:00 pm</h1>
              <h1 className="text-gray-500">Division 2</h1>
            </div>
          </div>
        </div>
        <h1 className="text-red-500 text-5xl flex justify-center items-center">
          Sold Out
        </h1>
        <div className="flex flex-col gap-12 justify-between">
          <p className="bg-gray-200 w-[80%] flex items-center  h-[100px] p-8 shadow-2xl  text-start">
            General Membership
          </p>
          <p className="bg-yellow-400 h-[100px] p-8 shadow-2xl  text-center">
            Buy Now
          </p>
        </div>
      </div>

      <div className="w-[90%] my-4 p-4 mx-auto border-t-8 border-yellow-200 bg-gray-100 text-3xl font-bold flex justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className="w-[200px] h-[200px]" />
          <div className="flex flex-col justify-between ">
            <h1>Muranga Seals Junior Team</h1>
            <div className="flex flex-col">
              <h1>Sun April 29- 6:00 pm</h1>
              <h1 className="text-gray-500">Division 2</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 justify-between">
          <p className="bg-gray-200 w-[80%] flex items-center  h-[100px] p-8 shadow-2xl  text-start">
            Junior Membership
          </p>
          <p className="bg-yellow-400 h-[100px] p-8 shadow-2xl  text-center">
            Buy Now
          </p>
        </div>
      </div>

      <div className="w-[90%] my-4 p-4 mx-auto border-t-8 border-yellow-200 bg-gray-100 text-3xl font-bold flex justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className="w-[200px] h-[200px]" />
          <div className="flex flex-col justify-between ">
            <h1>Muranga Seals Junior Team</h1>
            <div className="flex flex-col">
              <h1>Sun April 29- 6:00 pm</h1>
              <h1 className="text-gray-500">Division 2</h1>
            </div>
          </div>
        </div>
        <h1 className="text-red-500 text-5xl flex justify-center items-center">
          Sold Out
        </h1>
        <div className="flex flex-col gap-12 justify-between">
          <p className="bg-gray-200 w-[80%] flex items-center  h-[100px] p-8 shadow-2xl  text-start">
            Platinum Membership
          </p>
          <p className="bg-yellow-400 h-[100px] p-8 shadow-2xl  text-center">
            Buy Now
          </p>
        </div>
      </div>

      <div className="flex justify-between bg-gray-100 mx-auto w-[90%] p-4">
        <div className="flex flex-col gap-4 text-3xl">
          <h1 className="text-5xl font-bold">MURANG&apos;A SEALS MEMBERSHIP</h1>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>
          <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit,</p>

          <button className="w-[40%] bg-yellow-400 p-4 text-3xl ">
            Buy Now
          </button>
        </div>

        <div>
          <img src={teamphoto} alt="logo" className="w-[500px] h-[500px]" />
        </div>
      </div>
    </>
  );
};

export default Ticket;
