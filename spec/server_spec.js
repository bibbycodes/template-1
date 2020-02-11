const app = require('../server.js')
const request = require('supertest')

describe('server routes', () => {
  describe('GET /home', () => {
    it('responds with json', (done) => {
      request(app)
        .get('/home')
        .expect('Content-Type', /json/)
        .expect({message : "Express Template"})
        .end(done)
    })
  })
}) 