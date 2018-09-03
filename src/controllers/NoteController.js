/* eslint-disable consistent-return */
const Note = require(`../models/Note`);
const Image = require(`../models/Image`);

const noteController = {};

noteController.allNotes = async (req, res) => {
  try {
    const data = await Note.find({});
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
    throw error;
  }
};

noteController.getNoteById = async (req, res) => {
  const id = req.params.id;
  try {
    const data = await Note.find({author: id});
    res.send(data);
  } catch (error) {
    res.sendStatus(404);
    throw error;
  }
};

noteController.saveNote = async (req, res) => {
  const note = new Note({
    title: req.body.title,
    description: req.body.description,
    text: req.body.text,
    authorId: req.body.authorId,
    isPrivate: req.body.isPrivate,
    imageSrc: req.body.imageSrc,
  });
  try {
    await note.save();
    res.status(201).send({message: `Сохранен объект note`, note});
  } catch (error) {
    res.sendStatus(500);
    throw error;
  }
};

noteController.deleteNoteById = async (req, res) => {
  const id = req.params.id;
  try {
    const result = await Note.deleteOne({_id: id});
    res.send(result);
  } catch (error) {
    res.sendStatus(404);
  }
};

noteController.getImageById = async (req, res) => {
  const id = req.params.id;
  try {
    const image = await Image.findOne({_id: id});
    res.contentType(image.contentType);
    res.status(200).send(image.image);
  } catch (err) {
    console.error(err);
    res.sendStatus(404);
  }
};

noteController.saveImage = async (req, res) => {
  if (!req.file) {
    return res.status(204).send({message: `Expected image file`});
  }
  const image = new Image({
    image: req.file.buffer,
    contentType: req.file.mimetype,
  });
  try {
    const result = await image.save();
    res.status(201).send({id: result._id, message: `Image was saved`});
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
};

noteController.updateNoteById = async (req, res) => {
  try {
    const note = await Note.findOne({_id: req.body.id});
    note.title = req.body.title;
    note.description = req.body.description;
    await note.save();
    res.status(201).send({message: `Обновлен объект note`, note});
  } catch (error) {
    console.log(`  eeeeeeeeeee` + error);
    res.sendStatus(404);
    throw error;
  }
};

module.exports = noteController;
