import React from "react";
import "./App.css";
import Home from "./components/Home";
import NewsPage from "./components/NewsPage";
import { Route, Routes } from "react-router-dom";
import Matches from "./components/Matches";
import Team from "./components/Team";
import Ticket from "./components/Ticket";
import Membership from "./components/Membership";
import TheClub from "./components/TheClub/index.jsx";
import History from "./components/History/index.jsx";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route index element={<Home />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="matches" element={<Matches />} />
            <Route path="teams" element={<Team />} />
            <Route path="ticket" element={<Ticket />} />
            <Route path="membership" element={<Membership />} />
            <Route path="theclub" element={<TheClub />} />
            <Route path="history" element={<History />} />

        </Routes>

    </div>
  );
}

export default App;
