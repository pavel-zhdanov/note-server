const mongoose = require(`mongoose`);
const Schema = mongoose.Schema;

const ImageSchema = new Schema({
  image: Buffer,
  contentType: String,
});

module.exports = mongoose.model(`Image`, ImageSchema);
