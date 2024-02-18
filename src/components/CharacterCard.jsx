import React from 'react'
import '../css/CharacterCard.css'
import { FaMale } from 'react-icons/fa'
import { FaFemale } from 'react-icons/fa'
import { FaSkull } from 'react-icons/fa'
import { FaHeart } from 'react-icons/fa'
import { FaQuestion } from 'react-icons/fa'
const CharacterCard = ({ character }) => {
  return (
    <div className='character-card'>
      <img
        src={character.image}
        alt=''
      />
      <div className='c-info'>
        <div className='v-info'>
          <p>{character.name}</p>
          <div className='character-icons'>
            {character.gender === 'Male' && <FaMale />}
            {character.gender === 'Female' && <FaFemale />}

            {character.status === 'Alive' && <FaHeart color='lightgreen' />}
            {character.status === 'unknown' && <FaQuestion color='gray' />}
            {character.status === 'Dead' && <FaSkull color='red' />}
          </div>
        </div>

        <p className='species'>{character.species}</p>
      </div>
    </div>
  )
}

export default CharacterCard
