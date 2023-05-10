import React from 'react'
import Input from './Input'
import DragPokemon from './DragPokemon'
import { pokemons } from '@/data/pokemonsData'

interface sectionI {
  header: string
  desc: string
}

const Section = ({ header, desc }: sectionI) => {
  return (
    <section className='flex flex-col lg:flex-row h-full items-center  shadow-2xl max-w-[1280px] w-full lg:h-full lg:rounded-[5px] px-2 md:px-24 lg:px-5 py-6 overflow-auto lg:overflow-hidden bg-white'>
      <article className='lg:w-1/2 flex flex-col justify-center items-center gap-y-4'>
        <h1 className='text-6xl font-bold text-center text-gray-800'>
          {header}
        </h1>
        <h3 className='text-center px-10 lg:px-2 font-sans text-xl text-gray-800'>
          {desc}
        </h3>
        <ul className='flex gap-5 flex-wrap'>
          {pokemons.pokemons.map((pokemon) => (
            <DragPokemon pokemon={pokemon.pokemon} key={pokemon.pokemon.id} />
          ))}
        </ul>
      </article>
      <article className='w-full lg:w-3/4 h-full flex flex-col gap-y-10 lg:gap-y-5 lg:flex-col lg:items-center justify-center'>
        <Input />
        <div className='border-2 border-gray-400 rounded shadow-xl w-full h-2/3'>
          here
        </div>
      </article>
    </section>
  )
}

export default Section
