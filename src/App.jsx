import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Jerseys from "./components/Jerseys";
import MatchScores from "./components/MatchScores";
import News from "./components/News";
import TrophyRoom from "./components/TrophyRoom";
import LatestYoutube from "./components/LatestYoutube";
import Gallery from "./components/Gallery";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Jerseys />
      <MatchScores />
      <News />
      <TrophyRoom />
      <LatestYoutube />
      <Gallery />
    </div>
  );
}

export default App;
