import request from 'superagent'


export function getStars() {
  return request
    .get('/api/v1/stars')
    .then((res) => {
      // res.body.forEach((post) => validateNoSnakeCase(post))
      return res.body
    })
    .catch(err => console.log(err))
    // .catch(errorHandler('GET', '/v1/stars'))
}
