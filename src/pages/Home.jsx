import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import ReactLoading from 'react-loading'
import CharacterCard from '../components/CharacterCard'

const Home = () => {
  const fetchCharacters = async () => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character`)
    return data
  }

  const {
    isPending,
    error,
    refetch,
    data = { info: {}, results: [] },
  } = useQuery({
    queryKey: ['data'],
    queryFn: async () => await fetchCharacters(),
  })
  const { results: characters } = data

  let character = characters[Math.floor(Math.random() * 20)]
  const getRandomCharacter = () => {
    refetch()
  }

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
        <div>
          <CharacterCard character={character} />
        </div>
      )}
    </>
  )
}

export default Home
