import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Page from '../components/Page';
import Pagination from '../components/Pagination';
import PokemonCard from '../components/PokemonCard';
import SearchBar from '../components/SearchBar';
import { useUserStore } from '../store';

const Home = () => {
  const user = useUserStore((state) => state.user);
  const [pokemonList, setPokemonList] = useState([]);
  const [offset, setOffset] = useState(50);
  const [url, setUrl] = useState('');
  const [prevPage, setPrevPage] = useState('');
  const [nextPage, setNextPage] = useState('');
  const [count, setCount] = useState(0);
  const [query, setQuery] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [listToMap, setListToMap] = useState([]);
  const [noResults, setNoResults] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(50);
  // Get current posts
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = pokemonList.slice(indexOfFirstPost, indexOfLastPost);
  // console.log(listToMap);
  const paginate = (pageNumber) => {
    if (
      pageNumber >= 1 &&
      pageNumber <= Math.ceil(pokemonList.length / postsPerPage)
    ) {
      setCurrentPage(pageNumber);
    }
  };
  console.log(currentPage);
  useEffect(() => {
    const getPokemons = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/?limit=1500`
      );

      setPokemonList(res.data.results);
      setPrevPage(res.data.previous);
      setNextPage(res.data.next);
      setCount(res.data.count);
    };
    getPokemons();
    // else setListToMap(pokemonList);
  }, [offset, query]);
  if (Object.keys(user).length === 0) {
    return <Navigate to="/login" replace />;
  }
  console.log(offset);
  return (
    // <Page />
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <SearchBar
          setSearchResult={setSearchResult}
          setNoResults={setNoResults}
          searchResult={searchResult}
        />
        <Pagination
          offset={searchResult.length === 0 ? offset : 0}
          setOffset={setOffset}
          count={searchResult.length === 0 ? count : searchResult.length}
          top
          visible={!noResults}
          data={searchResult.length === 0 ? pokemonList : searchResult}
          paginate={paginate}
          postsPerPage={postsPerPage}
          indexOfFirstPost={indexOfFirstPost}
          indexOfLastPost={indexOfLastPost}
          currentPage={currentPage}
        />

        <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {searchResult.length === 0 && !noResults ? (
            currentPosts.map((p, idx) => (
              <PokemonCard
                p={p}
                idx={idx}
                offset={offset}
                url={url}
                key={idx}
              />
            ))
          ) : searchResult.length > 0 ? (
            searchResult.map((p, idx) => (
              <PokemonCard
                p={p}
                idx={idx}
                offset={offset}
                url={url}
                key={idx}
              />
            ))
          ) : (
            <p>No results!</p>
          )}
        </div>

        <Pagination
          offset={searchResult.length === 0 ? offset : 0}
          setOffset={setOffset}
          count={searchResult.length === 0 ? count : searchResult.length}
          visible={!noResults}
          data={searchResult.length === 0 ? pokemonList : searchResult}
          paginate={paginate}
          postsPerPage={postsPerPage}
          indexOfFirstPost={indexOfFirstPost}
          indexOfLastPost={indexOfLastPost}
          currentPage={currentPage}
        />
      </div>
    </div>
  );
};

export default Home;
