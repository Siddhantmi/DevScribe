// src/SearchBar.js
import React, { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [showResultsModal, setShowResultsModal] = useState(false);

  const handleInputChange = (event) => {
    const term = event.target.value;
    setSearchTerm(term);
    // Call the parent component's onSearch function for live updates
    onSearch(term);
  };

  const handleSearch = () => {
    // Perform search and update results
    const results = performSearch(searchTerm);
    setSearchResults(results);
    // Show the results modal
    setShowResultsModal(true);
  };

  const performSearch = (term) => {
    // Replace this with your actual search logic or API call
    // For simplicity, just return some sample results
    return ['Result 1', 'Result 2', 'Result 3'].filter(result =>
      result.toLowerCase().includes(term.toLowerCase())
    );
  };

  const closeResultsModal = () => {
    // Close the results modal
    setShowResultsModal(false);
  };

  return (
    <div className="flex flex-col items-center relative">
      <div className="flex items-center">
        <input
          type="text"
          value={searchTerm}
          onChange={handleInputChange}
          placeholder="Search..."
          className="px-2 py-1 mr-2 border rounded"
        />
        <button onClick={handleSearch} className="bg-gray-800 text-white px-3 py-1 rounded">
          Search
        </button>
      </div>
      
      {/* Display search results */}
      {showResultsModal && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75">
          <div className="bg-white p-4 rounded">
            <h2 className="text-xl font-bold mb-2">Search Results</h2>
            {searchResults.length > 0 ? (
              <ul className="list-none">
                {searchResults.map((result, index) => (
                  <li key={index} className="mb-1">
                    {result}
                  </li>
                ))}
              </ul>
            ) : (
              <p>No results found.</p>
            )}
            <button onClick={closeResultsModal} className="mt-4 bg-gray-800 text-white px-3 py-1 rounded">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBar;
