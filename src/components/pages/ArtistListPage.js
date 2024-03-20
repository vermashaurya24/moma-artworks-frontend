import React, { useState, useEffect } from "react";
import Navigation from "../common/Navigation/Navigation";
import SearchBar from "../common/ArtistListComponents/SearchBar/SearchBar";
import ArtistTable from "../common/ArtistListComponents/ArtistTable/ArtistTable";
import Pagination from "../common/Pagination/Pagination";
import axios from "axios";

const BASE_URL = "http://localhost:5000/backend-api/artists";

const ArtistListPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [artists, setArtists] = useState([]);

  //Function to fetch artists in a paginated format.
  const fetchArtists = async (page) => {
    try {
      const response = await axios.get(
        `${BASE_URL}?cursor=${(page - 1) * 100}`
      );
      setArtists(response.data.rows);
    } catch (error) {
      console.error("Error fetching artists:", error);
    }
  };

  //Function to count total artists in our table. Used to calculate total pages for pagination.
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

  //Function to search artists by their name. If no artists found, UI is rendered accordingly.
  const handleSearch = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/artist?displayName=${searchTerm}&cursor=0`
      );
      setArtists(response.data.rows);
      setTotalCount(response.data.count);
    } catch (error) {
      console.error("Error fetching artists by name:", error);
    }
  };

  // Function executes when search button is pressed. Updates the search term with value in the searchbox
  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  // Function to delete artist matching by artists id.
  const handleDeleteArtist = async (artist_id) => {
    try {
      await axios.delete(`${BASE_URL}/${artist_id}`);
      fetchTotalCount();
      fetchArtists();
    } catch (error) {
      console.error("Error deleting artist:", error);
    }
  };

  // Function to update page number whenever user updates state from pagination button.
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
