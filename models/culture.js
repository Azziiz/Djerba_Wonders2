const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cultureSchema = new Schema({
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

const Culture = mongoose.model('culture', cultureSchema);
module.exports = Culture;