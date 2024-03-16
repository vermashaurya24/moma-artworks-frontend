import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div>
      <h1>404 - Route Not Found</h1>
      <p>
        This route does not exist yet. Please try{" "}
        <Link to="/artists">/artists</Link> or{" "}
        <Link to="/artworks">/artworks</Link> instead.
      </p>
    </div>
  );
}

export default NotFound;
