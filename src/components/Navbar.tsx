import {
  faCirclePlus,
  faHouse,
  faPenToSquare,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import React from 'react'

type Props = {}

function Navbar({}: Props) {
  return (
    <nav className='fixed top-0 left-0 w-full py-3 bg-white'>
      <ul className='flex justify-between px-20'>
        <Link href='/home' className='flex items-center gap-1'>
          <FontAwesomeIcon icon={faHouse} className='text-gray-700' />
          <span>home</span>
        </Link>
        <div className='flex gap-20'>
          <Link href='/new' className='flex items-center gap-1'>
            <FontAwesomeIcon icon={faCirclePlus} className='text-gray-700' />
            <span>new pokemon</span>
          </Link>
          <Link href='/edit' className='flex items-center gap-1'>
            <FontAwesomeIcon icon={faPenToSquare} className='text-gray-700' />
            <span>edit pokemon</span>
          </Link>
        </div>
      </ul>
    </nav>
  )
}

export default Navbar
