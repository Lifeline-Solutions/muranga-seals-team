import React from "react";
import Defenders from "./Defenders.jsx";
import Goalkeeper from "./Goalkeeper.jsx";
import Midfielder from "./Midfielder.jsx";
import Forwards from "./Forwards.jsx";
import Coaches from "./Coaches.jsx";

const Team = () => {
  return (
    <>
      <div className="h-[200px] bg-black/90 text-white text-7xl p-8 font-bold">
        Teams
      </div>
      <Goalkeeper />
      <Defenders />
      <Midfielder />
      <Forwards />
     <Coaches />
    </>
  );
};

export default Team;
