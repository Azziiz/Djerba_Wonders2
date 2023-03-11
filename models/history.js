const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema({
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

const History = mongoose.model('history', historySchema);
module.exports = History;