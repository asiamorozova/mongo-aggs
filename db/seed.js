
const Author = require('../lib/models/Authors');
const Books = require('../lib/models/Books');
const chance = require('chance').Chance();


module.exports = async({ authorsToCreate = 5, booksToCreate = 10 } = {}) => {
  const names = ['Malcolm-Gladwell', 'Jane Austen', 'Charlotte Bronte', 'Thomas Hardy'];
  const authors = await Author.create([...Array(authorsToCreate)].map(() => ({
    name: chance.pickone(names),
    authorName: chance.sentence()

  })));

  await Books.create([...Array(booksToCreate)].map(() => ({
    authorId: chance.pickone(authors)._id,
    name: chance.pickone(names),
    authorName: chance.sentence()

  })));
};
