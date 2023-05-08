import Container from '@/components/Container'
import DragPokemon from '@/components/DragPokemon'
import Input from '@/components/Input'
import Section from '@/components/Section'
import { pokemons } from '@/data/pokemonsData'

export default function Home() {
  return (
    <Container>
      {/* <Input /> 
       <div>
        <ul className='flex gap-1 w-full mt-5'>
          {pokemons.pokemons.map((pokemon) => (
            <DragPokemon pokemon={pokemon.pokemon} key={pokemon.pokemon.id} />
          ))}
        </ul>
      </div> */}
      <Section />
    </Container>
  )
}
