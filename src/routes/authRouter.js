const { Router } = require('express');
const passport = require('passport');
const AuthController = require('../controllers/AuthController');
const config = require('../config/config');

const router = new Router();

router.post('/login', AuthController.login);

router.post('/signup', AuthController.signUp);

router.post('/refresh', AuthController.refresh);

router.post('/logout', AuthController.logout);

router.post('/check', AuthController.checkEmailOnAvailable);

router.get('/user', passport.authenticate('jwt', config.session), AuthController.getUserData);

module.exports = router;
