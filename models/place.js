const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const placeSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  disc: {
    type: String,
    required: true,
  },
  images: {
    type: Array,
    required: true
  },
}, { timestamps: true });

const Place = mongoose.model('place', placeSchema);
module.exports = Place;