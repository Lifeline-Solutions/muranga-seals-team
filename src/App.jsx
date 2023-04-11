import React from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Jerseys from "./components/Jerseys";
import MatchScores from "./components/MatchScores";
function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Jerseys />
      <MatchScores />
    </div>
  );
}

export default App;
