import React from "react";
import teamhero from "../images/team-hero.jpeg";
const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${teamhero})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="h-[90vh]   "
    >
      <div className="bg-[#F4E721]/30 p-4 z-[2] h-[90vh] w-[100%]">
        <h1
          className=" p-4 font-bold text-white"
          style={{
            fontWeight: "700",
            fontSize: "10rem",
          }}
        >
          LET&apos;S GO
        </h1>
        <h1
          className="p-4 font-bold text-white"
          style={{ fontWeight: "700", fontSize: "8rem" }}
        >
          Seals
        </h1>

        <div className="flex gap-12 p-4">
          <p className="bg-[#F4E721] px-6 py-4 font-bold ">Matches</p>
          <p className="bg-[#F4E721] px-6 py-4 font-bold ">Purchase</p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
