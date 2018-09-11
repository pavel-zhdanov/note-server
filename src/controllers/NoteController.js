/* eslint-disable consistent-return,no-underscore-dangle */
const jwt = require('jsonwebtoken');
const Note = require('../models/Note');
const Image = require('../models/Image');
const config = require('../config/config');

const noteController = {};

noteController.allNotes = async (req, res) => {
  try {
    const data = await Note.find({});
    res.status(200).send(data);
  } catch (error) {
    res.sendStatus(404);
  }
};

noteController.getNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const note = await Note.findOne({ _id: id });
    if (!note) throw new Error();
    res.status(200).send(note);
  } catch (error) {
    res.sendStatus(404);
  }
};

noteController.saveNote = async (req, res) => {
  const token = req.headers.authorization;
  const decodedToken = await jwt.verify(token.replace('Bearer ', ''), config.secret);
  const note = new Note({
    title: req.body.title,
    description: req.body.description,
    text: req.body.text,
    authorId: decodedToken.id,
    isPrivate: req.body.isPrivate,
    imageSrc: req.body.imageSrc,
  });
  try {
    await note.save();
    res.status(201).send({ message: 'Сохранен объект note', note });
  } catch (error) {
    res.sendStatus(500);
    throw error;
  }
};

noteController.deleteNoteById = async (req, res) => {
  const { id } = req.params;
  try {
    const token = req.headers.authorization;
    const decodedToken = await jwt.verify(token.replace('Bearer ', ''), config.secret);

    const note = await Note.findOne({ _id: id });
    if (decodedToken.id !== note.authorId) {
      return res.sendStatus(403);
    }
    await note.remove();
    res.sendStatus(200);
  } catch (error) {
    res.sendStatus(404);
  }
};

noteController.getImageById = async (req, res) => {
  const { id } = req.params;
  try {
    const image = await Image.findOne({ _id: id });
    res.contentType(image.contentType);
    res.status(200).send(image.image);
  } catch (err) {
    res.sendStatus(404);
  }
};

noteController.saveImage = async (req, res) => {
  if (!req.file) {
    return res.status(204).send({ message: 'Expected image file' });
  }
  const image = new Image({
    image: req.file.buffer,
    contentType: req.file.mimetype,
  });
  try {
    const result = await image.save();
    res.status(201).send({ id: result._id, message: 'Image was saved' });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

noteController.updateImageById = async (req, res) => {
  const { id } = req.params;
  if (!req.file) {
    return res.status(204).send({ message: 'Expected image file' });
  }
  try {
    const image = await Image.findOne({ _id: id });
    image.image = req.file.buffer;
    const result = await image.save();
    res.status(201).send({ id: result._id, message: 'Image was updated' });
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

noteController.updateNoteById = async (req, res) => {
  try {
    const { id } = req.params;
    const token = req.headers.authorization;
    const decodedToken = await jwt.verify(token.replace('Bearer ', ''), config.secret);
    const note = await Note.findOne({ _id: id });
    if (decodedToken.id !== note.authorId) {
      return res.sendStatus(403);
    }
    note.title = req.body.title;
    note.description = req.body.description;
    note.text = req.body.text;
    note.isPrivate = req.body.isPrivate;
    await note.save();
    res.status(201).send({ message: 'Обновлен объект note', note });
  } catch (error) {
    res.status(404).send({ message: error.message });
  }
};

module.exports = noteController;
