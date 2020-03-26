require('../db/data-helpers');

const request = require('supertest');
const app = require('../lib/app');
const Author = require('../lib/models/Authors');


describe('author routes', () => {
  it('creates an author', () => {
    return request(app)
      .post('/api/v1/authors')
      .send({
        name: 'Jane Austen'
      })
      .then(res => {
        expect(res.body).toEqual({
          _id: expect.any(String),
          name: 'Jane Austen',
          __v: 0
        });
      });
  });

});
