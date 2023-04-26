import React, { useContext, useState } from 'react'

const Input = () => {
  const [active, setActive] = useState('')

  const handleDragStart = (e: React.DragEvent<HTMLSpanElement>) => {
    e.dataTransfer.setData('text/plain', e.currentTarget.textContent || '')
  }

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
        className='px-2 py-2 rounded-sm focus:outline-none bg-transparent border-[2px] border-indigo-300 text-indigo-300 font-medium placeholder-indigo-300 uppercase shadow-lg shadow-gray-900 w-full text-center'
        value={active}
        onChange={handleChange}
      />
    </>
  )
}

export default Input
