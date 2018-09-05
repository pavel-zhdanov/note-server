const mongoose = require('mongoose');

const { Schema } = mongoose;

const TokenSchema = new Schema({
  userId: String,
  refreshToken: String,
});

module.exports = mongoose.model('Token', TokenSchema);
