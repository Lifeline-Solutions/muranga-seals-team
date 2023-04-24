import React from "react";
import player from "../images/player.jpeg";
import Defenders from "./Defenders.jsx";
import Goalkepper from "./Goalkepper.jsx";
import Midfilder from "./Midfielder.jsx";
import Forwards from "./Forwards.jsx";
import Coaches from "./Coaches.jsx";

const Team = () => {
  return (
    <>
      <div className="h-[200px] bg-black/90 text-white text-7xl p-8 font-bold">
        Teams
      </div>
      <Goalkepper />
      <Defenders />
      <Midfilder />
      <Forwards />
     <Coaches />
    </>
  );
};

export default Team;
