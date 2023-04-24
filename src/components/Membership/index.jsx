import React from "react";
const Membership = () => {
  return (
    <>
      <div className="h-[200px] bg-black text-white text-7xl p-8 font-bold">
        Ticket
      </div>
      <div className="p-8 flex flex-col gap-1">
        <h1 className="text-5xl font-bold">
          JOIN OUR MEMBERSHIP TODAY AND ENJOY
        </h1>
        <h1 className="text-5xl font-bold">PREMIUM SERVICES</h1>
        <p className="text-4xl text-gray-400">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam
          nonummy nibh euis-
        </p>
        <p className="text-4xl text-gray-400">
          mod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi
          enim
        </p>
      </div>
      <div className="flex flex-col gap-2 p-8">
        <h1 className="text-3xl">
          Type of Membership Interested In{" "}
          <span className="text-red-500">*</span>
        </h1>
        <select className=" h-[100px] p-8 border-b-2 border-gray-300">
          <option value="volvo">General Membership</option>
          <option value="volvo">Junior Membership</option>
          <option value="saab">Platinum Membership</option>
          <option value="mercedes">Gold Membership</option>
        </select>
        <div className="flex justify-between">
          <input
            type="text"
            placeholder="Title"
            className="h-[100px] w-[45%] p-8 border-b-2 border-gray-300"
          />
          <input
            type="text"
            placeholder="Names"
            className="h-[100px] p-8 w-[45%] border-b-2 border-gray-300"
          />
        </div>
        <div className="flex gap-8">
          <input
            type="text"
            placeholder="Title"
            className="h-[100px] w-[45%] p-8 border-b-2 border-gray-300"
          />
          <div className="flex flex-col ">
            <input
              type="date"
              placeholder="Names"
              className="h-[100px] p-8  border-b-2 border-gray-300"
            />
          </div>
        </div>

        <input
          type="text"
          placeholder="Email *"
          className="h-[100px] p-8  border-b-2 border-gray-300"
        />

        <div className="flex justify-between">
          <div className="flex flex-col text-3xl">
            <h1>Muranga Seals may</h1>
            <h1>Contact me by</h1>
            <input
              type="text"
              placeholder="PHONE"
              className="h-[100px]  border-b-2 border-gray-300"
            />
          </div>
          <p className="text-2xl w-[60%]">
            Please let us know using the dropdown if you would like to be
            contacted by Muranga seals and its group companies with news and
            promotional information about Muranga seals its official sponsors
            and partners and their products and services, where we have the
            relevant contact details. Please read our Privacy Policy to learn
            more about us and its group companies, how we use your information
            and how to change your mind about receiving marketing from us.
          </p>
        </div>

        <button className="bg-[#F4E721] w-[50%] mx-auto hover:scale-105 duration-500 transition-all text-3xl p-4 mt-12 font-bold">
          Register
        </button>
      </div>
    </>
  );
};

export default Membership;
