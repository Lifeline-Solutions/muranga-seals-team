import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import NewsPage from "./components/NewsPage";
import Team from "./components/Team";
import Ticket from "./components/Ticket";
import Membership from "./components/Membership";
import TheClub from "./components/TheClub";
import NavBar from "./components/NavBar/NavBar";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="news" element={<NewsPage />} />
        <Route path="teams" element={<Team />} />
        <Route path="ticket" element={<Ticket />} />
        <Route path="membership" element={<Membership />} />
        <Route path="theclub" element={<TheClub />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
