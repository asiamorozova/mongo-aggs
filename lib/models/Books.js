const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  bookId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true 
  },
  handle: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true 

  }
    
});

schema.statics.topHandles = function() {
  return this 
    .aggregate([
      {
        '$group': {
          '_id': '$handle',
          'count': {
            '$sum': 1
          }
        }
      }, {
        '$sort': {
          'count': -1
        }
      }
    ]);
};

module.exports = mongoose.model('Books', schema);
