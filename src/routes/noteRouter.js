const { Router } = require('express');
const passport = require('passport');
const multer = require('multer');
const NoteController = require('../controllers/NoteController');
const config = require('../config/config');

const upload = multer();

const router = new Router();

router.post('/new', passport.authenticate('jwt', config.session), NoteController.saveNote);

router.get('/list', NoteController.allNotes);

router.get('/:id', NoteController.getNoteById);

router.delete('/:id', passport.authenticate('jwt', config.session), NoteController.deleteNoteById);

router.get('/image/:id', NoteController.getImageById);

router.put('/image/:id', upload.single('file'), passport.authenticate('jwt', config.session), NoteController.updateImageById);

router.put('/:id', passport.authenticate('jwt', config.session), NoteController.updateNoteById);

router.post('/image/', upload.single('file'), NoteController.saveImage);

module.exports = router;
