import React, { useState, useEffect } from 'react'

import {Link} from 'react-router-dom'

// import starsData from '../data'

import {getStars} from '../api'

function StarsNav() {
const [stars, setStars] = useState([])

useEffect(() => {
  getStars()
    .then(stars => {
      setStars(stars)
      return null
    })
    .catch(err => {
      console.log(err)
    })
}, [])

const starsToList = stars.map((star) => {
  return <li key={star.id}>{star.name}</li>
})

  return (
    <div>
      <h2>Nav</h2>
      <ul>
      <li>
        Home
      </li>
          {starsToList}
      </ul>
    </div>
  )
}


export default StarsNav