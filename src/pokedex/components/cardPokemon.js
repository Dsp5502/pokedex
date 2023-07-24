import { getTypeBackgroundColor } from '../helpers/colorTypePokemon';

export const cardPokemon = (pokemon) => {
  const { name, id, image, types } = pokemon;

  const card = `
        <div id=${id}  class="pokemon-card flex flex-col items-center justify-center w-64 h-96 bg-gray-900 hover:border-2 hover:border-blue-300 rounded-md hover:cursor-pointer transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-gray-800 duration-300"
        >
            <div class="flex flex-col items-center justify-center w-64 h-64">
                <img class="w-48 h-48" src=${image} alt=${name}>
            </div>
            <div class="flex flex-col w-64 h-32 p-4">
                <p class="text-sm font-bold text-start text-gray-400">N° ${id
                  .toString()
                  .padStart(4, '0')}</p>
                <h2 class="text-2xl capitalize font-bold text-start text-white">${name}</h2>
            
            <div class="flex flex-row w-64 h-16 pt-4 ">   
                ${types
                  .map(
                    (type) =>
                      `
                    <div class="flex flex-row items-center justify-center w-16 h-8 mr-2 rounded-md ${getTypeBackgroundColor(
                      type
                    )}">
                    <p class="text-xs font-bold text-center text-white capitalize">${type}</p> 
                    </div>
                    `
                  )
                  .join('')}
                  </div>
                </div>
            </div>
    `;

  return card;
};
