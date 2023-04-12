import React from "react";
import trophy from "./images/trophy.png";

const TrophyRoom = () => {
  return (
    <div className="flex p-8  bg-orange-100">
      <div className="flex flex-col p-8  ">
        <p>Visit Our</p>
        <p className="font-bold my-4 text-5xl w-full">Trophy Room</p>
        <p className="w-[300px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum!
        </p>
        <button className="bg-orange-400 text-xl text-white py-4 w-[200px]  mt-16 px-2">
          Read More
        </button>
      </div>
      <img src={trophy} alt="trophy" />
      <img src={trophy} alt="trophy" />
    </div>
  );
};

export default TrophyRoom;
