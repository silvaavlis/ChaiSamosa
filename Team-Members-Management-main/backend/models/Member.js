const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  image: {
    type: String, // filename (e.g., "1688203890-photo.jpg")
    required: true
  }
});

module.exports = mongoose.model('Member', memberSchema);
