import axios from 'axios';

const getPokemons = () => {
  return axios 
  .get('https://pokeapi.co/api/v2/pokemon?limit=151')
  .then((res) => (res.data.results))
  .catch((err) => console.log(err));
}

export { getPokemons };