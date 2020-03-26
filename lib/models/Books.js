const mongoose = require('mongoose');
const schema = new mongoose.Schema({
  authorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Author',
    required: true
  },
  title: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Books', schema);

