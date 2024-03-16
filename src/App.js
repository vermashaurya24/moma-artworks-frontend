// App.js

import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ArtistListPage from "./components/ArtistListPage";
import ArtworkListPage from "./components/ArtworkListPage";
import NotFound from "./components/NotFound"; // Import NotFound component
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation buttons */}
        <div className="navigation">
          <Link to="/artists">Artists</Link>
          {" / "}
          <Link to="/artworks">Artworks</Link>
        </div>

        {/* Routes */}
        <Routes>
          <Route path="/artists" element={<ArtistListPage />} />
          <Route path="/artworks" element={<ArtworkListPage />} />
          <Route path="*" element={<NotFound />} />{" "}
          {/* Catch-all route for unmatched paths */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
