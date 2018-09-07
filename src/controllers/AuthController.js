/* eslint-disable consistent-return,curly,arrow-parens,no-underscore-dangle */
const jwt = require('jsonwebtoken');
const uuid = require('uuid');

const config = require('../config/config');
const User = require('../models/User');
const Token = require('../models/Token');

const AuthController = {};
const makeTokenPair = async (userId) => {
  const user = await User.findOne({ _id: userId });
  const token = jwt.sign({ id: userId, username: user.username }, config.secret, { expiresIn: '1m' });
  const refreshToken = uuid.v4();

  return { token, refreshToken };
};

AuthController.login = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (!user) return res.status(403).send({ success: false, message: 'Authentication failed. User not found.' });
    const match = await user.comparePassword(req.body.password);
    if (!match) return res.status(403).send({ success: false, message: 'Authentication failed. Wrong password.' });
    const tokenPair = await makeTokenPair(user.id);
    const refreshToken = new Token({
      userId: user.id,
      refreshToken: tokenPair.refreshToken,
    });
    await refreshToken.save();
    return res.status(200).json({ success: true, message: 'Token granted', ...tokenPair });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

AuthController.refresh = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    const oldRefreshToken = await Token.findOne({ refreshToken });
    if (!oldRefreshToken) throw new Error();
    const tokenPair = await makeTokenPair(oldRefreshToken.userId);
    const newRefreshToken = new Token({
      userId: oldRefreshToken.userId,
      refreshToken: tokenPair.refreshToken,
    });
    newRefreshToken.save();
    oldRefreshToken.remove();
    res.status(200).json({ success: true, message: 'Token prolonged', ...tokenPair });
  } catch (e) {
    res.status(404).send({ success: false, message: 'Refresh token not found' });
  }
};

AuthController.signUp = async (req, res) => {
  if (!req.body.username || !req.body.password) return res.json({ success: false, message: 'Please, pass a username and password.' });
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    await newUser.save();
    const tokenPair = await makeTokenPair(newUser._id);
    const refreshToken = new Token({
      userId: newUser._id,
      refreshToken: tokenPair.refreshToken,
    });
    refreshToken.save();
    return res.status(200).json({ success: true, message: 'Account created successfully', ...tokenPair });
  } catch (e) {
    return res.status(400).json({ success: false, message: 'Username already exists.' });
  }
};

AuthController.logout = async (req, res) => {
  const { refreshToken } = req.body;
  try {
    const oldRefreshToken = await Token.findOne({ refreshToken });
    if (!oldRefreshToken) throw new Error('Refresh token was not found');
    oldRefreshToken.remove();
    res.status(200).json({ success: true, message: 'Refresh token deleted' });
  } catch (e) {
    res.status(200).send({ success: false, message: 'Refresh token was not found' });
  }
};

AuthController.checkEmailOnAvailable = async (req, res) => {
  const { username } = req.body;
  try {
    const user = await User.findOne({ username });
    if (!user) {
      res.status(200).send({ usernameIsAvailable: true });
    } else {
      res.status(200).send({ usernameIsAvailable: false });
    }
  } catch (e) {
    res.status(500).send();
  }
};

module.exports = AuthController;
