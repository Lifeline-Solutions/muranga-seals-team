import React from "react";
import player from "../images/player.jpeg";
import Defenders from "./Defenders.jsx";
import Goalkepper from "./Goalkepper.jsx";

const Team = () => {
  return (
    <>
      <div className="h-[200px] bg-black/90 text-white text-7xl p-8 font-bold">
        Teams
      </div>
      <Goalkepper />
      <Defenders />
      <div className="p-8">
        <h1 className="text-5xl font-bold">MIDFIELDERS</h1>
        <p className="w-[100px] h-[5px] bg-gray-300"></p>
      </div>

      <div className="grid grid-cols-4 gap-8 p-8">
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1 className="text-gray-400 text-5xl">21</h1>
          </div>
        </div>
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1 className="text-gray-400 text-5xl">21</h1>
          </div>
        </div>
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1 className="text-gray-400 text-5xl">21</h1>
          </div>
        </div>
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1 className="text-gray-400 text-5xl">21</h1>
          </div>
        </div>
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1 className="text-gray-400 text-5xl">21</h1>
          </div>
        </div>
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1 className="text-gray-400 text-5xl">21</h1>
          </div>
        </div>
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1 className="text-gray-400 text-5xl">21</h1>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-5xl font-bold">FORWARDS</h1>
        <p className="w-[100px] h-[5px] bg-gray-300"></p>
      </div>

      <div className="grid grid-cols-4 gap-8 p-8">
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1 className="text-gray-400 text-5xl">21</h1>
          </div>
        </div>
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1>21</h1>
          </div>
        </div>
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1 className="text-gray-400 text-5xl">21</h1>
          </div>
        </div>
      </div>

      <div className="p-8">
        <h1 className="text-5xl font-bold">COACHES</h1>
        <p className="w-[100px] h-[5px] bg-gray-300"></p>
      </div>

      <div className="grid grid-cols-4 gap-8 p-8">
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1 className="text-gray-400 text-5xl">21</h1>
          </div>
        </div>
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1 className="text-gray-400 text-5xl">21</h1>
          </div>
        </div>
        <div className="w-[300px] flex-flex-col">
          <img src={player} alt="player" />
          <div className="flex justify-between">
            <div className="flex flex-col">
              <h1>Chris</h1>
              <h1>Achinga</h1>
            </div>
            <h1 className="text-gray-400 text-5xl">21</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Team;
