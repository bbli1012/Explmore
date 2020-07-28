const mongoose = require('mongoose');
const db = require('./index.js');
// mongoose.Promise = global.Promise;

const sparkSchema = new mongoose.Schema({
  title: String,
  id: String,
  image: String,
  views: Number,
  type: String,
  geo: {
    latitude: Number,
    longitude: Number,
    heading: Number
  },
  target: {
    latitude: Number,
    longitude: Number,
    heading: Number
  }
});

const Spark = mongoose.model("Spark", sparkSchema);

module.exports = Spark;
