import React, { useState } from 'react';
import './Panel.jsx';
import './Search.css'

const SearchElements = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      onSearch(searchQuery);
    } else {
      onSearch(null, 'Please enter a search query');
    }
  };

  return (
    <form className="search-container" onSubmit={handleSearch}>
      <input
        type="text"
        value={searchQuery}
        onChange={handleInputChange}
        placeholder="Search for a book..."
        className="user-input"
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchElements;
