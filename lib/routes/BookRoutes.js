const { Router } = require('express');
const Books = require('../models/Books');

module.exports = Router()
  .post('/', (req, res, next) => {
    Books
      .create(req.body)
      .then(book => res.send(book))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    Books
      .findById(req.params.id)
      .populate('authorId')
      .then(book => res.send(book))
      .catch(next);
  })
  .patch('/:id', (req, res, next) => {
    Books
      .findByIdAndUpdate(req.params.id, { title: req.body.title }, { new: true })
      .then(book => res.send(book))
      .catch(next);
  })
  .delete('/:id', (req, res, next) => {
    Books
      .findByIdAndDelete(req.params.id)
      .then(book => res.send(book))
      .catch(next);
  });
