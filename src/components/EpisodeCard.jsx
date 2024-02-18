import React from 'react'

const EpisodeCard = ({ episode }) => {
  return (
    <div>
      <p>{episode.name}</p>
      <p>{episode.air_date}</p>
      <p>{episode.episode}</p>
    </div>
  )
}

export default EpisodeCard
