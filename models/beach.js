const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const beachSchema = new Schema({
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

const Beach = mongoose.model('Beach', beachSchema);
module.exports = Beach;