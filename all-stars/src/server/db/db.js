const environment = process.env.NODE_ENV || 'development'
const config = require('./knexfile')[environment]
const connection = require('knex')(config)

module.exports = {
  getStars,
}

function getStars(db = connection) {
  return db('Stars').select()
}
