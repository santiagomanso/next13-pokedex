import React, { createContext, useState } from 'react'

interface searchContextI {
  searchPokemon: string
  setSearchPokemon: (name: string) => void
}

const initialContext: searchContextI = {
  searchPokemon: '',
  setSearchPokemon: () => console.log('not initialized'),
}

type props = {
  children: React.ReactNode
}

export const SearchContext = createContext<searchContextI>(initialContext)

export const SearchContextProvider = ({ children }: props) => {
  const [searchPokemon, setSearchPokemon] = useState('')

  //NOTE - data object
  const data: searchContextI = {
    searchPokemon,
    setSearchPokemon,
  }

  return (
    <SearchContext.Provider value={data}>{children}</SearchContext.Provider>
  )
}
