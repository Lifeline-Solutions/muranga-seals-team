import React from "react";
import celebrating from "../images/celebrating.jpeg";
const News = () => {
  return (
    <div>
      <div className="flex gap-0 mt-20 ml-12 flex-col ">
        <h1 className="text-[100px] font-bold  ">NEWS</h1>
        <p
          className=" w-[350px] "
          style={{
            borderBottom: "10px solid #F4E721",
          }}
        ></p>
      </div>
      <div className="relative  ">
        <img
          src={celebrating}
          alt="celebrating"
          className="w-[80%] ml-8 my-12 z-0 relative h-[80vh]"
        />
        <div className="absolute bg-white   shadow-gray-900 flex gap-8 z-10 flex-col top-24 right-4 w-[600px]  h-[500px] p-4 shadow-2xl  font-bold ">
          <div className="flex gap-12  items-center">
            <h1 className="text-3xl">Matches</h1>
            <p className="text-3xl">March/2021/</p>
          </div>
          <h1 className="text-7xl">Wazito FC 1-0</h1>
          <h1 className="text-5xl">Murang&#39;a Seals FC</h1>
          <h1 className="text-gray-500 text-[30px] font-medium">
            A penalty for Wazito FC
          </h1>
          <p
            className=" w-[350px] "
            style={{
              borderBottom: "5px solid #F4E721",
            }}
          ></p>
        </div>
      </div>
    </div>
  );
};

export default News;
