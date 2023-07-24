import { cardPokemon } from './cardPokemon';

export const pokemonGrid = (allPokemons) => {
  const grid = `
    <section   class='flex flex-col items-center justify-center mb-2'>
        <div id="prueba" class="grid grid-flow-row gap-8 text-neutral-600 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            ${allPokemons.map((pokemon) => cardPokemon(pokemon)).join('')}  
        </div>
    </section>
    `;

  return grid;
};
