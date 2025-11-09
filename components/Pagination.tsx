
import React from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null;

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <nav className="flex justify-center items-center mt-12" aria-label="Pagination">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:pointer-events-none"
      >
        Prev
      </button>

      {pageNumbers.map(number => (
        <button
          key={number}
          onClick={() => onPageChange(number)}
          className={`hidden md:inline-flex items-center justify-center w-10 h-10 mx-1 transition-colors duration-300 transform rounded-md ${
            currentPage === number
              ? 'bg-blue-600 text-white'
              : 'bg-white text-gray-700 hover:bg-blue-500 hover:text-white'
          }`}
        >
          {number}
        </button>
      ))}
      
       <span className="md:hidden mx-2 text-gray-600">Page {currentPage} of {totalPages}</span>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-4 py-2 mx-1 text-gray-700 transition-colors duration-300 transform bg-white rounded-md hover:bg-blue-500 hover:text-white disabled:opacity-50 disabled:pointer-events-none"
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
