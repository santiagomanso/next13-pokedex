import Container from '@/components/Layout'
import DragPokemon from '@/components/DragPokemon'
import Input from '@/components/Input'
import Section from '@/components/Section'
import { pokemons } from '@/data/pokemonsData'

export default function Home() {
  return (
    <Section
      header='PokedeX'
      desc='Click on one of the following, or just drag & drop them into the box to the right ➡️'
    />
  )
}
