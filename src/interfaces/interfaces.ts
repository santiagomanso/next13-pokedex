export interface pokemonI {
  pokemon: {
    id: number
    name: string
    type: string
  }
}

export interface pokemonList {
  pokemons: pokemonI[]
}
