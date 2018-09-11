/* eslint-disable consistent-return,curly,arrow-parens,no-underscore-dangle */
const jwt = require('jsonwebtoken');
const uuid = require('uuid');

const config = require('../config/config');
const User = require('../models/User');
const Token = require('../models/Token');

const AuthController = {};
const makeTokenPair = async (userId) => {
  const token = jwt.sign({ id: userId }, config.secret, { expiresIn: '1m' });
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
    console.log(tokenPair);
    return res.status(200).json({
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      avatarSrc: user.avatarSrc,
      ...tokenPair,
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

AuthController.refresh = async (req, res) => {
  const { refreshToken } = req.body;
  console.log(refreshToken);
  try {
    const oldRefreshToken = await Token.findOne({ refreshToken });
    console.log(oldRefreshToken);
    if (!oldRefreshToken) throw new Error('Refresh token not found');
    const tokenPair = await makeTokenPair(oldRefreshToken.userId);
    console.log(tokenPair);
    const newRefreshToken = new Token({
      userId: oldRefreshToken.userId,
      refreshToken: tokenPair.refreshToken,
    });
    newRefreshToken.save();
    oldRefreshToken.remove();
    res.status(200).send({ success: true, message: 'Token prolonged', ...tokenPair });
  } catch (error) {
    res.status(404).send({ success: false, message: error.message });
  }
};

AuthController.signUp = async (req, res) => {
  const data = req.body;
  if (!data.username || !data.password || !data.nickname) return res.status(400).send({ success: false, message: 'Please, pass a username, password and nickname.' });
  const newUser = new User({
    username: data.username,
    password: data.password,
    nickname: data.nickname,
    avatarSrc: data.avatarSrc,
  });
  try {
    await newUser.save();
    const tokenPair = await makeTokenPair(newUser._id);
    const refreshToken = new Token({
      userId: newUser._id,
      refreshToken: tokenPair.refreshToken,
    });
    refreshToken.save();
    return res.status(200).json({
      id: newUser.id,
      username: newUser.username,
      nickname: newUser.nickname,
      avatarSrc: newUser.avatarSrc,
      ...tokenPair,
    });
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
    res.status(200).send({ success: true, message: 'Refresh token deleted' });
  } catch (e) {
    res.status(200).send({ success: false, message: 'Refresh token was not found' });
  }
};

AuthController.checkOnAvailable = async (req, res) => {
  const data = req.body;
  try {
    const user = await User.findOne({ [data.field]: data.value });
    if (!user) {
      res.status(200).send({ isAvailable: true });
    } else {
      res.status(200).send({ isAvailable: false });
    }
  } catch (e) {
    res.status(500).send();
  }
};

AuthController.getUserData = async (req, res) => {
  try {
    const token = req.headers.authorization;
    const decodedToken = await jwt.verify(token.replace('Bearer ', ''), config.secret);
    console.log(decodedToken);
    const user = await User.findOne({ _id: decodedToken.id });
    res.status(200).send({
      id: user.id,
      username: user.username,
      nickname: user.nickname,
      avatarSrc: user.avatarSrc,
    });
  } catch (error) {
    res.status(404).send();
  }
};

AuthController.updateUserData = async (req, res) => {
  const data = req.body;
  if (!data || !data.nickname) {
    res.status(400).send('User nickname was expected');
  }
  try {
    const token = req.headers.authorization;
    const decodedToken = await jwt.verify(token.replace('Bearer ', ''), config.secret);
    const user = await User.findOne({ _id: decodedToken.id });
    user.nickname = data.nickname;
    await user.save();
    res.status(200).send({
      nickname: user.nickname,
    });
  } catch (error) {
    res.status(404).send();
  }
};

module.exports = AuthController;
