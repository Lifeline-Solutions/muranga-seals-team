import React from "react";
import "./App.css";
import Home from "./components/Home";
import NewsPage from "./components/NewsPage";
import { Route, Routes } from "react-router-dom";
import Matches from "./components/Matches";
import Team from "./components/Team";
function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={ <Home />} />
            <Route index element={<Home />} />
            <Route path="news" element={<NewsPage />} />
            <Route path="matches" element={<Matches />} />
            <Route path="teams" element={<Team />} />

        </Routes>

    </div>
  );
}

export default App;
