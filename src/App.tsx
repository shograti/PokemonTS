import { useEffect, useState } from 'react';
import { Pokemon } from './types';

function App() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  useEffect(() => {
    const fetchPokemons = async () => {
      const response = await fetch('https://pokebuildapi.fr/api/v1/pokemon');
      const data = await response.json();
      setPokemons(data);
    };
    fetchPokemons();
  }, []);
  return (
    <div>
      {pokemons &&
        pokemons.map((pokemon) => (
          <div key={pokemon.id}>
            <h2>
              <p>{pokemon.id}</p>
              {pokemon.name}
              <img src={pokemon.image} alt={pokemon.name} />
            </h2>
          </div>
        ))}
    </div>
  );
}

export default App;
