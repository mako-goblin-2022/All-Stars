const config = require('./knexfile').development
const connection = require('knex')(config)

module.exports = {
  getStars,
}

function getStars(db = connection) {
  return db('Stars').select(
    'id',
    'name',
    'description',
    'greek',
    'role',
    'image'
  )
}
