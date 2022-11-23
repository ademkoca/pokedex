import axios from 'axios';
import React, { useState } from 'react';
import { useEffect } from 'react';
import { useParams, Navigate, useNavigate } from 'react-router-dom';
import { useUserStore } from '../store';

const Pokemon = () => {
  const user = useUserStore((state) => state.user);
  const [pokemon, setPokemon] = useState({});
  const [showMoves, setShowMoves] = useState(false);
  const [showAbilities, setShowAbilities] = useState(false);
  const { name } = useParams();
  const navigate = useNavigate();
  const toggleMoves = () => {
    setShowMoves((current) => !current);
  };
  const toggleAbilities = () => {
    setShowMoves((current) => !current);
  };
  useEffect(() => {
    const getPokemonDetails = async () => {
      const res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`);
      setPokemon(res.data);
    };

    getPokemonDetails();
  }, [name]);
  if (Object.keys(user).length === 0) {
    return <Navigate to="/login" replace />;
  }
  return (
    <div className="p-16">
      <div className="p-8 bg-white shadow">
        <div className="w-[100vw] block mb-12">
          <button
            onClick={() => navigate(-1)}
            className="mb-6 border border-[#ED1A25] bg-[#ED1A25] rounded-md text-white py-3 px-5"
          >
            Back
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="grid grid-cols-3 text-center order-last md:order-first mt-20 md:mt-0">
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {pokemon.height}
              </p>
              <p className="text-gray-400">Height</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {pokemon.weight}
              </p>
              <p className="text-gray-400">Weight</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">{pokemon.order}</p>
              <p className="text-gray-400">Order</p>
            </div>
          </div>
          <div className="relative">
            <div className="w-48 h-48 bg-indigo-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-[#F3666D]">
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png`}
                alt={pokemon.name}
                width={150}
              />
            </div>
          </div>
          <div className="space-x-8 flex justify-evenly mt-32 md:mt-0 md:justify-evenly text-center">
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {pokemon.abilities?.length}
              </p>
              <p className="text-gray-400">Abilities</p>
            </div>
            <div>
              <p className="font-bold text-gray-700 text-xl">
                {pokemon.moves?.length}
              </p>
              <p className="text-gray-400">Moves</p>
            </div>
          </div>
        </div>
        <div className="mt-20 text-center border-b pb-12">
          <h1 className="text-4xl font-medium text-gray-700 capitalize">
            {pokemon.name},{' '}
            <span className="font-light text-gray-500">
              {pokemon.base_experience}
            </span>
          </h1>
        </div>
        <div className="mt-12 flex flex-col justify-center md:flex-row">
          <div className="flex flex-col justify-center">
            <div className="text-gray-600 text-center font-light lg:px-16 w-[30vw]">
              <h3 className="text-lg">Moves</h3>
              <ul className="flex flex-wrap">
                {pokemon.moves?.slice(0, 3).map((m) => (
                  <li className="border border-[#ED1A25] m-1 rounded-md px-3 text-[#ED1A25]">
                    {m.move.name}
                  </li>
                ))}
                {showMoves &&
                  pokemon.moves
                    ?.slice(3, pokemon.moves.length)
                    .map((m) => (
                      <li className="border border-[#ED1A25] m-1 rounded-md px-3 text-[#ED1A25]">
                        {m.move.name}
                      </li>
                    ))}
              </ul>
            </div>
            {pokemon.moves?.length > 3 && (
              <button
                className="text-[#ED1A25] py-2 px-4 font-medium mt-4"
                onClick={toggleMoves}
              >
                {showMoves ? 'Hide' : 'Show'} all
              </button>
            )}
          </div>
          <div className="flex flex-col justify-start">
            <div className="text-gray-600 text-center font-light lg:px-16 w-[30vw]">
              <h3 className="text-lg">Abilities</h3>
              <ul className="flex flex-wrap">
                {pokemon.abilities?.slice(0, 3).map((m) => (
                  <li className="border border-[#ED1A25] m-2 rounded-md px-3 text-[#ED1A25]">
                    {m.ability.name}
                  </li>
                ))}
                {showMoves &&
                  pokemon.moves
                    ?.slice(3, pokemon.abilities?.length)
                    .map((m) => (
                      <li className="border border-[#ED1A25] m-2 rounded-md px-3 text-[#ED1A25]">
                        {m.ability.name}
                      </li>
                    ))}
              </ul>
            </div>
            {pokemon.abilities?.length > 3 && (
              <button
                className="text-[#ED1A25] py-2 px-4 font-medium mt-4"
                onClick={toggleAbilities}
              >
                {showAbilities ? 'Hide' : 'Show'} all
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
