import { useEffect, useState } from 'react';
import { Col } from 'antd';
import SearchBar from './components/SearchBar';
import PokemonList from './components/PokemonList';
import { getPokemons } from './api';
import logo from './statics/logo.svg';
import './App.css';

function App() {
  const [pokemons, setPokemons] = useState([]);

  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemons();
      setPokemons(pokemonsRes);
    };

    fetchPokemons();
  }, []);

  return (
    <div className='App'>
      <Col span={4} offset={10}>
        <img src={logo} alt='Pokedux' />
      </Col>
      <Col span={8} offset={8}>
        <SearchBar />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  );
}

export default App;