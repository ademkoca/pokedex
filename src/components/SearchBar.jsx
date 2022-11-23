import axios from 'axios';
import React, { useState, useEffect } from 'react';

const SearchBar = ({ setSearchResult, searchResult, setNoResults }) => {
  const [searchQuery, setSearchQuery] = useState('');
  //   console.log(searchQuery);
  const getSearchResult = async (query) => {
    const res = await axios.get(
      'https://pokeapi.co/api/v2/pokemon/?limit=1300'
    );
    // console.log(res.data);

    setSearchResult(
      res.data.results.filter((p) =>
        p.name.toLowerCase().includes(query.toLowerCase())
      )
    );
    console.log(searchResult);
    if (searchResult.length === 0) {
      setNoResults(true);
    }
  };
  const handleSearch = (e) => {
    e.preventDefault();
    // setQuery(searchQuery);
    getSearchResult(searchQuery);
  };
  return (
    <form className="flex items-center mb-3">
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
        <input
          type="text"
          id="simple-search"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-[#ED1A25] block w-full pl-10 p-2.5  dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400 dark:text-gray-800 dark:focus:ring-[#ED1A25] dark:focus:border-[#ED1A25]"
          placeholder="Search Pokemons"
          required
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <button
        onClick={(e) => handleSearch(e)}
        type="submit"
        className="p-2.5 ml-2 text-sm font-medium text-white bg-[#ED1A25] rounded-lg border border-[#ED1A25] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-[#ED1A25] dark:hover:bg-[#F3666D] dark:focus:ring-[#ED1A25]"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          ></path>
        </svg>
        <span className="sr-only">Search</span>
      </button>
    </form>
  );
};

export default SearchBar;
