import Container from '@/components/Layout'
import DragPokemon from '@/components/DragPokemon'
import Input from '@/components/Input'
import Section from '@/components/Section'
import { pokemons } from '@/data/pokemonsData'

export default function Home() {
  return (
    <Section
      header='PokedeX'
      desc='Search a pokemon, or click one of the following, you can also drag & drop them into the box to the right ➡️'
    />
  )
}
