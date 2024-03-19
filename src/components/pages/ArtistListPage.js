import React, { useState, useEffect } from "react";
import Navigation from "../common/Navigation/Navigation";
import SearchBar from "../common/ArtistListComponents/SearchBar/SearchBar";
import ArtistTable from "../common/ArtistListComponents/ArtistTable/ArtistTable";
import Pagination from "../common/Pagination/Pagination";
import axios from "axios";

const ArtistListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [artists, setArtists] = useState([]);

  const fetchArtists = async (page) => {
    try {
      const response = await axios.get(
        `http://localhost:5000/backend-api/artists?cursor=${(page - 1) * 100}`
      );
      setArtists(response.data.rows);
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  };

  const fetchTotalCount = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/backend-api/artists/totalCount"
      );
      const totalCountString = response.data.count;
      const totalCountInteger = parseInt(totalCountString[0].count);
      setTotalCount(totalCountInteger);
    } catch (error) {
      console.error("Error fetching artists count:", error);
    }
  };

  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/backend-api/artists/artist?displayName=${searchTerm}&cursor=0`
      );
      setArtists(response.data.rows);
      setTotalCount(response.data.count);
    } catch (error) {
      console.error("Error fetching artists by name:", error);
    }
  };

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleDeleteArtist = async (artist_id) => {
    try {
      await axios.delete(
        `http://localhost:5000/backend-api/artists/${artist_id}`
      );
      fetchTotalCount();
      fetchArtists();
    } catch (error) {
      console.error("Error deleting artist:", error);
    }
  };

  const handlePageChange = (page) => {
    if (searchTerm) {
      setCurrentPage(page);
      handleSearch();
    } else {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    fetchArtists(currentPage);
    if (currentPage === 1) {
      fetchTotalCount();
    }
  }, [currentPage]);

  return (
    <div className="page-container">
      <Navigation />
      <SearchBar
        searchTerm={searchTerm}
        onSearch={handleSearch}
        onChange={handleChange}
      />
      <ArtistTable artists={artists} onDelete={handleDeleteArtist} />
      <Pagination
        currentPage={currentPage}
        totalCount={totalCount}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ArtistListPage;
