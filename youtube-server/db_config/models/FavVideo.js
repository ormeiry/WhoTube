const mongoose = require('mongoose');

const FavVideoSchema = mongoose.Schema({
  data: {
    type: Object,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('favVideos', FavVideoSchema);
