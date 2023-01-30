import { Col } from "antd";
import SearchBar from "./components/SearchBar";
//import PokemonCard from "./components/PokemonCard";
import "./App.css";
import PokemonList from "./components/PokemonLIst";

function App() {
  return (
    <div className="App">
      <Col span={8} offset={8}>
        <SearchBar />
      </Col>
        <PokemonList />
    </div>
  );
}

export default App;
