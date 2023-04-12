import React from "react";
import gallery3 from "./images/gallery3-02.png";
const News = () => {
  return (
    <div>
      <div className="flex gap-0 ml-12 flex-col ">
        <h1 className="text-[100px] font-bold text-[#2C0E10] ">NEWS</h1>
        <p
          className=" border-[#E06F24] w-[350px] "
          style={{
            borderBottom: "10px solid #E06F24",
          }}
        ></p>
      </div>
      <div className="relative  ">
        <img src={gallery3} alt="gallery" />
        <div className="absolute flex gap-8 flex-col top-0 right-4 w-[600px]  h-[500px] p-4 shadow-2xl text-5xl font-bold ">
          <div className="flex gap-12">
            <h1>Matches</h1>
            <p>March/2021/</p>
          </div>
          <h1>Wazito FC 1-0</h1>
          <h1>Murang'a Seal FC</h1>
          <h1 className="text-gray-500 text-[30px] font-medium">
            A penalty for Wazito FC
          </h1>
          <p
            className=" border-[#E06F24] w-[350px] "
            style={{
              borderBottom: "5px solid #E06F24",
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default News;
