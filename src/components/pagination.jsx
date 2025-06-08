import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="pagination">
      <button onClick={() => onPageChange(1)} disabled={currentPage === 1}>
        First
      </button>
      <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
        Prev
      </button>
      <span>Page {currentPage} of {totalPages}</span>
      <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
        Next
      </button>
      <button onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages}>
        Last
      </button>
    </div>
  );
};

export default Pagination;
