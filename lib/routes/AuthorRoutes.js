const { Router } = require('express');
const Author = require('../models/Authors');

module.exports = Router()
  .post('/', (req, res, next) => {
    Author
      .create(req.body)
      .then(author => res.send(author))
      .catch(next);
  })
//get all authors with the most books
  .get('/authors-with-the-most-books', (req, res, next) => {
    Author.mostBooks()
      .then(mostBooks => res.send(mostBooks))
      .catch(next);
  })
  //get all authors with the most books by id
  .get('/:id', (req, res, next) => {
    Author
      .find()
      .then(author => res.send(author))
      .catch(next);
  })
  //updates author by id
  .patch('/:id', (req, res, next) => {
    Author 
      .findByIdAndUpdate(req.params.id, { name: req.body.name }, { new: true })
      .then(author => res.send(author))
      .catch(next);
  })
  //deletes an author by id
  .delete('/:id', (req, res, next) => {
    Author
      .findByIdAndDelete(req.params.id)
      .then(author => res.send(author))
      .catch(next);
  });
