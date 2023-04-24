import React from "react";
import trophy from "../images/trophy.png";

const TrophyRoom = () => {
  return (
    <div className="flex p-8  justify-between bg-[#F6F6F6]">
      <div className="flex flex-col p-8  ">
        <p>Visit Our</p>
        <p className="font-bold my-4 text-5xl w-full">Trophy Room</p>
        <p className="w-[400px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum!
        </p>
        <button className="bg-[#F4E721] text-xl font-bold py-4 w-[200px]  mt-16 px-2">
          Read More
        </button>
      </div>
      <img src={trophy} alt="trophy" className="w-[250px] h-[300px]" />
      <img src={trophy} alt="trophy" className="w-[250px] h-[300px]" />
    </div>
  );
};

export default TrophyRoom;
