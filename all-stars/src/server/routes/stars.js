const express = require('express')

const db = require('../db/db')

const router = express.Router()

router.get('/', (req, res) => {
  db.getStars()
    // .then((stars) => {
    //   res.render(stars)
    // })
    .then(() => {
      res.send('stars')
    })
    .catch((err) => {
      console.error(err.message)
      res.status(500).send('Server Error')
    })
})

module.exports = router
