const Router = require(`express`).Router;
const AuthController = require(`../controllers/AuthController`);
const config = require(`../config/config`);
const passport = require(`passport`);

const router = new Router();

router.post(`/login`, AuthController.login);

router.get(`/users`, passport.authenticate(`jwt`, config.session), AuthController.index);

router.post(`/signup`, AuthController.signUp);

router.post(`/refresh`, AuthController.refresh);

module.exports = router;
