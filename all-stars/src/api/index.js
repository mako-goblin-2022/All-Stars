import request from 'superagent'

export function getStars() {
  return request
    .get('/v1/stars')
    .then((res) => {
      res.body.forEach((post) => validateNoSnakeCase(post))
      return res.body
    })
    .catch(errorHandler('GET', '/v1/stars'))
}
