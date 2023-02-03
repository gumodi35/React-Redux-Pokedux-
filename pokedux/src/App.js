import { useEffect } from "react";
import { Col, Spin } from "antd";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "./components/SearchBar";
import PokemonList from "./components/PokemonList";
import { getPokemons } from "./api";
import { getPokemonsWithDetails, setLoading } from "./actions";
import logo from "./statics/logo.svg";
import "./App.css";

function App() {
  const pokemons = useSelector((state) => state.pokemons);
  const loading = useSelector((state) => state.loading);
  const distpatch = useDispatch();

  useEffect(() => {
    const fetchPokemons = async () => {
      distpatch(setLoading(true));
      const pokemonsRes = await getPokemons();
      distpatch(getPokemonsWithDetails(pokemonsRes));
      distpatch(setLoading(false));
    };

    fetchPokemons();
  }, []);

  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <SearchBar />
      </Col>
      {loading ? (
        <Col offset={12}>
          <Spin spinning size="large" />
        </Col>
      ) : (
        <PokemonList pokemons={pokemons} />
      )}
    </div>
  );
}

export default App;
