import axios from 'axios';
import { pokemonToModel } from '../helpers/pokemonToModel';

export const getPokemons = async (limit = 151) => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?limit=${limit}`
    );
    const pokemons = await Promise.all(
      data.results.map(async (pokemon) => {
        const { data } = await axios.get(pokemon.url);
        return data;
      })
    );
    const Allpokemons = pokemons.map(pokemonToModel);
    return Allpokemons;
  } catch (error) {
    console.error('Error obteniendo Pokemons:', error);
  }
};

export const getPokemon = async (searchText) => {
  try {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${searchText}`
    );
    const pokemon = pokemonToModel(data);
    return pokemon;
  } catch (error) {
    console.error('Error obteniendo Pokemon:', error);
  }
};
