/* eslint-disable consistent-return,curly,arrow-parens */
const jwt = require(`jsonwebtoken`);
const uuid = require(`uuid`);

const config = require(`../config/config`);
const User = require(`../models/User`);
const Token = require(`../models/Token`);

const AuthController = {};
const makeTokenPair = (userId) => {
  const token = jwt.sign({id: userId}, config.secret, {expiresIn: `30m`});
  const refreshToken = uuid.v4();

  return {token, refreshToken};
};


AuthController.login = async (req, res) => {
  try {
    const user = await User.findOne({username: req.body.username});
    if (!user) {
      return res.status(401).send({success: false, message: `Authentication failed. User not found.`});
    }
  } catch (e) {
    console.error(e);
  }

  User.findOne({username: req.body.username}, (errorFindUser, user) => {
    if (errorFindUser) throw errorFindUser;
    if (!user) {
      return res.status(401).send({success: false, message: `Authentication failed. User not found.`});
    }
    user.comparePassword(req.body.password, async (errorCompare, match) => {
      console.log(`cp1`);
      if (match && !errorCompare) {
        const tokenPair = makeTokenPair(user.id);
        const refreshToken = new Token({
          userId: user.id,
          refreshToken: tokenPair.refreshToken,
        });
        try {
          await refreshToken.save();
        } catch (e) {
          console.error(e);
          if (e) throw e;
        }
        return res.json({success: true, message: `Token granted`, ...tokenPair});
      }
      res.status(401).send({success: false, message: `Authentication failed. Wrong password.`});
    });
  });
};

AuthController.refresh = async (req, res) => {
  const refreshToken = req.body.refreshToken;
  try {
    const oldRefreshToken = await Token.findOne({refreshToken});
    if (!oldRefreshToken) throw new Error();
    const tokenPair = makeTokenPair(oldRefreshToken.userId);
    const newRefreshToken = new Token({
      userId: oldRefreshToken.userId,
      refreshToken: tokenPair.refreshToken,
    });
    newRefreshToken.save();
    oldRefreshToken.remove();
    res.json({success: true, message: `Token prolonged`, ...tokenPair});
  } catch (e) {
    console.error(e);
    res.status(401).send({success: false, message: `Refresh token not found`});
  }
};

AuthController.index = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (e) {
    console.error(e);
  }
};

AuthController.signUp = async (req, res) => {
  if (!req.body.username || !req.body.password) return res.json({success: false, message: `Please, pass a username and password.`});
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    await newUser.save();
    const tokenPair = makeTokenPair(newUser._id);
    const refreshToken = new Token({
      userId: newUser._id,
      refreshToken: tokenPair.refreshToken,
    });
    refreshToken.save();
    return res.json({success: true, message: `Account created successfully`, ...tokenPair});
  } catch (e) {
    return res.status(400).json({success: false, message: `Username already exists.`});
  }
};

module.exports = AuthController;
