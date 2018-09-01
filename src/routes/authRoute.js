const Router = require(`express`).Router;
const router = new Router();
const user = require(`../models/User`);
const AuthController = require(`../controllers/AuthController`);

router.route(`/`)
    .get((req, res) => res.send(`Note Storage API`));

router.route(`/api/v1/auth`)
    .post(AuthController.login(user));

module.exports = router;
