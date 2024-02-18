import React from 'react'

const LocationCard = ({ location }) => {
  return (
    <div>
      <p>{location.name}</p>
      <p>{location.type}</p>
      <p>{location.dimension}</p>
    </div>
  )
}

export default LocationCard
