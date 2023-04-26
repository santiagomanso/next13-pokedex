import React from 'react'
import {
  faBan,
  faBolt,
  faDroplet,
  faFire,
  faTree,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { pokemonI } from '@/interfaces/interfaces'

const DragPokemon = ({ pokemon }: pokemonI) => {
  const switchType = (): { icon: IconProp; className: string } => {
    switch (pokemon.type) {
      case 'electric':
        return { icon: faBolt, className: 'text-yellow-400' }
      case 'fire':
        return { icon: faFire, className: 'text-red-600' }
      case 'water':
        return { icon: faDroplet, className: 'text-sky-500' }
      case 'grass':
        return { icon: faTree, className: 'text-green-600' }
      default:
        return { icon: faBan, className: 'text-gray-500' }
    }
  }
  //NOTE - destructuration of the icon/tailwind className from the switch function
  const { icon, className } = switchType()

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData('text/plain', pokemon.name)
  }

  return (
    <li
      draggable={true}
      onDragStart={handleDragStart}
      className='text-center bg-transparent border-[2px] border-indigo-300 text-indigo-300 font-medium px-5 py-2 w-full rounded-sm uppercase shadow-lg shadow-gray-900 tracking-wider flex gap-1 items-center justify-center transition-all ease-in-out duration-500'
    >
      <span>{pokemon.name}</span>

      {icon && <FontAwesomeIcon icon={icon} className={className} />}
    </li>
  )
}

export default DragPokemon
