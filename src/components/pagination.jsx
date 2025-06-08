import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationControls = ({ currentPage, totalPages, onPageChange }) => {
  return (
    <div className="d-flex justify-content-center my-4">
      <Pagination>
        <Pagination.First onClick={() => onPageChange(1)} disabled={currentPage === 1} />
        <Pagination.Prev onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1} />
        <Pagination.Item active>{currentPage}</Pagination.Item>
        <Pagination.Next onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages} />
        <Pagination.Last onClick={() => onPageChange(totalPages)} disabled={currentPage === totalPages} />
      </Pagination>
    </div>
  );
};

export default PaginationControls;
