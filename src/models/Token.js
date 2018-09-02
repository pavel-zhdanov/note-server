const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const TokenSchema = new Schema({
  userId: String,
  refreshToken: String,
});

module.exports = mongoose.model(`Token`, TokenSchema);
