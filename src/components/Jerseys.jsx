import React from "react";
import jersey1 from "./images/jersey-1-02.png";
import jersey2 from "./images/jersey-2-02.png";
import jersey3 from "./images/jersey-3-02.png";

const Jerseys = () => {
  return (
    <div className="mt-24">
      <h1 className="text-center font-seibold text-5xl">Jersey Seasons</h1>

      <div className="flex justify-center gap-24 mt-12">
        <div className="relative p-4 w-[400px] h-[300px] border-dotted border-2  border-br-0 flex">
          <img
            src={jersey1}
            alt="jersey"
            className="w-[500px] h-[400px] absolute top-0 right-32"
          />
          <div className="flex flex-col gap-4 ml-52">
            <p>Authentic Away Shirt</p>
            <p>Team Jersey</p>
            <p>Short sleeve</p>
            <p>10% discount off</p>
            <p>On membership</p>
            <p>Medium</p>
          </div>
        </div>
        <div className="relative p-4 w-[500px] h-[500px] border-dotted border-2  border-br-0 flex">
          <img
            src={jersey2}
            alt="jersey"
            className=" absolute top-0 right-56 w-96 h-96"
          />
          <div className="flex flex-col gap-4 ml-64">
            <p>Authentic Away Shirt</p>
            <p>Team Jersey</p>
            <p>Short sleeve</p>
            <p>10% discount off</p>
            <p>On membership</p>
            <p>Medium</p>
          </div>
        </div>
        <div className="relative p-4 w-[400px] h-[300px] border-dotted border-2  border-br-0 flex">
          <img
            src={jersey3}
            alt="jersey"
            className="w-[800px] h-[400px] absolute top-0 right-32"
          />
          <div className="flex flex-col gap-4 ml-40">
            <p>Authentic Away Shirt</p>
            <p>Team Jersey</p>
            <p>Short sleeve</p>
            <p>10% discount off</p>
            <p>On membership</p>
            <p>Medium</p>
          </div>
        </div>
      </div>

      <div className="flex mt-12">
        <p className="w-1/2  p-4 text-end  bg-[#E06F24] text-white pr-16 text-2xl  ">Breaking News</p>
        <p className="w-1/2 bg-gray-200 p-4 text-start  pl-16 text-2xl ">Latest News</p>
      </div>
    </div>
  );
};

export default Jerseys;
