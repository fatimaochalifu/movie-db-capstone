// src/components/SearchBar.jsx
import { useState } from 'react';

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    if (query.trim()) {
      onSearch(query);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="flex items-center gap-2 p-4 justify-center">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full max-w-md p-2 border border-gray-300 rounded-lg focus:outline-none"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
