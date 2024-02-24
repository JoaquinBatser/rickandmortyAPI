import React from 'react'
import { FaMale } from 'react-icons/fa'
import { FaFemale } from 'react-icons/fa'
import { FaSkull } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaQuestion } from 'react-icons/fa'
const CharacterCard = ({ character }) => {
  return (
    <div className='rounded'>
      <img
        className='rounded-lg'
        src={character.image}
        alt=''
      />
      <div className='p-2'>
        <div className='flex items-center justify-between'>
          <p className=' font-semibold tracking-wide'>{character.name}</p>
          <div className='flex'>
            {character.gender === 'Male' && <FaMale />}
            {character.gender === 'Female' && <FaFemale />}

            {character.status === 'Alive' && <FaHeart color='lightgreen' />}
            {character.status === 'unknown' && <FaQuestion color='gray' />}
            {character.status === 'Dead' && <FaSkull color='red' />}
          </div>
        </div>

        <small className='italic opacity-45'>{character.species}</small>
      </div>
    </div>
  )
}

export default CharacterCard
