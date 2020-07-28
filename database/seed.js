const db = require('./index.js');
const Sparks = require('./Sparks.js');

const mongoose = require('mongoose');
const data = require('../sampleData.js');

for (var i = 0; i < data.length; i++) {
  let entry = data[i];
  Sparks.create(entry);
}
