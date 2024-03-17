import React, { useState, useEffect } from "react";
import Navigation from "../common/ArtistListComponents/Navigation/Navigation";
import ArtworkListControls from "../common/ArtworkListComponents/ArtworkListControls/ArtworkListControls";
import ArtworkTable from "../common/ArtworkListComponents/ArtworkTable/ArtworkTable";
import Pagination from "../common/ArtistListComponents/Pagination/Pagination";
import axios from "axios";

const ArtworkListPage = () => {
  const [artworks, setArtworks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);

  const fetchArtworks = async (page) => {
    const response = await axios.get(
      `http://localhost:5000/backend-api/artworks?cursor=${(page - 1) * 100}`
    );
    setArtworks(response.data.rows);
  };

  const fetchArtworksByArtist = async (constituentid) => {
    const response = await axios.get(
      `http://localhost:5000/backend-api/artworks/byArtistID?artist_id=${constituentid}&cursor=0`
    );
    setArtworks(response.data.rows);
  };

  const fetchArtworksByTitle = async (title) => {
    const response = await axios.get(
      `http://localhost:5000/backend-api/artworks/byTitle?title=${title}&cursor=0`
    );
    setArtworks(response.data.rows);
  };

  const fetchTotalCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/backend-api/artworks/totalCount"
      );
      const totalCountString = response.data.count;
      const totalCountInteger = parseInt(totalCountString[0].count);
      setTotalCount(totalCountInteger);
    } catch (error) {
      console.error("Error fetching artists count:", error);
    }
  };

  const handleArtistChange = (selected) => {
    if (selected) {
      fetchArtworksByArtist(selected);
    } else {
      fetchArtworks();
    }
  };

  const handleSearch = (searchValue) => {
    const encodedSearchValue = encodeURIComponent(searchValue);
    if (encodedSearchValue) {
      fetchArtworksByTitle(encodedSearchValue);
    } else {
      fetchArtworks();
    }
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    fetchArtworks(currentPage);
    if (currentPage === 1) {
      fetchTotalCount();
    }
  }, [currentPage]);

  return (
    <div className="page-container">
      <Navigation />
      <ArtworkListControls
        onSearch={handleSearch}
        onArtistChange={handleArtistChange}
      />
      <ArtworkTable artworks={artworks} />
      <Pagination
        currentPage={currentPage}
        totalCount={totalCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ArtworkListPage;
