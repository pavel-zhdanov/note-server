/* eslint-disable consistent-return */
const Note = require(`../models/Note`);

const noteController = {};

noteController.allNotes = async (req, res) => {
  Note.find({}, function (err, docs) {
    if (err) {
      return console.log(err);
    }

    res.send(docs);
  });

};

noteController.getNoteById = async (req, res) => {
  const id = req.params.id;
  Note.find({author: id}, function (err, docs) {
    if (err) {
      return console.log(err);
    }
    res.send(docs);
  });
};

noteController.saveNote = async (req, res) => {
  const note = new Note({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  });
  note.save(function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`Сохранен объект user`, note);
    res.send(`Сохранен объект user ${note}`);
  });
};

noteController.deleteNoteById = async (req, res) => {
  const note = new Note({
    title: req.body.title,
    body: req.body.body,
    author: req.body.author,
  });
  note.save(function (err) {
    if (err) {
      return console.log(err);
    }
    console.log(`Сохранен объект user`, note);
    res.send(`Сохранен объект user ${note}`);
  });
};

module.exports = noteController;
