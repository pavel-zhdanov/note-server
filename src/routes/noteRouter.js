const Router = require(`express`).Router;
const NoteController = require(`../controllers/NoteController`);
const passport = require(`passport`);
const config = require(`../config/config`);
let multer = require(`multer`);
let upload = multer();

const router = new Router();

router.post(`/new`, passport.authenticate(`jwt`, config.session), NoteController.saveNote);

router.get(`/list`, NoteController.allNotes);

router.get(`/:id`, NoteController.getNoteById);

router.delete(`/:id`, passport.authenticate(`jwt`, config.session), NoteController.deleteNoteById);

router.get(`/image/:id`, NoteController.getImageById);

router.put(`/:id`, NoteController.updateNoteById);

router.post(`/image/`, passport.authenticate(`jwt`, config.session), upload.single(`file`), NoteController.saveImage);

module.exports = router;
