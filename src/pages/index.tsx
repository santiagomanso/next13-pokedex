import Container from '@/components/Container'
import DragPokemon from '@/components/DragPokemon'
import Input from '@/components/Input'
import { pokemons } from '@/data/pokemonsData'
import { useState } from 'react'

export default function Home() {
  const [active, setactive] = useState(false)

  console.log('pokemons.pokemons', pokemons.pokemons)

  return (
    <Container>
      <Input />
      <div>
        <ul className='flex gap-1 w-full mt-5'>
          {pokemons.pokemons.map((pokemon) => (
            <DragPokemon pokemon={pokemon.pokemon} key={pokemon.pokemon.id} />
          ))}
        </ul>
      </div>
    </Container>
  )
}
