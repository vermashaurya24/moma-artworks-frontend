// Navigation.js

import React from "react";
import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav className="navigation">
      <Link to="/artists" className="active">
        Artists
      </Link>
      <span className="separator">/</span>
      <Link to="/artworks">Artworks</Link>
    </nav>
  );
}

export default Navigation;
