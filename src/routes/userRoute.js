const Router = require(`express`).Router;
const router = new Router();
const User = require(`../models/User`);
const userController = require(`../controllers/UserController`);
const config = require(`../config/config`);
const passport = require(`passport`);

router.route(`/setup`)
  .post(userController.setup(User));
router.route(`/users`)
  .get(passport.authenticate(`jwt`, config.session),
      userController.index(User, config.secret));

router.route(`/signup`)
  .post(userController.signUp(User));

module.exports = router;
