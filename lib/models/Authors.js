const mongoose = require('mongoose');
const schema = new mongoose.Schema({

  name:{
    type: String,
    required: true
  }
}, {
  toJSON: {
    virtuals: true,
    transform: (doc, ret) => {
      delete ret.id;
    } 
  }  
});
schema.virtual('books', {
  ref: 'Title',
  localField: '_id',
  foreignField: 'bookId'
});
schema.statics.mostBooks = function(count = 10) {
  return this 
    .aggregate([
      {
        '$lookup': {
          'from': 'books',
          'localField': '_id',
          'foreignField':'authorId',
          'as':'books'
        }
      }, {
        '$project': {
          '_id': true,
          'name': true,
          'totalBooks': {
            '$size': '$books'
          }
        }
      }, {
        '$sort': {
          'totalBooks': -1
        }
      }, {
        '$limit': count
      }
    ]);
};
module.exports = mongoose.model('Author', schema);
