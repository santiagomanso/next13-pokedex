import { SearchContext } from '@/context/SearchContext'
import React, { useContext } from 'react'

const Input = () => {
  const { searchPokemon, setSearchPokemon } = useContext(SearchContext)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchPokemon(e.target.value)
  }

  return (
    <input
      type='text'
      placeholder='search for a pokemon'
      className='px-2 py-2 focus:outline-none text-gray-500 font-medium placeholder-gray-500 uppercase shadow-xl rounded w-full text-center'
      value={searchPokemon}
      onChange={handleChange}
    />
  )
}

export default Input
