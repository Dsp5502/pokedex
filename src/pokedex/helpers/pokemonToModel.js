import { Pokemon } from '../models/pokemon';

export const pokemonToModel = (pokemon) => {
  const {
    name,
    id,
    types,
    sprites,
    weight,
    height,
    abilities,
    moves,
    base_experience,
    stats,
  } = pokemon;

  return new Pokemon({
    name,
    id,
    types: types.map((type) => type.type.name),
    image: sprites.other['dream_world'].front_default,
    backDefault: sprites.back_default,
    frontDefault: sprites.front_default,
    backShiny: sprites.back_shiny,
    frontShiny: sprites.front_shiny,
    weight,
    height,
    abilities: abilities.map((ability) => ability.ability.name),
    moves: moves.map((move) => move.move.name),
    baseExperience: base_experience,
    stats: stats.map((stat) => ({
      name: stat.stat.name,
      value: stat.base_stat,
    })),
  });
};
