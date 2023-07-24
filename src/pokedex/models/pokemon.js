export class Pokemon {
  constructor({
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
  }) {
    this.name = name;
    this.id = id;
    this.types = types;
    this.image = image;
    this.height = height;
    this.weight = weight;
    this.abilities = abilities;
    this.moves = moves;
    this.baseExperience = baseExperience;
    this.backDefault = backDefault;
    this.frontDefault = frontDefault;
    this.backShiny = backShiny;
    this.frontShiny = frontShiny;
    this.stats = stats;
  }
}
