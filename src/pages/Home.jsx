import { useInfiniteQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CharacterCard from '../components/CharacterCard'
import ReactLoading from 'react-loading'
import Loading from 'react-loading'
import { useInView } from 'react-intersection-observer'

const Home = () => {
  const fetchCharacters = async page => {
    const { data } = await axios.get(`https://rickandmortyapi.com/api/character/?page=${page.pageParam}`)
    return data
  }
  const { ref, inView } = useInView()
  const { isPending, isFetching, error, refetch, fetchNextPage, isFetchingNextPage, data, hasNextPage } =
    useInfiniteQuery({
      queryKey: ['data'],
      queryFn: fetchCharacters,
      initialPageParam: 1,
      getNextPageParam: (lastPage, allPages) => {
        return lastPage.info.next ? lastPage.info.next.split('=')[1] : null
      },
    })

  useEffect(() => {
    if (inView) fetchNextPage()
  }, [inView])
  // console.log(data.pages[0])
  // const { results: characters } = data.pages
  const characters = data?.pages?.flatMap(page => page.results) || []

  if (isPending) {
    return <h1>Loading...</h1>
  }

  if (error) {
    return <h1>An error has occurred: {error.message}</h1>
  }

  return (
    <>
      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-white'>
        {characters.map(character => (
          <CharacterCard character={character} />
        ))}
      </section>
      {hasNextPage && (
        <div
          className='h-4 w-full'
          ref={ref}
        ></div>
      )}
    </>
  )
}

export default Home
