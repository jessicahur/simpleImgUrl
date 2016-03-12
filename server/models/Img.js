const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Img = new Schema({
  url: {
    type: String,
    require: true
  },
  caption: String
});

module.exports = mongoose.model('Img', Img);
