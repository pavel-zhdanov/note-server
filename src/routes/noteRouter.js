const Router = require(`express`).Router;
const NoteController = require(`../controllers/NoteController`);
const config = require(`../config/config`);

const router = new Router();

router.post(`/new`, NoteController.saveNote);

router.get(`/list`, NoteController.allNotes);

router.get(`/list/:id`, NoteController.getNoteById);

router.delete(`/list/:id`, NoteController.deleteNoteById);

module.exports = router;
