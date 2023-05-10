import React, { useContext, useState } from 'react'

const Input = () => {
  const [active, setActive] = useState('')

  const handleDragOver = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault()
  }

  const handleDrop = (e: React.DragEvent<HTMLInputElement>) => {
    e.preventDefault()
    const pokemonName = e.dataTransfer.getData('text/plain')
    setActive(pokemonName)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setActive(e.target.value)
  }

  return (
    <>
      <input
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        type='text'
        placeholder='search for a pokemon'
        className='px-2 py-2 focus:outline-none bg-transparent border-2 border-gray-400 text-gray-500 font-medium placeholder-gray-500 uppercase shadow-lg rounded w-full text-center'
        value={active}
        onChange={handleChange}
      />
    </>
  )
}

export default Input
