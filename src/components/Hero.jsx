import React from "react";
import header2 from "./images/header-02.png";
import person2 from "./images/person-02.png";
const Hero = () => {
  return (
    <div>
      <img className="relative" src={header2} alt="header" />
      <div className="absolute  top-[120px]  left-[50px]  flex flex-col gap-2">
        <p className="text-center text-3xl font-semi-bold text-white">
          Defender
        </p>
        <p className="text-center text-5xl font-bold text-white">D.Wabwire</p>

        <p className="text-center text-[200px] text-white font-bold">10</p>

        <div className="flex justify-center text-center text-white">
          <p className="bg-[#2C0E10] px-8 text-5xl py-4">16</p>
          <p className="bg-[#E06F24] text-5xl px-8 py-4">20</p>
        </div>

        <div className="flex gap-24 my-12  justify-center text-center">
          <p className="border-2 py-2 px-8 text-xl rounded-[50px] text-white">
            Matches
          </p>

          <p className="bg-[#2C0E10] text-md px-8 py-2 text-xl bg-orange-900 rounded-[50px] text-white">
            Purchase
          </p>
        </div>
      </div>
      <div className="absolute top-[70px]  uppercase text-white right-[10px]">
        <p className="text-start font-bold text-[150px]">Murang&#39;a</p>

        <p
          className="text-end font-bold text-9xl"
          style={{
            webkitTextStroke: "2px white",
            webkitTextFillColor: "transparent",
          }}
        >
          Seals
        </p>

        <p className="mt-24 text-center text-5xl italic">D . Wabwire</p>
      </div>
      <div>
        <p className="absolute top-[70px]  uppercase text-white right-[10px] text-start font-bold text-[150px]">
          <img src={person2} alt="person" />
        </p>
      </div>
    </div>
  );
};

export default Hero;
