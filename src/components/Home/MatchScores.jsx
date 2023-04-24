import React from "react";
import logo from "../images/logo.png";
const MatchScores = () => {
  return (
    <div className="h-[120vh] bg-cover bg-center   score-bg flex flex-col justify-center">
      <div className="flex items-start pt-24">
        <div className="w-[80%] mx-auto h-[400px] bg-[#F4E721]/60   flex justify-center items-center">
          <div className="flex gap-40 ">
            <div className="flex gap-2 text-xl">
              <img src={logo} alt="logo" className="w-32 h-32" />
              <div className="flex flex-col ">
                <p className="text-2xl font-bold uppercase">
                  Murang&#39;a Seals
                </p>
                <p>Murang&#39;a</p>
              </div>
            </div>
            <div className="bg-black h-[120px] text-center rounded-3xl  text-white text-5xl flex items-center justify-center">
              <p className="py-4 px-8 w-[200px] ">3 - 2</p>
            </div>

            <div className="flex gap-2 text-xl">
              <img src={logo} alt="logo" className="w-32 h-32" />
              <div className="flex flex-col ">
                <p className="text-2xl font-bold uppercase">
                  Murang&#39;a Seals
                </p>
                <p>Murang&#39;a</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold  ml-48 mt-12 font-semibold">
        Latest Matches
      </h1>
      <div className="flex justify-between font-semibold w-[80%] mx-auto text-xl ml-48 ">
        <div className="flex gap-4">
          <p
            className="hover:border-b-4 border-[#F4E721] transition-all duration-500  ease-in-out cursor-pointer"
            style={{
              hover: "border-bottom: 2px solid #E06F24",
            }}
          >
            Regional Cups
          </p>
          <p className="hover:border-b-4 border-[#F4E721] transition-all duration-500  ease-in-out cursor-pointer">
            Championships
          </p>
          <p className="hover:border-b-4 border-[#F4E721] transition-all duration-500  ease-in-out cursor-pointer">
            Friendly
          </p>
        </div>

        <div className="mr-32 text-2xl cursor-pointer">See All</div>
      </div>

      <div className="flex items-start ">
        <div className="w-[80%] mx-auto h-[120px] mt-12 p-4  bg-white flex justify-center items-center">
          <div className="flex gap-40 ">
            <div className="flex gap-2 text-xl mt-8">
              <img src={logo} alt="logo" className="w-16 h-16" />
              <div className="flex flex-col ">
                <p className="text-2xl font-bold uppercase">
                  Murang&#39;a Seals
                </p>
                <p>Murang&#39;a</p>
              </div>
            </div>
            <div className="bg-black h-[60px] mt-8 text-center rounded-3xl  text-white text-5xl flex items-center justify-center">
              <p className="py-4 px-8 w-[200px] ">3 - 2</p>
            </div>

            <div className="flex gap-2 text-xl mt-8">
              <img src={logo} alt="logo" className="w-16 h-16" />
              <div className="flex flex-col ">
                <p className="text-2xl font-bold uppercase">
                  Murang&#39;a Seals
                </p>
                <p>Murang&#39;a</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-start ">
        <div className="w-[80%] mx-auto h-[120px] mt-12 p-4  bg-white flex justify-center items-center">
          <div className="flex gap-40 ">
            <div className="flex gap-2 text-xl p-4 mt-8">
              <img src={logo} alt="logo" className="w-16 h-16" />
              <div className="flex flex-col ">
                <p className="text-2xl font-bold uppercase">
                  Murang&#39;a Seals
                </p>
                <p>Muranga</p>
              </div>
            </div>
            <div className="bg-black h-[60px] mt-8 text-center rounded-3xl  text-white text-5xl flex items-center justify-center">
              <p className="py-4 px-8 w-[200px] ">3 - 2</p>
            </div>

            <div className="flex gap-2 text-xl p-4 mt-8">
              <img src={logo} alt="logo" className="w-16 h-16" />
              <div className="flex flex-col ">
                <p className="text-2xl font-bold uppercase">
                  Murang&#39;a Seals
                </p>
                <p>Murang&#39;a</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchScores;
