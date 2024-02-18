import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import ReactLoading from 'react-loading'
import '../css/Characters.css'

const Characters = () => {
  const [currentPage, setCurrentPage] = useState(1)

  const fetchCharacters = async page => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${currentPage}`)
    return data
  }

  const {
    isPending,
    error,
    refetch,
    data = { info: {}, results: [] },
  } = useQuery({
    queryKey: ['data', currentPage],
    queryFn: async () => await fetchCharacters(currentPage),
  })

  const { results: characters } = data
  const { pages, next, prev } = data.info

  return (
    <>
      {isPending && (
        <ReactLoading
          type='cylon'
          color='#fff'
          height={20}
          width={20}
        />
      )}
      {error && <p>An error has occurred: {error.message}</p>}

      {!isPending && !error && (
        <div className='pagination'>
          <button
            onClick={() => {
              setCurrentPage(1), refetch()
            }}
          >
            -
          </button>
          <button
            onClick={() => {
              setCurrentPage(Math.max(1, currentPage - 1)), refetch()
            }}
          >
            -1
          </button>
          <p>{currentPage}</p>
          <button
            onClick={() => {
              setCurrentPage(Math.min(42, currentPage + 1)), refetch()
            }}
          >
            +1
          </button>
          <button
            onClick={() => {
              setCurrentPage(42), refetch()
            }}
          >
            +
          </button>
        </div>
      )}

      {!isPending && !error && (
        <div className='character-grid'>
          {characters.map(character => (
            <CharacterCard character={character} />
          ))}
        </div>
      )}
    </>
  )
}

export default Characters
