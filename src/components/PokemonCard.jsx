import React from 'react';
import { Link } from 'react-router-dom';

const PokemonCard = ({ p, idx, offset, url }) => {
  const id = p.url.split('/')[6];
  return (
    <Link to={`/pokemon/${p.name}`} key={idx} href="#" className="group">
      <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8 ">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`}
          alt={p.name}
          className="h-full w-full object-cover object-center group-hover:opacity-75"
        />
      </div>
      <h2 className="mt-4 text-lg text-gray-900 capitalize">{p.name}</h2>
    </Link>
  );
};

export default PokemonCard;
