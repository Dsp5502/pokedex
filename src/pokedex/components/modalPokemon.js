import { getTypeBackgroundColor } from '../helpers/colorTypePokemon';
import Chart from 'chart.js/auto';

export const renderModal = (element, pokemon) => {
  const {
    name,
    id,
    types,
    image,
    height,
    weight,
    abilities,
    moves,
    baseExperience,
    backDefault,
    frontDefault,
    backShiny,
    frontShiny,
    stats,
  } = pokemon;
  const pokemonElement = element.querySelector('#modal-pokemon-info');
  pokemonElement.innerHTML = `
    <span class="close text-lg lg:text-2xl text-white text-left cursor-pointer">&times;</span>
    <div class="flex  flex-col items-baseline justify-center w-full rounded-md">
        <div class="flex justify-center items-center w-full mb-4">
            <h2 class="text-3xl lg:text-6xl capitalize  font-bold  text-white">${
              pokemon.name
            }  -  
            <span class="text-2xl lg:text-5xl font-bold text-gray-400">N° ${id
              .toString()
              .padStart(4, '0')}</span>
            </h2>
        </div>

        <div class="flex flex-col lg:flex-row items-center justify-start w-full my-4">

            <div class="w-1/3  flex items-center justify-center p-4">
                <img class="w-64 h-64" src=${image} alt=${name}>
            </div>

            <div class="w-full lg:w-2/3  flex   items-center justify-center p-4 bg-gray-800">

                <div class="w-1/2 h-64 flex flex-col justify-center items-baseline p-4">
                    <p class="text-lg font-bold text-white">Base Experience:</p>
                    <div class="flex flex-row items-center w-full  py-4 ">
                        <div class="flex flex-row items-center justify-center w-32 h-8 mr-2 rounded-md bg-slate-500 shadow-md">
                            <p class="text-xs font-bold text-center text-white capitalize"> EXP ${baseExperience}</p>
                        </div>
                    </div>

                    <p class="text-lg font-bold text-white">Weight:</p>
                    <span class="text-lg  text-gray-400 mb-4">${weight}</span>
                    
                    <p class="text-lg font-bold text-white">Height:</p>
                    <span class="text-lg  text-gray-400">${height}</span>
                </div>

                <div class="w-1/2 h-64 flex flex-col justify-center  p-4">
                    <p class="text-lg font-bold text-white">Types:</p>
                    <div class="flex flex-row items-center w-full  py-4 ">
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

                    <p class="text-lg font-bold text-white">Abilities:</p>
                    <span class="text-lg  text-gray-400 mb-4">${abilities.join(
                      ', '
                    )}</span>
                    <p class="text-lg font-bold text-white">Moves:</p>
                    <span class="text-lg  text-gray-400">${moves
                      .slice(0, 4)
                      .join(', ')}</span>
                </div>

            </div>
            
        </div>

        <div class="flex flex-col lg:flex-row items-center justify-start w-full mb-4 mt-6 p-2 "> 
            <div class="flex items-center justify-center w-1/2">
                <img class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32  object-cover" src=${frontDefault} alt=${name}>
                <img class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32  object-cover" src=${backDefault} alt=${name}>
                <img class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32  object-cover" src=${frontShiny} alt=${name}>
                <img class="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 2xl:w-32 2xl:h-32  object-cover" src=${backShiny} alt=${name}>
            </div>

            <div class="flex flex-col items-center justify-center w-1/2 h-32">
                <canvas id="myChart" width="400" height="400">
                </canvas>
            </div>
        </div>

    </div>  
    `;

  const ctx = document.getElementById('myChart').getContext('2d');
  const labels = stats.map((stat) => stat.name);
  const data = stats.map((stat) => stat.value);
  const myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: labels,
      datasets: [
        {
          label: 'Stats',
          data: data,
          backgroundColor: 'green',
          borderColor: 'white',
          borderWidth: 2,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        y: {
          display: true,
          beginAtZero: true,
          max: 120,
          color: 'white',
        },
        x: {
          display: true,
          color: 'white',
          borderColor: 'white',
          text: 'white',
        },
      },
    },
  });

  myChart.update();

  const close = document.querySelector('.close');
  console.log(close);
  close.addEventListener('click', () => {
    const modal = document.querySelector('.modal');
    modal.classList.remove('flex');
    modal.classList.add('hidden');
  });
};
