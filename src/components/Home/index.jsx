import React from 'react';
import NavBar from "../NavBar/NavBar.jsx";
import Hero from "./Hero.jsx";
import Jerseys from "./Jerseys.jsx";
import MatchScores from "./MatchScores.jsx";
import News from "./News.jsx";
import TrophyRoom from "./TrophyRoom.jsx";
import LatestYoutube from "./LatestYoutube.jsx";
import Gallery from "./Gallery.jsx";
import Footer from "../Footer";

const Home = () => {
    return (
    <>
        <NavBar />
        <Hero />
        <Jerseys />
        <MatchScores />
        <News />
        <TrophyRoom />
        <LatestYoutube />
        <Gallery />
        <Footer />

    </>
  );
}

export default Home;