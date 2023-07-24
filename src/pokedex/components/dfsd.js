import React from 'react'

export const dfsd = () => {
  return (
    <div class="flex flex-col items-baseline justify-center w-full   rounded-md">
            <div class="flex justify-center items-center w-full mb-4">
                <h2 class="text-6xl capitalize  font-bold  text-white">${
                  pokemon.name
                }  
                <span class="text-5xl font-bold text-gray-400">N° ${id
                  .toString()
                  .padStart(4, '0')}</span>
                    
                </h2>
            </div>
            <div class="flex flex-row items-center justify-center w-full my-4">
                <div class="w-1/3  flex items-center justify-center p-4">
                    <img class="w-64 h-64" src=${image} alt=${name}>
                </div>
                <div class="w-2/3  flex items-center justify-center p-4 bg-gray-800">
                   <div class="w-full h-64 flex flex-col justify-center   p-4">
                        <p class="text-lg font-bold text-white">Weight:</p>
                        <span class="text-lg  text-gray-400 mb-4">${weight}</span>
                        <p class="text-lg font-bold text-white">Height:</p>
                        <span class="text-lg  text-gray-400">${height}</span>
                   </div>
                   <div class="w-full h-64 flex flex-col justify-center  p-4">
                        <p class="text-lg font-bold text-white">Abilities:</p>
                        <span class="text-lg  text-gray-400 mb-4">${abilities.join(
                            ', '
                        )}</span>
                        <p class="text-lg font-bold text-white">Moves:</p>
                        <span class="text-lg  text-gray-400">${moves
                            .slice(0, 4)
                            .join(', ')}</span>
                   </div>
                   <div class="w-full h-64 flex flex-col justify-center  p-4">
                        <p class="text-lg font-bold text-white">Types:</p>
                        <div class="flex flex-row items-center justify-center w-full h-16 pt-4 ">
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
        </div>
    
