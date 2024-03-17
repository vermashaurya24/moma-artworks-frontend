// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ArtistListPage from "./components/pages/ArtistListPage";
import ArtworkListPage from "./components/pages/ArtworkListPage";
import NotFound from "./components/pages/NotFound"; // Import NotFound component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Routes */}
        <Routes>
          <Route path="/artists" element={<ArtistListPage />} />
          <Route path="/artworks" element={<ArtworkListPage />} />
          <Route path="*" element={<NotFound />} />{" "}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
