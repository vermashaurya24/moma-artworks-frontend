import React, { useState, useEffect } from "react";
import Navigation from "../common/Navigation/Navigation";
import ArtworkListControls from "../common/ArtworkListComponents/ArtworkListControls/ArtworkListControls";
import ArtworkTable from "../common/ArtworkListComponents/ArtworkTable/ArtworkTable";
import Pagination from "../common/ArtistListComponents/Pagination/Pagination";
import axios from "axios";

const BASE_URL = "http://localhost:5000/backend-api/artworks";

const ArtworkListPage = () => {
  const [artworks, setArtworks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [searchType, setSearchType] = useState("default");

  const fetchArtworks = async (page) => {
    const response = await axios.get(`${BASE_URL}?cursor=${(page - 1) * 100}`);
    setArtworks(response.data.rows);
    setSearchType("default");
  };

  const fetchArtworksByArtist = async (constituentid) => {
    const response = await axios.get(
      `${BASE_URL}/byArtistID?artist_id=${constituentid}&cursor=0`
    );
    setArtworks(response.data.rows);
    setSearchType("nondefault");
  };

  const fetchArtworksByTitle = async (title) => {
    const response = await axios.get(
      `${BASE_URL}/byTitle?title=${title}&cursor=0`
    );
    setArtworks(response.data.rows);
    setSearchType("nondefault");
  };

  const fetchTotalCount = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/totalCount`);
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
        totalCount={searchType === "default" ? totalCount : artworks.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ArtworkListPage;
