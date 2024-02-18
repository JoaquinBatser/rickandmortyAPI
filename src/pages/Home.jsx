import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  // const { data } = useQuery({
  //   queryKey: ['data'],
  //   queryFn: async () => {
  //     const { data } = await axios.get('https://rickandmortyapi.com/api')
  //     return data
  //   },
  // })
  // console.log(data)

  // const { characters } = data

  // console.log(characters)
  return (
    <>
      <h1>Home</h1>
    </>
  )
}

export default Home
