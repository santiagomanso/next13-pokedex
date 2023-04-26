import Container from '@/components/Container'
import DragPokemon from '@/components/DragPokemon'
import Input from '@/components/Input'
import { pokemons } from '@/data/pokemonsData'
import { useState } from 'react'

export default function Home() {
  //FIXME - use context instead of internal state
  const [active, setactive] = useState(false)

  console.log('pokemons.pokemons', pokemons.pokemons)

  return (
    <Container>
      <Input />
      <div>
        <ul className='flex gap-1 w-full mt-5'>
          {/* we use the array of sample Pokemons to display an array of dragable <li> */}
          {pokemons.pokemons.map((pokemon) => (
            <DragPokemon pokemon={pokemon.pokemon} key={pokemon.pokemon.id} />
          ))}
        </ul>
      </div>
    </Container>
  )
}
