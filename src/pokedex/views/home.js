import axios from 'axios';
import { getPokemons } from '../api';
import { navbar, pokemonGrid, renderModal } from '../components';
import { getPokemon } from '../api/getPokemons';

export const renderHome = async (element) => {
  const allPokemons = await getPokemons();
  const nav = navbar();
  const grid = pokemonGrid(allPokemons);
  element.innerHTML = `
        ${nav}
        <div id="pokemon-list">
            ${grid}
        </div>
        <div class="modal fixed inset-0  items-center justify-center bg-black bg-opacity-50 hidden">
            <div class="modal-content bg-gray-900 p-4 rounded shadow-lg w-2/3  ">
                <div id="modal-pokemon-info" class="">

                </div>
            </div>
        </div>
        <div class="flex justify-center mb-4">
            <button id="load-more" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                Cargar más
            </button>
        </div>
    `;

  const loadMoreButton = document.getElementById('load-more');
  loadMoreButton.addEventListener('click', async () => {
    const offset = allPokemons.length + 50;
    const newPokemons = await getPokemons(offset);
    allPokemons.push(...newPokemons);
    const pokemonListContainer = document.getElementById('pokemon-list');
    const newGrid = pokemonGrid(newPokemons);
    pokemonListContainer.innerHTML = newGrid;
    const cards = document.querySelectorAll('.pokemon-card');
    cards.forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.id;
        const pokemon = newPokemons.find(
          (pokemon) => pokemon.id === Number(id)
        );
        console.log(pokemon);
        const modal = document.querySelector('.modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        const modalContent = document.querySelector('.modal-content');
        renderModal(modalContent, pokemon);
      });
    });
  });

  const handleInputChange = async (event) => {
    const inputValue = event.target.value;

    const filteredPokemons = allPokemons.filter((pokemon) => {
      const pokemonName = pokemon.name.toLowerCase();
      return pokemonName.includes(inputValue.toLowerCase());
    });

    const pokemonListContainer = document.getElementById('pokemon-list');
    const filteredGrid = pokemonGrid(filteredPokemons);
    pokemonListContainer.innerHTML = filteredGrid;

    const filteredCards = document.querySelectorAll('.pokemon-card');
    filteredCards.forEach((card) => {
      card.addEventListener('click', () => {
        const id = card.id;
        const pokemon = filteredPokemons.find(
          (pokemon) => pokemon.id === Number(id)
        );
        console.log(pokemon);
        const modal = document.querySelector('.modal');
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        const modalContent = document.querySelector('.modal-content');
        renderModal(modalContent, pokemon);
      });
    });
  };

  const inputElement = document.getElementById('text-find');

  inputElement.addEventListener('input', handleInputChange);

  const cards = document.querySelectorAll('.pokemon-card');
  cards.forEach((card) => {
    card.addEventListener('click', () => {
      const id = card.id;
      const pokemon = allPokemons.find((pokemon) => pokemon.id === Number(id));
      console.log(pokemon);
      const modal = document.querySelector('.modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
      const modalContent = document.querySelector('.modal-content');
      renderModal(modalContent, pokemon);
    });
  });
};
