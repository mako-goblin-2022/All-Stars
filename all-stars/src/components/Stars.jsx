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
  return <li className='text-slate-50 text-center justify-center' key={star.id}> <strong>{star.name}</strong>  <br /> {star.description} <br /> {star.name} is comparable to the Greek god {star.greek} and is a {star.role} <br /> <br /> <img src={star.image} alt="" /></li>
})

  return (
    <div>
      <ul>
          {starsToList}
      </ul>
    </div>
  )
}


export default StarsNav