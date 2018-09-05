const mongoose = require('mongoose');

const { Schema } = mongoose;

const NoteSchema = new Schema({
  title: String,
  description: String,
  text: String,
  authorId: String,
  isPrivate: Boolean,
  imageSrc: String,
});

module.exports = mongoose.model('Note', NoteSchema);
