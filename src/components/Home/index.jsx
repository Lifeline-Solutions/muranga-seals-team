import React from "react";
import Hero from "./Hero.jsx";
import Jerseys from "./Jerseys.jsx";
import MatchScores from "./MatchScores.jsx";
import News from "./News.jsx";
import TrophyRoom from "./TrophyRoom.jsx";
import LatestYoutube from "./LatestYoutube.jsx";
import Gallery from "./Gallery.jsx";

const Home = () => {
  return (
    <>
      <Hero />
      <Jerseys />
      <MatchScores />
      <News />
      <TrophyRoom />
      <LatestYoutube />
      <Gallery />
    </>
  );
};

export default Home;
