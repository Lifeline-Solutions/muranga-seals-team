import React from "react";
import logo from "./images/logo.png";
const MatchScores = () => {
  return (
    <div className="h-[100vh] bg-cover bg-center flex items-start  score-bg">
      <div className="w-[80%] mx-auto h-[400px] bg-[#E06F24]/60 mt-24 flex justify-center items-center">
        <div className="flex gap-56 ">
          <div className="flex gap-2 text-3xl">
            <img src={logo} alt="logo" className="w-32 h-32" />
            <div className="flex flex-col ">
              <p>Muranga Seals</p>
              <p>Muranga</p>
            </div>
          </div>
          <div className="bg-[#2C0E10] h-[100px] text-center rounded-3xl  text-white text-5xl flex items-center justify-center">
            <p className="py-4 px-8 w-[200px] ">3 - 2</p>
          </div>

          <div className="flex gap-2 text-3xl">
            <img src={logo} alt="logo" className="w-32 h-32" />
            <div className="flex flex-col ">
              <p>Muranga Seals</p>
              <p>Muranga</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MatchScores;
