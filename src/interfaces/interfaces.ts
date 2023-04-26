//NOTE - interfaces for single pokemon
export interface pokemonI {
  pokemon: {
    id: number
    name: string
    type: string
  }
}

//NOTE - array of pokemons
export interface pokemonList {
  pokemons: pokemonI[]
}
