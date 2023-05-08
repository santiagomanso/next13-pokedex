import React from 'react'
import Input from './Input'
import DragPokemon from './DragPokemon'
import { pokemons } from '@/data/pokemonsData'

interface sectionI {}

const Section = ({}) => {
  return (
    <section className='flex flex-col lg:flex-row h-full items-center bg-gradient-to-br from-white to-gray-200 shadow-2xl max-w-[1280px] w-full lg:h-full lg:rounded-[5px] px-2 md:px-24 lg:px-5 py-6 overflow-auto lg:overflow-hidden'>
      <article className='lg:w-1/2 flex flex-col justify-center items-center gap-y-4 drop-shadow-xl select-none mb-5 sm:mb-16'>
        <i className='drop-shadow-lg text-7xl text-amber-700/80 group-hover:rotate-0 group-hover:scale-125 duration-1000 -rotate-[245deg] fa-solid fa-burger -translate-x-[350px] group-hover:translate-x-0'></i>
        <h1 className='text-6xl font-bold text-center'>PokedeX</h1>
        <h3 className='text-center px-10 lg:px-2 font-sans text-xl'>
          Click on one of the following pokemons, or drag & drop them to the
          right
          <span className='text-indigo-600 lg:text-current lg:text-lg'>
            the place to be
          </span>
        </h3>
        <ul className='flex gap-5 flex-wrap'>
          {pokemons.pokemons.map((pokemon) => (
            <DragPokemon pokemon={pokemon.pokemon} key={pokemon.pokemon.id} />
          ))}
        </ul>
      </article>
      <article className='w-full lg:w-3/4 h-full flex flex-col gap-y-10 lg:gap-y-5 lg:flex-col lg:items-center justify-center'>
        <Input />
        <div className='border-2 border-indigo-500 shadow-xl w-full h-1/2'>
          here
        </div>
      </article>
    </section>
  )
}

export default Section
