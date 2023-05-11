import { SearchContext } from '@/context/SearchContext'
import { DragContext } from '@/context/dragContext'
import React, { useContext } from 'react'

type Props = {}

const PokemonBox = (props: Props) => {
  const { setSearchPokemon } = useContext(SearchContext)
  const { isDragging } = useContext(DragContext)

  const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pokemonName = e.dataTransfer.getData('text/plain')
    setSearchPokemon(pokemonName)
  }

  return (
    <div
      onDragOver={handleDragOver}
      onDrop={handleDrop}
      className={` rounded shadow-xl w-full h-2/3 relative flex justify-center items-center bg-white ${
        isDragging ? 'border-gray-400 border-dashed border-4' : ''
      }`}
    >
      {isDragging ? (
        <p className='uppercase tracking-wider font-medium text-2xl text-gray-500'>
          drop pokemon here
        </p>
      ) : (
        <p className='text-gray-500 uppercase font-medium'>
          drag n drop / search / or click a pokemon to start
        </p>
      )}
    </div>
  )
}

export default PokemonBox
