import React from "react";
import "./Pagination.css";

function Pagination({ currentPage, totalCount, onPageChange }) {
  const totalPages = Math.ceil(totalCount / 100);

  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <div className="pagination">
      <button
        onClick={() => handlePageChange(currentPage - 1)}
        disabled={currentPage === 1}
      >
        Previous
      </button>
      {` ${currentPage} `}
      <button
        onClick={() => handlePageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      >
        Next
      </button>
    </div>
  );
}

export default Pagination;
