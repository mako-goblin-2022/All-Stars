import React from 'react'

import {Link} from 'react-router-dom'

import starsData from '../data'


function StarsNav() {

const starsToList = starsData.map((star) => {
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