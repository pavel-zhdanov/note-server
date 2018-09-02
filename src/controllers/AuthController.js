/* eslint-disable consistent-return */
const jwt = require(`jsonwebtoken`);
const config = require(`../config/config`);
const User = require(`../models/User`);
const Token = require(`../models/Token`);

const AuthController = {};

AuthController.login = (req, res) => {
  User.findOne({username: req.body.username}, (errorFindUser, user) => {
    if (errorFindUser) {
      throw errorFindUser;
    }
    if (!user) {
      res.status(401).send({success: false, message: `Authentication failed. User not found.`});
    } else {
      user.comparePassword(req.body.password, (errorCompare, match) => {
        if (match && !errorCompare) {
          const token = jwt.sign({id: user._id}, config.secret, {expiresIn: `15m`});
          res.json({success: true, message: `Token granted`, token});
        } else {
          res.status(401).send({success: false, message: `Authentication failed. Wrong password.`});
        }
      });
    }
  });
};

// AuthController.verify = (headers) => {
//   if (headers && headers.authorization) {
//     const split = headers.authorization.split(` `);
//     if (split.length === 2) {
//       return split[1];
//     }
//   }
//   return null;
// };

AuthController.index = (req, res) => {
  User.find({}, (error, users) => {
    if (error) {
      throw error;
    }
    res.status(200).json(users);
  });
};

AuthController.signUp = (req, res) => {
  if (!req.body.username || !req.body.password) {
    return res.json({success: false, message: `Please, pass a username and password.`});
  }
  const newUser = new User({
    username: req.body.username,
    password: req.body.password,
  });
  newUser.save((error) => {
    if (error) {
      return res.status(400).json({success: false, message: `Username already exists.`});
    }
    res.json({success: true, message: `Account created successfully`});
  });

};

module.exports = AuthController;
