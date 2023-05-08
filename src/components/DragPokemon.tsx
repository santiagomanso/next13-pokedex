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
  const switchType = (): {
    icon: IconProp
    shadowColor: string
    borderColor: string
    className: string
  } => {
    switch (pokemon.type) {
      case 'electric':
        return {
          icon: faBolt,
          shadowColor: 'shadow-yellow-500',
          borderColor: 'border-yellow-500',
          className: 'text-yellow-500',
        }
      case 'fire':
        return {
          icon: faFire,
          shadowColor: 'shadow-red-600',
          borderColor: 'border-red-600',
          className: 'text-red-600',
        }
      case 'water':
        return {
          icon: faDroplet,
          shadowColor: 'shadow-sky-500',
          borderColor: 'border-sky-500',
          className: 'text-sky-500',
        }
      case 'grass':
        return {
          icon: faTree,
          shadowColor: 'shadow-green-600',
          borderColor: 'border-green-600',
          className: 'text-green-600',
        }
      default:
        return {
          icon: faBan,
          shadowColor: 'shadow-gray-500',
          borderColor: 'border-gray-500',
          className: 'text-gray-500',
        }
    }
  }
  //NOTE - destructuration of the icon/tailwind className from the switch function
  const { icon, className, shadowColor, borderColor } = switchType()

  const handleDragStart = (e: React.DragEvent<HTMLLIElement>) => {
    e.dataTransfer.setData('text/plain', pokemon.name)
  }

  return (
    <li
      draggable={true}
      onDragStart={handleDragStart}
      className={`text-center bg-transparent border-2 font-medium px-5 py-2 rounded-sm uppercase shadow tracking-wider flex gap-1 items-center justify-center transition-all ease-in-out duration-500 ${shadowColor} ${borderColor}`}
    >
      <span>{pokemon.name}</span>

      {icon && <FontAwesomeIcon icon={icon} className={className} />}
    </li>
  )
}

export default DragPokemon
