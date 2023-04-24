import React from "react";
import logo from "../images/logo.png";
import teamphoto from "../images/team-photo.jpeg";
const Ticket = () => {
  return (
    <>
      <div className="h-[200px] bg-black/90 text-white text-7xl p-8 font-bold">
        Ticket
      </div>
      <div className="p-8 flex flex-col">
        <h1 className="text-2xl">Ticket availability</h1>
        <select className="w-[350px] h-[70px] p-4 text-3xl  border-2 bg-[#F4E721] rounded-md">
          <option value="">All</option>
          <option value="Home game">Home game</option>
          <option value="Away game">Away game</option>
        </select>
      </div>

      <div className="w-[90%] p-4 mx-auto bg-gray-100 text-3xl font-bold flex justify-between">
        <h1>Fixtures</h1>
        <h1>On Sale</h1>
        <h1>Now Selling</h1>
      </div>

      <div className="w-[90%] my-4 p-4 mx-auto border-t-8 border-yellow-200 bg-gray-100 text-3xl font-bold flex justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className="w-[150px] h-[150px]" />
          <div className="flex flex-col justify-between ">
            <h1>Muranga Seals Junior Team</h1>
            <div className="flex flex-col">
              <h1>Sun April 29- 6:00 pm</h1>
              <h1 className="text-gray-500">Division 2</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 justify-between">
          <p className="bg-gray-200  flex items-center gap-2  h-[40px] p-8 shadow-2xl  text-start">
            <span>General</span>
            <span>Membership</span>
          </p>
          <p className="bg-[#F4E721] h-[40px] p-8 shadow-2xl  text-center flex items-center justify-center">
            Buy Now
          </p>
        </div>
      </div>
      <div className="w-[90%] my-4 p-4 mx-auto border-t-8 border-yellow-200 bg-gray-100 text-3xl font-bold flex justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className="w-[150px] h-[150px]" />
          <div className="flex flex-col justify-between ">
            <h1>Muranga Seals Junior Team</h1>
            <div className="flex flex-col">
              <h1>Sun April 29- 6:00 pm</h1>
              <h1 className="text-gray-500">Division 2</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 justify-between">
          <p className="bg-gray-200  flex items-center gap-2  h-[40px] p-8 shadow-2xl  text-start">
            <span>General</span>
            <span>Membership</span>
          </p>
          <p className="bg-[#F4E721] h-[40px] p-8 shadow-2xl  text-center flex items-center justify-center">
            Buy Now
          </p>
        </div>
      </div>

      <div className="w-[90%] my-4 p-4 mx-auto border-t-8 border-yellow-200 bg-gray-100 text-3xl font-bold flex justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className="w-[150px] h-[150px]" />
          <div className="flex flex-col justify-between ">
            <h1>Muranga Seals Junior Team</h1>
            <div className="flex flex-col">
              <h1>Sun April 29- 6:00 pm</h1>
              <h1 className="text-gray-500">Division 2</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 justify-between">
          <p className="bg-gray-200  flex items-center gap-2  h-[40px] p-8 shadow-2xl  text-start">
            <span>General</span>
            <span>Membership</span>
          </p>
          <p className="bg-[#F4E721] h-[40px] p-8 shadow-2xl  text-center flex items-center justify-center">
            Buy Now
          </p>
        </div>
      </div>

      <div className="w-[90%] my-4 p-4 mx-auto border-t-8 border-yellow-200 bg-gray-100 text-3xl font-bold flex justify-between">
        <div className="flex">
          <img src={logo} alt="logo" className="w-[150px] h-[150px]" />
          <div className="flex flex-col justify-between ">
            <h1>Muranga Seals Junior Team</h1>
            <div className="flex flex-col">
              <h1>Sun April 29- 6:00 pm</h1>
              <h1 className="text-gray-500">Division 2</h1>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-12 justify-between">
          <p className="bg-gray-200  flex items-center gap-2  h-[40px] p-8 shadow-2xl  text-start">
            <span>General</span>
            <span>Membership</span>
          </p>
          <p className="bg-[#F4E721] h-[40px] p-8 shadow-2xl  text-center flex items-center justify-center">
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

          <button className="w-[40%] bg-[#F4E721] p-4 text-3xl ">
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
