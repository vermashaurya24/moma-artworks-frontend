import React, { useState, useEffect } from "react";
import axios from "axios";

const BASE_URL = "http://localhost:5000/backend-api/artists";

const ArtistDropdown = ({ onSelectArtist }) => {
  const [artists, setArtists] = useState([]);

  useEffect(() => {
    const fetchArtists = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/dropdown`);
        setArtists(response.data.artists);
      } catch (error) {
        console.error("Error fetching artists:", error);
      }
    };

    fetchArtists();
  }, []);

  const handleArtistClick = (event) => {
    const selectedId = event.target.value;
    const selected = artists.find(
      (artist) => artist.artist_id === parseInt(selectedId)
    );
    onSelectArtist(selected.constituentid);
  };

  return (
    <select onChange={handleArtistClick}>
      <option value="">All Artists</option>
      {artists.map((artist) => (
        <option key={artist.artist_id} value={artist.artist_id}>
          {artist.displayname}
        </option>
      ))}
    </select>
  );
};

export default ArtistDropdown;
